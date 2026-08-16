# ARCHITECTURE.md — Gamer Bax Forward Plan & Content Architecture

This document establishes the architecture for future content, blog posts, and site structure to ensure future tasks require zero structural rewrites.

---

## Content Storage & JSON Layer

- Posts will be stored in static JSON files at build time: `content/posts.fa.json` and `content/posts.en.json`.
- Post Object Interface Schema:
  ```ts
  export interface Post {
    id: string; // Shared across locales to pair translations
    slug: string; // Per-locale URL slug (ASCII-only)
    title: string;
    description: string;
    publishedAt: string; // ISO 8601 date string
    updatedAt?: string;
    tags: string[];
    cover?: string;
    readingMinutes: number;
    body: string; // Markdown or HTML body content
  }
  ```

### Cross-Locale Translation Pairing Rules
1. **Shared `id`**: The `id` field links a Persian post with its corresponding English post.
2. **Untranslated Posts Handling**:
   - A post appears in a locale only if that locale's JSON file contains an entry for its `id`.
   - `alternates.languages` in SEO metadata will include only the locales that actually possess a translation for that post.
   - The `LanguageSwitcher` on an untranslated post page will gracefully link to that locale's blog index (`/[locale]/blog`) rather than generating a 404 error.

---

## Frozen URL Structure

- **Article Routes**: `/[locale]/blog/[slug]`
- **Locale Prefixes**: All routes require explicit locale prefixes (`/fa/...`, `/en/...`). Bare `/` issues a edge-level 308 redirect to `/fa`.
- **URL Stability**: The `/[locale]/blog/[slug]` shape is frozen. Even if the static JSON data layer is later migrated to MDX files or a headless CMS, these canonical URLs will remain identical to preserve search engine indexing.

---

## Non-Goals & Exclusions
- Store, membership, e-commerce, user accounts, and authentication are explicitly **not planned** for this project phase.
