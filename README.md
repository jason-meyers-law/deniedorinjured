# DeniedOrInjured.com

Website for Meyers & Onatsko — Florida personal injury and
insurance-coverage disputes. Built with [Astro](https://astro.build),
deployed to GitHub Pages.

**Staging:** https://jason-meyers-law.github.io/deniedorinjured/
(noindexed until launch — content is draft, pending attorney review).

## Layout

```
PLAN.md            product spec
DECISIONS.md       unresolved owner decisions ([CONFIRM] items)
docs/              site map, editorial calendar, audits, launch QA
packages/site/     the Astro site (see its ci.sh for the CI entry)
```

## Develop

```
npm ci
npm run -w site dev      # local dev server
./packages/site/ci.sh    # what CI runs
```

Pushing to `main` deploys automatically.
