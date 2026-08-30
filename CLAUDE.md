# deniedorinjured

npm-workspace monorepo for DeniedOrInjured.com, the website of Jason
Meyers Law, PLLC. Structure mirrors chrismeyersfsu/python-monorepo-template
(one concern per package, per-package `ci.sh`, thin CI triggers).

- `PLAN.md` is the product spec; `DECISIONS.md` tracks unresolved owner
  decisions. Facts marked `[CONFIRM]` are unknown — never replace one
  with a guess.
- `./packages/site/ci.sh` is the CI entry; run it before pushing.
  Hooks: `git config core.hooksPath .githooks`.
- One concern per package. A new concern gets a new package under
  `packages/`, not a subdirectory of an existing one.
- `CHANGELOG.md` entry with every user-facing change, same commit.

## Hard content rules (from PLAN.md §35)

- Never invent legal authority, client facts, results, credentials, or
  testimonials. Cite Florida statutes/cases only after verifying them.
- All legal content requires attorney review before it may be indexed.
  The site ships `noindex` (STAGING flag in `packages/site/src/lib/site.ts`)
  until the pre-launch audit in `docs/launch-qa.md` passes.
- No superlatives ("best", "top", "expert", "specialist"). No fee or
  result claims until compliance-reviewed.

## Deploy

Push to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`
(staging URL: https://jason-meyers-law.github.io/deniedorinjured/).
Go-live on the real domain follows the steps in `docs/launch-qa.md`.
