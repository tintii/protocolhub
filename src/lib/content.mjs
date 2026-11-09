import fs from "node:fs";
import matter from "gray-matter";
import { marked } from "marked";
import { load } from "cheerio";
import { protocolSchema, glossarySchema } from "./schema.mjs";
import { rfcDestinations } from "./urls.mjs";
export function readProtocols() {
  return fs
    .readdirSync("content/protocols")
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data, content } = matter(
        fs.readFileSync(`content/protocols/${f}`, "utf8"),
      );
      return {
        ...protocolSchema.parse(data),
        body: content,
        html: data.origin === "historical" ? content : marked.parse(content),
        file: f,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}
export const readGlossary = () =>
  JSON.parse(fs.readFileSync("content/data/glossary.json", "utf8")).map((x) =>
    glossarySchema.parse(x),
  );
export const readRfcs = () =>
  JSON.parse(fs.readFileSync("content/data/rfcs.json", "utf8"));
export function collections() {
  const protocols = readProtocols(),
    glossary = readGlossary(),
    snapshot = readRfcs();
  return {
    protocols,
    glossary,
    snapshot,
    rfcs: snapshot.entries,
    destinations: rfcDestinations(snapshot.entries),
  };
}
export function relatedTo(protocol, protocols) {
  return protocols.filter(
    (p) =>
      p.id !== protocol.id &&
      (protocol.related.includes(p.id) || p.related.includes(protocol.id)),
  );
}
export function rewriteBase(html, base) {
  const $ = load(html, null, false);
  for (const e of $("[href],[src]").toArray())
    for (const attr of ["href", "src"]) {
      const value = $(e).attr(attr);
      if (value?.startsWith("/") && !value.startsWith("//"))
        $(e).attr(attr, base + value.slice(1));
    }
  return $.html();
}
