import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { load } from "cheerio";
import {
  decode,
  evidence,
  resolveLegacy,
  normalizeLists,
} from "../scripts/migration-lib.mjs";
import { sanitize, unsafe } from "../src/lib/html.mjs";
import { collections, rewriteBase } from "../src/lib/content.mjs";
import { validateMigration, validateRecords } from "../scripts/validate.mjs";
import { protocolSchema } from "../src/lib/schema.mjs";
import { parseIndex } from "../scripts/rfc-lib.mjs";
import { refresh } from "../scripts/refresh-rfcs.mjs";
import { normalizeBase, rfcDestinations } from "../src/lib/urls.mjs";
const data = collections();
const manifest = JSON.parse(
  await fs.readFile("migration/manifest.json", "utf8"),
);
test("all archived sections, tables, spans, preformatted whitespace and glossary definitions reconcile", () =>
  validateMigration(data, manifest));
test("strict decoding recognizes declared GB2312 punctuation and rejects invalid bytes", () => {
  assert.equal(decode(Buffer.from([0xa1, 0xaf]), "fixture").text, "’");
  assert.throws(
    () => decode(Buffer.from([0x81]), "broken-fixture"),
    /broken-fixture: invalid/,
  );
});
test("sanitization removes executable markup without losing table geometry or pre whitespace", () => {
  const html =
    '<table><tr><td colspan="2">value</td></tr></table><pre>  A\n    B</pre><script>alert(1)</script><a href="javascript:alert(1)" onclick="bad()">label</a>';
  const clean = sanitize(html);
  assert.ok(!clean.includes("script"));
  assert.ok(!clean.includes("onclick"));
  assert.ok(clean.includes('colspan="2"'));
  assert.ok(clean.includes("  A\n    B"));
  assert.deepEqual(unsafe(clean), []);
  assert.notDeepEqual(unsafe(html), []);
});
test("preservation evidence detects table spans, pre whitespace and prose changes", () => {
  const original =
    '<pre>   A</pre><table><tr><td colspan="2">payload</td></tr></table>';
  for (const changed of [
    original.replace("   A", " A"),
    original.replace('colspan="2"', 'colspan="3"'),
    original.replace("payload", "lost"),
  ])
    assert.notDeepEqual(evidence(changed), evidence(original));
});
test("legacy links map to preserved section anchors and all unavailable targets have reasons", () => {
  assert.equal(
    manifest.anchorMap["protocols/protocol_TCP.htm#DESCRIPTION"],
    "/protocols/tcp/#description",
  );
  assert.equal(
    resolveLegacy(
      "protocol_TCP.htm#DESCRIPTION",
      "protocols/protocol_UDP.htm",
      manifest,
    ).target,
    "/protocols/tcp/#description",
  );
  assert.ok(manifest.links.some((l) => /rfc\.txt/.test(l.value) && l.reason));
  assert.ok(
    manifest.links.some((l) =>
      l.external?.startsWith("https://www.rfc-editor.org/rfc/rfc793."),
    ),
  );
});
test("central glossary anchors are unique and all local definitions remain in their source context", () => {
  assert.equal(new Set(data.glossary.map((g) => g.anchor)).size, 241);
  assert.ok(manifest.localGlossary.length > 0);
  assert.ok(
    manifest.localGlossary.some((g) =>
      g.decision.startsWith("Different local"),
    ),
  );
  for (const local of manifest.localGlossary) assert.ok(local.decision);
  const tcp = data.protocols.find((p) => p.slug === "tcp");
  const $ = load(tcp.html, null, false);
  assert.ok(
    $('section[aria-labelledby="glossary"]').text().includes("Connection"),
  );
});
test("record validation names duplicate ids, slugs, unsafe fields and unknown references", () => {
  for (const [change, pattern] of [
    [(p) => (p.id = data.protocols[1].id), /id duplicate/],
    [(p) => (p.slug = data.protocols[1].slug), /slug duplicate/],
    [(p) => (p.related = ["unknown"]), /related unknown/],
    [(p) => (p.rfcs = [999999]), /refresh:rfcs/],
    [(p) => (p.html += '<img src="x" onerror="bad()">'), /body unsafe/],
  ]) {
    const copy = structuredClone(data);
    change(copy.protocols[0]);
    assert.throws(() => validateRecords(copy), pattern);
  }
  assert.throws(() =>
    protocolSchema.parse({ ...data.protocols[0], rfcs: ["RFC793"] }),
  );
});
const xml = (number) =>
  `<rfc-index><rfc-entry><doc-id>RFC${number}</doc-id><title>A &amp; B</title><author><name>A. Author</name></author><date><year>2026</year></date><current-status>PROPOSED STANDARD</current-status></rfc-entry></rfc-index>`;
