# PERIKLINDO — Anti-Slop Redesign Context (Locked)

Read this file at the start of **every** room chat before touching code.

## Goal

Restyle the public PERIKLINDO site so it does **not** read as AI-generated (“AI slop”), while **keeping client-approved content and section order**.

This is **not** a greenfield rebuild. This is **Hallmark-style redesign: keep the layout + hard polish**.

## Sequential rooms (mandatory)

Work **only** the room whose prompt was pasted. Rooms are strictly ordered:

`01 audit → 02 foundation → 03 home → 04 tentang → 05 struktur → 06 berita → 07 galeri → 08 faq → 09 kontak → 10 final QA → (optional) 11 color`

### Gate

1. Open `prepare/01-STATUS.md`.
2. If the **previous** room is not `done`, **STOP**. Do not edit product code. Tell the user which room is blocking.
3. Mark the **current** room `in_progress` immediately when you start.
4. Do **not** start the next room in the same chat.

## STATUS ritual (mandatory — agent does this, not the user)

At **start** of the room:

- Edit `prepare/01-STATUS.md`: set this room’s Status to `in_progress` and add a dated note.

At **end** of the room (before you stop):

1. Set Status to `done` (or `skipped` only for room 11 if appropriate).
2. Change the Done column from `[ ]` to `[x]`.
3. Write a short Notes cell (date + what shipped / artifact path).
4. If room 01: fill **Audit findings log**.
5. Optionally append one line under **Handoff notes** for the next room.
6. Tell the user in Indonesian: room ini selesai, room berikutnya adalah `…`, dan STATUS sudah di-update.

Never end a room with “please check the box yourself.” **You** edit `01-STATUS.md`.

## Stack

- Next.js 16 (App Router) + React 19 + Tailwind CSS 4 + Motion
- Content: `src/data/mock-data.ts` **and** hardcoded strings inside section components
- Design notes (reference only; colors deferred): `DESIGN_v2.md`
- Hallmark skill installed — say “use hallmark …” explicitly
- **Dev server permission:** the agent **may and should** start `npm run dev` (and other read/run tooling needed for audit/screenshots/sloplint) itself. Do not wait for the user to start the server manually. Check existing terminals first to avoid duplicate servers; reuse one if already running on the project.

## Locked decisions (product owner)

| Decision | Value |
|---|---|
| Content text | **Frozen** — do not rewrite, shorten, invent, or “improve” copy |
| Section order per page | **Frozen** — do not add/remove/reorder section components |
| Data files | **Frozen** — especially `src/data/mock-data.ts` content fields |
| Metadata / SEO strings | **Frozen** unless fixing a technical bug |
| Navbar / Footer / FloatingWhatsApp | **Out of scope** — do not edit |
| Public layout shell | **Out of scope** — do not edit `src/app/(public)/layout.tsx` |
| Admin (`/admin`) | **Out of scope** |
| Colors | **Deferred** to optional room 11 |
| Typography | **In scope** (room 02) — may replace Inter / Plus Jakarta Sans |
| Approach | Keep-the-layout + polish; Hallmark **custom** (no 50-theme deal) |
| Materials | Existing project assets only — invent nothing |
| Commits | Do not commit unless the user explicitly asks |

## In scope (visual craft)

- `src/components/{home,about,organization,news,gallery,faq,contact,shared}/**`
- Public pages under `src/app/(public)/**` **except** changing which sections mount or their order
- Shared primitives: `SectionHeader`, `NewsCard`, `ScrollReveal`, `MemberLogoCard`, `AnimatedCounter`
- `src/app/globals.css`, font wiring in `src/app/layout.tsx` (not metadata copy)
- Motion / spacing / type hierarchy / surfaces / card chrome
- Accessibility Floor (contrast, focus, reduced motion, mobile)

## Out of scope (explicit paths)

- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/FloatingWhatsApp.tsx`
- `src/app/(public)/layout.tsx`
- Admin routes/components
- Rewriting client copy or inventing facts/stats/quotes
- Stock photo sites (Unsplash / Pexels / Pixabay)
- Greenfield HTML/CSS that abandons the Next.js tree
- Full IA redesign / new pages / new sections

## Hardcoded copy warning

Many strings live **inside components** (not only `mock-data.ts`), e.g. about vision/mission, founders, pillars, org tier labels, contact categories. Those strings are **frozen** too. Restyle markup/classes/motion only.

## Hallmark mode

Use Hallmark as **process + gates** inside the existing Next.js tree:

1. Pre-flight: this context + room file + STATUS gate
2. Keep section anatomy
3. Custom institutional EV-association craft (not a dealt catalog theme)
4. Hero/header first on page rooms, then remaining sections
5. Floor → Reflex → Finish; no invented facts; forms stay real

### Anti-slop tells

Eyebrow-above-every-heading · tracked-caps label spam · one colored word in headlines · pill clusters · empty frames · gradient-glow orb wallpaper · purple/indigo defaults · Inter-as-default body · multi-layer shadow stacks · fake “live telemetry” · fake success states · newsletter FOMO · hero that fails the first mobile viewport

`SectionHeader` currently defaults to eyebrow + gradient rule — kill the *habit* of eyebrows everywhere.

## Definition of “content unchanged”

**Allowed:** className, CSS, motion props, non-copy wrappers, font loading, visual treatment of the same text/images.

**Not allowed:** changing user-visible strings; changing FAQ/news/org/legal/address content; deleting/reordering section components on a page; editing `mock-data.ts` content fields.

## Language

- Speak to the human owner in **Indonesian**
- Keep prompts / checklists in these prepare files in **English**
