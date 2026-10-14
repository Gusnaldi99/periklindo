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

// Data Berita Aktual dari portal publikasi resmi PERIKLINDO & PEVS
export const newsPosts: NewsPost[] = [
  {
    id: 'np-1',
    title: 'PEVS 2026 Kembali Hadir, Fokus pada Future Mobility dan Teknologi Kendaraan Listrik',
    slug: 'pevs-2026-kembali-hadir-fokus-future-mobility',
    excerpt:
      'PERIKLINDO bersama Dyandra Promosindo resmi mengumumkan perhelatan pameran kendaraan listrik tahunan PEVS di JIExpo Kemayoran dengan skala lebih megah.',
    content:
      'PERIKLINDO bersama Dyandra Promosindo kembali menggelar pameran PERIKLINDO Electric Vehicle Show (PEVS) 2026 di JIExpo Kemayoran Jakarta. Pameran ini menjadi wadah strategis akselerasi industri otomotif masa depan dan transisi energi bersih di Tanah Air.',
    thumbnailUrl: '/placeholders/news-pevs.svg',
    category: 'Kegiatan',
    publishedAt: '2026-06-03',
    author: 'Sekretariat PERIKLINDO',
    isFeatured: true,
  },
  {
    id: 'np-2',
    title: 'Insentif Mobil Listrik Dinilai Perlu Menyasar Bus, Truk, dan Logistik',
    slug: 'insentif-mobil-listrik-perlu-menyasar-bus-truk-dan-logistik',
    excerpt:
      'PERIKLINDO mendorong perluasan kebijakan insentif KBLBB dari pemerintah agar mencakup armada transportasi publik dan niaga komersial demi efisiensi rantai pasok nasional.',
    content:
      'Ketua Umum PERIKLINDO menekankan pentingnya ekosistem kendaraan listrik menyentuh segmen bus, truk, dan armada logistik, sehingga dampak reduksi emisi karbon dan efisiensi bahan bakar dapat dirasakan lebih luas oleh perekonomian nasional.',
    thumbnailUrl: '/placeholders/news-insentif.svg',
    category: 'Regulasi',
    publishedAt: '2026-06-03',
    author: 'Sekretariat PERIKLINDO',
  },
  {
    id: 'np-3',
    title: 'Panduan Aman Menggunakan dan Merawat Kendaraan Listrik Sehari-hari',
    slug: 'panduan-aman-menggunakan-kendaraan-listrik',
    excerpt:
      'Sosialisasi resmi PERIKLINDO terkait keselamatan operasional KBLBB, tata cara pengisian daya (charging), dan ketahanan baterai saat cuaca hujan.',
    content:
      'Sebagai asosiasi resmi, PERIKLINDO secara aktif mengedukasi masyarakat tentang standar keselamatan kendaraan listrik berbasis baterai, mulai dari pengisian daya di rumah (home charging) hingga ketahanan sistem kelistrikan berstandar proteksi tinggi.',
    thumbnailUrl: '/placeholders/news-audiensi.svg',
    category: 'Industri EV',
    publishedAt: '2026-05-05',
    author: 'Sekretariat PERIKLINDO',
  },
  {
    id: 'np-4',
    title: '5 Mitos Kendaraan Listrik yang Sering Disalahpahami Publik',
    slug: '5-mitos-kendaraan-listrik-yang-bergentayangan',
    excerpt:
      'Meluruskan miskonsepsi publik seputar keandalan baterai kendaraan listrik, kesiapan stasiun pengisian daya nasional, hingga biaya kepemilikan jangka panjang.',
    content:
      'PERIKLINDO mengulas fakta teknis di balik mitos kendaraan listrik yang sering beredar di masyarakat, menegaskan kesiapan infrastruktur dan keandalan teknologi baterai modern.',
    thumbnailUrl: '/placeholders/news-insentif.svg',
    category: 'Industri EV',
    publishedAt: '2026-07-02',
    author: 'Sekretariat PERIKLINDO',
  },
];

