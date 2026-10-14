# UI/UX & DESIGN SYSTEM SPECIFICATION (`DESIGN.MD`) - v2.0
**Proyek:** Website Resmi PERIKLINDO
**Website Sebelumnya (Existing/Lama):** [https://periklindo.com/](https://periklindo.com/)
**Gaya Visual:** Korporat, Profesional, Bersih, Modern (*High-Contrast Corporate EV Ecosystem*)
**Referensi Utama:** [https://aeml.or.id/](https://aeml.or.id/) (Khususnya pada tampilan Logo Anggota & Berita)

---

## 1. Identitas Warna & Tema Visual
Mengusung citra wibawa organisasi nasional yang berfokus pada masa depan energi bersih dan mobilitas elektrik:

* **Corporate Navy (`#0A192F`):** Warna dasar Header korporat, Footer, dan latar banner utama.
* **Electric Blue (`#0066FF`):** Warna aksen utama untuk tombol CTA, *active state* navigasi, *badge* kategori berita, dan sorotan elemen UI.
* **Eco Mobility Teal (`#10B981`):** Aksen pendukung untuk elemen ramah lingkungan dan tombol *Floating WhatsApp*.
* **Pure White & Slate Surface (`#FFFFFF` & `#F8FAFC`):** Ruang putih yang luas (*generous whitespace*) agar logo-logo merek anggota dan foto berita tampak bersih serta menonjol seperti pada referensi `aeml.or.id`.

## 2. Tipografi (Google Fonts)
* **Heading:** `Plus Jakarta Sans` (Weights: `600 SemiBold`, `700 Bold`, `800 ExtraBold`) — Memberikan kesan tegas, modern, dan institusional.
* **Body & UI Controls:** `Inter` (Weights: `400 Regular`, `500 Medium`, `600 SemiBold`) — Menjamin keterbacaan tinggi pada artikel berita dan tabel Admin CMS.

---

## 3. Desain Komponen Utama (Dengan Sistem Placeholder Profesional)

### 3.1 Komponen Showcase Logo Anggota (Gaya `aeml.or.id`)
* **Tanpa Login Member Publik:** Fokus 100% pada eksposur visual merek-merek anggota PERIKLINDO.
* **Desain Kartu Logo:**
  * Kotak rasio `16:9` dengan latar `#FFFFFF`, border halus `1px solid #E2E8F0`, dan `rounded-xl`.
  * Menggunakan *SVG Placeholder Logo* bergaya otomotif/EV modern untuk tahap awal (hingga aset logo asli dimasukkan).
  * Efek interaksi: *Subtle elevation* (`hover:shadow-md hover:border-blue-500/40`) dan transisi skala halus saat kursor diarahkan.
  * Di **Beranda**: Ditampilkan dalam bentuk **Grid Korporat + Auto-Scroll Carousel** lengkap dengan filter singkat kategori (*Semua, Roda 2, Roda 4, Ekosistem*).

### 3.2 Komponen Berita & Artikel (Gaya `aeml.or.id`)
* **Sorotan Utama (*Featured News Banner*):** Di bagian atas halaman `/berita`, menampilkan 1 artikel utama dengan layout 2 kolom (Gambar besar di kiri, Kategori + Judul besar + Kutipan + CTA di kanan).
* **Grid Berita 3 Kolom:** Setiap kartu memiliki *thumbnail* rasio `16:9` dengan *zoom effect* halus saat di-hover, *badge* kategori berwarna biru elektrik, tanggal publikasi, judul maksimal 2 baris (`line-clamp-2`), dan ringkasan pendek.

### 3.3 Komponen Social Media Feed (Dikurasi dari Admin CMS)
* Ditampilkan di bagian bawah Beranda sebelum Footer.
* Berupa grid 4 kolom (Desktop) atau *horizontal swipe* (Mobile) yang menampilkan kartu visual berformat persegi (`1:1` atau `4:5` ala Instagram) lengkap dengan *badge* ikon platform (Instagram/YouTube), cuplikan *caption* saat di-hover, dan tautan langsung ke postingan resmi PERIKLINDO.

### 3.4 Desain UI Admin CMS (`/admin/*`)
* Menggunakan layout **Modern Dashboard Sidebar** di sisi kiri (Gelap: `#0A192F`) dan area kerja bersih di sisi kanan (`#F8FAFC`).
* Dilengkapi komponen interaktif (Modal Tambah/Edit Logo Anggota, Form Editor Berita, Kurasi Postingan Sosmed, dan Tabel Data dengan *Search* & *Status Badge*) yang bekerja secara *real-time* di sisi *client state* selama tahap UI-First.
