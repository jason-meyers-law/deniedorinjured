# Changelog

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
