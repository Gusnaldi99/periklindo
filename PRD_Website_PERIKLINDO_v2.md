# PRODUCT REQUIREMENTS DOCUMENT (PRD) - v2.0 (UI-First & Locked Scope)
**Nama Proyek:** Website Resmi PERIKLINDO
**Klien:** PERIKLINDO (Perkumpulan Industri Kendaraan Listrik Indonesia)
**Website Sebelumnya (Existing/Lama):** [https://periklindo.com/](https://periklindo.com/)
**Tanggal Dokumen:** 14 Oktober 2026
**Target Peluncuran (Go-Live):** 31 Oktober 2026
**Tech Stack Utama:** Next.js (App Router) + TypeScript + Tailwind CSS (UI-First dengan Mock/Placeholder Data)
**Status:** Locked Scope v2.0

---

## 1. Ringkasan Eksekutif & Fokus Pengembangan
PERIKLINDO (berdiri sejak 2021) membutuhkan pembaruan dan redesain website *Company Profile* resmi berstandar korporat (menggantikan website sebelumnya di [https://periklindo.com/](https://periklindo.com/)) untuk memperkuat kredibilitas organisasi sebagai asosiasi industri kendaraan listrik di Indonesia.

Sesuai arahan teknis terbaru:
1. **Pendekatan UI-First (Front-End Priority):** Pengembangan difokuskan terlebih dahulu pada antarmuka pengguna (UI/UX) yang interaktif, responsif, dan *pixel-perfect* menggunakan **Next.js + TypeScript** serta **Data Placeholder (Mock Data)** terstruktur sebelum integrasi database penuh.
2. **Penyederhanaan Fitur Anggota (Member Logos Showcase):** Website **tidak memerlukan portal login member yang rumit untuk publik**, melainkan fokus menampilkan **Direktori / Showcase Logo Perusahaan Anggota** di halaman website (mengacu pada referensi `aeml.or.id`) yang dikelola langsung melalui Admin CMS.
3. **Kurasi Media Sosial via Admin CMS:** Konten *Social Media Feed* (Instagram/YouTube/ Berita Kegiatan) dikelola dan dikurasi langsung melalui halaman **Admin CMS**, sehingga tampilan di website selalu rapi, terkontrol, dan tidak bergantung pada widget pihak ketiga yang membebani kecepatan website.

---

## 2. Tujuan Proyek & KPI
* **Tujuan Utama:** Menyediakan platform profil organisasi (*Company Profile*) yang kredibel, menampilkan daftar/logo anggota resmi PERIKLINDO, publikasi berita/artikel industri EV, galeri kegiatan, serta menyediakan Dashboard Admin CMS untuk pengelolaan konten.
* **Target Pengunjung:** Usia 20–60 tahun di seluruh Indonesia, lintas profesi.
* **Indikator Keberhasilan (KPI):**
  * Seluruh halaman UI Publik dan UI Admin CMS selesai dan siap dipresentasikan dengan *placeholder* profesional sebelum akhir Oktober 2026.
  * Skor Google PageSpeed Insights > 90 (Desktop) & > 85 (Mobile).
  * Struktur SEO On-Page siap mengindeks kata kunci utama `"Periklindo"` dan `"asosiasi kendaraan listrik"`.

---

## 3. Ruang Lingkup Halaman & Fitur (Functional Requirements)

### 3.1 Halaman Publik (Public Front-End UI)
1. **Beranda (`/`):**
   * **Hero Section:** Headline utama korporat, sub-headline, statistik singkat organisasi (Berdiri 2021, Total Anggota, Partisipasi Event), dan CTA utama.
   * **Showcase Logo Anggota (*Member Logos*):** Menampilkan jajaran logo perusahaan anggota PERIKLINDO (seperti referensi `aeml.or.id`) dengan tampilan *Infinite Marquee* / *Clean Grid*.
   * **Ringkasan Tentang Kami:** Sekilas profil, visi-misi PERIKLINDO, dan tombol menuju halaman Tentang Kami.
   * **Berita & Artikel Terbaru:** Menampilkan 3–6 kartu artikel terbaru.
   * **Social Media Feed Section:** Menampilkan grid postingan media sosial (Instagram/Video) yang dikurasi dari Admin CMS (lengkap dengan gambar thumbnail, caption singkat, dan link langsung ke postingan asli).
   * **CTA Kontak & Keanggotaan:** Banner ajakan kolaborasi/bergabung yang mengarahkan ke Form Kontak atau WhatsApp resmi.
2. **Tentang Kami (`/tentang-kami`):**
   * Sejarah berdirinya PERIKLINDO (sejak 2021), Visi & Misi, tujuan strategis dalam ekosistem kendaraan listrik Indonesia, serta *showcase* seluruh logo anggota.
3. **Struktur Organisasi (`/struktur-organisasi`):**
   * Hierarki pengurus organisasi (Dewan Pembina, Ketua Umum, Sekretaris Jenderal, Bendahara, dan Ketua Bidang/Divisi) dengan foto potret placeholder, nama, dan jabatan.
4. **Portofolio / Galeri (`/galeri`):**
   * Grid dokumentasi kegiatan organisasi (Pameran PEVS, Audiensi Pemerintah, Seminar, Kunjungan Industri) dengan tab filter kategori dan *Lightbox Preview* saat foto diklik.
5. **Blog / Berita (`/berita` & `/berita/[slug]`):**
   * Halaman daftar berita dengan *Featured Article* (Sorotan Utama), fitur pencarian instan (*search bar*), filter kategori, dan *pagination*.
   * Halaman baca artikel lengkap dengan *breadcrumb*, *share button*, dan artikel terkait.
6. **FAQ (`/faq`):**
   * *Accordion* interaktif berisi daftar pertanyaan umum seputar PERIKLINDO, regulasi EV, dan prosedur pengajuan keanggotaan.
7. **Kontak Kami (`/kontak`) & Floating WhatsApp:**
   * Formulir kontak interaktif (Nama, Email, Instansi/Perusahaan, Subjek, Pesan).
   * Informasi alamat sekretariat, email resmi, jam operasional, dan *embed* Google Maps.
   * **Floating WhatsApp Button** yang selalu tampil di pojok kanan bawah layar.

### 3.2 Halaman Admin CMS (`/admin/*` - UI Management Panel)
Halaman khusus Admin (dilengkapi halaman Login Admin `/admin/login`) untuk mengelola seluruh konten website:
1. **Dashboard Overview (`/admin`):** Ringkasan jumlah Berita, jumlah Logo Anggota, Galeri, Postingan Sosmed, dan Pesan Kontak masuk.
2. **Manajemen Logo Anggota (`/admin/members`):** Tambah/Edit/Hapus logo perusahaan anggota, nama merek, kategori (Roda 2, Roda 4, Ekosistem), link website, dan urutan tampil.
3. **Manajemen Berita / Blog (`/admin/posts`):** Tabel daftar artikel & form tambah/edit berita (Judul, Slug, Kategori, Thumbnail, Rich Text Editor, Meta SEO).
4. **Manajemen Social Media Feed (`/admin/social-feed`):** Kurasi konten Instagram/YouTube yang tampil di Beranda (Input Gambar/Thumbnail, Platform Icon, Caption, Tanggal, dan URL Postingan Asli).
5. **Manajemen Galeri & Struktur Organisasi (`/admin/galleries` & `/admin/organization`):** CRUD foto kegiatan dan data jajaran pengurus.
6. **Manajemen FAQ & Inbox Kontak (`/admin/faqs` & `/admin/messages`):** CRUD pertanyaan FAQ dan melihat daftar pesan dari form kontak pengunjung.

---

## 4. Kebutuhan Non-Fungsional (SEO & Analytics)
* **SEO On-Page:** Struktur heading (`H1`–`H3`) teroptimasi untuk kata kunci `"Periklindo"` dan `"asosiasi kendaraan listrik"`, Dynamic Metadata Next.js, Sitemap XML (`/sitemap.xml`), dan `robots.txt`.
* **Analitik:** Komponen siap integrasi Google Analytics 4 (GA4) dan Google Search Console.
