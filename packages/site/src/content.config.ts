import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/** Shared frontmatter: every legal page carries authorship and review
 * state so the templates can render the required author/date blocks
 * and refuse to drop the draft banner until an attorney has reviewed. */
const legalPage = z.object({
  title: z.string(),
  description: z.string(),
  draft: z.boolean().default(true),
  publishDate: z.coerce.date().optional(),
  /** Set only by the reviewing attorney; drives "Last legally reviewed". */
  legalReviewDate: z.coerce.date().optional(),
  related: z.array(z.string()).default([]),
});

const practiceAreas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/practice-areas" }),
  schema: legalPage.extend({
    /** Order on the personal-injury hub; lower first. */
    order: z.number().default(100),
    /** Themed page illustration (site-relative path) and its alt text. */
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

const answers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/answers" }),
  schema: legalPage.extend({
    /** The exact user question this page answers (PLAN.md §6.3). */
    question: z.string(),
    /** Content cluster from PLAN.md §16 (aftermath, pip, adjusters, ...). */
    cluster: z.string().optional(),
  }),
});

export const collections = { practiceAreas, answers };
