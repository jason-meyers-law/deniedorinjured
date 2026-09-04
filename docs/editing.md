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
| Pages | `packages/site/src/content/pages/*.md` | Prose, heading, search title/description, "hide from search" and a notice for the fixed pages (contact, personal-injury and answers hubs, insurance-denied, attorneys heading, privacy, disclaimer, 404). Cannot be created, renamed, or deleted — each matches a route in code. |
| Homepage | `.../pages/home.md` | Intro, the two gateway cards, section headings, the answer-library blurb. |
| Practice areas | `.../content/practice-areas/*.md` | One article per file; the filename is the URL. Draft checkbox = publish gate. |
| Injury answers | `.../content/answers/*.md` | Same, plus the question and the highlighted direct answer. |
| Attorneys | `.../content/attorneys/*.md` | Bio, photo, title, schools, Bar number (optional), display order. |
| Firm details | `packages/site/src/data/firm.json` | Site name, tagline, legal name, principal attorney, phone, intake email, office address, area served. Drives the header, footer, contact page, and structured data. |
| Site-wide text | `packages/site/src/data/snippets.json` | The article call-to-action paragraph and the footer not-legal-advice line. |

Not editable in the CMS (code): navigation labels, layout, the
contact band, JSON-LD shape, `STAGING`, the GA4 ID, and the vCards.

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
