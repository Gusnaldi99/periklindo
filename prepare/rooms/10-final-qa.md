# Room 10 — Final QA (cross-page)

**Requires:** room 09 `done`  
**Next:** optional `11-color-pass-optional.md` (only if user asks)

## Purpose

Fresh-eyes pass. Fix **only** regressions / remaining slop / Floor breaks. No new direction.

## Scope in

- Re-walk all public routes listed in CONTEXT
- Hallmark lint / `sloplint --render` if available
- Small fixes only in already-touched public/shared files
- Verify freezes with git diff:
  - `Navbar.tsx`, `Footer.tsx`, `FloatingWhatsApp.tsx`, `(public)/layout.tsx` should be untouched
  - `mock-data.ts` should not have rewritten content
- Tick **Freeze reminders** checkboxes in STATUS when verified
- Write `prepare/artifacts/10-qa-notes.md`

## Scope out

New visual direction · color overhaul · admin · content rewrites · starting room 11 unprompted

## Definition of done

- [ ] QA notes written  
- [ ] Critical Floor issues fixed  
- [ ] Freeze reminders checked in STATUS  
- [ ] STATUS ritual completed  
- [ ] Stop

---

## Prompt (copy-paste)

```text
Use hallmark for a final audit+fix pass on the PERIKLINDO public site after the keep-the-layout restyle series.

Read and obey BEFORE anything else:
- prepare/00-CONTEXT.md (Gate + STATUS ritual)
- prepare/rooms/10-final-qa.md
- prepare/01-STATUS.md (room 09 must be done)
- prepare/artifacts/* from earlier rooms

GATE: If room 09 is not done, STOP.

STATUS ritual: mark 10 in_progress now; at end done + [x] + Notes. You edit STATUS yourself — never ask the user to tick boxes. Also check off Freeze reminders in STATUS after verifying.

Review:
/, /tentang-kami, /struktur-organisasi, /berita, one /berita/[slug], /galeri, /faq, /kontak

Dev server: you have permission to start it yourself. Check existing terminals first; if none, run `npm run dev`, wait until ready, then run sloplint/render/visual checks if available. Fix ONLY Floor failures, clear remaining AI-slop reflex tells, and regressions. Do NOT rewrite content, touch layout chrome, redesign from scratch, start color overhaul, or expand into admin.

Verify with git diff that Navbar/Footer/FloatingWhatsApp/(public)/layout.tsx are untouched. Spot-check mock-data.ts was not rewritten. Confirm section orders still match each room file.

Write prepare/artifacts/10-qa-notes.md. Complete STATUS ritual + freeze checkboxes. Indonesian summary: series complete; room 11 only if user wants color later. STOP.
```
