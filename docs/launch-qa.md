# Launch QA — going live on deniedorinjured.com

The site stays on the noindexed GitHub Pages staging URL until
everything here passes. Do these in order.

## 1. Owner decisions (blockers)

- [ ] DECISIONS.md §41 "minimum before development" items signed off
      (entity, brand relationship, old-domain strategy, office, phone,
      geography, practice areas — platform is decided: Astro/GH Pages).
- [ ] Canonical office confirmed. Observed so far: Florida Bar profile
      (physical) and JasonMeyersLaw.com agree on 653 Brevard Ave,
      Cocoa, FL 32922 / (321) 382-0403; the Bar's *mailing* address is
      1416 Hill Ave, Melbourne — owner must say which is the bona fide
      public office before any local-SEO/GBP work.
- [ ] DECISIONS.md §42 "minimum before public launch" list complete,
      including Florida Bar advertising review of all public copy.

## 2. Content gate

- [ ] Every published page has `draft: false` set by attorney review,
      a `legalReviewDate`, and passes `docs/research-checklist.md`.
- [ ] No `[CONFIRM]` or `[PENDING` text renders anywhere:
      `grep -rn "CONFIRM\|PENDING" packages/site/src` comes back clean
      (or exceptions are consciously accepted).
- [ ] Bio credentials all verified; contact/NAP final.
- [x] Draft/unreviewed pages now emit their own `noindex` (not just the
      site-wide STAGING flag), so flipping STAGING=false will NOT expose
      any page still marked `draft: true` or the bio while its credentials
      are unconfirmed (added 2026-09-02). Each page indexes only when its
      own review clears it.

## 3. Domain cutover

- [x] DNS is cut over and live (verified 2026-09-02): apex A records
      point to the GitHub Pages IPs, `www` CNAME to
      `jason-meyers-law.github.io`; `https://deniedorinjured.com/`
      returns 200 from GitHub with a valid cert. The Squarespace private
      site is gone from this domain.
- [x] Repo: `astro.config.mjs` already set — `site:
      "https://deniedorinjured.com"`, `base: "/"`, `trailingSlash:
      "always"`. Custom domain lives in Pages settings (Actions deploy
      needs no CNAME file — see astro.config comment).
- [x] HTTPS enforced (site serves 200 over HTTPS with a valid cert).
- [ ] `STAGING = false` in `packages/site/src/lib/site.ts` (removes
      noindex + banner). This is the very last switch — do not flip
      until section 1 and 2 below are clear.

## 4. Technical verification

- [x] Canonical URLs self-referencing on the real domain; one host,
      trailing-slash policy consistent (verified 2026-09-02:
      trailingSlash "always", canonical = self on deniedorinjured.com).
- [ ] Sitemap generated and submitted; robots.txt deliberate
      (allow Googlebot/Bingbot/OAI-SearchBot; GPTBot per owner).
- [ ] Search Console + Bing Webmaster verified; GA4 (or equivalent)
      installed and events tested.
- [x] Structured data re-verified 2026-09-02 (homepage LegalService
      has real firm fields only — no fabricated rating/price/hours;
      Person LD is Bar-verified fields only). Re-check if facts change.
      Original note follows.
- [ ] Structured data re-verified against final confirmed facts.
      Shipped today: LegalService+WebSite (homepage), Person (bio,
      Bar-verified fields only), Article+BreadcrumbList (content
      pages). Every field must stay Bar/owner-verified and match
      visible content — never carry over the old site's empty
      LocalBusiness fields (docs/site-audit.md).
- [ ] 404 works. Old-domain redirects: N/A — owner decided NOT to
      redirect JasonMeyersLaw.com (it stays live; DECISIONS.md §1,
      docs/redirect-map.md). No redirects to implement or test.
- [ ] Accessibility pass (headings, contrast, alt text, keyboard nav).
- [ ] Core Web Vitals spot-check on mobile.

## 5. After launch

- [ ] Monitor indexing, 404s, and Search Console weekly at first.
- [ ] Review cadence and refresh policy per PLAN.md §38.
