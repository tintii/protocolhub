import { XMLParser, XMLValidator } from "fast-xml-parser";
import { hash } from "./migration-lib.mjs";
export const upstream = "https://www.rfc-editor.org/rfc-index.xml";
const array = (x) => (x == null ? [] : Array.isArray(x) ? x : [x]);
function flatten(value) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(flatten).join(" ");
  return Object.values(value)
    .map(flatten)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}
export function parseIndex(xml, retrievedAt = new Date().toISOString()) {
  if (/<!DOCTYPE|<!ENTITY/i.test(xml))
    throw new Error("RFC XML: DTDs and external entities are prohibited");
  const valid = XMLValidator.validate(xml);
  if (valid !== true) throw new Error(`RFC XML: ${valid.err.msg}`);
  const parsed = new XMLParser({
    ignoreAttributes: true,
    parseTagValue: false,
    processEntities: true,
  }).parse(xml);
  const entries = array(parsed["rfc-index"]?.["rfc-entry"])
    .map((e) => {
      const doc = e["doc-id"];
      if (!/^RFC\d+$/.test(doc)) throw new Error(`RFC doc-id invalid: ${doc}`);
      const number = Number(doc.slice(3)),
        title = flatten(e.title);
      if (!number || !title || title === "Not Issued")
        return title === "Not Issued"
          ? null
          : (() => {
              throw new Error(`${doc}: missing required title/number`);
            })();
      const relations = {};
      for (const key of [
        "updates",
        "updated-by",
        "obsoletes",
        "obsoleted-by",
        "is-also",
        "see-also",
      ])
        if (e[key]) relations[key] = array(e[key]["doc-id"]).map(String);
      return {
        number,
        title,
        url: `https://www.rfc-editor.org/rfc/rfc${number}.html`,
        authors: array(e.author).map((a) => flatten(a.name)),
        date: flatten(e.date),
        abstract: flatten(e.abstract),
        status: flatten(e["current-status"]),
        publicationStatus: flatten(e["publication-status"]),
        stream: flatten(e.stream),
        area: flatten(e.area),
        workgroup: flatten(e.wg_acronym),
        doi: flatten(e.doi),
        relations,
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.number - b.number);
  if (!entries.length) throw new Error("RFC XML: no published entries");
  const seen = new Set();
  for (const r of entries) {
    if (seen.has(r.number))
      throw new Error(`RFC ${r.number}: duplicate number`);
    seen.add(r.number);
  }
  return { source: upstream, retrievedAt, sha256: hash(xml), entries };
}
export function validateSnapshot(snapshot) {
  if (
    snapshot.source !== upstream ||
    !/^\d{4}-\d\d-\d\dT/.test(snapshot.retrievedAt) ||
    !snapshot.sha256?.match(/^[a-f0-9]{64}$/)
  )
    throw new Error("RFC snapshot provenance invalid");
  const numbers = new Set();
  for (const e of snapshot.entries) {
    if (
      !Number.isInteger(e.number) ||
      e.number < 1 ||
      !e.title ||
      e.url !== `https://www.rfc-editor.org/rfc/rfc${e.number}.html`
    )
      throw new Error(`RFC ${e.number}: invalid required fields`);
    if (numbers.has(e.number))
      throw new Error(`RFC ${e.number}: duplicate number`);
    numbers.add(e.number);
  }
  return numbers;
}
