# Changelog

## 2026-09-04 (redesign to the Meyers & Onatsko mockup)

- Site rebuilt to the homepage mockup the firm supplied, with
  Michael's corrections applied: the icon row says "Proudly serving
  Florida" (not Brevard County); the About checkmarks are Insurance
  Coverage Disputes / Personal Injury Matters / Responsive
  Communication (no "Dedicated to Brevard County" item); the
  copyright reads "© 2026 Meyers & Onatsko. All rights reserved." (no
  "P.A."); the footer contact is help@deniedorinjured.com and
  "Cocoa, FL"; the contact page has a Google Map of the office with
  the address and a "Map & Directions" link.
- Brand: the site now presents as "Meyers & Onatsko / Attorneys at
  Law" with an MO monogram (header, footer, favicon, share card).
  The legal entity in the disclaimer, privacy policy, and JSON-LD
  `legalName` stays "Jason Meyers Law, PLLC" — see the note to the
  owner in the commit/PR.
- Homepage: photo banner (Cocoa Beach Pier) with "Denied Coverage or
  Injured?", Free Consultation / Our Practice Areas buttons and the
  "Local advocacy. Personal attention." aside; two illustrated
  practice cards; four value icons; About band with the Porcher
  House photo; "Let's talk about your case." band over a shuttle
  launch; then the "Discuss your case" form.
- Navigation: Home / Practice Areas / About / Resources / Contact plus
  a "Free Consultation" button. New `/practice-areas/` page (the two
  cards, then published injury articles). The attorneys page moved
  from `/about/jason-meyers/` to `/about/`; the old address forwards
  (meta refresh + canonical, noindex, out of the sitemap) and every
  internal link and JSON-LD `url` now points at `/about/`. Footer:
  brand block, "Denied Insurance Coverage | Personal Injury",
  "Brevard County • Florida", nav, phone / email / web / city,
  copyright + tagline "Justice Today. A Stronger Tomorrow.", then the
  not-legal-advice line with Disclaimer / Privacy / Photo credits.
- Contact form ("Discuss your case": name, email, phone, message,
  consent line, "Get your free consultation"): renders on the
  homepage and contact page once `formEndpoint` in `src/lib/site.ts`
  is set to a Formspree form URL; until then no form appears and the
  pages fall back to phone/email. Submissions post as JSON with a
  honeypot field and fire a GA4 `form_submit` event.
- Photos are openly licensed (CC BY 2.0, CC BY-SA 4.0, NASA public
  domain) and credited on a new noindex `/credits/` page and in
  THIRD_PARTY_LICENSES; `public/images/building.jpg` (unused stock)
  removed. Practice-page SVGs recolored to the new palette (cream /
  ink / burnt orange).
- Privacy policy now discloses the Google Maps embed and the contact
  form / form processor; contact address is help@.
- Pages CMS: Homepage, Contact page and Practice area cards entries
  rewritten for the new fields; Firm details gains Tagline;
  docs/editing.md updated.
- Not applied from the mockup: "© 2024" — the year is generated.
  Words that may need Florida Bar advertising review before they stay
  live: "Free Consultation" (header, hero, band), "Get your free
  consultation", and the tagline; earlier owner decisions had kept
  consultation/fee wording off the site.

## 2026-09-04 (Pages CMS)

- The site's words moved out of the templates into content files so
  they can be edited in a visual editor (Pages CMS, `.pages.yml` at
  the repo root; docs/editing.md): a `pages` collection for the fixed
  pages (home, hubs, contact, insurance-denied, privacy, disclaimer,
  404), an `attorneys` collection for the bios, and JSON data files
  for the firm record (`src/data/firm.json`: name, phone, address,
  email) and the two site-wide passages (article CTA, footer
  notice). Practice-area and answer articles were already files; the
  answer pages' highlighted direct answer is now its own frontmatter
  field instead of a raw `<div>` in the body.
- No visible change: the built HTML is identical before and after,
  apart from typographic apostrophes and heading anchor ids that the
  markdown pipeline adds (both already the case on article pages).
  Sitemap and page set unchanged.
