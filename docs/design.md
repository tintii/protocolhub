# Protocolbase design record

Product: a networking reference for students and practitioners looking up protocols, terminology, and RFCs.
Character: precise, studious, approachable.
World: engineering reference manuals and packet inspection worksheets.
Moments: the preserved IPv6 packet header on the landing page, and complete technical diagrams within articles.
Signature: a bit-offset ruler attached to packet diagrams.

The legacy audit found table-based outer layout, tiny text and original credit, dense forms, uppercase navigation, inconsistent spacing, and no narrow-screen behavior. The source is an early hand-built website, not an AI-generated interface. The requested rebuild deliberately replaces presentation while preserving historical content.

Implementation applies the nine passes in order: spacing on a 4px scale; graphite surfaces and deep teal; one set of 18px/1.5-stroke Lucide icons; direct UI copy while retaining source prose; IBM Plex Sans and Mono; an asymmetric hero, aligned directory rows and a reading column with contents rail; focus rings, captions, consistent controls and readable credit; a real selectable packet preview; brief interaction feedback and reduced motion. Neutral caption text uses #636363 on raised surfaces to keep contrast above 4.5:1.

The IPv6 preview reproduces the source boundary labels 4, 12, 16, 24, 32 and field spans: Version 4 bits, Traffic Class 8, Flow Label 20; Payload Length 16, Next Header 8, Hop Limit 8; Source and Destination addresses 128 bits each. The source's Data row is shown separately because its length varies. The original full table and examples remain in the IPv6 article.

Adapted from unslop by Damir Sokolovsky ([website](https://heydamir.design/unslop), [@heydamir](https://x.com/heydamir)), licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). No generated raster imagery is needed: the reference material supplies the visual.
