# Room 03 — Home (`/`)

**Requires:** room 02 `done`  
**Next:** `04-tentang-kami.md`

## Purpose

Restyle homepage — same sections, same copy. Hero first.

## Section order (frozen) — `src/app/(public)/page.tsx`

1. `HeroSection`  
2. `LeadershipMessage`  
3. `MemberShowcase`  
4. `PevsSpotlight`  
5. `StrategicPillars`  
6. `LatestNews`  
7. `SocialMediaFeed`  
8. `CtaSection`

## Scope in

- `src/components/home/**` (all of: HeroSection, LeadershipMessage, MemberShowcase, PevsSpotlight, StrategicPillars, LatestNews, SocialMediaFeed, CtaSection)
- Do not change mount order in the page file

## Scope out

- Layout chrome (Navbar/Footer/WhatsApp/public layout)
- Other routes · mock-data · copy rewrites · color overhaul

## Definition of done

- [ ] Hero done first, then other sections
- [ ] All 8 sections remain, same order
- [ ] No copy/data meaning changes
- [ ] STATUS ritual completed
- [ ] Stop

---

## Prompt (copy-paste)

```text
Use hallmark to redesign the PERIKLINDO homepage with keep-the-layout + polish. Custom institutional direction — no theme deal, no greenfield.

Read and obey BEFORE anything else:
- prepare/00-CONTEXT.md (Gate + STATUS ritual)
- prepare/rooms/03-home.md
- prepare/01-STATUS.md (room 02 must be done)
- prepare/artifacts/02-type-lock.md (if present)
- prepare/artifacts/01-audit-report.md (if present)

GATE: If room 02 is not done, STOP. Do not edit code.

STATUS ritual:
1) Mark room 03 in_progress in prepare/01-STATUS.md now
2) At end: done + [x] + Notes (date + key files)
3) You edit STATUS yourself — never ask the user to tick boxes

Target: src/app/(public)/page.tsx and src/components/home/**

Frozen section order (exact):
HeroSection → LeadershipMessage → MemberShowcase → PevsSpotlight → StrategicPillars → LatestNews → SocialMediaFeed → CtaSection

Dev server: you may start `npm run dev` yourself (check terminals first) to review the hero/first viewport visually.

Process: restyle HeroSection first (desktop + mobile first viewport), then remaining sections. Remove AI-slop tells while preserving all user-visible strings and data props meaning (including hardcoded copy inside home components).

Hard freeze: no Navbar/Footer/FloatingWhatsApp/public layout; no mock-data.ts content edits; no section add/remove/reorder; no other routes; colors deferred; no commits unless user asks.

Complete STATUS ritual. Indonesian summary with next room = 04. STOP.
```
