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
    /** The direct answer (markdown), rendered in the highlighted box
     * above the body. A frontmatter field so the CMS shows it as its
     * own labeled editor rather than a raw <div> in the body. */
    directAnswer: z.string(),
    /** Content cluster from PLAN.md §16 (aftermath, pip, adjusters, ...). */
    cluster: z.string().optional(),
  }),
});

/** Prose for the fixed pages (home, hubs, contact, legal pages). The
 * route and structure live in src/pages; only the words live here.
 * One entry per route, matched by id (e.g. pages/contact.md ↔
 * /contact/). */
const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    /** Page heading (H1). */
    title: z.string(),
    /** Browser/search-result title when it should differ from the heading. */
    searchTitle: z.string().optional(),
    /** Search-result description (meta description). */
    description: z.string(),
    /** Keep the page out of search engines (pending review). */
    noindex: z.boolean().default(false),
    /** Optional notice rendered above the body (e.g. "Draft — pending review"). */
    notice: z.string().optional(),
    /** Homepage only: the two gateway cards. */
    gateway: z
      .array(z.object({ heading: z.string(), text: z.string(), link: z.string() }))
      .optional(),
    /** Homepage only: heading over the practice-area grid. */
    casesHeading: z.string().optional(),
    /** Homepage only: the answer-library section (text is markdown). */
    answers: z.object({ heading: z.string(), text: z.string() }).optional(),
  }),
});

/** Attorney bios for the Attorneys page (one file each; body = bio,
 * first person, as written). Facts here feed Person JSON-LD. */
const attorneys = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/attorneys" }),
  schema: z.object({
    name: z.string(),
    title: z.string().default("Attorney"),
    /** Site-relative path under public/ (e.g. /images/jason-meyers.png). */
    photo: z.string(),
    photoAlt: z.string(),
    /** Florida Bar number — omitted when not published. */
    barNumber: z.string().optional(),
    /** Direct phone, if published. */
    phone: z.string().optional(),
    /** Schools, for JSON-LD alumniOf. */
    alumni: z.array(z.string()).default([]),
    /** Order on the page; lower first. */
    order: z.number().default(100),
  }),
});

export const collections = { practiceAreas, answers, pages, attorneys };
