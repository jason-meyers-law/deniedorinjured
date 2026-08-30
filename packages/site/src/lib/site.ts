/** Site-wide constants and the canonical firm record.
 *
 * This module owns the single source of truth for firm identity on the
 * site. It never guesses: values the owner has not confirmed are the
 * literal string "[CONFIRM]" and render as visibly unconfirmed. See
 * DECISIONS.md for the pending items.
 */

/** While true, every page carries <meta name="robots" content="noindex">.
 * Flip to false only when the launch QA checklist (docs/launch-qa.md)
 * passes, including Florida Bar advertising review. */
export const STAGING = true;

/** Join an internal path onto the configured base (works for both the
 * GitHub Pages project path and a future custom-domain root). */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  return base + (path.startsWith("/") ? path : "/" + path);
}

/** Address and phone are sourced from the Florida Bar profile
 * (Bar #106509, physical address) and match JasonMeyersLaw.com; the
 * owner must still confirm this is the canonical bona fide office
 * before local-SEO/GBP work (DECISIONS.md §3 — note the Bar lists a
 * different Melbourne mailing address). */
export const firm = {
  brand: "Denied or Injured",
  // Provisional formulation from PLAN.md §2 — pending DECISIONS.md §1.
  brandLine: "A personal-injury and insurance-law practice of Jason Meyers Law, PLLC",
  entity: "Jason Meyers Law, PLLC",
  attorney: "Jason O. Meyers",
  barNumber: "106509",
  phone: "(321) 382-0403",
  phoneHref: "tel:+13213820403",
  email: "[CONFIRM]",
  address: "653 Brevard Ave, Cocoa, FL 32922",
  /** Split form of the office address, for PostalAddress JSON-LD. */
  postal: {
    street: "653 Brevard Ave",
    city: "Cocoa",
    region: "FL",
    zip: "32922",
  },
  geography: "Brevard County / Space Coast, Florida",
} as const;

/** GA4 measurement ID (G-XXXXXXXXXX). Empty string = analytics fully
 * disabled and no script is emitted. Create the property under the
 * same Google account as Search Console, then set the ID here. */
export const analyticsId = "";

/** Primary-source profile backing the bio's verified facts. */
export const barProfileUrl =
  "https://www.floridabar.org/directories/find-mbr/profile/?num=106509";
