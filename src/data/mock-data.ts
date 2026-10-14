import type {
  MemberBrand,
  NewsPost,
  SocialMediaPost,
  OrgMember,
  GalleryItem,
  FaqItem,
} from '@/types';

// Anggota resmi PERIKLINDO menggunakan logo original dari /assets/member
export const memberBrands: MemberBrand[] = [
  // --- Kategori: Roda 4 ---
  {
    id: 'mb-wuling',
    name: 'Wuling Motors',
    logoUrl: '/assets/member/logo_wuling.webp',
    category: 'Roda 4',
    isFeatured: true,
    order: 1,
  },
  {
    id: 'mb-dfsk',
    name: 'DFSK',
    logoUrl: '/assets/member/logo_dfsk.webp',
    category: 'Roda 4',
    isFeatured: true,
    order: 2,
  },
  {
    id: 'mb-mg',
    name: 'MG Motor',
    logoUrl: '/assets/member/logo_MG_400x400-px.webp',
    category: 'Roda 4',
    isFeatured: true,
    order: 3,
  },
  {
    id: 'mb-neta',
    name: 'NETA',
    logoUrl: '/assets/member/logo_neta.webp',
    category: 'Roda 4',
    isFeatured: true,
    order: 4,
  },
  {
    id: 'mb-mab',
    name: 'Mobil Anak Bangsa (MAB)',
    logoUrl: '/assets/member/logo_mab.webp',
    category: 'Roda 4',
    isFeatured: true,
    order: 5,
  },
  {
    id: 'mb-crrc',
    name: 'CRRC',
    logoUrl: '/assets/member/logo_crrc.webp',
    category: 'Roda 4',
    isFeatured: false,
    order: 6,
  },

  // --- Kategori: Roda 2 ---
  {
    id: 'mb-maka',
    name: 'MAKA Motors',
    logoUrl: '/assets/member/logo_MAKA.webp',
    category: 'Roda 2',
    isFeatured: true,
    order: 7,
  },
  {
    id: 'mb-smoot',
    name: 'Smoot',
    logoUrl: '/assets/member/logo_smoot.webp',
    category: 'Roda 2',
    isFeatured: true,
    order: 8,
  },
  {
    id: 'mb-benelli',
    name: 'Benelli',
    logoUrl: '/assets/member/logo_beneli.webp',
    category: 'Roda 2',
    isFeatured: true,
    order: 9,
  },
  {
    id: 'mb-keeway',
    name: 'Keeway',
    logoUrl: '/assets/member/logo_keeway.webp',
    category: 'Roda 2',
    isFeatured: true,
    order: 10,
  },
  {
    id: 'mb-polygon',
    name: 'Polygon',
    logoUrl: '/assets/member/logo_polygon.webp',
    category: 'Roda 2',
    isFeatured: true,
    order: 11,
  },
  {
    id: 'mb-molindo',
    name: 'Molindo',
    logoUrl: '/assets/member/logo_molindo.webp',
    category: 'Roda 2',
    isFeatured: false,
    order: 12,
  },
  {
    id: 'mb-beneebike',
    name: 'Benee Bike',
    logoUrl: '/assets/member/logo_beneebike.webp',
    category: 'Roda 2',
    isFeatured: false,
    order: 13,
  },
  {
    id: 'mb-ptbene',
    name: 'PT Bene',
    logoUrl: '/assets/member/logo_ptbene.webp',
    category: 'Roda 2',
    isFeatured: false,
    order: 14,
  },

  // --- Kategori: Komponen & Baterai ---
  {
    id: 'mb-gotion',
    name: 'Gotion High-Tech',
    logoUrl: '/assets/member/logo_Gotion.webp',
    category: 'Komponen & Baterai',
    isFeatured: true,
    order: 15,
  },
  {
    id: 'mb-abc',
    name: 'ABC Lithium',
    logoUrl: '/assets/member/logo_abc.webp',
    category: 'Komponen & Baterai',
    isFeatured: true,
    order: 16,
  },
  {
    id: 'mb-birubatt',
    name: 'Birubatt',
    logoUrl: '/assets/member/logo_birubatt.webp',
    category: 'Komponen & Baterai',
    isFeatured: false,
    order: 17,
  },
  {
    id: 'mb-greenway',
    name: 'Greenway Battery',
    logoUrl: '/assets/member/logo_Greenway.webp',
    category: 'Komponen & Baterai',
    isFeatured: false,
    order: 18,
  },
  {
    id: 'mb-tdl',
    name: 'TDL Indonesia',
    logoUrl: '/assets/member/logo_TDLiD.webp',
    category: 'Komponen & Baterai',
    isFeatured: false,
    order: 19,
  },
  {
    id: 'mb-acsi',
    name: 'ACSI',
    logoUrl: '/assets/member/logo_ACSI.webp',
    category: 'Komponen & Baterai',
    isFeatured: false,
    order: 20,
  },
  {
    id: 'mb-fast',
    name: 'FAST',
    logoUrl: '/assets/member/logo_fast.webp',
    category: 'Komponen & Baterai',
    isFeatured: false,
    order: 21,
  },
  {
    id: 'mb-htm',
    name: 'HTM',
    logoUrl: '/assets/member/logo_htm.webp',
    category: 'Komponen & Baterai',
    isFeatured: false,
    order: 22,
  },
  {
    id: 'mb-wedison',
    name: 'Wedison',
    logoUrl: '/assets/member/logo_Wedison.webp',
    category: 'Komponen & Baterai',
    isFeatured: false,
    order: 23,
  },

  // --- Kategori: Infrastruktur ---
  {
    id: 'mb-telkomsel',
    name: 'Telkomsel',
    logoUrl: '/assets/member/logo_Telkomsel.webp',
    category: 'Infrastruktur',
    isFeatured: true,
    order: 24,
  },
  {
    id: 'mb-ses',
    name: 'SES',
    logoUrl: '/assets/member/logo_SES.webp',
    category: 'Infrastruktur',
    isFeatured: false,
    order: 25,
  },
];

