import sanitizeHtml from "sanitize-html";
import { load } from "cheerio";
export const tags = [
  "a",
  "abbr",
  "b",
  "strong",
  "i",
  "em",
  "u",
  "s",
  "small",
  "sub",
  "sup",
  "br",
  "hr",
  "p",
  "div",
  "span",
  "pre",
  "code",
  "blockquote",
  "ul",
  "ol",
  "li",
  "dl",
  "dt",
  "dd",
  "table",
  "caption",
  "colgroup",
  "col",
  "thead",
  "tbody",
  "tfoot",
  "tr",
  "td",
  "th",
  "img",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "section",
];
export const attributes = {
  "*": ["id"],
  a: ["href", "title"],
  img: ["src", "alt", "width", "height"],
  td: ["colspan", "rowspan", "class", "aria-label"],
  th: ["colspan", "rowspan", "scope"],
  col: ["span"],
  ol: ["start"],
  div: ["class", "role", "aria-label", "tabindex"],
  pre: ["class", "role", "aria-label", "tabindex"],
  span: ["class"],
  section: ["aria-labelledby"],
};
export function sanitize(html) {
  return sanitizeHtml(html, {
    allowedTags: tags,
    allowedAttributes: attributes,
    allowedSchemes: ["https", "http", "mailto"],
    allowProtocolRelative: false,
    allowedClasses: {
      td: ["MapParent", "MapChild"],
      div: ["table-scroll", "legacy-pre"],
      pre: ["legacy-pre"],
      span: ["unavailable"],
    },
    disallowedTagsMode: "discard",
  });
}
export function unsafe(html) {
  const $ = load(html, null, false);
  const bad = [];
  $("*").each((_, e) => {
    if (!tags.includes(e.tagName)) bad.push(e.tagName);
    for (const [key, val] of Object.entries(e.attribs || {})) {
      if (
        !(attributes["*"] || []).includes(key) &&
        !(attributes[e.tagName] || []).includes(key)
      )
        bad.push(`${e.tagName}[${key}]`);
      if (["src", "href"].includes(key)) {
        const normalized = val.replace(/[\u0000-\u0020\u007f-\u009f]/g, "");
        const scheme = normalized
          .match(/^([a-z][a-z\d+.-]*):/i)?.[1]
          ?.toLowerCase();
        if (
          normalized.startsWith("//") ||
          (scheme && !["http", "https", "mailto"].includes(scheme))
        )
          bad.push(`${key} scheme`);
      }
    }
  });
  return bad;
}
export function textOf(html) {
  return load(html, null, false).text().replace(/\s+/g, " ").trim();
}
