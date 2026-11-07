# Room 01 — Hallmark audit report (PERIKLINDO public)

**Date:** 2026-11-06  
**Mode:** Hallmark `audit` — report only (no product/`src` UI edits)  
**Method:** Static pattern audit + `sloplint` across in-scope components (`--genre editorial`). Dev server was **not** running; no `--render` / screenshot pass.  
**Sloplint snapshot:** **148 FAIL · 14 REFLEX · 102 WARN** across 45 files (shared + page components + `globals.css` + root layout).

**Depth recommendation for later rooms:** keep-the-layout **restyle/polish** (content + section order frozen). Do **not** deal catalog themes. Custom institutional craft in room 02+.

**Out of redesign scope (noted only if Floor a11y):** Navbar / Footer / FloatingWhatsApp / `(public)/layout.tsx`. No blocking chrome a11y Floor found beyond patterns already mirrored in page components (pill chrome, glow). Leave chrome alone unless Final QA finds a real focus/contrast defect.

---

## 1. Floor

Hard fails that later rooms must clear (or stamp as `copy: verbatim` notes where the freeze forbids rewriting strings).

| Gate | Finding | Where |
|---|---|---|
| **70 fake send** | Contact form `setTimeout` → success UI (“Pesan siap ditindaklanjuti…”) with **no request/endpoint**. | `contact/ContactForm.tsx` |
| **62 JS-hidden content** | `ScrollReveal` mounts children at `opacity-0` until IntersectionObserver; no `.js` scoping / visible-by-default. Script-off or late JS = blank blocks. | `shared/ScrollReveal.tsx` (used across home/about) |
| **10a `transition-all`** | Dozens of interactive/card surfaces animate via `transition-all` (and some transform on hover). | Widespread: `NewsCard`, heroes CTAs, org chart, about cards, pillars, etc. |
| **54 / 67 eyebrows & tracked caps** | `SectionHeader` still ships an eyebrow API (`uppercase tracking-[0.16em]`). Call sites mostly omit `eyebrow`, but **page-local** uppercase tracked labels are epidemic (hero metrics, org tier pills, FAQ groups, contact labels, gallery/news tags). | `shared/SectionHeader.tsx` + nearly every route |
| **63 template punctuation** | Arrow glued to CTA copy (`→`); middle-dot / bullet meta joiners in org tiers and CTAs. | e.g. `home/StrategicPillars.tsx`, `organization/OrgChartInteractive.tsx`, `about/AboutCta.tsx` |
| **2a purple/indigo gradient** | Role/header gradients through **indigo**. | `organization/OrgMemberCard.tsx` (`via-indigo` / `to-indigo`) |
| **48 colour literals** | Inline hex / arbitrary colours outside token use (`#FFFFFF` grids, `#0066FF`, `#10B981`, `via-[#0d2244]`). | Heroes, about circuit SVG fills, vision cards |
| **34 overflow-x** | No `overflow-x: clip` on `html`/`body`. Horizontal filter rows use `overflow-x-auto` (OK locally) but document-level Floor clip is missing. | `app/globals.css` |
| **20 stamp** | No Hallmark stamp on first CSS line (expected only after room 02 foundation). | `globals.css` |
| **46a / fake-live posture** | Hero framed as “Live Telemetry”; ping dots + floating “Mandat … Aktif”; Strategic Objectives footer `TELEMETRY: TARGET_AKTIF` / `MONITORING BERKALA` reads as live ops UI without a live system. Metrics appear to be product facts (keep numbers; kill the fake-live costume). | `home/HeroSection.tsx`, `about/StrategicObjectives.tsx`, multiple `animate-ping` status dots |
| **58 screen budget (judged, static)** | Home hero packs status pill + long H1 (gradient fragment) + long lede + dual CTAs + **four** metric cards + dual floating badges — far past “headline / one sentence / actions” and likely fails 1280×800 first-screen visibility without scroll. | `home/HeroSection.tsx` |
| **19 copy tells (frozen)** | Sloplint flags e.g. “Game Changer”, en-dashes. **Do not rewrite** under freeze; later rooms stamp `copy: verbatim` and restyle only. | Content-bearing components |
| **27 / motion** | Global CSS disables marquee/pulse/ping under `prefers-reduced-motion`; Motion/`useReducedMotion` used in many places. Gaps: some looping `motion` float badges / infinite ping costumes still present as “live” tells; `ScrollReveal` still starts invisible. | Heroes, org, WhatsApp chrome (out of scope) |
| **26a focus** | Global `:focus-visible` ring exists (good). Some custom controls rely on `focus:` ring utilities — verify in room 10 with keyboard pass. | `globals.css` + forms/filters |

