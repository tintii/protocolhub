import fs from "node:fs/promises";
import path from "node:path";
import { load } from "cheerio";
import matter from "gray-matter";
import {
  hash,
  slugify,
  decode,
  evidence,
  extractSections,
  resolveLegacy,
  normalizeLists,
} from "./migration-lib.mjs";
import { sanitize, textOf } from "../src/lib/html.mjs";
const archive = path.resolve(process.argv[2] || "../www.protocolbase.net");
const manifest = {
  version: 1,
  source: "http://www.protocolbase.net/",
  encodingPolicy:
    "Declared GB2312 decoded strictly as GB18030 (superset); invalid sequences fail import; UTF-8 output.",
  files: [],
  protocols: [],
  glossary: [],
  localGlossary: [],
  assets: [],
  links: [],
  anchorMap: {},
  routeMap: {},
  transformations: [
    "Normalized legacy lists into valid list-item nesting without changing ordered text; labeled preformatted scroll regions accept keyboard focus.",
    "Removed outer layout, navigation, sidebars, scripts, event handlers, obsolete forms and style attributes.",
    "Removed repeated OTHER protocol navigation; replaced with derived directory and related links.",
    "Empty sections omitted with per-section evidence.",
    "Preserved table geometry and all meaningful content; captions and scroll regions added.",
    "Preformatted BR markup normalized to existing line endings, retaining whitespace.",
    "Protocol-local definitions kept in place; central case/duplicate variants receive separate IDs.",
    "Unavailable destinations retain labels and an explicit availability note.",
  ],
};
async function walk(dir, prefix = "") {
  const files = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    if (e.name === ".DS_Store") continue;
    const relative = prefix + e.name;
    if (e.isDirectory())
      files.push(...(await walk(path.join(dir, e.name), relative + "/")));
    else {
      const bytes = await fs.readFile(path.join(dir, e.name));
      files.push({
        path: relative,
        sha256: hash(bytes),
        bytes: bytes.length,
        disposition: "excluded",
        reason:
          "Site chrome or excluded sample/tools/resource section; supporting content assets are separately copied when referenced.",
      });
    }
  }
  return files;
}
manifest.files = await walk(archive);
const files = manifest.files.filter((f) => /^protocols\/.*\.htm$/.test(f.path));
const raw = [];
for (const file of files) {
  const bytes = await fs.readFile(path.join(archive, file.path));
  const decoded = decode(bytes, file.path);
  const $ = load(decoded.text);
  const fullTitle = $("h1.title").text().replace(/\s+/g, " ").trim();
  const name = fullTitle.split(" (")[0];
  const slug = slugify(name);
  raw.push({ file, $, name, slug, decoded });
  manifest.routeMap[file.path] = `/protocols/${slug}/`;
  file.disposition = "migrated";
  delete file.reason;
}
Object.assign(manifest.routeMap, {
  "glossary.htm": "/glossary/",
  "protocols.htm": "/protocols/",
  "rfc.htm": "/rfcs/",
  "www_protocolbase_default.html": "/",
});
const glossaryBytes = await fs.readFile(path.join(archive, "glossary.htm"));
const glossaryDecoded = decode(glossaryBytes, "glossary.htm");
const g$ = load(glossaryDecoded.text);
const glossary = [];
const used = new Map();
g$("td.ContentTitle")
  .filter((_, e) => g$(e).parent().children("td").length === 2)
  .each((i, e) => {
    const term = g$(e).text().trim();
    const root = slugify(term);
    const n = (used.get(root) || 0) + 1;
    used.set(root, n);
    const id = `term-${root}${n > 1 ? `-${n}` : ""}`;
    glossary.push({
      id,
      anchor: id,
      term,
      aliases: [],
      html: g$(e).next().html() || "",
      origin: "historical",
      provenance: {
        source: "glossary.htm",
        sha256: hash(glossaryBytes),
        provider: "Colasoft Co., Ltd.",
      },
      related: [],
    });
    manifest.glossary.push({
      sourceRow: i + 1,
      term,
      destination: `/glossary/#${id}`,
      disposition: "migrated",
      decision:
        n > 1
          ? "Case/spelling collision retained separately; no automatic merge."
          : "Unique stable row ID; definitions retained.",
    });
  });
