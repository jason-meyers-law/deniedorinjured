# Redirect Map (Draft): JasonMeyersLaw.com → DeniedOrInjured.com

**Status: DRAFT.** All rows below are draft. The owner has not yet decided the old-domain strategy — whether JasonMeyersLaw.com gets fully 301-redirected to DeniedOrInjured.com, or stays live to cover non-personal-injury practice areas (Contracts, Housing, Employment) that the new site's architecture doesn't cover. Do not implement any of these redirects until that decision is made.

Source: `docs/site-audit.md` (audit dated 2026-08-30). JasonMeyersLaw.com has exactly 5 discovered URLs (root, `/home` duplicate, `/about`, `/services`, `/contact`) — it is a small, general civil-practice site today, not a personal-injury site, so most of the new architecture below has no old-site source page and will be net-new content rather than a migration.

## Redirect table

| Old URL | Proposed target | Notes |
|---|---|---|
| `https://www.jasonmeyerslaw.com/` | `/` (new homepage) | Direct homepage-to-homepage match. |
| `https://www.jasonmeyerslaw.com/home` | `/` (new homepage) | Duplicate of root — old site's own canonical tag on `/home` already points back to `/`. Same target as above. |
| `https://www.jasonmeyerslaw.com/about` | `/about/our-team/` | Old page contains bios for both attorneys (Jason Meyers and Michael Onatsko), so the team hub is the closer match. Consider also redirecting to `/about/jason-meyers/` instead if the new site treats Jason Meyers as the sole named principal — owner decision needed. |
| `https://www.jasonmeyerslaw.com/services` | KEEP ON OLD DOMAIN [page covers Contracts, Housing, Employment, and Insurance; only the Insurance portion has a thematic match in the new architecture (`/insurance-denied/`), and that content should be rewritten as new content there rather than redirected as-is] | See note below on the Insurance section specifically. |
| `https://www.jasonmeyerslaw.com/contact` | `/contact/` | Direct match. |

## Notes on individual rows

- **`/services` → Insurance section:** The old Insurance description (coverage denials, duty to defend, indemnity issues) is the one piece of old-site content genuinely on-topic for the new `/insurance-denied/` hub. Recommend using it as source material for new copy on `/insurance-denied/`, not as a redirect target, since the old URL also covers three unrelated practice areas.
- **`/about`:** if the firm keeps Michael Onatsko off the new personal-injury brand, this row should instead point to `/about/jason-meyers/` only, and Michael Onatsko's bio would need a KEEP-ON-OLD-DOMAIN or RETIRE decision of its own. Flagging for owner input.

## Net-new content (no old-site source page)

Everything else in the planned architecture has no corresponding JasonMeyersLaw.com URL today, per the audit. Listed here for migration-planning visibility, not as redirect rows:

- `/personal-injury/` hub and all children: `car-accidents/` (+ `uninsured-underinsured-motorist-claims/`, `hit-and-run-accidents/`, `rideshare-accidents/`, `passenger-injury-claims/`), `truck-accidents/`, `motorcycle-accidents/`, `bicycle-accidents/`, `pedestrian-accidents/`, `premises-liability/`, `negligent-security/`, `dog-bites/`, `wrongful-death/`, `serious-injuries/`
- `/florida-injury-answers/` and its 12 topic hubs (including `pip-and-auto-insurance/`, `dealing-with-insurance-adjusters/`)
- `/locations/brevard-county/` and children: `melbourne/`, `cocoa/`, `rockledge/`, `viera/`, `palm-bay/`, `titusville/`, `merritt-island/`, `beachside/`
- `/about/trial-experience/`, `/about/former-insurance-defense-perspective/`
- `/case-results/`, `/client-reviews/`, `/videos/`
- `/insurance-denied/` children: `liability-insurer-denied-defense/`, `reservation-of-rights/`, `declaratory-judgment-actions/`, `indemnity-and-coverage-denials/`, `bad-faith-failure-to-settle/` (parent hub itself is partly covered by `/services` per above)

## DeniedOrInjured.com

DeniedOrInjured.com was private (HTTP 401 on every path) at audit time — no existing content or URLs were discoverable there, so there is nothing on that side of the map to reconcile yet. Re-check once the site is public.
