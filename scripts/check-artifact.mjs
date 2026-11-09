import assert from "node:assert/strict";
import { collections } from "../src/lib/content.mjs";
import { evidence } from "./migration-lib.mjs";
import fs from "node:fs/promises";
import path from "node:path";
import { load } from "cheerio";
import { base, canonical } from "../src/lib/urls.mjs";
const documents = new Map();
async function walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (file.endsWith(".html")) {
      const $ = load(await fs.readFile(file, "utf8"));
      const relative = file.slice(5);
      const route = relative.endsWith("/index.html")
        ? relative.slice(0, -10)
        : relative === "index.html"
          ? ""
          : relative;
      documents.set(base + route, { $, file });
    }
  }
}
await walk("dist");
const errors = [];
const checks = new Map();
async function target(href, source) {
  if (!href || /^(mailto|tel):/.test(href)) return;
  const address = new URL(href, "https://artifact.invalid" + source);
  if (address.origin !== "https://artifact.invalid") return;
  if (!address.pathname.startsWith(base)) {
    errors.push(`${source}: URL escapes base ${href}`);
    return;
  }
  const key = address.pathname + address.hash;
  if (checks.has(key)) return;
  checks.set(key, true);
  const document = documents.get(address.pathname);
  if (document) {
    if (address.hash) {
      const id = decodeURIComponent(address.hash.slice(1));
      if (
        !document
          .$("[id]")
          .toArray()
          .some((e) => document.$(e).attr("id") === id)
      )
        errors.push(`${source}: missing fragment ${href}`);
    }
    return;
  }
  const file = path.resolve(
    "dist",
    decodeURIComponent(address.pathname.slice(base.length)),
  );
  if (!file.startsWith(path.resolve("dist") + path.sep)) {
    errors.push(`${source}: invalid traversal ${href}`);
    return;
  }
  try {
    const stat = await fs.stat(file);
    if (!stat.isFile())
      errors.push(`${source}: missing HTML destination ${href}`);
  } catch {
    errors.push(`${source}: missing destination ${href}`);
  }
}
for (const [route, { $, file }] of documents) {
  const ids = new Set();
  $("[id]").each((_, e) => {
    const id = $(e).attr("id");
    if (ids.has(id)) errors.push(`${file}: duplicate id ${id}`);
    ids.add(id);
  });
  if (!$("title").text() || !$('meta[name="description"]').attr("content"))
    errors.push(`${file}: missing metadata`);
  if (!$('link[rel="canonical"]').attr("href")?.startsWith(canonical()))
    errors.push(`${file}: incorrect canonical`);
  for (const e of $("[href],[src]").toArray())
    for (const attr of ["href", "src"])
      if ($(e).attr(attr)) await target($(e).attr(attr), route);
}
for (const p of collections().protocols) {
  const doc = documents.get(base + `protocols/${p.slug}/`);
  assert.ok(doc, `Missing rendered protocol ${p.slug}`);
  const source = load(p.html, null, false);
  for (const section of p.sections) {
    const selector = `section[aria-labelledby="${section.id}"]`;
    const actual = doc.$(selector).clone(),
      expected = source(selector).clone();
    assert.equal(actual.length, 1, `${p.slug}: rendered section ${section.id}`);
    assert.deepEqual(
      evidence(actual.html()),
      evidence(expected.html()),
      `${p.slug}: rendered content differs in ${section.id}`,
    );
  }
}
const destinations = JSON.parse(
  await fs.readFile("dist/search-destinations.json", "utf8"),
);
for (const dest of destinations) await target(dest, base);
for (const file of [
  "pagefind/pagefind.js",
  "pagefind/wasm.en.pagefind",
  "404.html",
])
  try {
    await fs.access("dist/" + file);
  } catch {
    errors.push("Missing artifact " + file);
  }
if (errors.length)
  throw new Error(
    errors.slice(0, 60).join("\n") + `\n${errors.length} artifact errors`,
  );
console.log(
  `Artifact checked: ${documents.size} HTML documents, ${checks.size} unique internal URLs, ${destinations.length} search destinations; base ${base}`,
);
