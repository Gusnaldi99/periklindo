# Room 06 — Berita (`/berita` + `/berita/[slug]`)

**Requires:** room 05 `done`  
**Next:** `07-galeri.md`

## Structure (frozen)

### Index — `berita/page.tsx`

1. `NewsHero`  
2. `NewsFilterBar`

### Detail — `berita/[slug]/page.tsx`

- `ReadingProgressBar`  
- `NewsArticleContent` (+ existing related-news wiring)

Optional light restyle only if needed: `berita/[slug]/not-found.tsx` (no copy invention).

## Scope in

- `src/components/news/**` (NewsHero, NewsFilterBar, NewsArticleContent, ReadingProgressBar)
- `NewsCard.tsx` only if still inconsistent after room 02
- berita page files above

## Scope out

Layout chrome · rewriting news fields in mock-data · other routes · color overhaul

## Definition of done

- [x] Index + detail restyled; filters/slugs/related work  
- [x] No mock-data content edits  
- [x] STATUS ritual completed  
- [x] Stop

---

## Prompt (copy-paste)

```text
Use hallmark to redesign PERIKLINDO news surfaces with keep-the-layout + polish. Custom institutional/editorial direction — no theme deal, no greenfield.

Read and obey BEFORE anything else:
- prepare/00-CONTEXT.md (Gate + STATUS ritual)
- prepare/rooms/06-berita.md
- prepare/01-STATUS.md (room 05 must be done)
- prepare/artifacts/02-type-lock.md (if present)

GATE: If room 05 is not done, STOP.

STATUS ritual: mark 06 in_progress now; at end done + [x] + Notes. You edit STATUS yourself — never ask the user to tick boxes.

Targets:
- src/app/(public)/berita/page.tsx
- src/app/(public)/berita/[slug]/page.tsx
- src/components/news/**
- optionally not-found.tsx visual only

Frozen index: NewsHero → NewsFilterBar. Keep detail wiring (ReadingProgressBar + NewsArticleContent + related news).

Do not edit news titles/excerpts/bodies/dates/categories/slugs in mock-data.ts. Restyle only. Keep filters working.

Hard freeze: no Navbar/Footer/FloatingWhatsApp/public layout; no other routes; colors deferred.

Complete STATUS ritual. Indonesian summary; next = room 07. STOP.
```
