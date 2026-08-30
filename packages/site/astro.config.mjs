// Staging deploy target is GitHub Pages project hosting, so the site
// lives under /deniedorinjured/. Go-live on deniedorinjured.com means:
// site -> "https://deniedorinjured.com", base -> "/", add public/CNAME
// (steps in docs/launch-qa.md).
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://jason-meyers-law.github.io",
  base: "/deniedorinjured",
  trailingSlash: "always",
  integrations: [
    // Emits sitemap-index.xml; submit to Search Console at launch
    // (docs/launch-qa.md). The 404 page has no place in it.
    sitemap({ filter: (page) => !page.includes("/404") }),
  ],
});
