# Room 09 — Kontak (`/kontak`)

**Requires:** room 08 `done`  
**Next:** `10-final-qa.md`

## Structure (frozen)

1. `ContactHero`  
2. Form + map section: `ContactForm` + `SecretariatMapCard` (keep Suspense)

## Scope in

- `src/components/contact/**`
- Visual wrappers in `kontak/page.tsx` without removing form/map or breaking Suspense

## Scope out

Fake forms · inventing address/hours · layout chrome · other routes · color overhaul

## Critical

Form must stay **real** (fields, categories, validation, submit/WhatsApp wiring). Category labels / secretariat copy are frozen unless purely identical meaning.

## Definition of done

- [x] Hero + form + map present and working  
- [x] No invented contact facts  
- [x] STATUS ritual completed  
- [x] Stop

---

## Prompt (copy-paste)

```text
Use hallmark to redesign PERIKLINDO /kontak with keep-the-layout + polish. Custom institutional direction — no theme deal, no greenfield.

Read and obey BEFORE anything else:
- prepare/00-CONTEXT.md (Gate + STATUS ritual)
- prepare/rooms/09-kontak.md
- prepare/01-STATUS.md (room 08 must be done)
- prepare/artifacts/02-type-lock.md (if present)

GATE: If room 08 is not done, STOP.

STATUS ritual: mark 09 in_progress now; at end done + [x] + Notes. You edit STATUS yourself — never ask the user to tick boxes.

Target: src/app/(public)/kontak/page.tsx and src/components/contact/**

Frozen structure: ContactHero, then ContactForm + SecretariatMapCard. Preserve Suspense wiring.

Floor rule: keep the form real — do not break fields, categories, validation, or submit/WhatsApp wiring. Do not invent addresses or hours. Restyle visuals only; do not rewrite labels/copy.

Hard freeze: no Navbar/Footer/FloatingWhatsApp/public layout; no mock-data content edits; no other routes; colors deferred.

Complete STATUS ritual. Indonesian summary; next = room 10. STOP.
```
