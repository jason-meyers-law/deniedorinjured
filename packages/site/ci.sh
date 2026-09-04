#!/usr/bin/env bash
# Per-package CI: run locally or from the workflow, identically.
set -euo pipefail
cd "$(dirname "$0")/../.."
git submodule update --init  # assets/ — the logo the site serves
npm ci
npm run -w site check
npm run -w site build
