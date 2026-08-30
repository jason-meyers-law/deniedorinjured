// Custom-domain configuration (the domain-cutover branch): merged to
// main only at DNS-flip time — see issue #1. The Pages custom domain
// itself lives in repo settings (Actions deploys need no CNAME file).
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://deniedorinjured.com",
  base: "/",
  trailingSlash: "always",
  integrations: [
    // Emits sitemap-index.xml; submit to Search Console at launch
    // (docs/launch-qa.md). The 404 page has no place in it.
    sitemap({ filter: (page) => !page.includes("/404") }),
  ],
});