// [PLACEHOLDER] Berita menggunakan data contoh.
// Konten asli akan dikelola melalui Admin CMS.
export const newsPosts: NewsPost[] = [
  {
    id: 'np-1',
    title: 'PERIKLINDO Electric Vehicle Show (PEVS) 2026 Resmi Dibuka',
    slug: 'pevs-2026-resmi-dibuka',
    excerpt:
      'Pameran kendaraan listrik terbesar di Indonesia kembali digelar di JIExpo Kemayoran, menampilkan lebih dari 50 merek kendaraan listrik nasional dan internasional.',
    content: '[REAL DATA] Konten lengkap artikel akan diisi melalui Admin CMS.',
    thumbnailUrl: '/placeholders/news-pevs.svg',
    category: 'Kegiatan',
    publishedAt: '2026-10-10',
    author: 'Sekretariat PERIKLINDO',
    isFeatured: true,
  },
  {
    id: 'np-2',
    title: 'Pemerintah Terbitkan Insentif Baru untuk Kendaraan Listrik Domestik',
    slug: 'insentif-baru-kendaraan-listrik-domestik',
    excerpt:
      'Kebijakan insentif pajak dan subsidi baru diterbitkan untuk mendorong adopsi kendaraan listrik buatan dalam negeri di seluruh wilayah Indonesia.',
    content: '[REAL DATA] Konten lengkap artikel akan diisi melalui Admin CMS.',
    thumbnailUrl: '/placeholders/news-insentif.svg',
    category: 'Regulasi',
    publishedAt: '2026-10-05',
    author: 'Sekretariat PERIKLINDO',
  },
  {
    id: 'np-3',
    title: 'Audiensi PERIKLINDO dengan Kementerian Perindustrian',
    slug: 'audiensi-kemenperin',
    excerpt:
      'Pengurus PERIKLINDO melakukan audiensi dengan Menteri Perindustrian membahas roadmap pengembangan industri kendaraan listrik nasional.',
    content: '[REAL DATA] Konten lengkap artikel akan diisi melalui Admin CMS.',
    thumbnailUrl: '/placeholders/news-audiensi.svg',
    category: 'Siaran Pers',
    publishedAt: '2026-09-28',
    author: 'Sekretariat PERIKLINDO',
  },
];