**Navbar/Footer/WhatsApp Floor note:** none mandatory for redesign. FloatingWhatsApp pulse uses `motion-reduce:hidden` — acceptable for now.

---

## 2. Reflex

Defaults that read as generated; fix or waive on the record in later rooms.

| Tell | Evidence |
|---|---|
| **1 Inter (+ Plus Jakarta Sans)** | Root loads Inter body + Plus Jakarta Sans heads (`layout.tsx` / `globals.css`). Classic AI SaaS pairing; **room 02** replaces typography. |
| **29 glow / blur orbs** | `blur-3xl` electric/teal/cyan orbs behind almost every navy hero and several CTAs. |
| **2b / gradient text** | Home H1 fragment `bg-clip-text` blue→sky→emerald. |
| **3 equal icon cards** | Strategic pillars, core values, objectives — repeated icon-above-title card grids with shared hover lift. |
| **11 hover lift / image scale** | Cards `-translate-y` / `shadow-xl`; hero image `hover:scale-105`. |
| **42 AI chrome (pages)** | Repeated recipe: navy hero + pill badge + blur orbs + rounded-2xl white cards + electric CTA — across home, tentang, org, berita, galeri, faq, kontak. |
| **64 mono-as-costume** | `font-mono` on labels / “TELEMETRY” / meta chips (about, org, hero). |
| **74 stock Tailwind slate / cyan / indigo utilities** | Heavy `slate-*`, `cyan-*`, `indigo-*`, `emerald-*` beside brand tokens. |
| **7b pure white paper** | `--color-background: #ffffff`. |
| **66 decoration / status costume** | Ping dots, floating badges, progress bars as “telemetry”, mono caps strips. |
| **8 / 9 section rhythm** | Same seam: white ↔ slate-50 bands, same card chrome, same SectionHeader + gradient rule — every section feels stamped. |

---

## 3. Finish

Craft debt (answer in later rooms; non-blocking alone).

- **F15 invariants:** multiple primary button recipes (electric / teal / navy / outline) on one page; more centred heading groups than left-aligned on several marketing bands.
- **F7 pill radius:** `rounded-full` / `rounded-2xl`/`3xl` overused on non-controls (tags, metric shells, filter chips).
- **F5 icon coins:** circular icon wells on news cards / CTAs.
- **F3** no `text-wrap: balance` on display heads.
- **F8** multiple scroll-reveal systems (`ScrollReveal` + Motion `whileInView` in `SectionHeader`).
- **F24** hairline border + soft `shadow-xl/2xl` stacks.
- **Photo treatment:** real assets exist (good); often under heavy navy gradient wash + hover zoom + floating stickers.
- **Spacing:** dense hero metric strip + long subtitles under every `SectionHeader` inflate word count per viewport.
- **Type hierarchy:** H2 stuck at `text-2xl md:text-3xl` sitewide via `SectionHeader` — little editorial scale contrast once Inter/Jakarta are replaced.

---

## 4. Per-page severity