- Editor guard rails: rename/delete disabled for every collection
  (URLs can't be broken from the editor), Draft defaults on for new
  articles, search title/description labeled as such, commits carry
  the editor's identity.

## 2026-09-02 (vCard QR codes)

- Added replacement QR codes for the business cards at
  `/vcard/qr-jason-meyers.{png,svg}` and `/vcard/qr-michael-onatsko.{png,svg}`.
  The printed proofs' QR codes had the vCard text embedded directly (an
  older version, with the Squarespace photo URL that iOS ignores) rather
  than linking to the hosted `.vcf`. These encode only the https URL —
  version 6, error-correction H, 2000px PNG plus SVG for print — so the
  contact always reflects the current hosted file.

## 2026-09-02 (vCard photo crop)

- Embedded vCard headshots are now square, so the face sits centered in
  the circular contact photo on iOS/Android instead of being pushed up
  by the center crop. Both are top-anchored square crops of the
  portrait (head and collar; Jason's 146x204 source is too tight to
  show shoulders without synthetic fill, which was tried and rejected).

## 2026-09-02 (vCard photos)

- vCard photos are now embedded inline (base64 JPEG, RFC 2426 folding,
  CRLF) instead of referencing the old site's Squarespace CDN by URL —
  iOS Contacts ignores URL photos, so the headshot only shows on iPhone
  when embedded. Files are ~10 KB (Jason) and ~50 KB (Michael). A JPEG
  copy of Michael's headshot (`/images/michael-onatsko.jpg`) is also
  hosted alongside the WebP.

## 2026-09-02 (michael@ mailbox)

- `michael@deniedorinjured.com` created as an M365 shared mailbox
  (Michael has Full Access + Send As), so the address on his vCard
  delivers. docs/email-setup.md updated.

## 2026-09-02 (vCards)

- Hosted the attorneys' vCard files, verbatim as supplied, at
  `/vcard/jason-meyers.vcf` and `/vcard/michael-onatsko.vcf` (static
  files in `public/`). Printed QR codes point at these URLs.

## 2026-09-02 (jason@ mailbox)

- `jason@deniedorinjured.com` is now its own M365 shared mailbox (same
  shape as `intake@`), no longer an alias on Jason's personal mailbox.
  Jason has Full Access + Send As on both. No site content change;
  docs/email-setup.md updated.

## 2026-09-02 (site launch)

- `STAGING = false` — the site is live and indexable at
  https://deniedorinjured.com/. Homepage, contact, insurance-denied hub
  are public.
- The 6 pages still pending attorney legal review (4 practice-area
  articles, 2 answer pages — all still have `[PENDING]` placeholder
  text where verified Florida law belongs) are held back entirely, not
  just noindexed: they are excluded from `getStaticPaths` and do not
  build, so they return a real 404 rather than being live-but-hidden.
  Removed from the homepage's "Injury cases we handle" grid, the
  personal-injury/florida-injury-answers hub grids, and the footer
  nav — no page on the live site links to them. They come back
  automatically for the next affected reviewer/build once each page's
  `draft` flag clears.
- Attorneys, Privacy, and Disclaimer pages remain individually
  `noindex` pending attorney review of that specific content (separate
  from the STAGING flag, which no longer gates them).
- Owner decisions closed for launch: office hours, SMS/text policy,
  case results, testimonials, consultation/fee wording, intake
  disclaimer — none published (see prior entries). Florida Bar
  advertising review determined not applicable by the owner.
- Removed `PLAN.md` and `DECISIONS.md` from the repo (history retains
  them). Removed the corresponding "Hard content rules" section and
  file references from `CLAUDE.md`.


## 2026-09-02 (about page, footer, contact)

- About page now presents both attorneys — Jason O. Meyers and Michael
  Onatsko — with their bios copied verbatim (first person, as written)
  from the firm's own jasonmeyerslaw.com/about, and both firm photos.
  Michael's Bar number is not published on the old site, so it is
  omitted rather than guessed. Both get Person JSON-LD. Page stays
  `noindex` until the attorneys review the combined page.
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
