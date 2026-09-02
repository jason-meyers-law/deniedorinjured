# Changelog

## 2026-09-02 (about page, footer, contact)

- About page now presents both attorneys — Jason O. Meyers and Michael
  Onatsko — with bios adapted from the firm's current jasonmeyerslaw.com
  site (the attorneys' own published content, not invented). Michael's
  Bar number is not published on the old site, so it is omitted rather
  than guessed, and he has no photo yet. Both get Person JSON-LD. Page
  stays `noindex` until the attorneys review the combined page.
- Footer: "Firm" is now its own column — four columns (Injured / Denied /
  Firm / firm NAP) instead of three.
- Contact page: removed the "Contacting the firm does not create an
  attorney-client relationship..." paragraph. The site-wide footer
  disclaimer still carries the no-advice / no-relationship notice.


## 2026-09-02 (launch prep: legal pages + draft noindex)

- Draft/unreviewed pages now emit their own `noindex` meta, independent
  of the site-wide `STAGING` flag. Flipping `STAGING=false` no longer
  risks exposing a page still marked `draft: true` (the practice-area and
  answer content) or the attorney bio while its credentials are
  unconfirmed — each page indexes only once its own review clears it.
- Added Privacy Policy and Disclaimer pages (both `noindex` until
  attorney review) and linked them in the footer. The privacy copy
  describes the site's actual data practices only (GA4 analytics,
  phone/email contact, no form backend) — nothing invented.
- Old-domain decision recorded: NO redirects. JasonMeyersLaw.com stays
  live; DeniedOrInjured.com is a separate PI site (DECISIONS.md §1,
  docs/redirect-map.md).


## 2026-09-01 (contact email)

- Public intake email set to `intake@deniedorinjured.com` and rendered
  as a `mailto:` link on the contact page (fires the `email_click`
  conversion). Backed by an M365 shared mailbox on the JasonMeyersLaw
  tenant; `jason@deniedorinjured.com` is an alias on Jason's mailbox.
  Resolves DECISIONS.md §4.3. Goes live only once the mailbox exists
  and `STAGING` flips (docs/launch-qa.md).

## 2026-08-30 (measurement)

- GA4 wiring behind `analyticsId` in site.ts — no script is emitted
  until the measurement ID is set. Reports pageviews plus phone_click
  and email_click conversion events. Phone numbers are now tel: links
  everywhere (tap-to-call on mobile).

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
