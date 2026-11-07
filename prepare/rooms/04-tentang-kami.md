# Room 04 — Tentang Kami (`/tentang-kami`)

**Requires:** room 03 `done`  
**Next:** `05-struktur-organisasi.md`

## Section order (frozen)

1. `AboutHero`  
2. `FoundersSection`  
3. `VisionMissionSection`  
4. `StrategicObjectives`  
5. `HistoryTimeline`  
6. `CoreValuesSection`  
7. `LeadershipSpotlight`  
8. `LegalAndContactSection`  
9. `AboutCta`

## Scope in

- `src/components/about/**` (all about components listed above)
- `src/app/(public)/tentang-kami/page.tsx` — mount order untouched

## Scope out

Layout chrome · other routes · copy / mock-data · color overhaul

## Note

Much copy is **hardcoded inside about components** — frozen. Restyle only.

## Definition of done

- [x] 9 sections same order  
- [x] No copy changes  
- [x] STATUS ritual completed  
- [x] Stop

---

## Prompt (copy-paste)

```text
Use hallmark to redesign PERIKLINDO /tentang-kami with keep-the-layout + polish. Custom institutional direction — no theme deal, no greenfield.

Read and obey BEFORE anything else:
- prepare/00-CONTEXT.md (Gate + STATUS ritual)
- prepare/rooms/04-tentang-kami.md
- prepare/01-STATUS.md (room 03 must be done)
- prepare/artifacts/02-type-lock.md (if present)

GATE: If room 03 is not done, STOP.

STATUS ritual: mark 04 in_progress now; at end done + [x] + Notes. You edit STATUS yourself — never ask the user to tick boxes.

Target: src/app/(public)/tentang-kami/page.tsx and src/components/about/**

Frozen order:
AboutHero → FoundersSection → VisionMissionSection → StrategicObjectives → HistoryTimeline → CoreValuesSection → LeadershipSpotlight → LegalAndContactSection → AboutCta

Hero first, then remaining sections. Strip AI-slop tells. Do not change any user-visible strings (many are hardcoded in these components), names, dates, legal text, or facts.

Hard freeze: no Navbar/Footer/FloatingWhatsApp/public layout; no mock-data content edits; no other routes; colors deferred.

Complete STATUS ritual. Indonesian summary; next = room 05. STOP.
```
