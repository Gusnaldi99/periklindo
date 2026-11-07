# Status checklist (source of truth)

**Urutan wajib:** kerjakan room dari atas ke bawah. Jangan loncat.  
**Agent:** kamu yang mengedit file ini — jangan minta user mencentang manual.

## Cara update (wajib dipatuhi agent)

1. **Mulai room:** set baris room ini → `in_progress`, isi tanggal di Notes.
2. **Selesai room:** set → `done`, centang `[x]`, tulis ringkas di Notes + link artifact jika ada.
3. **Gate:** sebelum kerja, cek room sebelumnya sudah `done`. Jika belum → **STOP**, jangan edit kode, bilang ke user room mana yang belum.
4. Room 11 boleh `skipped` jika user tidak minta color pass.

Status values: `pending` | `in_progress` | `done` | `skipped`

---

## Rooms (sequential)

| Done | # | Room | Status | Notes |
|:---:|---|---|---|---|
| [x] | 01 | Audit | done | 2026-11-06 — findings di bawah + `prepare/artifacts/01-audit-report.md` |
| [x] | 02 | Foundation (type + shared) | done | 2026-11-06 — Source Serif 4 + Public Sans; SectionHeader/ScrollReveal/NewsCard/MemberLogoCard; `prepare/artifacts/02-type-lock.md` |
| [x] | 03 | Home | done | 2026-11-06 — restyle 8 home sections (Hero first); anti-telemetry; `src/components/home/**` + `page.tsx` comments |
| [x] | 04 | Tentang Kami | done | 2026-11-06 — restyle 9 about sections (Hero first); anti-telemetry/orbs/pills; `src/components/about/**` + page comments; Footer contrast FAIL deferred (chrome freeze) |
| [x] | 05 | Struktur Organisasi | done | 2026-11-06 — restyle 5 org sections (Hero first); anti-ping/glow/tracked-caps; `src/components/organization/**` + page comments; Footer contrast FAIL deferred (chrome freeze) |
| [x] | 06 | Berita (+ detail) | done | 2026-11-06 — restyle index+detail (NewsHero→FilterBar; progress+article+related); no mock-data content edits; compare `.hallmark/compare.html` |
| [x] | 07 | Galeri | done | 2026-11-06 — restyle GalleryHero→Grid+lightbox; no mock-data content edits; compare `.hallmark/compare.html` |
| [x] | 08 | FAQ | done | 2026-11-06 — restyle FaqHero→FaqAccordionList→FaqContactPrompt; no mock-data content edits; compare `.hallmark/compare.html` |
| [x] | 09 | Kontak | done | 2026-11-06 — restyle ContactHero→Form+Map; Floor 70 via WA submit; no invented facts; compare `.hallmark/compare.html` |
| [x] | 10 | Final QA | done | 2026-11-06 — cross-page sloplint+render; fixed 63/40/TELEMETRY leftovers; chrome Floor deferred; `prepare/artifacts/10-qa-notes.md` |
| [ ] | 11 | Color pass (optional) | pending | requires 10 done; skip unless user asks |

### Contoh baris setelah selesai

`| [x] | 01 | Audit | done | 2026-11-06 — findings di bawah + artifacts/01-audit-report.md |`

---

## Freeze reminders (centang ulang di Final QA)

- [x] `Navbar.tsx` / `Footer.tsx` / `FloatingWhatsApp.tsx` tidak diubah
- [x] `src/app/(public)/layout.tsx` tidak diubah
- [x] `mock-data.ts` content fields tidak diubah
- [x] String copy di komponen (bukan hanya mock-data) tidak di-rewrite
- [x] Urutan section di setiap page file tidak berubah
- [x] Tidak ada kerjaan admin

---

## Audit findings log (isi di room 01)