for (const anchor of g$("a[name]")
  .toArray()
  .map((e) => g$(e).attr("name"))) {
  manifest.anchorMap[`glossary.htm#${anchor}`] =
    anchor === "top"
      ? "/glossary/"
      : `/glossary/#group-${/^\d$/.test(anchor) ? "0-9" : anchor.toLowerCase()}`;
}
for (const r of raw) {
  manifest.anchorMap[r.file.path + "#top"] = `/protocols/${r.slug}/`;
  manifest.anchorMap[r.file.path + "#SUMMARY"] =
    `/protocols/${r.slug}/#summary`;
  for (const s of extractSections(r.$))
    manifest.anchorMap[r.file.path + "#" + s.legacy] =
      `/protocols/${r.slug}/${s.legacy === "OTHER" ? "" : `#${s.id}`}`;
}
const copied = new Map();
async function normalize(html, source, section) {
  const $ = load(html, null, false);
  $("script,style,form,iframe,object,embed").remove();
  $("pre,div.in_text").each((_, e) => {
    if (e.tagName === "div" && $(e).find("table").length) return;
    $(e).addClass("legacy-pre");
    $(e)
      .find("br")
      .each((_, br) => {
        const prev = br.prev;
        $(br).replaceWith(
          prev?.type === "text" && /\n$/.test(prev.data) ? "" : "\n",
        );
      });
  });
  const before = evidence($.html());
  normalizeLists($);
  $("pre,.legacy-pre").each((i, e) =>
    $(e).attr({
      role: "region",
      "aria-label": `${section}: preformatted example ${i + 1}`,
      tabindex: "0",
    }),
  );
  $("a").each((_, e) => {
    const name = $(e).attr("name");
    if (name && !$(e).attr("id")) $(e).attr("id", slugify(name));
  });
  for (const e of $("a[href],img[src]").toArray()) {
    const image = e.tagName === "img",
      attr = image ? "src" : "href",
      value = $(e).attr(attr);
    const resolution = resolveLegacy(value, source, manifest);
    const link = {
      source,
      section,
      attribute: attr,
      value,
      label: image ? $(e).attr("alt") || path.basename(value) : $(e).text(),
      ...resolution,
    };
    if (resolution.external) {
      $(e).attr(attr, resolution.external);
      link.disposition = "external";
    } else if (resolution.target) {
      $(e).attr(attr, resolution.target);
      link.disposition = "migrated";
    } else if (resolution.asset) {
      if (!copied.has(resolution.asset)) {
        const asset = manifest.files.find((f) => f.path === resolution.asset);
        const dest = `supporting/${resolution.asset}`;
        await fs.mkdir(path.dirname("public/" + dest), { recursive: true });
        await fs.copyFile(
          path.join(archive, resolution.asset),
          "public/" + dest,
        );
        asset.disposition = "migrated";
        delete asset.reason;
        copied.set(resolution.asset, dest);
        manifest.assets.push({
          ...asset,
          destination: "/" + dest,
          disposition: "migrated",
        });
      }
      $(e).attr(attr, "/" + copied.get(resolution.asset));
      link.disposition = "migrated";
      link.target = "/" + copied.get(resolution.asset);
    } else {
      link.disposition = "excluded";
      link.reason = resolution.unavailable || "Unsafe executable URL removed";
      if (image) {
        $(e).attr("alt", link.label + " (unavailable)");
        $(e).removeAttr(attr);
      } else {
        $(e).removeAttr(attr);
        $(e).append('<span class="unavailable"> [' + link.reason + "]</span>");
      }
    }
    if (image && !$(e).attr("alt"))
      $(e).attr("alt", /line|arrow/i.test(value) ? "" : path.basename(value));
    manifest.links.push(link);
  }
  $("td.MapParent").attr("aria-label", "Parent layer protocols");
  $("td.MapChild").attr("aria-label", "Child layer protocols");
  $("table").each((i, e) => {
    if (!$(e).children("caption").length)
      $(e).prepend(`<caption>${section}: preserved table ${i + 1}</caption>`);
    $(e).wrap(
      `<div class="table-scroll" role="region" aria-label="${section} table ${i + 1}" tabindex="0"></div>`,
    );
  });
  const output = sanitize($.html());
  const after = evidence(output);
  // Missing images are not silently discarded: image element remains with an explicit alt.
  if (JSON.stringify(before) !== JSON.stringify(after))
    throw new Error(
      `${source} ${section}: unexplained text/structure loss ${JSON.stringify({ before, after })}`,
    );
  return { html: output, evidence: before };
}
for (const g of glossary) {
  const normalized = await normalize(g.html, "glossary.htm", g.term);
  g.html = normalized.html;
  manifest.glossary.find(
    (x) => x.destination === `/glossary/#${g.anchor}`,
  ).evidence = normalized.evidence;
}
for (const r of raw) {
  const { $, file, name, slug, decoded } = r;
  const summary = [];
  const sectionEvidence = [];
  for (const tr of $(".Property tr").toArray()) {
    const cells = $(tr).children("td");
    if (cells.length < 3) continue;
    const label = cells.first().text().trim();
    const n = await normalize(
      cells.last().html() || "",
      file.path,
      `Summary ${label}`,
    );
    summary.push({ label, html: n.html });
    sectionEvidence.push({ kind: "summary", label, evidence: n.evidence });
  }
  const local = extractSections($).find((s) => s.legacy === "GLOSSARY");
  if (local) {
    const local$ = load(local.html, null, false);
    local$(".in_cont > b").each((_, cell) => {
      const term = local$(cell).text().trim();
      let definition = "";
      let sibling = cell.next;
      while (sibling && !(sibling.type === "tag" && sibling.name === "b")) {
        definition += local$.html(sibling);
        sibling = sibling.next;
      }
      const matches = glossary.filter(
        (g) => g.term.toLowerCase() === term.toLowerCase(),
      );
      manifest.localGlossary.push({
        source: file.path,
        term,
        definitionHash: hash(textOf(definition)),
        destination: `/protocols/${slug}/#glossary`,
        centralMatches: matches.map((g) => g.id),
        disposition: "migrated",
        decision: matches.some((g) => textOf(g.html) === textOf(definition))
          ? "Exact central wording retained in local source context"
          : matches.length
            ? "Different local wording retained alongside central definition"
            : "No central definition; local source wording retained",
      });
    });
  }
  const sections = [];
  let body = "";
  for (const s of extractSections($)) {
    if (s.legacy === "OTHER") {
      sectionEvidence.push({
        id: s.id,
        disposition: "excluded",
        reason:
          "Repeated site-wide directory chrome, replaced by derived directory; not protocol-specific material.",
      });
      continue;
    }
    if (!textOf(s.html) && !s.html.includes("<img")) {
      sectionEvidence.push({
        id: s.id,
        disposition: "excluded",
        reason: "Empty source section",
      });
      manifest.anchorMap[file.path + "#" + s.legacy] = `/protocols/${slug}/`;
      continue;
    }
    const n = await normalize(s.html, file.path, s.title);
    sections.push({ id: s.id, title: s.title });
    body += `<section aria-labelledby="${s.id}">\n<h2 id="${s.id}">${s.title}</h2>\n${n.html}\n</section>\n\n`;
    sectionEvidence.push({
      id: s.id,
      disposition: "migrated",
      evidence: n.evidence,
    });
  }
  const field = (label) =>
    summary.find((f) => f.label.toLowerCase().trim() === label)?.html || "";
  const split = (html) =>
    textOf(html.replace(/<br\s*\/?\s*>/gi, ","))
      .split(/[,;\n]/)
      .map((s) => s.trim())
      .filter(Boolean);
  const related = split(field("related protocols"))
    .map((n) => raw.find((p) => p.name.toLowerCase() === n.toLowerCase())?.slug)
    .filter((n) => n && n !== slug);
  const rfcs = [
    ...new Set([...body.matchAll(/rfc(?:%20|\s)*(\d+)/gi)].map((m) => +m[1])),
  ].sort((a, b) => a - b);
  const originalUpdate = $(".Location")
    .text()
    .match(/Update:\s*([\d-]+\s+[\d:]+)/)?.[1];
  const data = {
    id: `protocol-${slug}`,
    slug,
    name,
    expandedName: textOf(field("protocol")),
    origin: "historical",
    provenance: {
      source: file.path,
      sha256: file.sha256,
      provider: "Colasoft Co., Ltd.",
    },
    aliases: [
      ...new Set([textOf(field("protocol"))].filter((s) => s && s !== name)),
    ],
    layers: split(field("layer")),
    suites: split(field("protocol suite")),
    summary,
    ...(originalUpdate ? { originalUpdate } : {}),
    rfcs,
    related: [...new Set(related.map((s) => "protocol-" + s))],
    glossary: [],
    sections,
    editorialNotes: [],
  };
  await fs.writeFile(
    `content/protocols/${slug}.md`,
    matter.stringify(body, data, { lineWidth: 120 }),
  );
  manifest.protocols.push({
    source: file.path,
    sha256: file.sha256,
    destination: `/protocols/${slug}/`,
    id: data.id,
    disposition: "migrated",
    encoding: decoded.encoding,
    anomalies: decoded.anomalies,
    sections: sectionEvidence,
  });
}
for (const f of manifest.files)
  if (Object.hasOwn(manifest.routeMap, f.path)) {
    f.disposition = "migrated";
    delete f.reason;
  }
manifest.counts = {
  protocols: raw.length,
  glossarySourceRows: glossary.length,
  glossaryRecords: glossary.length,
  assets: manifest.assets.length,
  links: manifest.links.length,
};
if (raw.length !== 108 || glossary.length !== 241)
  throw new Error("Inventory differs from discovery counts");
manifest.snapshot = hash(
  JSON.stringify(manifest.files.map((f) => [f.path, f.sha256])),
);
await fs.writeFile(
  "content/data/glossary.json",
  JSON.stringify(glossary, null, 2) + "\n",
);
await fs.writeFile(
  "migration/manifest.json",
  JSON.stringify(manifest, null, 2) + "\n",
);
console.log(
  JSON.stringify({ snapshot: manifest.snapshot, ...manifest.counts }, null, 2),
);
