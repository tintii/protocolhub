# Content authoring and HTML policy

Protocols live in individual Markdown files with YAML frontmatter. Astro collections and the standalone validator share `src/lib/schema.mjs`. `content/data/glossary.json` is a structured collection. `content/data/rfcs.json` is an official snapshot, not hand-edited article copy.

Immutable record IDs are separate from route slugs. IDs/slugs/anchors use lowercase letters, digits and hyphens. Record validation rejects duplicates across collections and unknown typed references. Multi-valued `layers` and `suites` preserve original source classifications and discover new filter values automatically. All original summary labels are retained as an ordered list of `{label, html}` values; uncommon fields are not collapsed into a fixed UI schema.

Historical bodies are sanitized HTML stored in Markdown records and rendered as HTML, without Markdown interpreting ASCII punctuation. New contributions use Markdown and may include the same HTML subset. Validation checks the final rendered HTML; it does not silently sanitize unsafe new contributions.

The allowlist in `src/lib/html.mjs` permits prose, headings, lists, links, tables/captions/cell spans, pre/code, sections and images. Only necessary structural attributes, stable IDs, labeled scroll regions and the documented presentation classes survive import. No scripts, inline styles, event handlers, SVG scripts, iframes, embedded objects, forms, executable URL schemes or protocol-relative URLs are allowed. A leading `/` URL refers to the configured site base; apply the URL helper at render time. Give images meaningful alt text; decorative connectors use an empty alt.

Put wide tables in `<div class="table-scroll" role="region" aria-label="Describe this table" tabindex="0">` and give the table a meaningful caption. Preserve `colspan`/`rowspan`. Put whitespace-sensitive examples in `<pre role="region" aria-label="Describe this example" tabindex="0">`; the article template adds contained scrolling. Valid lists contain list items, and nested lists belong inside a list item. Choose stable section IDs and declare them in frontmatter for the contents navigation. Markdown headings with no explicit IDs do not automatically become declared sections; use `<section aria-labelledby="description"><h2 id="description">Description</h2>…</section>` as in the template.

Sources are required. Set the provider to the actual author/organization; `origin: contribution` never implies Colasoft credit. Keep imported statements unchanged; use separately labeled editorial notes with source/date for corrections. Original update strings are retained without assuming a timezone.

To reconcile a deliberate archival transformation, compare against the read-only source, document the reason and update the importer/evidence together. Do not regenerate hashes merely to make a failing preservation check pass.