// [PLACEHOLDER] Postingan social media dikurasi dari Admin CMS.
export const socialPosts: SocialMediaPost[] = [
  {
    id: 'sp-1',
    platform: 'Instagram',
    caption:
      'Dokumentasi hari pertama PEVS 2026. Antusiasme pengunjung luar biasa!',
    mediaUrl: '/placeholders/social-1.svg',
    externalUrl: 'https://instagram.com/periklindo',
    postedAt: '2026-10-10',
    isActive: true,
  },
  {
    id: 'sp-2',
    platform: 'YouTube',
    caption:
      'Keynote speech Ketua Umum PERIKLINDO di pembukaan PEVS 2026.',
    mediaUrl: '/placeholders/social-2.svg',
    externalUrl: 'https://youtube.com/@periklindo',
    postedAt: '2026-10-10',
    isActive: true,
  },
  {
    id: 'sp-3',
    platform: 'Instagram',
    caption:
      'Test drive kendaraan listrik roda dua di area outdoor PEVS 2026.',
    mediaUrl: '/placeholders/social-3.svg',
    externalUrl: 'https://instagram.com/periklindo',
    postedAt: '2026-10-11',
    isActive: true,
  },
  {
    id: 'sp-4',
    platform: 'LinkedIn',
    caption:
      'Diskusi panel ekosistem kendaraan listrik Indonesia bersama pelaku industri.',
    mediaUrl: '/placeholders/social-4.svg',
    externalUrl: 'https://linkedin.com/company/periklindo',
    postedAt: '2026-10-12',
    isActive: true,
  },
];

// [PLACEHOLDER] Data pengurus organisasi.
// Foto dan detail asli akan dimasukkan melalui Admin CMS.
export const orgMembers: OrgMember[] = [
  {
    id: 'om-1',
    fullName: '[Nama Ketua Umum]',
    position: 'Ketua Umum',
    level: 'Pimpinan Inti',
    photoUrl: '/placeholders/person-placeholder.svg',
    order: 1,
  },
  {
    id: 'om-2',
    fullName: '[Nama Sekretaris Jenderal]',
    position: 'Sekretaris Jenderal',
    level: 'Pimpinan Inti',
    photoUrl: '/placeholders/person-placeholder.svg',
    order: 2,
  },
  {
    id: 'om-3',
    fullName: '[Nama Bendahara]',
    position: 'Bendahara',
    level: 'Pimpinan Inti',
    photoUrl: '/placeholders/person-placeholder.svg',
    order: 3,
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gi-1',
    title: 'PEVS 2025 Grand Opening',
    category: 'Pameran PEVS',
    imageUrl: '/placeholders/gallery-1.jpg',
    date: '2025-05-15',
    description:
      'Pembukaan resmi Pameran Kendaraan Listrik Indonesia di JIExpo Kemayoran.',
  },
  {
    id: 'gi-2',
    title: 'Audiensi Kementerian Perindustrian',
    category: 'Audiensi Pemerintah',
    imageUrl: '/placeholders/gallery-2.jpg',
    date: '2025-03-20',
    description:
      'Pertemuan pengurus PERIKLINDO dengan jajaran Kementerian Perindustrian.',
  },
];

// FAQ khusus PERIKLINDO, bukan template generik (R-28)
export const faqItems: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Apa itu PERIKLINDO dan kapan didirikan?',
    answer:
      'PERIKLINDO (Perkumpulan Industri Kendaraan Listrik Indonesia) adalah asosiasi yang mewadahi pelaku industri kendaraan listrik di Indonesia. Didirikan pada tahun 2021 untuk memperkuat koordinasi dan advokasi industri kendaraan listrik nasional.',
    category: 'Umum',
    order: 1,
  },
  {
    id: 'faq-2',
    question: 'Bagaimana cara perusahaan mendaftar menjadi anggota PERIKLINDO?',
    answer:
      'Perusahaan yang bergerak di bidang industri kendaraan listrik (manufaktur, komponen, baterai, atau infrastruktur pengisian) dapat mengajukan permohonan keanggotaan melalui formulir kontak di website ini atau menghubungi sekretariat PERIKLINDO langsung.',
    category: 'Keanggotaan',
    order: 2,
  },
  {
    id: 'faq-3',
    question: 'Apa saja kegiatan utama yang diselenggarakan PERIKLINDO?',
    answer:
      'Kegiatan utama meliputi penyelenggaraan PERIKLINDO Electric Vehicle Show (PEVS), audiensi dengan pemerintah terkait regulasi industri EV, seminar dan forum diskusi industri, serta kunjungan kerja ke fasilitas produksi anggota.',
    category: 'Kegiatan',
    order: 3,
  },
  {
    id: 'faq-4',
    question: 'Apakah PERIKLINDO hanya untuk produsen kendaraan listrik roda empat?',
    answer:
      'Tidak. PERIKLINDO mewadahi seluruh ekosistem industri kendaraan listrik, termasuk produsen roda dua, roda empat, produsen komponen dan baterai, serta penyedia infrastruktur pengisian daya.',
    category: 'Keanggotaan',
    order: 4,
  },
];
