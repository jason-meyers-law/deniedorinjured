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

## 3. Domain cutover (DNS currently points at a private Squarespace site)

- [ ] Squarespace site at deniedorinjured.com retired or DNS simply
      repointed (it serves 401s today, so nothing public is lost).
- [ ] DNS: apex A records to GitHub Pages IPs (185.199.108–111.153)
      + `www` CNAME to `jason-meyers-law.github.io`, or the reverse
      with the preferred host — pick ONE canonical host.
- [ ] Repo: set the custom domain in Pages settings (writes CNAME),
      then in `packages/site/astro.config.mjs` set
      `site: "https://deniedorinjured.com"` and `base: "/"`.
- [ ] Enforce HTTPS in Pages settings once the cert issues.
- [ ] `STAGING = false` in `packages/site/src/lib/site.ts` (removes
      noindex + banner). This is the very last switch.

## 4. Technical verification

- [ ] Canonical URLs self-referencing on the real domain; one host,
      trailing-slash policy consistent.
- [ ] Sitemap generated and submitted; robots.txt deliberate
      (allow Googlebot/Bingbot/OAI-SearchBot; GPTBot per owner).
- [ ] Search Console + Bing Webmaster verified; GA4 (or equivalent)
      installed and events tested.
- [ ] Structured data (LegalService/Person/Article) added ONLY with
      confirmed facts, validates, and matches visible content. (None is
      shipped today by design — do not carry over the old site's empty
      LocalBusiness fields, see docs/site-audit.md.)
- [ ] 404 works; old-domain redirect map (docs/redirect-map.md)
      implemented per the owner's old-domain decision and tested.
- [ ] Accessibility pass (headings, contrast, alt text, keyboard nav).
- [ ] Core Web Vitals spot-check on mobile.

## 5. After launch

- [ ] Monitor indexing, 404s, and Search Console weekly at first.
- [ ] Review cadence and refresh policy per PLAN.md §38.
