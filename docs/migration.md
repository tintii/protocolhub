# Migration reconciliation

The snapshot contains 148 files (excluding `.DS_Store`), with individual SHA-256 hashes in `migration/manifest.json`. Its combined identity is `95a6809957f1dec84f9a77ba1e95c25ea3559a95ef61ce8229f7c44dc1dfc571`. The migration reads the source without writes.

| Source inventory | Disposition |
| --- | --- |
| 108 protocol HTML files | 108 complete normalized records with preserved summaries and substantive sections |
| 241 central glossary rows | 241 distinct records and stable anchors; no duplicate/case collision was found among these rows |
| 1,428 local glossary entries | Kept within their originating protocol sections; 575 match central wording, 3 differ, 850 have no central entry |
| 15 referenced supporting assets | Copied byte-for-byte, with destination and checksum |
| 4,197 content link/image references | Each classified as migrated asset/internal, external, or excluded with an explicit reason |

The planning document's Telnet/TELNET example describes a possible reconciliation case, not two actual central rows. This snapshot has no Telnet central entry. Protocol-local variants are retained independently; there is no lowercase merge. The three definitions differing from central wording are TraceRoute (ICMP), Threedegrees (MSN) and T-SQL (MSSQL). Both central and local meanings are preserved.

Forty-six malformed historical RFC links end in `rfc.txt` without an identifier. Their labels remain, followed by “Malformed historical RFC reference: no identifier supplied”; no RFC number is inferred. These are explicitly classified external-source defects, not an unresolved migration task. Other missing or excluded destinations likewise retain their labels and availability notes. Numbered RFC links point to official HTTPS documents, and parsed citations derive catalog connections validated against the committed snapshot.

DOM-based extraction reads each original ordered summary field and DESCRIPTION, EXAMPLES, RELATIONS, GLOSSARY, REFERENCES cells. Empty sections are recorded individually and omitted. OTHER is identical site-wide browse chrome and is replaced by the complete derived directory. Outer layout, duplicated nav/footer/sidebar, obsolete search/request forms, scripts, inline styles and handlers are removed. Source-local definitions and relationship structures remain. Parent/child layer cells receive explicit labels so the relationship does not depend on the old red/green coloring.

The declared GB2312 input is strictly decoded using the GB18030 superset. No replacement sequences were required. Invalid bytes stop migration for explicit reconciliation. Output is UTF-8. Preformatted spaces are retained; legacy BR markup inside preformatted examples becomes line breaks without duplicating an existing newline. Tables retain cells and spans, with a caption and labeled contained scrolling added for access. Preformatted scroll regions also have labels and keyboard focus. Invalid legacy list nesting is normalized into list items while preserving list text and order. Connector images have empty alt text; meaningful images have descriptive filenames when the source omitted alt text.

Every summary and substantive section has a normalized text digest, table/cell counts, ordered row/column spans, preformatted whitespace hashes, ordered list-text digests, image counts and heading evidence captured before sanitization. The importer refuses unexplained mismatches after transformation. Normal validation recomputes this evidence from committed records, compares all central definitions and checks copied asset hashes. An intentional content transformation requires a documented source comparison and importer/evidence change; ordinary edits cannot silently update the baseline.

The archive's summary classification strings and date strings are source claims. Missing suites/layers remain unspecified. Related protocol names matching known records generate immutable-ID connections; unmatched names remain in the original summary. The article's original references and local relationships are retained even when no typed connection exists.

`migration/manifest.json` is an audit artifact and is not copied into the publication directory or search index. Ordinary builds consume only repository content and assets; they do not run the importer or fetch the source site.
