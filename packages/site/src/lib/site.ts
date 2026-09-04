/** Site-wide constants and the canonical firm record.
 *
 * Firm identity (name, phone, address, ...) is edited in
 * `src/data/firm.json` — through Pages CMS or by hand — and derived
 * forms (tel: href, one-line address, PostalAddress parts) are built
 * here so templates never re-derive them. Build flags stay in code.
 */
import firmData from "../data/firm.json";
import snippetsData from "../data/snippets.json";

/** While true, every page carries <meta name="robots" content="noindex">.
 * Flip to false only when the launch QA checklist (docs/launch-qa.md)
 * passes, including Florida Bar advertising review. */
export const STAGING = false;

/** Join an internal path onto the configured base (works for both the
 * GitHub Pages project path and a future custom-domain root). */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  return base + (path.startsWith("/") ? path : "/" + path);
}

/** Address and phone are sourced from the Florida Bar profile
 * (Bar #106509, physical address) and match JasonMeyersLaw.com.
 * Confirmed by the owner as the canonical bona fide office 2026-09-02
 * (the Bar's Melbourne address is mailing-only). */
export const firm = {
  brand: firmData.brand,
  brandLine: firmData.brandLine,
  entity: firmData.entity,
  attorney: firmData.attorney,
  barNumber: firmData.barNumber,
  phone: firmData.phone,
  phoneHref: "tel:+1" + firmData.phone.replace(/\D/g, ""),
  // Public intake — M365 shared mailbox on the JasonMeyersLaw tenant
  // (docs/email-setup.md). jason@ is a second shared mailbox, same shape.
  email: firmData.email,
  address: `${firmData.address.street}, ${firmData.address.city}, ${firmData.address.region} ${firmData.address.zip}`,
  /** Split form of the office address, for PostalAddress JSON-LD. */
  postal: firmData.address,
  geography: firmData.geography,
} as const;

/** Short site-wide passages (article CTA, footer notice) — editable
 * text that is not a page of its own. */
export const snippets = snippetsData;

/** GA4 measurement ID (G-XXXXXXXXXX). Empty string = analytics fully
 * disabled and no script is emitted. Create the property under the
 * same Google account as Search Console, then set the ID here. */
export const analyticsId = "G-FPRJ701RX1";

/** Florida Bar member profile for a Bar number — the primary source
 * backing a bio's verified facts. */
export function barProfile(barNumber: string): string {
  return `https://www.floridabar.org/directories/find-mbr/profile/?num=${barNumber}`;
}

/** Primary-source profile backing the principal attorney's bio. */
export const barProfileUrl = barProfile(firmData.barNumber);