// Postingan social media resmi dan dokumentasi kegiatan PERIKLINDO
export const socialPosts: SocialMediaPost[] = [
  {
    id: 'sp-1',
    platform: 'Instagram',
    caption:
      'Dokumentasi hari pertama PEVS 2026 di JIExpo Kemayoran. Antusiasme pengunjung dan pelaku industri otomotif luar biasa!',
    mediaUrl: '/placeholders/social-1.svg',
    externalUrl: 'https://instagram.com/periklindo',
    postedAt: '2026-10-10',
    isActive: true,
  },
  {
    id: 'sp-2',
    platform: 'YouTube',
    caption:
      'Keynote speech Ketua Umum PERIKLINDO Jend (Purn) Dr. Moeldoko, S.I.P pada pembukaan PEVS.',
    mediaUrl: '/placeholders/social-2.svg',
    externalUrl: 'https://youtube.com/@periklindo',
    postedAt: '2026-10-10',
    isActive: true,
  },
  {
    id: 'sp-3',
    platform: 'Instagram',
    caption:
      'Test drive dan sosialisasi kendaraan listrik roda dua serta roda empat di arena outdoor PEVS.',
    mediaUrl: '/placeholders/social-3.svg',
    externalUrl: 'https://instagram.com/periklindo',
    postedAt: '2026-10-11',
    isActive: true,
  },
  {
    id: 'sp-4',
    platform: 'LinkedIn',
    caption:
      'Diskusi panel percepatan ekosistem KBLBB nasional bersama Kementerian Perindustrian dan produsen anggota PERIKLINDO.',
    mediaUrl: '/placeholders/social-4.svg',
    externalUrl: 'https://linkedin.com/company/periklindo',
    postedAt: '2026-10-12',
    isActive: true,
  },
];

// Data Pengurus Resmi PERIKLINDO sesuai situs resmi periklindo.com/tentang-kami/
export const orgMembers: OrgMember[] = [
  {
    id: 'om-1',
    fullName: 'Jend (Purn) Dr. Moeldoko, S.I.P',
    position: 'Ketua Umum',
    level: 'Pimpinan Inti',
    photoUrl: '/placeholders/person-placeholder.svg',
    order: 1,
  },
  {
    id: 'om-2',
    fullName: 'Bambang Soesatyo, S.E., M.B.A',
    position: 'Dewan Pengawas',
    level: 'Pimpinan Inti',
    photoUrl: '/placeholders/person-placeholder.svg',
    order: 2,
  },
  {
    id: 'om-3',
    fullName: 'Tenggono Chuandra Phoa',
    position: 'Sekretaris Jenderal',
    level: 'Pimpinan Inti',
    photoUrl: '/placeholders/person-placeholder.svg',
    order: 3,
  },
  {
    id: 'om-4',
    fullName: 'Eddy Soepadmo',
    position: 'Wakil Sekjen',
    level: 'Pimpinan Inti',
    photoUrl: '/placeholders/person-placeholder.svg',
    order: 4,
  },
  {
    id: 'om-5',
    fullName: 'Cing Hok',
    position: 'Bendahara',
    level: 'Pimpinan Inti',
    photoUrl: '/placeholders/person-placeholder.svg',
    order: 5,
  },
  {
    id: 'om-6',
    fullName: 'Dhianisa Sasikirana',
    position: 'Sekretaris',
    level: 'Sekretariat',
    photoUrl: '/placeholders/person-placeholder.svg',
    order: 6,
  },
  {
    id: 'om-7',
    fullName: 'Adrianto Gani',
    position: 'Ketua Promosi & Pemasaran',
    level: 'Ketua Bidang',
    photoUrl: '/placeholders/person-placeholder.svg',
    order: 7,
  },
  {
    id: 'om-8',
    fullName: 'Prabowo K',
    position: 'Ketua Pengembangan & Penelitian',
    level: 'Ketua Bidang',
    photoUrl: '/placeholders/person-placeholder.svg',
    order: 8,
  },
  {
    id: 'om-9',
    fullName: 'Kelik Irwantono',
    position: 'Ketua Organisasi & Kelembagaan',
    level: 'Ketua Bidang',
    photoUrl: '/placeholders/person-placeholder.svg',
    order: 9,
  },
  {
    id: 'om-10',
    fullName: 'Ahmad Rofiqi',
    position: 'Ketua Legal & Regulasi',
    level: 'Ketua Bidang',
    photoUrl: '/placeholders/person-placeholder.svg',
    order: 10,
  },
  {
    id: 'om-11',
    fullName: 'Puryanto',
    position: 'Ketua Legal & Regulasi',
    level: 'Ketua Bidang',
    photoUrl: '/placeholders/person-placeholder.svg',
    order: 11,
  },
  {
    id: 'om-12',
    fullName: 'Winarto',
    position: 'Ketua Data & Informasi',
    level: 'Ketua Bidang',
    photoUrl: '/placeholders/person-placeholder.svg',
    order: 12,
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gi-1',
    title: 'PEVS 2026 Grand Opening',
    category: 'Pameran PEVS',
    imageUrl: '/placeholders/gallery-1.jpg',
    date: '2026-06-03',
    description:
      'Pembukaan resmi PERIKLINDO Electric Vehicle Show bersama Dyandra Promosindo di JIExpo Kemayoran.',
  },
  {
    id: 'gi-2',
    title: 'Audiensi Kementerian Perindustrian',
    category: 'Audiensi Pemerintah',
    imageUrl: '/placeholders/gallery-2.jpg',
    date: '2026-03-20',
    description:
      'Pertemuan pengurus PERIKLINDO dengan jajaran regulator membahas roadmap KBLBB nasional.',
  },
];

