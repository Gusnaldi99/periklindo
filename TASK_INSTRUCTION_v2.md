# TASK INSTRUCTIONS & UI-FIRST ROADMAP (`TASK_INSTRUCTION.MD`) - v2.0
**Proyek:** Website Resmi PERIKLINDO
**Website Sebelumnya (Existing/Lama):** [https://periklindo.com/](https://periklindo.com/)
**Fokus Eksekusi Saat Ini:** Next.js + TypeScript (UI-First dengan Data Placeholder, Tanpa Login Member Publik, Dengan UI Admin CMS)
**Target Go-Live:** Akhir Oktober 2026

---

## Urutan Pengerjaan (Step-by-Step untuk Developer / AI Coding Agent)

### TAHAP 1: Setup Project Next.js, TypeScript & Mock Data Store (Prioritas Pertama)
- [ ] **Task 1.1: Inisialisasi Next.js + TypeScript + Tailwind CSS**
  - Setup proyek Next.js App Router dengan TypeScript, Tailwind CSS, dan `lucide-react` untuk ikonografi.
  - Konfigurasi Google Fonts (`Plus Jakarta Sans` & `Inter`) dan variabel warna korporat PERIKLINDO di `tailwind.config.ts`.
- [ ] **Task 1.2: Pembuatan TypeScript Interfaces & Data Placeholder (`src/types` & `src/data/mock-data.ts`)**
  - Buat kontrak tipe data (`MemberBrand`, `NewsPost`, `SocialMediaPost`, `OrgMember`, `GalleryItem`, `FaqItem`).
  - Isi `mock-data.ts` dengan data *placeholder* realistis bertema PERIKLINDO (daftar merek anggota kendaraan listrik, artikel berita EV, jajaran pengurus, foto kegiatan placeholder, FAQ, dan feed sosial media).

---

### TAHAP 2: Komponen Global & Halaman Beranda (`/`)
- [ ] **Task 2.1: Pembuatan `Navbar`, `Footer`, dan `FloatingWhatsApp`**
  - Buat `Navbar` sticky dengan menu: *Beranda, Tentang Kami, Struktur Organisasi, Portofolio/Galeri, Berita, FAQ, Kontak*.
  - Buat `Footer` korporat lengkap dengan peta situs, info sekretariat, dan sosial media.
  - Buat tombol `FloatingWhatsApp` di kanan bawah layar.
- [ ] **Task 2.2: Pembangunan Halaman Beranda (`/`)**
  - **Hero Section:** Visual industri EV, headline utama, statistik organisasi, dan tombol CTA.
  - **Showcase Logo Anggota:** Grid/Marquee logo perusahaan anggota PERIKLINDO (mengacu pada tampilan `aeml.or.id`).
  - **Highlight Tentang Kami:** Ringkasan visi-misi dan sejarah singkat sejak 2021.
  - **Berita Terbaru:** Menampilkan 3 artikel terbaru dari mock data.
  - **Social Media Feed:** Menampilkan grid postingan sosial media yang dikurasi via CMS.

---

### TAHAP 3: Halaman Profil, Struktur Organisasi, Galeri & FAQ
- [ ] **Task 3.1: Halaman Tentang Kami (`/tentang-kami`)**
  - Buat seksi Sejarah PERIKLINDO (2021), Visi & Misi, Peran Ekosistem EV, serta direktori lengkap logo perusahaan anggota dengan filter kategori.
- [ ] **Task 3.2: Halaman Struktur Organisasi (`/struktur-organisasi`)**
  - Buat layout kartu pengurus berdasarkan tingkatan jabatan (Dewan Pembina, Ketua Umum, Sekjen, Bendahara, Ketua Bidang) menggunakan foto placeholder profesional.
- [ ] **Task 3.3: Halaman Portofolio / Galeri (`/galeri`)**
  - Buat grid galeri foto kegiatan dengan filter kategori acara dan fitur *Modal Lightbox* saat gambar diklik.
- [ ] **Task 3.4: Halaman FAQ (`/faq`) & Kontak Kami (`/kontak`)**
  - Buat komponen *Accordion* interaktif di halaman FAQ.
  - Buat halaman Kontak dengan Form Kontak interaktif (dengan simulasi *submit toast notification*) dan *embed* Google Maps.

---

### TAHAP 4: Modul Blog / Berita (`/berita` & `/berita/[slug]`)
- [ ] **Task 4.1: Halaman Indeks Berita (`/berita`)**
  - Buat komponen *Featured Article* di bagian atas, diikuti fitur *Search Bar* instan, tab filter kategori berita, dan grid 3 kolom.
- [ ] **Task 4.2: Halaman Baca Artikel (`/berita/[slug]`)**
  - Buat tampilan baca artikel yang rapi, *breadcrumb*, tanggal rilis, tombol bagikan (*share*), dan rekomendasi berita terkait di bagian bawah.

---

### TAHAP 5: Pembangunan UI Admin CMS (`/admin/*`)
- [ ] **Task 5.1: Layout Admin CMS & Halaman Login Admin (`/admin/login` & `/admin`)**
  - Buat halaman Login Admin dan *Sidebar Navigation* untuk panel CMS.
  - Buat halaman Dashboard Overview berisi kartu ringkasan statistik konten.
- [ ] **Task 5.2: Modul Manajemen Konten (Logo Anggota, Berita, Social Media Feed, Galeri, Pengurus, FAQ)**
  - Buat UI Tabel & Modal Form Tambah/Edit untuk:
    1. **Logo Anggota (`/admin/members`)**
    2. **Berita/Blog (`/admin/posts`)**
    3. **Social Media Feed (`/admin/social-feed`)**
    4. **Galeri & Struktur Organisasi (`/admin/galleries` & `/admin/organization`)**
    5. **FAQ & Pesan Kontak (`/admin/faqs` & `/admin/messages`)**

---

### TAHAP 6: Technical SEO, Ganti Aset Asli & Integrasi Database (Menjelang Go-Live)
- [ ] **Task 6.1: Konfigurasi SEO On-Page & Analitik**
  - Pasang metadata SEO untuk kata kunci `"Periklindo"` dan `"asosiasi kendaraan listrik"`, generator `/sitemap.xml`, `/robots.txt`, serta script GA4.
- [ ] **Task 6.2: Penggantian Placeholder dengan Aset Klien & Koneksi Database**
  - Ganti teks, foto, dan logo *placeholder* dengan aset resmi dari klien.
  - Sambungkan layer data ke database pilihan sebelum *deployment* ke hosting/domain klien.