```
2026-11-06 — static + sloplint (no render; no dev server). 148 FAIL / 14 REFLEX / 102 WARN.

WORST
- Home hero: fake-live “telemetry”, ping dots, gradient headline, blur orbs, 4 metric cards + floating badges → first viewport overloaded (Floor 58 judged).
- Shared: SectionHeader eyebrow API + electric→teal rule; ScrollReveal opacity-0 without JS (62); transition-all endemic (10a); Inter + Plus Jakarta Sans (Reflex 1).
- Kontak: fake success after setTimeout — no endpoint (Floor 70).
- Struktur: indigo gradients (2a), glow beams, tracked-caps tier pills, live-dot costume.
- Tentang: TELEMETRY: TARGET_AKTIF mono strip; equal icon/progress card grids; same navy-orb hero dialect.

FLOOR (must clear later)
70 fake send · 62 ScrollReveal · 10a transition-all · 54/67 tracked caps/eyebrows · 63 arrows/middots · 2a indigo · 48 colour literals · 34 missing overflow-x clip · fake-live telemetry costume · 20 no stamp yet.

REFLEX
Inter body · blur-3xl orbs · gradient text · equal icon cards · hover lifts · clone navy-hero recipe every route · mono-as-costume · stock slate/cyan utilities.

PER-PAGE
/ High · /tentang-kami High · /struktur-organisasi High · /berita Med · /berita/[slug] Med-Low · /galeri Med · /faq Med · /kontak High (70).

PRIORITY
Keep 02→10 order. Room 02 first (fonts + SectionHeader + ScrollReveal + motion/overflow tokens). No theme deal. Colors deferred to 11.

Artifact: prepare/artifacts/01-audit-report.md
```

---

## Handoff notes (opsional, agent boleh isi singkat)

```
2026-11-06 — Room 02 done. Next chat: room 03 ONLY (prepare/rooms/03-home.md). Fonts locked (Source Serif 4 / Public Sans). SectionHeader hierarchy-only; ScrollReveal visible-by-default; NewsCard/MemberLogoCard hover calmed. Content/mock-data/chrome still frozen. Colors still room 11.
2026-11-06 — Room 03 done. Next chat: room 04 ONLY (prepare/rooms/04-tentang-kami.md). Home restyled keep-the-layout + polish (custom institutional). Hero no longer telemetry/orbs/gradient-text/floating badges. Copy/mock-data/chrome still frozen. Colors still room 11.
2026-11-06 — Room 04 done. Next chat: room 05 ONLY (prepare/rooms/05-struktur-organisasi.md). Tentang Kami restyled keep-the-layout + polish; AboutHero quiet facts; no cockpit/orbs/ping; copy/mock-data/chrome still frozen. Colors still room 11.
2026-11-06 — Room 05 done. Next chat: room 06 ONLY (prepare/rooms/06-berita.md). Struktur Organisasi restyled keep-the-layout + polish; no ping/glow/tracked-caps; modal+accordion intact; copy/mock-data/chrome still frozen. Colors still room 11.
2026-11-06 — Room 06 done. Next chat: room 07 ONLY (prepare/rooms/07-galeri.md). Berita index+detail restyled keep-the-layout + polish; filters/related intact; no mock-data content edits; chrome still frozen. Colors still room 11.
2026-11-06 — Room 07 done. Next chat: room 08 ONLY (prepare/rooms/08-faq.md). Galeri restyled keep-the-layout + polish; filters/lightbox intact; no mock-data content edits; chrome still frozen. Colors still room 11.
2026-11-06 — Room 08 done. Next chat: room 09 ONLY (prepare/rooms/09-kontak.md). FAQ restyled keep-the-layout + polish; accordion/filters intact; no mock-data content edits; chrome still frozen. Colors still room 11.
2026-11-06 — Room 09 done. Next chat: room 10 ONLY (prepare/rooms/10-final-qa.md). Kontak restyled keep-the-layout + polish; form/WA/map intact; Floor 70 cleared (submit opens WhatsApp); no invented facts; chrome still frozen. Colors still room 11.
2026-11-06 — Room 10 done. Series complete. Optional next: room 11 color ONLY if user asks (prepare/rooms/11-color-pass-optional.md); else skip. QA notes: prepare/artifacts/10-qa-notes.md. Chrome Floor 40/73 still deferred.
```
