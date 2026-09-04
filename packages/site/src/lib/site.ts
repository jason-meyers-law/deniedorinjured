/** Site-wide constants and the canonical firm record.
 *
 * Firm identity (name, phone, address, ...) is edited in
 * `src/data/firm.json` — through Pages CMS or by hand — and derived
 * forms (tel: href, one-line address, PostalAddress parts) are built
 * here so templates never re-derive them. Build flags stay in code.
 */
import firmData from "../data/firm.json";
import snippetsData from "../data/snippets.json";
import practiceAreasData from "../data/practice-areas.json";

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
  /** Area-served line under the footer brand block. */
  geography: firmData.geography,
  /** Display form of the site's own address (footer contact block). */
  website: "deniedorinjured.com",
  /** Office hours: "Monday – Friday, 9:00 AM – 2:00 PM" for the contact
   * page and footer; the raw days/opens/closes feed the schema. */
  hours: hoursLabel(firmData.hours),
  hoursSpec: firmData.hours,
} as const;

/** "09:00" -> "9:00 AM". */
function clock(t: string): string {
  const [h, m] = t.split(":").map(Number);
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`;
}

function hoursLabel(h: { days: string[]; opens: string; closes: string }): string {
  const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const idx = h.days.map((d) => week.indexOf(d));
  const contiguous = idx.every((n, i) => i === 0 || n === idx[i - 1] + 1);
  const days =
    h.days.length > 2 && contiguous ? `${h.days[0]} – ${h.days[h.days.length - 1]}` : h.days.join(", ");
  return `${days}, ${clock(h.opens)} – ${clock(h.closes)}`;
}

const mapQuery = encodeURIComponent(`${firm.address}`);
/** Google Maps: keyless embed for the contact page and a directions
 * link. The embed loads Google's script on that page only — disclosed
 * in the privacy policy. */
export const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
export const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

/** The two practice silos as cards (homepage, Practice Areas page). */
export const practiceAreas = practiceAreasData.cards;

/** Contact-form processor endpoint (a Formspree form URL such as
 * https://formspree.io/f/xxxxxxxx). Empty string = no form is rendered
 * anywhere; phone/email remain. Submissions are delivered to the
 * address configured in the Formspree form, not read from here. */
export const formEndpoint = "";

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
