# deniedorinjured

npm-workspace monorepo for DeniedOrInjured.com, the website of Jason
Meyers Law, PLLC. Structure mirrors chrismeyersfsu/python-monorepo-template
(one concern per package, per-package `ci.sh`, thin CI triggers).

- `./packages/site/ci.sh` is the CI entry; run it before pushing.
  Hooks: `git config core.hooksPath .githooks`.
- One concern per package. A new concern gets a new package under
  `packages/`, not a subdirectory of an existing one.
- `CHANGELOG.md` entry with every user-facing change, same commit.

## Deploy

Push to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`
(staging URL: https://jason-meyers-law.github.io/deniedorinjured/).
Go-live on the real domain follows the steps in `docs/launch-qa.md`.
