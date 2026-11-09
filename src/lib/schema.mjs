import { z } from "zod";
const id = z.string().regex(/^[a-z0-9][a-z0-9-]*$/);
const provenance = z.object({
  source: z.string().min(1),
  sha256: z
    .string()
    .regex(/^[0-9a-f]{64}$/)
    .optional(),
  provider: z.string().min(1),
});
export const protocolSchema = z.object({
  id,
  slug: id,
  name: z.string().min(1),
  expandedName: z.string().default(""),
  origin: z.enum(["historical", "contribution"]),
  provenance,
  aliases: z.array(z.string()).default([]),
  layers: z.array(z.string()).default([]),
  suites: z.array(z.string()).default([]),
  originalUpdate: z.string().optional(),
  summary: z
    .array(z.object({ label: z.string().min(1), html: z.string() }))
    .default([]),
  rfcs: z.array(z.number().int().positive()).default([]),
  related: z.array(id).default([]),
  glossary: z.array(id).default([]),
  sections: z.array(z.object({ id, title: z.string().min(1) })).default([]),
  editorialNotes: z
    .array(z.object({ text: z.string(), source: z.url(), date: z.string() }))
    .default([]),
});
export const glossarySchema = z.object({
  id,
  anchor: id,
  term: z.string().min(1),
  aliases: z.array(z.string()).default([]),
  html: z.string().min(1),
  origin: z.enum(["historical", "contribution"]),
  provenance,
  related: z.array(id).default([]),
});
