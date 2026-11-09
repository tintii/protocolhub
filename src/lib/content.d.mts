export interface Provenance {
  source: string;
  sha256?: string;
  provider: string;
}
export interface Protocol {
  id: string;
  slug: string;
  name: string;
  expandedName: string;
  origin: "historical" | "contribution";
  provenance: Provenance;
  aliases: string[];
  layers: string[];
  suites: string[];
  originalUpdate?: string;
  summary: { label: string; html: string }[];
  rfcs: number[];
  related: string[];
  glossary: string[];
  sections: { id: string; title: string }[];
  editorialNotes: { text: string; source: string; date: string }[];
  body: string;
  html: string;
  file: string;
}
export interface Glossary {
  id: string;
  anchor: string;
  term: string;
  aliases: string[];
  html: string;
  origin: "historical" | "contribution";
  provenance: Provenance;
  related: string[];
}
export interface Rfc {
  number: number;
  title: string;
  url: string;
  authors: string[];
  date: string;
  abstract: string;
  status: string;
  publicationStatus: string;
  stream: string;
  area: string;
  workgroup: string;
  doi: string;
  relations: Record<string, string[]>;
}
export interface Snapshot {
  source: string;
  retrievedAt: string;
  sha256: string;
  entries: Rfc[];
}
export function readProtocols(): Protocol[];
export function readGlossary(): Glossary[];
export function readRfcs(): Snapshot;
export function collections(): {
  protocols: Protocol[];
  glossary: Glossary[];
  snapshot: Snapshot;
  rfcs: Rfc[];
  destinations: Record<number, string>;
};
export function relatedTo(
  protocol: Protocol,
  protocols: Protocol[],
): Protocol[];
export function rewriteBase(html: string, base: string): string;
