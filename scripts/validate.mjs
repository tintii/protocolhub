import fs from "node:fs";
import assert from "node:assert/strict";
import { load } from "cheerio";
import { collections } from "../src/lib/content.mjs";
import { unsafe } from "../src/lib/html.mjs";
import { evidence, hash } from "./migration-lib.mjs";
import { validateSnapshot } from "./rfc-lib.mjs";
export function validateRecords({ protocols, glossary, snapshot }) {
  const numbers = validateSnapshot(snapshot);
  const ids = new Set(),
    slugs = new Set(),
    anchors = new Set();
  for (const p of protocols) {
    if (ids.has(p.id)) throw new Error(`${p.file}: id duplicate ${p.id}`);
    ids.add(p.id);
    if (slugs.has(p.slug))
      throw new Error(`${p.file}: slug duplicate ${p.slug}`);
    slugs.add(p.slug);
  }
  for (const g of glossary) {
    if (ids.has(g.id)) throw new Error(`${g.id}: id duplicate`);
    ids.add(g.id);
    if (anchors.has(g.anchor))
      throw new Error(`${g.id}: anchor duplicate ${g.anchor}`);
    anchors.add(g.anchor);
  }
  const protocolIds = new Set(protocols.map((p) => p.id));
  const glossaryIds = new Set(glossary.map((g) => g.id));
  for (const p of protocols) {
    for (const r of p.related)
      if (!protocolIds.has(r))
        throw new Error(`${p.file}: related unknown protocol ${r}`);
    for (const g of p.glossary)
      if (!glossaryIds.has(g))
        throw new Error(`${p.file}: glossary unknown term ${g}`);
    for (const n of p.rfcs)
      if (!numbers.has(n))
        throw new Error(
          `${p.file}: rfcs missing RFC ${n}; run npm run refresh:rfcs or add officially sourced supplemental metadata`,
        );
    const seen = new Set();
    for (const s of p.sections) {
      if (seen.has(s.id) || s.id === "summary")
        throw new Error(`${p.file}: sections duplicate anchor ${s.id}`);
      seen.add(s.id);
    }
    for (const [field, html] of [
      ["body", p.html],
      ...p.summary.map((s) => ["summary." + s.label, s.html]),
    ]) {
      const bad = unsafe(html);
      if (bad.length)
        throw new Error(`${p.file}: ${field} unsafe HTML ${bad.join(", ")}`);
    }
    const $ = load(p.html, null, false);
    for (const s of p.sections)
      if (!$(`[id="${s.id}"]`).length)
        throw new Error(`${p.file}: sections missing ${s.id}`);
  }
  for (const g of glossary) {
    for (const p of g.related)
      if (!protocolIds.has(p)) throw new Error(`${g.id}: related unknown ${p}`);
    const bad = unsafe(g.html);
    if (bad.length) throw new Error(`${g.id}: html unsafe ${bad.join(", ")}`);
  }
}
export function validateMigration(data, manifest) {
  assert.equal(manifest.counts.protocols, 108, "Expected 108 protocol files");
  assert.equal(
    manifest.counts.glossarySourceRows,
    241,
    "Expected 241 glossary rows",
  );
  assert.equal(manifest.protocols.length, 108);
  assert.equal(manifest.glossary.length, 241);
  for (const entry of [
    ...manifest.files,
    ...manifest.protocols,
    ...manifest.glossary,
    ...manifest.assets,
    ...manifest.links,
  ]) {
    assert.ok(
      ["migrated", "excluded", "external", "merged"].includes(
        entry.disposition,
      ),
      `Unresolved source ${entry.source || entry.path || entry.value}`,
    );
    if (["excluded", "merged"].includes(entry.disposition))
      assert.ok(
        entry.reason || entry.decision,
        "Missing reconciliation reason",
      );
  }
  for (const entry of manifest.protocols) {
    const p = data.protocols.find((p) => p.id === entry.id);
    assert.ok(p, `Missing migrated record ${entry.id}`);
    assert.equal(p.provenance.sha256, entry.sha256);
    const $ = load(p.html, null, false);
    for (const section of entry.sections) {
      if (section.kind === "summary") {
        const summary = p.summary.find((s) => s.label === section.label);
        assert.ok(summary, `${p.slug}: missing summary ${section.label}`);
        assert.deepEqual(
          evidence(summary.html),
          section.evidence,
          `${p.slug}: summary ${section.label} changed without reconciliation`,
        );
      } else if (section.disposition === "migrated") {
        const content = $("section")
          .filter((_, e) => $(e).attr("aria-labelledby") === section.id)
          .clone();
        content.children("h2").first().remove();
        assert.equal(
          content.length,
          1,
          `${p.slug}: missing section ${section.id}`,
        );
        assert.deepEqual(
          evidence(content.html()),
          section.evidence,
          `${p.slug}: section ${section.id} changed without reconciliation`,
        );
      }
    }
  }
  for (const g of manifest.glossary) {
    const entry = data.glossary.find((t) =>
      g.destination.endsWith("#" + t.anchor),
    );
    assert.ok(entry, `Missing glossary ${g.term}`);
    assert.deepEqual(
      evidence(entry.html),
      g.evidence,
      `Glossary ${g.term} changed without reconciliation`,
    );
  }
  for (const asset of manifest.assets) {
    assert.equal(
      hash(fs.readFileSync("public" + asset.destination)),
      asset.sha256,
      `Asset ${asset.path} changed`,
    );
  }
}
if (process.argv[1]?.endsWith("/validate.mjs")) {
  const data = collections();
  validateRecords(data);
  validateMigration(
    data,
    JSON.parse(fs.readFileSync("migration/manifest.json", "utf8")),
  );
  console.log(
    `Validated ${data.protocols.length} protocols, ${data.glossary.length} glossary records, ${data.rfcs.length} RFCs and migration evidence.`,
  );
}