test("RFC parsing validates required fields, duplicate numbers and blocks XML entities", () => {
  assert.equal(parseIndex(xml(793)).entries[0].title, "A & B");
  assert.throws(
    () => parseIndex(xml(793).replace("A &amp; B", "")),
    /missing required/,
  );
  assert.throws(
    () =>
      parseIndex(
        xml(793).replace(
          "</rfc-index>",
          xml(793).replace(/<\/?rfc-index>/g, "") + "</rfc-index>",
        ),
      ),
    /duplicate/,
  );
  assert.throws(
    () =>
      parseIndex(
        '<!DOCTYPE a [<!ENTITY x SYSTEM "file:///etc/passwd">]>' + xml(793),
      ),
    /prohibited/,
  );
  assert.throws(() => parseIndex("<rfc-index>"), /RFC XML/);
});
test("RFC refresh changes valid snapshots atomically and preserves old bytes on errors", async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), "protocolhub-rfc-test-"));
  const target = path.join(dir, "rfcs.json");
  try {
    await refresh({ target, fetcher: async () => new Response(xml(793)) });
    const before = await fs.readFile(target);
    for (const fetcher of [
      async () => {
        throw new Error("network failed");
      },
      async () => new Response("unavailable", { status: 503 }),
      async () => new Response("<bad>"),
    ]) {
      await assert.rejects(refresh({ target, fetcher }));
      assert.deepEqual(await fs.readFile(target), before);
    }
    const diff = await refresh({
      target,
      fetcher: async () => new Response(xml(794)),
    });
    assert.deepEqual(diff.added, [794]);
    assert.deepEqual(diff.removed, [793]);
    assert.notDeepEqual(await fs.readFile(target), before);
  } finally {
    await fs.rm(dir, { recursive: true, force: true });
  }
});
test("base validation and one RFC destination manifest handle page boundaries", () => {
  assert.equal(normalizeBase("/"), "/");
  assert.equal(normalizeBase("/protocolhub"), "/protocolhub/");
  assert.throws(() => normalizeBase("//evil.example/"));
  const records = Array.from({ length: 101 }, (_, i) => ({ number: i + 1 }));
  const destinations = rfcDestinations(records);
  assert.equal(destinations[101], "rfcs/newest/1/#rfc-101");
  assert.equal(destinations[1], "rfcs/newest/2/#rfc-1");
});

test("base rewriting touches real DOM URLs and leaves literal HTML examples intact", () => {
  const original =
    '<pre>&lt;a href="/example.html"&gt;example&lt;/a&gt;</pre><a href="/protocols/tcp/#examples">TCP</a>';
  const rewritten = rewriteBase(original, "/protocolhub/");
  const $ = load(rewritten, null, false);
  assert.equal($("pre").text(), '<a href="/example.html">example</a>');
  assert.equal($("a").attr("href"), "/protocolhub/protocols/tcp/#examples");
});
test("HTML validation rejects obfuscated executable URL schemes", () => {
  for (const href of [
    " javascript:alert(1)",
    "java\tscript:alert(1)",
    "data:text/html,evil",
    "file:///private/file",
    "//foreign.example",
  ])
    assert.ok(unsafe(`<a href="${href}">label</a>`).length > 0);
});

test("glossary duplicate IDs and anchors fail with record diagnostics", () => {
  const duplicateId = structuredClone(data);
  duplicateId.glossary[0].id = duplicateId.glossary[1].id;
  assert.throws(() => validateRecords(duplicateId), /id duplicate/);
  const duplicateAnchor = structuredClone(data);
  duplicateAnchor.glossary[0].anchor = duplicateAnchor.glossary[1].anchor;
  assert.throws(() => validateRecords(duplicateAnchor), /anchor duplicate/);
});

test("legacy list repairs preserve ordered text and give every substantive child a list-item parent", () => {
  const $ = load(
    "<ul><br><li>First</li><br><ul><li>Nested</li></ul>Tail<b>field</b></ul>",
    null,
    false,
  );
  const before = evidence($.html());
  normalizeLists($);
  assert.deepEqual(evidence($.html()), before);
  $("ul,ol").each((_, e) =>
    assert.ok(
      $(e)
        .children()
        .toArray()
        .every((n) => n.tagName === "li"),
    ),
  );
});