| Route | Severity | Worst tells |
|---|---|---|
| `/` | **High** | Fake-live telemetry hero; gradient head; orb wallpaper; metric card strip; cluttered first viewport; Inter; card/hover template through pillars/news/social/CTA. |
| `/tentang-kami` | **High** | Same navy-orb hero recipe; ping status; equal card grids; fake `TELEMETRY` strip on objectives; mono labels; dense section stack (9 sections, same chrome). |
| `/struktur-organisasi` | **High** | Glow beams, indigo gradients on member cards, tracked-caps tier pills, ping “live” dots, `transition-all` everywhere, neon connector costume. |
| `/berita` | **Med** | Hero orb + pill + featured card chrome; tracked uppercase tags; filter chip row; shared card hover template. |
| `/berita/[slug]` | **Med–Low** | Cleaner article surface; still electric→teal rules, uppercase category chip, related `NewsCard` hover lift. |
| `/galeri` | **Med** | Twin blur orbs in hero; uppercase tags on tiles; heavy image overlay gradient; card hover shadow. |
| `/faq` | **Med** | Clone hero; tracked category eyebrows; dual filled CTAs in prompt; orb on contact prompt. |
| `/kontak` | **High (Floor)** | **Fake success** (70); tracked “Formulir Resmi” eyebrow; clone hero; otherwise form structure is usable. |

**Shared primitives (cross-cutting High):**

- `SectionHeader` — eyebrow API + electric→teal rule = default machine open.
- `ScrollReveal` — Floor 62 + `transition-all`.
- `NewsCard` / `MemberLogoCard` — shadow stacks + hover lift.
- `AnimatedCounter` — OK mechanically (respects reduced motion); **costume** around it (telemetry labels) is the problem.
- Root fonts — Inter + Plus Jakarta Sans.

---

## 5. Priority for rooms 02–10

**Keep the planned order.** No swap required.

| Room | Why this order still holds |
|---|---|
| **02 Foundation** | Kill shared tells first: fonts, `SectionHeader`, `ScrollReveal` visibility model, motion tokens, `transition-all` discipline, overflow-x clip, stamp/tokens. Unblocks every page. |
| **03 Home** | Highest reflex density + first-viewport fail; sets institutional voice. |
| **04 Tentang** | Same card/telemetry dialect as home; long page. |
| **05 Struktur** | Heaviest glow/indigo/live-dot costume; needs foundation motion/surface rules. |
| **06 Berita (+ detail)** | Medium; benefits from shared card/header fixes. |
| **07 Galeri** | Medium; photo treatment after type/surface system exists. |
| **08 FAQ** | Medium; mostly clone hero + accordion labels. |
| **09 Kontak** | Must clear **fake send (70)** while keeping form wiring/fields; do after shared type/controls. |
| **10 Final QA** | Render/keyboard/contrast pass (dev server + screenshots). |
| **11 Color (optional)** | Deferred per freeze; current navy/electric/teal can stay until then. |

**Do not** start foundation or page redesigns in the audit chat.

---

## 6. Four-line read (Hallmark audit)

1. **Job:** institutional EV-association site — trust, membership, PEVS, secretariat contact.  
2. **What works:** real brand assets, real org/news/gallery material, clear IA, global focus ring, some reduced-motion hooks.  
3. **What reads generated:** Inter + Jakarta, blur orbs, tracked-caps labels, equal icon cards, gradient/indigo accents, “telemetry/live” costume, identical navy-hero recipe on every route.  
4. **What is broken (Floor):** fake contact success; scroll-reveal blank-without-JS; `transition-all` / tracked-caps / indigo gradients endemic; home first screen overloaded.

---

## 7. Method notes

- Ran: `node …/hallmark/scripts/sloplint.mjs` on `src/components/{home,about,organization,news,gallery,faq,contact,shared}`, `globals.css`, `layout.tsx`.  
- Skipped: `--render` / `--url` (no dev server). Room 10 should re-lint with render.  
- Content/`mock-data` not proposed for rewrite.  
- Zero product source edits in this room.
