# Room 02 — Foundation (typography + shared primitives)

**Requires:** room 01 `done`  
**Next:** `03-home.md`

## Purpose

Fix shared visual language that leaks AI-slop across pages — especially fonts + `SectionHeader` — without touching layout chrome and without rewriting copy.

## Scope in

- `src/app/layout.tsx` — font loading / CSS variables only (do **not** change metadata strings)
- `src/app/globals.css` — type scale / shared utilities; minimal token tweaks OK; no full palette rewrite
- `src/components/shared/SectionHeader.tsx`
- Shared primitives if Reflex-heavy: `NewsCard.tsx`, `ScrollReveal.tsx`, `MemberLogoCard.tsx`, `AnimatedCounter.tsx`
- `prepare/artifacts/02-type-lock.md` — document font pair + usage

## Scope out

- `Navbar.tsx`, `Footer.tsx`, `FloatingWhatsApp.tsx`, `(public)/layout.tsx`
- Page-specific section restyles (rooms 03+)
- `mock-data.ts` / copy rewrites / admin / color overhaul

## Design intent

- Replace Inter / generic SaaS body look with a serious institutional pair
- Section titles via type + space — not obligatory eyebrows / tracked-caps / gradient underlines
- Keep parent-passed eyebrow *strings* if any; you may change presentation or stop decorative chrome; do not invent new labels

## Definition of done

- [ ] Fonts wired; documented in `02-type-lock.md`
- [ ] `SectionHeader` no longer forces AI-default chrome everywhere
- [ ] Shared primitives cleaned of worst Reflex tells
- [ ] No copy / Navbar / Footer / public layout edits
- [ ] STATUS ritual completed
- [ ] Stop (no home redesign in this chat)

---

## Prompt (copy-paste)

```text
Use hallmark for a keep-the-layout foundation pass on PERIKLINDO. Custom institutional direction — do NOT deal a random theme from the 50-theme catalog.

Read and obey BEFORE anything else:
- prepare/00-CONTEXT.md (Gate + STATUS ritual)
- prepare/rooms/02-foundation.md
- prepare/01-STATUS.md (must show room 01 done; apply audit priorities)
- prepare/artifacts/01-audit-report.md (if present)

GATE: If room 01 is not done in prepare/01-STATUS.md, STOP and tell the user. Do not edit code.

STATUS ritual:
1) Mark room 02 in_progress now in prepare/01-STATUS.md
2) At end: done + [x] + Notes (date, fonts chosen, files touched)
3) You edit STATUS yourself — never ask the user to tick boxes

Allowed edits only:
- src/app/layout.tsx (fonts/CSS variables only; do not change metadata copy)
- src/app/globals.css
- src/components/shared/SectionHeader.tsx
- shared primitives if needed: NewsCard, ScrollReveal, MemberLogoCard, AnimatedCounter

Hard freeze:
- Do NOT edit Navbar.tsx, Footer.tsx, FloatingWhatsApp.tsx, or src/app/(public)/layout.tsx
- Do NOT edit mock-data.ts or rewrite user-visible strings
- Do NOT reorder/remove page sections
- Do NOT restyle whole pages yet
- Color overhaul deferred to room 11

Typography: replace Inter / generic AI-default pairing with a better institutional pair. Write prepare/artifacts/02-type-lock.md (why these fonts; display vs body).

SectionHeader: remove eyebrow/tracked-caps/gradient-hairline reflex as the default look. Prefer hierarchy + spacing. Do not invent new labels.

Self-check Floor (contrast, focus, reduced motion). Complete STATUS ritual. Indonesian summary. STOP — do not start home (room 03) in this chat.
```
