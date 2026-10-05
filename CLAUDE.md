# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio for Lei Chen (data analyst & data visualization specialist), built with **SvelteKit** (Svelte 5) + **Tailwind CSS** + **Threlte/three.js**, deployed as a static site to GitHub Pages.

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server at http://localhost:5173
npm run build        # production build → build/ (adapter-static)
npm run preview      # serve the production build locally
npm run check        # svelte-check type checking (svelte-kit sync + svelte-check)
npm run lint         # eslint
npm run format       # prettier --write .
```

There are no tests and no test runner configured.

## Architecture

- **Framework**: SvelteKit with `@sveltejs/adapter-static` ([svelte.config.js](svelte.config.js)). Output goes to `build/`.
- **Svelte 5 runes**: all state uses runes — `$state(...)`, `$effect(...)` — not the legacy `let`/reactive-statement style. Write new code accordingly.
- **Routes** (file-based, in [src/routes/](src/routes/)):
  - `/` → [src/routes/+page.svelte](src/routes/+page.svelte) — single-page home rendering `Navigation`, `Hero`, `Projects`, `Contact` in order.
  - `/about` → [src/routes/about/+page.svelte](src/routes/about/+page.svelte) — renders `Navigation` + `About`.
  - [src/routes/+layout.svelte](src/routes/+layout.svelte) only imports `../app.css`.
- **Components** live in [src/lib/components/](src/lib/components/), aliased as `$lib` (e.g. `$lib/components/Hero.svelte`).

### Key components

- [Navigation.svelte](src/lib/components/Navigation.svelte) — fixed nav with scroll-spy section tracking, hide-on-scroll-down/show-on-scroll-up, mobile menu, and hash-based section scrolling. Uses `base` from `$app/paths` and `goto` from `$app/navigation`.
- [Hero.svelte](src/lib/components/Hero.svelte) — full-screen intro, mounts [ThreeBackground.svelte](src/lib/components/ThreeBackground.svelte) (Threlte wireframe 3D shapes animated via a `requestAnimationFrame`-driven `time` rune).
- [Projects.svelte](src/lib/components/Projects.svelte) — 26 **hardcoded** project entries (not fetched from any API) with a category filter and "load more" pagination (12 then +6).
- [About.svelte](src/lib/components/About.svelte) — static bio plus an experience accordion that is currently **commented out** along with the CV link.
- [Contact.svelte](src/lib/components/Contact.svelte) — email/LinkedIn/GitHub links (hardcoded URLs).

## Deployment & base path (critical)

- Deployed to GitHub Pages via [.github/workflows/deploy.yml](.github/workflows/deploy.yml): push to `main` → `npm ci` → `npm run build` → upload `build/` to Pages.
- [svelte.config.js](svelte.config.js) sets `kit.paths.base` to `/lei-chen-portfolio` **only when `NODE_ENV === 'production'`**, and `''` otherwise.
- Because of this, **asset/image `src` and internal links must be relative** (no leading slash), e.g. `projects/thumbnail-sudan.jpg`, `logo-white.svg`, `download/cv_LeiChen.pdf`. For internal route links, use `import { base } from '$app/paths'` and prefix with `base` (see `Navigation.svelte`'s `navItems`). Getting this wrong is a recurring source of breakage — recent history is full of "fix baseURL" commits.
- `static/` is served at the site root: project thumbnails in `static/projects/`, CV at `static/download/cv_LeiChen.pdf`, favicon/logos at top level.

## Styling

- Tailwind ([tailwind.config.js](tailwind.config.js)) with custom `primary` (sky) and `accent` (fuchsia) color scales, and a custom `light:` variant.
- Dark mode is class-based (`darkMode: 'class'`); [src/app.html](src/app.html) hardcodes `<html class="dark">`, so the site is effectively dark-only. Theme color tokens are not switched anywhere.
- Body font is **Roboto Mono**, imported via Google Fonts in [src/app.css](src/app.css) (not the `fontFamily.sans` in the Tailwind config, which lists Inter but isn't loaded).
- [vite.config.ts](vite.config.ts) adds `./node_modules/@threlte/**` to Tailwind content and pre-bundles `three`/`@threlte/*` via `optimizeDeps.include`.
- SEO/meta tags are in [src/app.html](src/app.html) (title, description, Open Graph, Twitter).
