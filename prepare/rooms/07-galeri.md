# Room 07 — Galeri (`/galeri`)

**Requires:** room 06 `done`  
**Next:** `08-faq.md`

## Section order (frozen)

1. `GalleryHero`  
2. `GalleryGrid` (uses `GalleryLightboxModal`)

## Scope in

- `src/components/gallery/**` (GalleryHero, GalleryGrid, GalleryLightboxModal)
- `src/app/(public)/galeri/page.tsx`

## Scope out

Layout chrome · gallery content in mock-data · other routes · color overhaul

## Definition of done

- [ ] Hero + grid restyled; filters + lightbox work  
- [ ] No gallery content edits  
- [ ] STATUS ritual completed  
- [ ] Stop

---

## Prompt (copy-paste)

```text
Use hallmark to redesign PERIKLINDO /galeri with keep-the-layout + polish. Custom institutional documentary direction — no theme deal, no greenfield.

Read and obey BEFORE anything else:
- prepare/00-CONTEXT.md (Gate + STATUS ritual)
- prepare/rooms/07-galeri.md
- prepare/01-STATUS.md (room 06 must be done)
- prepare/artifacts/02-type-lock.md (if present)

GATE: If room 06 is not done, STOP.

STATUS ritual: mark 07 in_progress now; at end done + [x] + Notes. You edit STATUS yourself — never ask the user to tick boxes.

Target: src/app/(public)/galeri/page.tsx and src/components/gallery/** (including GalleryLightboxModal).

Frozen structure: GalleryHero → GalleryGrid. Keep lightbox wiring.

Do not change captions/categories/dates/image paths in mock-data.ts. Remove AI-slop overlay/badge habits; keep filters/modal working.

Hard freeze: no Navbar/Footer/FloatingWhatsApp/public layout; no other routes; colors deferred.

Complete STATUS ritual. Indonesian summary; next = room 08. STOP.
```
