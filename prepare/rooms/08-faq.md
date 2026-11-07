# Room 08 — FAQ (`/faq`)

**Requires:** room 07 `done`  
**Next:** `09-kontak.md`

## Section order (frozen)

1. `FaqHero`  
2. `FaqAccordionList`  
3. `FaqContactPrompt`

## Scope in

- `src/components/faq/**`
- `src/app/(public)/faq/page.tsx`

## Scope out

Layout chrome · FAQ copy in mock-data · other routes · color overhaul

## Definition of done

- [ ] 3 sections remain; accordion/filters work  
- [ ] Q&A unchanged  
- [ ] STATUS ritual completed  
- [ ] Stop

---

## Prompt (copy-paste)

```text
Use hallmark to redesign PERIKLINDO /faq with keep-the-layout + polish. Custom institutional direction — no theme deal, no greenfield.

Read and obey BEFORE anything else:
- prepare/00-CONTEXT.md (Gate + STATUS ritual)
- prepare/rooms/08-faq.md
- prepare/01-STATUS.md (room 07 must be done)
- prepare/artifacts/02-type-lock.md (if present)

GATE: If room 07 is not done, STOP.

STATUS ritual: mark 08 in_progress now; at end done + [x] + Notes. You edit STATUS yourself — never ask the user to tick boxes.

Target: src/app/(public)/faq/page.tsx and src/components/faq/**

Frozen structure: FaqHero → FaqAccordionList → FaqContactPrompt

Do not edit FAQ questions/answers/categories in mock-data.ts. Keep accordion/filters working. No fake thank-you states.

Hard freeze: no Navbar/Footer/FloatingWhatsApp/public layout; no other routes; colors deferred.

Complete STATUS ritual. Indonesian summary; next = room 09. STOP.
```
