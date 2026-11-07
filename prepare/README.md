# Prepare — Anti-Slop Redesign (multi-room)

Satu **chat Agent baru** = satu room. Jangan gabung. **Berurutan** — jangan loncat.

## Cara pakai (untuk kamu)

1. Buka [`01-STATUS.md`](./01-STATUS.md) — lihat room mana yang `pending` berikutnya.
2. Pastikan room sebelumnya `done` (kecuali kamu mulai dari 01).
3. Buka file room itu di [`rooms/`](./rooms/).
4. Chat Agent **baru** → copy **Prompt (copy-paste)** → kirim.
5. Agent **wajib sendiri** mencentang & mengisi [`01-STATUS.md`](./01-STATUS.md) saat mulai (`in_progress`) dan selesai (`done` + `[x]`).
6. Kalau agent selesai tanpa update STATUS → suruh dia update dulu sebelum room berikutnya.

Ngobrol sama agent: **Indonesia**. Prompt di file: **English**.

Agent **boleh & sebaiknya** menyalakan `npm run dev` sendiri (permission sudah diberikan) untuk room audit/QA/visual check. Cek terminal dulu supaya tidak dobel server.

## Urutan wajib

| # | File | Fokus |
|---|---|---|
| 01 | [`rooms/01-audit.md`](./rooms/01-audit.md) | Audit saja (tanpa ubah kode) |
| 02 | [`rooms/02-foundation.md`](./rooms/02-foundation.md) | Font + shared primitives (**bukan** Navbar/Footer) |
| 03 | [`rooms/03-home.md`](./rooms/03-home.md) | Beranda |
| 04 | [`rooms/04-tentang-kami.md`](./rooms/04-tentang-kami.md) | Tentang Kami |
| 05 | [`rooms/05-struktur-organisasi.md`](./rooms/05-struktur-organisasi.md) | Struktur Organisasi |
| 06 | [`rooms/06-berita.md`](./rooms/06-berita.md) | Berita list + detail |
| 07 | [`rooms/07-galeri.md`](./rooms/07-galeri.md) | Galeri |
| 08 | [`rooms/08-faq.md`](./rooms/08-faq.md) | FAQ |
| 09 | [`rooms/09-kontak.md`](./rooms/09-kontak.md) | Kontak |
| 10 | [`rooms/10-final-qa.md`](./rooms/10-final-qa.md) | QA lintas halaman |
| 11 | [`rooms/11-color-pass-optional.md`](./rooms/11-color-pass-optional.md) | Opsional — warna |

Baca aturan kunci: [`00-CONTEXT.md`](./00-CONTEXT.md).

## Keputusan terkunci

- Bukan greenfield · bukan acak 50 tema Hallmark
- Keep-the-layout + polish (custom institutional)
- Teks + urutan section diemin
- Navbar / Footer / FloatingWhatsApp / public `layout.tsx` **jangan disentuh**
- Admin skip · font boleh diganti · warna belakangan (11)
- Copy di dalam komponen juga frozen (bukan cuma `mock-data.ts`)

## Kalau agent melenceng

Stop chat, tempel ulang prompt room, atau bilang: *patuhi prepare/00-CONTEXT.md — jangan ubah konten / Navbar / loncat room.*
