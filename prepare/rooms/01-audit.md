# Room 01 — Hallmark audit (report only)

**Requires:** nothing (first room)  
**Next:** `02-foundation.md`  
**Code edits:** none (STATUS + artifacts only)

## Purpose

Concrete anti-slop audit of the **public** site. **No product code changes.**

## Scope in (read-only)

- Routes: `/`, `/tentang-kami`, `/struktur-organisasi`, `/berita`, `/berita/[slug]`, `/galeri`, `/faq`, `/kontak`
- Components under `home|about|organization|news|gallery|faq|contact|shared`
- `globals.css`, fonts in `src/app/layout.tsx`
- Note patterns in layout chrome only if they create Floor issues (Navbar/Footer/WhatsApp are **not** redesign targets)

## Scope out

- Product code edits
- Admin
- Content rewrite proposals
- Recommending Navbar/Footer redesign as mandatory work

## Deliverable

1. Fill **Audit findings log** in `prepare/01-STATUS.md`
2. Write `prepare/artifacts/01-audit-report.md` (full structured report)
3. Complete STATUS ritual for room 01

Report structure:

1. **Floor** — contrast, focus, reduced motion, broken mobile, fake-live UI
2. **Reflex** — eyebrows, tracked caps, pills, glow orbs, Inter-default, etc.
3. **Finish** — spacing, type, photo treatment, motion taste
4. **Per-page severity** — High / Med / Low
5. **Priority for rooms 02–10** — confirm order or justify a swap (swap only if critical)

## Definition of done

- [ ] Artifact report written
- [ ] STATUS audit log filled
- [ ] STATUS ritual completed (`in_progress` → `done`, `[x]`)
- [ ] Zero product code changes
- [ ] Stop (do not start room 02 here)

---

## Prompt (copy-paste)

```text
Use hallmark to audit this existing Next.js PERIKLINDO public site. REPORT ONLY — do not edit product/source components (no src/ UI code changes).

Read and obey BEFORE anything else:
- prepare/00-CONTEXT.md (especially Gate + STATUS ritual)
- prepare/rooms/01-audit.md
- prepare/01-STATUS.md

STATUS ritual:
1) Immediately mark room 01 as in_progress in prepare/01-STATUS.md
2) At the end mark done, set Done column to [x], write Notes with date + artifact path
3) You edit STATUS yourself — never ask the user to tick boxes

Mode: Hallmark audit on the public surface. Do not deal themes. Do not redesign yet.

Audit routes and their components:
/, /tentang-kami, /struktur-organisasi, /berita, /berita/[slug], /galeri, /faq, /kontak

Also note shared primitives (SectionHeader, cards, motion) and root fonts. Navbar/Footer/FloatingWhatsApp/public layout are OUT of redesign scope — mention only if a true a11y Floor issue exists.

Constraints that later rooms will enforce (do not “fix” them now):
- Content text + section order frozen (including hardcoded strings in components)
- mock-data.ts frozen
- Admin out of scope
- Colors deferred; typography may change in room 02

Dev server: you have permission to start it yourself. Check existing terminals first; if none, run `npm run dev` in the project root, wait until ready, then use visual/render checks (Hallmark/sloplint/screenshots as available). If the server fails, fall back to a thorough static pattern audit and note that in the report.

Deliverables:
1) prepare/artifacts/01-audit-report.md (Floor / Reflex / Finish / per-page severity / recommended priority)
2) Concise copy of key findings into prepare/01-STATUS.md Audit findings log
3) Complete STATUS ritual for room 01
4) Indonesian summary for the user: what was worst, and that next chat must be room 02 only
5) STOP. Do not start foundation or page redesigns in this chat.
```
