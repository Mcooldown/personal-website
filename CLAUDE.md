# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # Install dependencies (uses legacy-peer-deps=true, see .npmrc)
npm run serve        # Dev server at http://localhost:8080
npm run build        # Production build to dist/
```

No test or lint scripts are configured.

## Architecture

Vue 3 SPA portfolio website using Vue CLI (Webpack), Vue Router 4, and Vuex 4.

**Routing** (`src/router/index.js`): Three routes — `/` (HomePage), `/404` (NotFoundPage), `/:slug` (ProjectDetailPage). The slug route catches all unknown paths and looks up a matching project by slug.

**State** (`src/store/index.js`): Minimal Vuex store with two booleans — `visibleNavbar` (scroll-based toggle) and `isDarkMode` (theme toggle). Both are set via mutations.

**Data** (`src/data/`): All content is static:
- `projects.json` — project list used by HomePage and looked up by slug in ProjectDetailPage
- `config.js` — site-wide constants (owner name, resume filename, contact links, nav paths)

**Styling**: Global SCSS in `src/styles/` defines variables and responsive mixins. Breakpoints: mobile ≤768px, widescreen ≥1200px. Custom Montserrat font loaded from `src/fonts/`. Path alias `@/` resolves to `src/`.

**Adding a project**: Add an entry to `src/data/projects.json` and place the thumbnail in `src/assets/`. The slug field in the JSON must match the URL path used to reach that project's detail page.
