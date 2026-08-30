// Staging deploy target is GitHub Pages project hosting, so the site
// lives under /deniedorinjured/. Go-live on deniedorinjured.com means:
// site -> "https://deniedorinjured.com", base -> "/", add public/CNAME
// (steps in docs/launch-qa.md).
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jason-meyers-law.github.io",
  base: "/deniedorinjured",
  trailingSlash: "always",
});