// FAQ faktual sesuai latar belakang dan regulasi PERIKLINDO resmi
export const faqItems: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Apa itu PERIKLINDO dan kapan didirikan?',
    answer:
      'PERIKLINDO (Perkumpulan Industri Kendaraan Listrik Indonesia) didirikan pada tahun 2021 atas inisiatif PT Mobil Anak Bangsa (MAB), PT SGMW Motor Indonesia (Wuling Motors), dan PT Sokonindo Automobile (DFSK) guna mendukung percepatan implementasi Perpres No. 55 Tahun 2019 tentang Percepatan Program Kendaraan Bermotor Listrik Berbasis Baterai (KBLBB).',
    category: 'Umum',
    order: 1,
  },
  {
    id: 'faq-2',
    question: 'Bagaimana cara perusahaan mendaftar menjadi anggota PERIKLINDO?',
    answer:
      'Perusahaan yang bergerak di bidang manufaktur kendaraan listrik (roda 2, 4, niaga), komponen & baterai, maupun penyedia infrastruktur pengisian daya dapat mendaftar dengan mengisi Formulir Registrasi Keanggotaan, melampirkan fotokopi Izin Usaha Industri (IUI/NIB), atau mengirim berkas ke email sekretariat@periklindo.com dan WhatsApp +62 812-9978-7588.',
    category: 'Keanggotaan',
    order: 2,
  },
  {
    id: 'faq-3',
    question: 'Apa saja kegiatan utama yang diselenggarakan PERIKLINDO?',
    answer:
      'Kegiatan utama mencakup penyelenggaraan tahunan PERIKLINDO Electric Vehicle Show (PEVS) bersama Dyandra Promosindo di JIExpo Kemayoran, advokasi kebijakan dan insentif KBLBB bersama pemerintah, sosialisasi keselamatan kendaraan listrik, serta fasilitasi sinergi bisnis antar anggota.',
    category: 'Kegiatan',
    order: 3,
  },
  {
    id: 'faq-4',
    question: 'Apakah keanggotaan terbuka untuk produsen komponen dan pengembang infrastruktur?',
    answer:
      'Ya. PERIKLINDO terbuka bagi seluruh rantai pasok ekosistem kendaraan listrik nasional, termasuk produsen sel/pack baterai, stasiun pengisian kendaraan listrik (SPKLU), sistem pertukaran baterai (swap station), penyedia IoT, hingga bengkel konversi resmi.',
    category: 'Keanggotaan',
    order: 4,
  },
];

