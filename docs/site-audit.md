# Site Audit: JasonMeyersLaw.com and DeniedOrInjured.com

Audit date: 2026-08-30. Read-only research via `curl` (headers/redirects/TLS) and WebFetch (rendered content). No forms submitted, no accounts created, no contact made with either site's owner or host.

---

## JasonMeyersLaw.com

### Resolution / redirect / TLS

| Request | Result |
|---|---|
| `http://jasonmeyerslaw.com` | 301 → `https://www.jasonmeyerslaw.com/` |
| `http://www.jasonmeyerslaw.com` | 301 → `https://www.jasonmeyerslaw.com/` |
| `https://jasonmeyerslaw.com` | 301 → `https://www.jasonmeyerslaw.com/` |
| `https://www.jasonmeyerslaw.com` | 200 (canonical) |

All four host/scheme variants resolve to a single canonical URL: `https://www.jasonmeyerslaw.com/` (www, https). No loops, no dead ends.

TLS: valid certificate, `CN=www.jasonmeyerslaw.com`, issued by Let's Encrypt, expires 2026-10-10. No certificate errors observed.

### Platform

Squarespace, confirmed by:
- `Server: Squarespace` response header on every request.
- Asset URLs under `assets.squarespace.com`, `images.squarespace-cdn.com`, `static1.squarespace.com`.
- `robots.txt` begins with the comment `# Squarespace Robots Txt` and disallows `/config` (Squarespace's admin path).
- No `<meta name="generator">` tag (Squarespace doesn't emit one).

### robots.txt / sitemap.xml

`https://www.jasonmeyerslaw.com/robots.txt` — present, HTTP 200. Standard Squarespace boilerplate: blocks a long list of AI crawlers (GPTBot, ClaudeBot, CCBot, Amazonbot, etc.) and disallows `/config`, `/search`, `/account`, `/api/` (except `/api/ui-extensions/`), `/static/`, and various query-string patterns. Declares:
`Sitemap: https://www.jasonmeyerslaw.com/sitemap.xml`

`https://www.jasonmeyerslaw.com/sitemap.xml` — present, HTTP 200, lists exactly 4 URLs:

| Loc | lastmod | priority |
|---|---|---|
| `https://www.jasonmeyerslaw.com/contact` | 2025-03-04 | 0.75 |
| `https://www.jasonmeyerslaw.com/about` | 2025-07-08 | 0.75 |
| `https://www.jasonmeyerslaw.com/services` | 2025-03-04 | 0.75 |
| `https://www.jasonmeyerslaw.com/home` | 2025-10-16 | 1.0 |

Note: `/home` and `/` (root) both return HTTP 200 and are different response bodies, but `/home`'s `<link rel="canonical">` points back to the root URL (`https://www.jasonmeyerslaw.com`). So `/home` is a duplicate/alternate URL for the homepage, not a distinct page.

### Page inventory

Confirmed the sitemap is exhaustive by probing likely additional paths from the nav pattern and common firm-site sections: `/blog`, `/reviews`, `/testimonials`, `/case-results`, `/faq`, `/team`, `/attorneys`, `/locations`, `/careers`, `/privacy-policy`, `/terms` — all returned HTTP 404. The site has 4 real pages.

| URL | Title tag | H1 / topic | Content note |
|---|---|---|---|
| `https://www.jasonmeyerslaw.com/` (canonical; also served at `/home`) | Jason Meyers Law | "A Civil Law Firm" / "Providing legal services for Contracts, Housing, Employment, and Insurance." | Homepage. Nav: Home, Services, About, Contact. Lists 4 practice areas as tiles: Contracts, Housing, Employment, Insurance. |
| `https://www.jasonmeyerslaw.com/about` | About — Jason Meyers Law | Attorney bios | Two attorneys: Jason Meyers (founder) and Michael Onatsko. Jason Meyers: FSU (Philosophy & Religion), former discrimination investigator at FL Commission on Human Relations, Stetson University College of Law, prior civil litigation practice covering personal injury, insurance disputes, property damage, breach of contract; opened this practice March 2024. Michael Onatsko: Legal Studies (UCF), J.D. (Nova Southeastern), prior insurance-defense-firm experience representing individuals, insurers, trucking companies, and Fortune 500 clients; now handles civil litigation for plaintiffs and defendants. Pull-quote: "I have tried several cases to verdict. I pride myself on my courtroom experience because it educates and informs the advice that I give to my clients." |
| `https://www.jasonmeyerslaw.com/services` | Services — Jason Meyers Law | "Our Services" | Describes the same 4 practice areas in more depth: Contracts (purchase-disclosure fraud, renovation payment disputes, employment non-competes, housing covenant violations), Housing ("Our home is our castle" — HOA/condo/co-op bylaw breaches, fraudulent disclosures, renovation issues), Employment (discrimination, non-competes, wage disputes, defamation), Insurance ("I spent the majority of my career working on cases involving insurance" — policy applicability, coverage denials, duty to defend, right to counsel, indemnity). No car-accident, injury, or other personal-injury-specific content anywhere on this page. |
| `https://www.jasonmeyerslaw.com/contact` | Contact — Jason Meyers Law | "Contact Us" | Contact form only ("If you're interested in speaking with me, please provide your information, and we will contact you soon."). No office hours, no map embed text, no social-media links found. |

### Contact / NAP data found, verbatim, per page

Address, phone, and a "Location" label appear identically on all 4 pages (home, about, services, contact):

```
Location
653 Brevard Ave
Cocoa, FL 32922
```

Phone (all 4 pages): `(321) 382-0403`

Email: no real email address was found on any page. The only `@` string in the HTML is `user@domain.com`, which is Squarespace's generic form-validation placeholder text ("Email addresses should follow the format user@domain.com"), not a contact address.

### Structured data

Two JSON-LD blocks appear on every page (home, about, services, contact), identical each time:

```json
{"url":"https://www.jasonmeyerslaw.com","name":"Jason Meyers Law","image":"//images.squarespace-cdn.com/content/v1/67c6c614ec85643a3dde4de3/05959d55-e2e9-43f2-837a-081ef9896e3b/logo_horizontal.jpg","@context":"http://schema.org","@type":"WebSite"}
```

```json
{"address":"","image":"https://static1.squarespace.com/static/67c6c614ec85643a3dde4de3/t/67c6dabb02641179e2c767b6/1741080084854/","openingHours":"","@context":"http://schema.org","@type":"LocalBusiness"}
```

The `LocalBusiness` block's `address` and `openingHours` fields are empty strings on every page, even though the address text ("653 Brevard Ave, Cocoa, FL 32922") is present in the visible HTML. No `Attorney`, `Person`, `Organization`, or `BreadcrumbList` structured data was found. Meta description (`<meta name="description">`) is present but empty (`content=""`) on all 4 pages.

404 handling: unknown paths return HTTP 404 with a generic page titled "Jason Meyers Law" (no custom 404 message content was distinguishable from the site title in the page `<title>`).

---

## DeniedOrInjured.com

### Resolution / redirect / TLS

| Request | Result |
|---|---|
| `http://deniedorinjured.com` | 301 → `https://deniedorinjured.com/` |
| `http://www.deniedorinjured.com` | 301 → `https://deniedorinjured.com/` |
| `https://www.deniedorinjured.com` | 301 → `https://deniedorinjured.com/` |
| `https://deniedorinjured.com` | 401 (final) |

All variants resolve to a single canonical host, `https://deniedorinjured.com/` — note this is the **bare/non-www** domain, unlike JasonMeyersLaw.com which canonicalizes to **www**. Every path on the site, including the canonical root, `robots.txt`, and `sitemap.xml`, returns HTTP 401 with a Squarespace "Private Site" system page (see below). This is not a DNS failure, not a parked-domain placeholder, and not an ordinary 404 — it is Squarespace's access-gate response for a site whose owner has toggled visibility to private.

TLS: valid certificate, `CN=deniedorinjured.com`, issued by Let's Encrypt, expires 2026-11-22. Certificate is properly provisioned for this exact hostname, confirming the domain is actively connected to a real, paid Squarespace site (not just DNS-parked) — it is simply access-gated.

### Platform

Squarespace, confirmed the same way as above: `Server: Squarespace` header, and the private-site placeholder page itself loads Squarespace's own JS/CSS bundles from `assets.squarespace.com`.

### robots.txt / sitemap.xml

Both `https://deniedorinjured.com/robots.txt` and `https://deniedorinjured.com/sitemap.xml` return HTTP 401 with the same "Private Site" HTML page described below (content-type `text/html`), not actual robots/sitemap content. No crawl directives or URL list are publicly available.

### Page inventory

None available. Every path tested (root, `/robots.txt`, `/sitemap.xml`) returns the identical private-site interstitial. No nav, no page titles, no content pages could be observed.

Body content of the private-site page (verbatim, relevant excerpt):

```html
<title>Private Site</title>
<meta name="robots" content="noindex">
...
<div class="title">Private Site</div>
<div class="description">This site is currently private. If you're the owner or contributor, <a href="/config">log in</a>.</div>
```

### Contact / NAP data found

None. No page content is publicly reachable, so no address, phone, or email could be observed on this domain.

### Structured data

None observable — the only HTML served publicly is the generic Squarespace private-site shell, which carries no JSON-LD.

---

## Findings

1. **DeniedOrInjured.com is not empty or parked — it is an active, provisioned Squarespace site set to "Private."** It has a valid dedicated TLS certificate and a real Squarespace backend, but every path (including `robots.txt` and `sitemap.xml`) returns HTTP 401 with a generic "Private Site" interstitial. Whoever owns the Squarespace account can toggle this to public; until then there is nothing to audit on this domain beyond what's reported here.

2. **The suspected address inconsistency could not be confirmed or refuted.** JasonMeyersLaw.com is internally consistent — "653 Brevard Ave, Cocoa, FL 32922" and "(321) 382-0403" appear identically on all 4 of its pages. DeniedOrInjured.com has no accessible content to compare against because it is private. This needs to be re-checked once DeniedOrInjured.com is made public or an admin/preview login is available.

3. **The two domains use different canonical host conventions.** JasonMeyersLaw.com canonicalizes to `www.jasonmeyerslaw.com`; DeniedOrInjured.com canonicalizes to the bare `deniedorinjured.com` (no www). Worth deciding whether to standardize on one convention before the redirect map goes live, independent of content mapping.

4. **JasonMeyersLaw.com's `LocalBusiness` structured data is broken/incomplete.** `address` and `openingHours` are empty strings in the JSON-LD on every page, despite the address appearing correctly as visible text. This should not be carried over as-is to the new site.

5. **JasonMeyersLaw.com is a small, general civil-practice site, not a personal-injury site today.** It has exactly 4 pages (home, about, services, contact) — no dedicated pages for car accidents, truck accidents, premises liability, wrongful death, insurance-denial claim types, or any Florida location. Jason Meyers' bio mentions prior personal-injury litigation experience, but no current page markets personal-injury services specifically. As a result, most URLs in the planned new-site architecture (`/personal-injury/*`, `/locations/*`, `/florida-injury-answers/*`) have no old-site equivalent to redirect from — they will be net-new content, not migrated content.

6. **The old site's "Insurance" services content is the one page with real topical overlap for migration.** Its description of coverage denials, duty to defend, and indemnity issues maps reasonably to the planned `/insurance-denied/` hub.

7. **Two attorneys practice under the JasonMeyersLaw.com brand** (Jason Meyers and Michael Onatsko), but only Jason Meyers appears in navigation/branding; Michael Onatsko is named only in the `/about` bio text. Worth confirming with the firm whether both attorneys carry over to DeniedOrInjured.com.

8. **Minor duplicate-content quirk:** `/home` and `/` both return HTTP 200 with different response bodies, but `/home`'s canonical tag points to `/`. Not a real second page — noted for completeness, not treated as a distinct migration source.

9. **No real email address is published anywhere on JasonMeyersLaw.com.** Contact is form-only. If DeniedOrInjured.com is meant to expose a contact email, that will be new information, not something to carry over.

10. Meta descriptions are empty on all 4 JasonMeyersLaw.com pages — an SEO gap regardless of migration, worth fixing on the new site rather than carrying forward.
