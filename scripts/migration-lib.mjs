import { load } from "cheerio";
import { createHash } from "node:crypto";
export const hash = (value) => createHash("sha256").update(value).digest("hex");
export const slugify = (value) =>
  value
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
export function decode(bytes, path) {
  const probe =
    bytes.toString("ascii").match(/charset\s*=\s*["']?([\w-]+)/i)?.[1] ||
    "gb2312";
  const encoding = /gb2312/i.test(probe) ? "gb18030" : probe;
  try {
    return {
      text: new TextDecoder(encoding, { fatal: true }).decode(bytes),
      encoding,
      anomalies: [],
    };
  } catch {
    throw new Error(
      `${path}: invalid ${encoding} bytes; explicit reconciliation required`,
    );
  }
}
export function evidence(html) {
  const $ = load(html, null, false);
  $("caption,.unavailable").remove();
  return {
    text: hash($.text().replace(/\s+/g, " ").trim()),
    tables: $("table").length,
    cells: $("td,th").length,
    spans: $("[colspan],[rowspan]")
      .map((_, e) =>
        [$(e).attr("colspan") || "1", $(e).attr("rowspan") || "1"].join(":"),
      )
      .get(),
    pre: $("pre,.legacy-pre")
      .map((_, e) => hash($(e).text()))
      .get(),
    lists: $("ul,ol")
      .map(
        (_, e) =>
          e.tagName + ":" + hash($(e).text().replace(/\s+/g, " ").trim()),
      )
      .get(),
    images: $("img").length,
    headings: $("h2,h3,h4,h5,h6")
      .map((_, e) => $(e).text())
      .get(),
  };
}
export function extractSections($) {
  const result = [];
  $("a[name]").each((_, anchor) => {
    const name = $(anchor).attr("name");
    if (
      ![
        "DESCRIPTION",
        "EXAMPLES",
        "RELATIONS",
        "GLOSSARY",
        "REFERENCES",
        "OTHER",
      ].includes(name)
    )
      return;
    const row = $(anchor).closest("tr");
    const content = row.next().children("td.Content").first();
    if (!content.length) throw new Error(`Missing content cell for ${name}`);
    result.push({
      legacy: name,
      id: name.toLowerCase(),
      title: {
        DESCRIPTION: "Description",
        EXAMPLES: "Examples",
        RELATIONS: "Protocol relations",
        GLOSSARY: "Local glossary",
        REFERENCES: "References",
        OTHER: "Other protocols",
      }[name],
      html: content.html() || "",
    });
  });
  return result;
}

export function resolveLegacy(href, source, manifest) {
  try {
    const decoded = decodeURIComponent(href.trim());
    if (/^(javascript|data|vbscript):/i.test(decoded)) return { unsafe: true };
    let address = new URL(decoded, "http://www.protocolbase.net/" + source);
    let pathname = decodeURIComponent(address.pathname).replace(/^\//, "");
    if (/(?:^|\/)rfc\.txt$/i.test(pathname))
      return {
        unavailable:
          "Malformed historical RFC reference: no identifier supplied",
        path: pathname,
      };
    const rfcTarget = pathname.match(/(?:^|\/)rfc(\d+)\.(?:txt|html)$/i);
    if (
      rfcTarget &&
      (address.hostname === "www.rfc-editor.org" ||
        pathname.includes("rfc-editor.org/"))
    )
      return {
        external: `https://www.rfc-editor.org/rfc/rfc${+rfcTarget[1]}.html`,
      };
    // Mirrors turn foreign hosts into local directories, sometimes nested under protocols/.
    const mirror = pathname.match(
      /(?:^|\/)((?:www\.)?[a-z0-9-]+\.(?:org|com|net|edu))\/(.*)/i,
    );
    if (mirror && mirror[1] !== "www.protocolbase.net")
      return {
        external: `https://${mirror[1]}/${mirror[2]}${address.search}${address.hash}`,
      };
    if (
      address.hostname !== "www.protocolbase.net" &&
      address.hostname !== "protocolbase.net"
    )
      return { external: address.href };
    pathname = pathname.replace(/^www\.protocolbase\.net\//, "");
    const rfcm = pathname.match(/(?:^|\/)rfc(\d+)\.(?:txt|html)$/i);
    if (rfcm)
      return { external: `https://www.rfc-editor.org/rfc/rfc${+rfcm[1]}.html` };
    const fragment = decodeURIComponent(address.hash.slice(1));
    const target =
      manifest.anchorMap[`${pathname}#${fragment}`] ||
      (!fragment ? manifest.routeMap[pathname] : null);
    if (target) return { target };
    if (manifest.routeMap[pathname])
      return { unavailable: "Historical section unavailable", path: pathname };
    const file = manifest.files.find((f) => f.path === pathname);
    if (file && /\.(gif|png|jpe?g|svg|pcap|cap|zip|txt|pdf)$/i.test(pathname))
      return { asset: pathname };
    return {
      unavailable:
        pathname.startsWith("sample/") ||
        pathname.startsWith("tools/") ||
        pathname === "resource.htm"
          ? "Outside this reference archive"
          : "Unavailable in the source snapshot",
      path: pathname,
    };
  } catch {
    return { unavailable: "Malformed historical reference" };
  }
}

export function normalizeLists($) {
  // Preserve source order while giving legacy BR/text/nested lists valid list-item parents.
  for (const list of $("ul,ol").toArray()) {
    let previous = null;
    for (const child of [...list.children]) {
      if (child.type === "tag" && child.name === "li") {
        previous = child;
        continue;
      }
      if (
        (child.type === "text" && !child.data.trim()) ||
        child.type === "comment"
      )
        continue;
      if (child.type === "tag" && child.name === "br") {
        if (previous) $(previous).append(child);
        else $(child).remove();
        continue;
      }
      $(child).wrap("<li></li>");
      previous = child.parent;
    }
  }
}
