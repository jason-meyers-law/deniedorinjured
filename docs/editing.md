# Editing the site (Pages CMS)

The site's words live in plain files in this repo; the editor for
them is [Pages CMS](https://app.pagescms.org) — a hosted, visual
editor that reads `.pages.yml` at the repo root and commits each save
straight to `main`. There is no server: a save is a commit, the
commit triggers the GitHub Pages deploy, and the change is live in a
few minutes. Nothing about how pages are built or indexed changes
(see "SEO" below).

## What is editable

| In the CMS sidebar | Files | What it controls |
| --- | --- | --- |
| Pages | `packages/site/src/content/pages/*.md` | Prose, heading, search title/description, "hide from search" and a notice for the fixed pages (practice-areas, personal-injury and answers hubs, insurance-denied, about heading + intro, privacy, disclaimer, photo credits, 404). Cannot be created, renamed, or deleted — each matches a route in code. |
| Homepage | `.../pages/home.md` | Every section of the homepage: the banner (small line, heading, intro, two buttons, side note, background photo), the Practice Areas heading, the four values (icon + label), the About section (heading, text, checkmarks, button, photo), and the consultation band (heading, text, button, background photo). |
| Contact page | `.../pages/contact.md` | Intro, the office block's heading and directions-link text, and the contact-form wording (heading, consent line, button, thank-you message). |
| Practice area cards | `packages/site/src/data/practice-areas.json` | The two cards (heading, text, link, illustration) shown on the homepage and the Practice Areas page; their headings also make the first line of the footer. |
| Practice areas | `.../content/practice-areas/*.md` | One article per file; the filename is the URL. Draft checkbox = publish gate. |
| Injury answers | `.../content/answers/*.md` | Same, plus the question and the highlighted direct answer. |
| Attorneys | `.../content/attorneys/*.md` | Bio, photo, title, schools, Bar number (optional), display order. |
| Firm details | `packages/site/src/data/firm.json` | Firm name and the line under it, legal name, principal attorney, phone, email, office address, area served. Drives the header, footer, contact page (including the map), and structured data. |
| Site-wide text | `packages/site/src/data/snippets.json` | The article call-to-action paragraph and the footer not-legal-advice line. |

Photos: pick **Upload** in any photo field; files land in
`packages/site/public/images/`. Use a landscape JPEG at least 1600px
wide for the two background photos and 1200px for the About photo.
A photo from elsewhere needs a license that allows commercial use;
add its credit to the Photo Credits page.

Not editable in the CMS (code): navigation labels and the "Free
Consultation" header button, layout, JSON-LD shape, `STAGING`, the
GA4 ID, the contact-form processor address (`formEndpoint`), the
vCards, and the logo.

## Brand assets

The logo lives in `packages/site/public/brand/` as SVG, traced from
the business-card artwork (the card file is a raster, so the trace is
the vector source of record):

| File | Use |
|---|---|
| `lockup.svg` | Monogram over the name — the full logo. |
| `monogram.svg` | The framed MO alone (favicon, avatars, app icons). |
| `wordmark.svg` | "Meyers & Onatsko / Attorneys at Law" alone. |
| `logo.svg` | Sprite the site draws the header and footer from; not for reuse elsewhere. |

The three standalone files carry the brand colours (ink `#262626`,
brown `#9d6c44`) and scale to any size, so they are the ones to send
to a printer, a directory listing, or an email-signature tool. The
favicon, Apple touch icon, and share image in `public/` are rendered
from them.

## Rules the config enforces

- **Slugs are frozen.** Rename and delete are disabled for every
  collection, so a live URL can't be broken from the editor. To take a
  page down, tick **Draft** — it is then not built at all (404), and
  drops out of the hubs and footer.
- **Draft defaults on** for new practice areas and answers; the page
  only appears after an attorney unticks it.
- **Search title/description** are labeled as such. Changing them
  changes what Google shows, nothing else.
- **Hide from search engines** (the `noindex` flag on fixed pages)
  keeps a page live but unindexed — for content pending review.
- The commit author is the editor (`settings.commit.identity: user`),
  so `git log` shows who changed what.

## Connecting the repo (one-time, repo admin)

1. Sign in at https://app.pagescms.org with the GitHub account that
   administers `jason-meyers-law`.
2. Install the Pages CMS GitHub App on the `jason-meyers-law`
   organization, scoped to the `deniedorinjured` repository only.
3. Open the repository in Pages CMS; it reads `.pages.yml` from `main`.
4. **Collaborators → Invite** the attorney by email. A collaborator
   does not need a GitHub account (Pages CMS stores the invitation)
   and cannot edit `.pages.yml` or settings — only content.

## SEO

None of this affects search. The site is still built to static HTML
at deploy time by the same templates; the CMS only changes the text
that goes into them. Slugs, canonicals, sitemap, JSON-LD, and the
noindex/draft gates are unchanged. Anything an editor can do in the
CMS is something that could already be done by editing the same
files by hand.

## Caveats

- Every save deploys. There is no preview; proofread in the editor
  before saving, or keep a page in Draft while it's being written.
- Rich-text fields store Markdown. The **Source** switch shows the
  raw Markdown if the visual editor does something unexpected.
- If a save breaks the build (e.g. a required field emptied by hand),
  the deploy fails and the previous version stays live; the Actions
  tab shows the error.
