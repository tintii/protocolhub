import fs from "node:fs/promises";
import * as pagefind from "pagefind";
import { collections } from "../src/lib/content.mjs";
import { url } from "../src/lib/urls.mjs";
import { textOf } from "../src/lib/html.mjs";
const data = collections();
const { index, errors } = await pagefind.createIndex({ forceLanguage: "en" });
if (errors?.length) throw new Error(errors.join("\n"));
function check(result) {
  if (result.errors?.length) throw new Error(result.errors.join("\n"));
}
const identifiers = {},
  destinations = [];
function exact(key, record) {
  const normalized = key.toLowerCase().replace(/\s+/g, " ").trim();
  (identifiers[normalized] ??= []).push(record);
}
try {
  for (const p of data.protocols) {
    const destination = url(`protocols/${p.slug}/`);
    check(
      await index.addHTMLFile({
        url: destination,
        content: await fs.readFile(
          `dist/protocols/${p.slug}/index.html`,
          "utf8",
        ),
      }),
    );
    const record = {
      title: `${p.name} — ${p.expandedName}`,
      type: "protocol",
      url: destination,
      excerpt: textOf(p.html).slice(0, 220),
    };
    [p.name, ...p.aliases].forEach((key) => exact(key, record));
    destinations.push(destination);
  }
  for (const g of data.glossary) {
    const record = {
      title: g.term,
      type: "glossary",
      url: url(`glossary/#${g.anchor}`),
      excerpt: textOf(g.html).slice(0, 220),
    };
    check(
      await index.addCustomRecord({
        url: record.url,
        content: [g.term, ...g.aliases, textOf(g.html)].join(" "),
        language: "en",
        meta: { title: g.term, type: "glossary" },
        filters: { type: ["glossary"] },
      }),
    );
    [g.term, ...g.aliases].forEach((key) => exact(key, record));
    destinations.push(record.url);
  }
  const buckets = {};
  for (const r of data.rfcs) {
    const record = {
      title: `RFC ${r.number} — ${r.title}`,
      type: "rfc",
      url: url(data.destinations[r.number]),
      excerpt: [r.authors.join(", "), r.abstract || r.title]
        .join(" · ")
        .slice(0, 220),
    };
    check(
      await index.addCustomRecord({
        url: record.url,
        content: [
          `RFC ${r.number}`,
          `RFC${r.number}`,
          r.title,
          ...r.authors,
          r.abstract,
        ].join(" "),
        language: "en",
        meta: { title: record.title, type: "rfc" },
        filters: { type: ["rfc"] },
      }),
    );
    (buckets[Math.floor(r.number / 100)] ??= {})[r.number] = record;
    destinations.push(record.url);
  }
  await fs.mkdir("dist/lookup/rfcs", { recursive: true });
  await fs.writeFile(
    "dist/lookup/identifiers.json",
    JSON.stringify(identifiers),
  );
  for (const [bucket, records] of Object.entries(buckets))
    await fs.writeFile(
      `dist/lookup/rfcs/${bucket}.json`,
      JSON.stringify(records),
    );
  await fs.writeFile(
    "dist/search-destinations.json",
    JSON.stringify(destinations),
  );
  await fs.writeFile(
    "dist/rfc-destinations.json",
    JSON.stringify(data.destinations),
  );
  check(await index.writeFiles({ outputPath: "dist/pagefind" }));
  console.log(
    `Indexed ${destinations.length} records with validated destination manifest.`,
  );
} finally {
  await pagefind.close();
}
