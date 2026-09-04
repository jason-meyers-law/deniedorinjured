// Custom-domain configuration (the domain-cutover branch): merged to
// main only at DNS-flip time — see issue #1. The Pages custom domain
// itself lives in repo settings (Actions deploys need no CNAME file).
import { readdirSync, readFileSync } from "node:fs";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/** Routes whose content file is flagged `noindex: true` (privacy,
 * disclaimer, credits). They stay on the site and in the footer; they
 * are just not offered to search engines, so the sitemap must not
 * offer them either — Search Console flags the contradiction. */
const pagesDir = new URL("./src/content/pages/", import.meta.url);
const noindexRoutes = readdirSync(pagesDir)
  .filter((f) => f.endsWith(".md"))
  .filter((f) => /^noindex:\s*true\s*$/m.test(readFileSync(new URL(f, pagesDir), "utf8")))
  .map((f) => `/${f.replace(/\.md$/, "")}/`);

export default defineConfig({
  site: "https://deniedorinjured.com",
  base: "/",
  trailingSlash: "always",
  integrations: [
    // Emits sitemap-index.xml (submitted to Search Console). The 404
    // page, the /about/jason-meyers/ forwarding stub, and noindexed
    // pages have no place in it.
    sitemap({
      filter: (page) =>
        !page.includes("/404") &&
        !page.includes("/about/jason-meyers/") &&
        !noindexRoutes.some((r) => page.endsWith(r)),
    }),
  ],
});
