# SYSTEM ARCHITECTURE DOCUMENT (`ARCHITECTURE.MD`) - v2.0 (UI-First Architecture)
**Proyek:** Website Resmi PERIKLINDO
**Website Sebelumnya (Existing/Legacy):** [https://periklindo.com/](https://periklindo.com/)
**Tech Stack:** Next.js 14/15 (App Router) + TypeScript + Tailwind CSS + Lucide Icons
**Pendekatan Saat Ini:** UI-First Architecture dengan Modular Mock Data Store (Siap disambungkan ke Database kapan saja)

---

## 1. Filosofi Arsitektur "UI-First & Database-Ready"
Karena fokus tahap pertama adalah menyelesaikan **seluruh tampilan UI (Publik & Admin CMS)** menggunakan data *placeholder*, arsitektur kode dirancang menggunakan pola **Data Repository / Service Layer**.

Artinya:
* Seluruh halaman UI mengambil data dari `src/data/mock-data.ts` melalui fungsi *helper* dengan kontrak `TypeScript Interface` yang ketat (`src/types/index.ts`).
* Saat UI sudah disetujui klien dan siap disambungkan ke database (Supabase / MySQL / PostgreSQL), Anda **tidak perlu mengubah kode komponen UI sama sekali**—cukup mengganti isi fungsi di layer data.

---

## 2. Struktur Folder Proyek (Next.js App Router + TypeScript)

```text
periklindo-web/
├── public/
│   ├── placeholders/              # Aset placeholder (logo anggota, foto pengurus, berita, galeri)
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── (public)/              # Route Group Halaman Publik (Menggunakan Navbar & Footer Utama)
│   │   │   ├── page.tsx           # Beranda (Hero, Member Logos, About, News, Social Feed, CTA)
│   │   │   ├── tentang-kami/
│   │   │   │   └── page.tsx       # Profil, Sejarah 2021, Visi Misi, Showcase Logo Anggota
│   │   │   ├── struktur-organisasi/
│   │   │   │   └── page.tsx       # Grid Pengurus PERIKLINDO
│   │   │   ├── galeri/
│   │   │   │   └── page.tsx       # Portofolio Kegiatan + Filter + Lightbox Modal
│   │   │   ├── berita/
│   │   │   │   ├── page.tsx       # Indeks Berita + Search + Filter Kategori
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx   # Detail Artikel Berita + Share + Related Posts
│   │   │   ├── faq/
│   │   │   │   └── page.tsx       # Accordion FAQ
│   │   │   └── kontak/
│   │   │       └── page.tsx       # Form Kontak + Info Sekretariat + Embed Google Maps
│   │   │
│   │   ├── admin/                 # Route Group Halaman Admin CMS (Sidebar Layout)
│   │   │   ├── login/
│   │   │   │   └── page.tsx       # UI Login Admin CMS
│   │   │   ├── page.tsx           # Dashboard Overview Statistik Konten
│   │   │   ├── members/
│   │   │   │   └── page.tsx       # CMS Manajemen Logo Anggota
│   │   │   ├── posts/
│   │   │   │   └── page.tsx       # CMS Manajemen Berita / Artikel
│   │   │   ├── social-feed/
│   │   │   │   └── page.tsx       # CMS Kurasi Feed Media Sosial (IG/YouTube)
│   │   │   ├── galleries/
│   │   │   │   └── page.tsx       # CMS Manajemen Galeri Portofolio
│   │   │   ├── organization/
│   │   │   │   └── page.tsx       # CMS Manajemen Struktur Pengurus
│   │   │   ├── faqs/
│   │   │   │   └── page.tsx       # CMS Manajemen FAQ
│   │   │   └── messages/
│   │   │       └── page.tsx       # Inbox Pesan dari Form Kontak
│   │   │
│   │   ├── layout.tsx             # Root Layout (Font Plus Jakarta Sans & Inter, Metadata SEO, GA4)
│   │   ├── sitemap.ts             # Generator Sitemap XML Otomatis Next.js
│   │   └── robots.ts              # Generator Robots.txt Otomatis Next.js
│   │
│   ├── components/
│   │   ├── layout/                # Navbar, Footer, FloatingWhatsApp, AdminSidebar
│   │   ├── home/                  # HeroSection, MemberLogoMarquee, LatestNews, SocialFeedGrid
│   │   ├── shared/                # SectionHeader, MemberLogoCard, NewsCard, LightboxModal
│   │   └── ui/                    # Reusable UI Primitives (Button, Input, Badge, Card, Accordion, Modal)
│   │
│   ├── data/
│   │   └── mock-data.ts           # Data Placeholder Lengkap (Logo Anggota, Berita EV, Pengurus, FAQ, Sosmed)
│   │
│   └── types/
│       └── index.ts               # Kontrak TypeScript Interfaces (MemberLogo, NewsPost, SocialPost, dll.)
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 3. Kontrak Data TypeScript (`src/types/index.ts`)
Berikut adalah *interface* utama yang menjadi fondasi seluruh komponen UI dan CMS:

```typescript
export interface MemberBrand {
  id: string;
  name: string;
  logoUrl: string;
  category: 'Roda 2' | 'Roda 4' | 'Komponen & Baterai' | 'Infrastruktur';
  websiteUrl?: string;
  isFeatured: boolean;
  order: number;
}

export interface NewsPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnailUrl: string;
  category: 'Siaran Pers' | 'Regulasi' | 'Kegiatan' | 'Industri EV';
  publishedAt: string;
  author: string;
  isFeatured?: boolean;
}

export interface SocialMediaPost {
  id: string;
  platform: 'Instagram' | 'YouTube' | 'LinkedIn';
  caption: string;
  mediaUrl: string;
  externalUrl: string;
  postedAt: string;
  isActive: boolean;
}

export interface OrgMember {
  id: string;
  fullName: string;
  position: string;
  level: 'Pimpinan Inti' | 'Ketua Bidang' | 'Sekretariat';
  photoUrl: string;
  order: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Pameran PEVS' | 'Audiensi Pemerintah' | 'Seminar & Forum' | 'Kunjungan';
  imageUrl: string;
  date: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}
```
