import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { protocolSchema, glossarySchema } from "./lib/schema.mjs";
export const collections = {
  protocols: defineCollection({
    loader: glob({
      pattern: "**/*.md",
      base: "./content/protocols",
      generateId: ({ data }) => String(data.id),
    }),
    schema: protocolSchema,
  }),
  glossary: defineCollection({
    loader: file("./content/data/glossary.json"),
    schema: glossarySchema,
  }),
};
