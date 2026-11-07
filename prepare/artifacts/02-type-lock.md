# Type lock — PERIKLINDO (Room 02)

**Date:** 2026-11-06  
**Mode:** Hallmark custom institutional (no catalog theme deal)  
**Axes:** `light / roman-serif / chromatic-blue` (catalog-clear)

## Pair

| Role | Face | Weights | Token |
|---|---|---|---|
| **Display / headings** | **Source Serif 4** | 600, 700 | `--font-heading` ← `--font-source-serif` |
| **Body / UI / labels** | **Public Sans** | 400, 500, 600 | `--font-body` ← `--font-public-sans` |

Loaded via `next/font/google` in `src/app/layout.tsx`. Metadata strings unchanged.

## Why these faces

- **PERIKLINDO** is a national industry association, not a SaaS product. Inter + Plus Jakarta Sans read as default AI/startup chrome (audit Reflex 1).
- **Source Serif 4** gives editorial authority on section titles and heroes without the cream-and-terracotta “AI editorial” trap (Hallmark spent look). Catalog check: clear as display.
- **Public Sans** was built for institutional UI (USWDS lineage): calm, highly legible Indonesian Latin copy, forms, and captions. Catalog check: clear.
- Two families only. No mono costume for labels. No third “outlier” face until chrome (Navbar/Footer) is in scope.

## Usage rules

1. **Display (Source Serif 4):** `h1`–`h6`, section titles (`SectionHeader`), large figures that act as headlines.
2. **Body (Public Sans):** paragraphs, nav-adjacent UI (when later touched), buttons, form controls, meta captions, any former “eyebrow” string.
3. **Labels / captions:** body face, one step smaller, sentence case, **no** tracked capitals / small caps as default (Floor 54 / 67).
4. **Do not** reintroduce Inter, Plus Jakarta Sans, or generic system-ui as the design voice.
5. **Colors** stay on current navy / electric / teal tokens until room 11.

## SectionHeader contract

- Hierarchy from **size + weight + spacing**, not gradient hairlines or badge eyebrows.
- `eyebrow` prop retained for API compatibility; if a parent passes a string, render as a quiet body-face caption (do not invent new labels).

## Files

- `src/app/layout.tsx` — font loading
- `src/app/globals.css` — `--font-heading` / `--font-body` + Hallmark stamp
- `prepare/artifacts/02-type-lock.md` — this lock
