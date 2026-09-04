# DeniedOrInjured.com

Website for Meyers & Onatsko — Florida personal injury and
insurance-coverage disputes. Built with [Astro](https://astro.build),
deployed to GitHub Pages.

**Live:** https://deniedorinjured.com
**Staging:** https://jason-meyers-law.github.io/deniedorinjured/

## Layout

```
CHANGELOG.md       every user-facing change
docs/              editing guide (Pages CMS), site map, editorial
                   calendar, audits, launch QA, email setup
packages/site/     the Astro site (see its ci.sh for the CI entry)
assets/            submodule: logo SVGs + exports (jason-meyers-law/assets)
```

Prose is edited through Pages CMS — see `docs/editing.md`. The
original product spec and decision log (`PLAN.md`, `DECISIONS.md`)
were removed at launch (commit b7855f0); `docs/` and code comments
still cite their section numbers, which resolve in git history.

## Develop

```
git clone --recurse-submodules <repo>   # or: git submodule update --init
npm ci
npm run -w site dev      # local dev server
./packages/site/ci.sh    # what CI runs
```

Pushing to `main` deploys automatically.
