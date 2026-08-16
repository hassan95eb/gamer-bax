# AGENTS.md — Coding Conventions & Directives for Gamer Bax

This repository hosts **Gamer Bax**, a technical, bilingual (`fa` RTL default and `en` LTR) gaming blog built with Next.js App Router, TypeScript, and Tailwind CSS v4.

---

## Directory & Path Structure

- Code lives strictly inside `src/`:
  - `src/app/[locale]/...` for App Router pages and layouts.
  - `src/components/ui/` for primitive components.
  - `src/components/layout/` for structural layout components.
  - `src/lib/` for helpers, fonts (`lib/fonts.ts`), i18n (`lib/i18n/`), and SEO (`lib/seo/`).
  - `src/messages/` for UI strings (`fa.json` and `en.json`).
- `public/fonts/` contains local self-hosted `.woff2` font files and their corresponding OFL license files.
- `content/` (root level) will store static post JSON files in future content tasks.

---

## Mandatory Rules & Guidelines

1. **Logical Properties Only**: Use Tailwind logical spacing and positioning properties (`ps-*`, `pe-*`, `ms-*`, `me-*`, `start-*`, `end-*`). **NEVER use physical directional utilities (`pl-*`, `pr-*`, `ml-*`, `mr-*`, `left-*`, `right-*`) anywhere in the codebase.**
2. **Tokens Only — No Raw Colors**: Always use defined CSS color variables (`var(--color-bg)`, `var(--color-surface)`, `var(--color-accent)`, etc.). **No raw hex color codes (`#080B08`, `#C8E870`, etc.) are permitted inside components or TSX files.**
3. **No Hardcoded Strings**: All user-visible strings must be placed in `src/messages/fa.json` and `src/messages/en.json` and retrieved using `getMessages(locale)` / `getTranslation()`.
4. **Persian Typography Rules**:
   - **NEVER apply `letter-spacing` to Persian text.** Letter spacing breaks connected Persian script joins. Enforced via CSS rule: `html[lang="fa"] * { letter-spacing: normal !important; }`.
   - **NEVER apply uppercase text-transforms to Persian text.**
   - Eyebrows in Persian use a leading lime rule (`w-3 h-[2px] bg-[var(--color-accent)]`) instead of uppercase tracking or glyphs.
5. **Accent is Rare**: Use `--color-accent` sparingly (maximum 1 CTA, active nav state, single highlighted display heading phrase, or small eyebrow per screen). Never use full-width accent blocks or accent body text.
6. **No Duplicated Navigation DOM**: The application header uses a single `<nav>` element for both desktop and mobile views. The mobile menu is an overlay styled on the same `<nav>` container.
7. **Accessibility & Focus**: All interactive elements must remain reachable via keyboard and display a visible focus ring (`:focus-visible`).

---

## Validation Commands

Before committing or completing any step, verify with:
- `npm run check:i18n` — Validates that key sets in `src/messages/fa.json` and `src/messages/en.json` match identically.
- `npm run build` — Runs `prebuild` (which triggers `check:i18n`), checks TypeScript types, and confirms static generation of all bilingual routes.
