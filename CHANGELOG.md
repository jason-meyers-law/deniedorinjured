# Changelog

## 2026-08-30 (launch-facing SEO assets)

- Favicon set (DI monogram: SVG + PNG + apple-touch) and a 1200x630
  og:image share card in the site palette; social embeds now render
  with a visual (twitter:card summary_large_image).
- Fonts self-hosted (latin woff2 subsets, SIL OFL notice in
  THIRD_PARTY_LICENSES) with preload hints; Google Fonts third-party
  requests removed from every page.

## 2026-08-30 (domain cutover)

- The site now serves at https://deniedorinjured.com (GitHub Pages
  custom domain; DNS moved off Squarespace). Canonicals, sitemap, and
  JSON-LD emit the real domain; robots.txt added at the domain root;
  www and the old github.io URL 301 to the apex. Still noindex/STAGING
  pending launch QA.

## 2026-08-30 (practice-page illustrations)

- Each practice-area page now opens with an original themed SVG
  illustration in the site palette: sedan (car accidents), bicycle,
  crosswalk figure (pedestrian), candle (wrongful death); motorcycle
  and truck art staged for their future pages. Wired through the
  content schema (`image`/`imageAlt` frontmatter).

## 2026-08-30 (Justice design port)

- Site redesigned on CloudCannon's MIT "Justice" law-firm template
  (THIRD_PARTY_LICENSES): Quattrocento/Vollkorn typography, centered
  display header with courthouse hero on the homepage, light content
  section, dark contact band, boxed cards, columned footer with the
  Injured/Denied split.

## 2026-08-30 (SEO pass)

- BaseHead component: title template ("page | Denied or Injured"),
  meta description, canonical, Open Graph/Twitter meta on every page.
- JSON-LD structured data, Bar-verified facts only: LegalService +
  WebSite (homepage), Person (bio), Article + BreadcrumbList (practice
  and answer pages). Visible breadcrumbs added to article pages; bio
  gains a "Verify" link to the Florida Bar profile.
- XML sitemap via @astrojs/sitemap (sitemap-index.xml), 404 excluded,
  linked from every head; submit to Search Console at launch.

## 2026-08-30

- Repo seeded with PLAN.md and DECISIONS.md.
- Astro site scaffold (`packages/site`): homepage, personal-injury hub,
  Florida injury-answers hub, attorney bio skeleton, contact page;
  content collections for practice areas and answer pages.
- GitHub Pages deploy on push to `main`; site serves `noindex` while
  staging (STAGING flag).
- Planning docs: canonical site map, editorial calendar, per-article
  research checklist, launch QA checklist.
