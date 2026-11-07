# Room 05 — Struktur Organisasi (`/struktur-organisasi`)

**Requires:** room 04 `done`  
**Next:** `06-berita.md`

## Section order (frozen)

1. `OrgHero`  
2. `OrgChartInteractive`  
3. `OrgOfficialDiagramModal`  
4. `OrgDutiesAccordion`  
5. `OrgCta`

## Scope in

- `src/components/organization/**` including helpers used by the chart:
  - `OrgMemberCard.tsx`, `OrgTierStepper.tsx`, `OrgConnectorBeam.tsx`
  - plus OrgHero, OrgChartInteractive, OrgOfficialDiagramModal, OrgDutiesAccordion, OrgCta
- Page mount order untouched

## Scope out

Layout chrome · other routes · org data/copy in mock-data · color overhaul

## Definition of done

- [x] 5 sections same order; modal + accordion work  
- [x] Names/titles/duties unchanged  
- [x] STATUS ritual completed  
- [x] Stop

---

## Prompt (copy-paste)

```text
Use hallmark to redesign PERIKLINDO /struktur-organisasi with keep-the-layout + polish. Custom institutional direction — no theme deal, no greenfield.

Read and obey BEFORE anything else:
- prepare/00-CONTEXT.md (Gate + STATUS ritual)
- prepare/rooms/05-struktur-organisasi.md
- prepare/01-STATUS.md (room 04 must be done)
- prepare/artifacts/02-type-lock.md (if present)

GATE: If room 04 is not done, STOP.

STATUS ritual: mark 05 in_progress now; at end done + [x] + Notes. You edit STATUS yourself — never ask the user to tick boxes.

Target: src/app/(public)/struktur-organisasi/page.tsx and src/components/organization/** (including OrgMemberCard, OrgTierStepper, OrgConnectorBeam).

Frozen order:
OrgHero → OrgChartInteractive → OrgOfficialDiagramModal → OrgDutiesAccordion → OrgCta

Preserve all names, titles, duties copy, and official diagram asset/modal wiring. Remove AI-slop motion/chrome (ping dots, glow, tracked-caps badge stacks) without breaking interaction.

Hard freeze: no Navbar/Footer/FloatingWhatsApp/public layout; no mock-data content edits; no other routes; colors deferred.

Complete STATUS ritual. Indonesian summary; next = room 06. STOP.
```
