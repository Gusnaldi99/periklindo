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

// Liputan aktual PEVS 2026 (artikel MediaPatriot + video YouTube)
export const newsPosts: NewsPost[] = [
  {
    id: 'np-pevs-2026-game-changer',
    title:
      'PEVS 2026: Moeldoko Sebut Kendaraan Listrik Sebagai Game Changer Ekonomi',
    slug: 'pevs-2026-moeldoko-sebut-kendaraan-listrik-sebagai-game-changer-ekonomi',
    excerpt:
      'Ketua Umum PERIKLINDO Jenderal (Purn.) Dr. Moeldoko menegaskan kendaraan listrik bukan sekadar inovasi transportasi, melainkan game changer bagi transformasi industri dan energi nasional. Sekretaris Jenderal Tenggono Chuandra Phoa menambahkan, Indonesia berpotensi menjadi pusat produksi dan rantai pasok EV global.',
    content:
      'Ajang PERIKLINDO Electric Vehicle Show (PEVS) 2026 dan rangkaian Periklindo Electric Vehicle Conference (PEVC) 2026 menjadi momentum akselerasi ekosistem kendaraan listrik di Indonesia. Ketua Umum PERIKLINDO sekaligus Founder PT Mobil Anak Bangsa (MAB), Jenderal TNI (Purn.) Dr. H.C. Moeldoko, bersama Sekretaris Jenderal Tenggono Chuandra Phoa, menegaskan komitmen membawa Indonesia menjadi pemain utama industri kendaraan listrik dunia. Dalam pidato utamanya, Moeldoko menyebut peralihan ke EV menekan biaya rumah tangga, mengurangi subsidi BBM yang mencapai Rp264 triliun, menekan inflasi, serta menuntut kesiapan SPKLU, jaringan PLN, dan regulasi eVTOL. Tenggono menekankan kolaborasi pemerintah, asosiasi, dan pelaku industri agar Indonesia tidak hanya menjadi pasar, tetapi juga basis produksi dan rantai pasok EV internasional.',
    thumbnailUrl: '/assets/news/pevs-2026-game-changer.jpg',
    category: 'Kegiatan',
    publishedAt: '2026-11-01',
    author: 'Irwan Hasiholan',
    isFeatured: true,
    mediaType: 'article',
    sourceName: 'MediaPatriot',
    externalUrl:
      'https://www.mediapatriot.co.id/2026/11/01/pevs-2026-moeldoko-sebut-kendaraan-listrik-sebagai-game-changer-ekonomi-periklindo-optimis-dorong-indonesia-jadi-pemain-utama-global/',
  },
  {
    id: 'np-pevs-2026-pidato-moeldoko',
    title:
      'Pidato Ketum PERIKLINDO di PEVS 2026: EV Adalah Game Changer Transformasi Energi',
    slug: 'pidato-ketum-periklindo-moeldoko-ev-game-changer-pevs-2026',
    excerpt:
      'Moeldoko membuka PEVS 2026 di JIExpo Kemayoran dengan menekankan efisiensi biaya rumah tangga, pengurangan subsidi BBM, kesiapan SPKLU, hingga tantangan eVTOL dan SDM elektrifikasi.',
    content:
      'Dalam pidato pembukaan PEVS 2026, Ketua Umum PERIKLINDO Jenderal TNI (Purn.) Dr. Moeldoko menegaskan kendaraan listrik membawa transformasi ide, konsep, teknologi, dan energi. Ia membandingkan biaya operasional mobil ICE Rp6–8 juta per bulan dengan EV sekitar Rp800 ribu, menyoroti subsidi BBM Rp264 triliun, serta meminta pemerintah tidak ragu memberi insentif sambil menyiapkan ekosistem pendukung.',
    thumbnailUrl: '/assets/news/pevs-2026-pidato-moeldoko.jpg',
    category: 'Kegiatan',
    publishedAt: '2026-10-29',
    author: 'Irwan MediaPatriot',
    mediaType: 'video',
    sourceName: 'YouTube',
    externalUrl: 'https://youtu.be/b9QcBG5Vhe0',
  },
  {
    id: 'np-pevs-2026-wawancara-moeldoko',
    title:
      'Wawancara Ketum PERIKLINDO: Prospek EV Indonesia dan Kualitas Baterai',
    slug: 'wawancara-ketum-periklindo-prospek-ev-indonesia-pevs-2026',
    excerpt:
      'Moeldoko menilai tren penjualan mobil listrik mendekati 20 persen, mengingatkan publik tidak tergiur harga murah, dan menyinggung target TKDN 60 persen pada 2027.',
    content:
      'Dalam wawancara di PEVS 2026, Ketua Umum PERIKLINDO Jenderal TNI (Purn.) Dr. H.C. Moeldoko menilai prospek EV Indonesia cerah berkat sumber daya baterai dan motor, pasar yang besar, serta kesadaran masyarakat yang tumbuh. Ia mengimbau konsumen memeriksa keamanan baterai, jarak tempuh, dan kecepatan pengisian daya, serta menyebut target TKDN menuju 60 persen pada 2027.',
    thumbnailUrl: '/assets/news/pevs-2026-wawancara-moeldoko.jpg',
    category: 'Kegiatan',
    publishedAt: '2026-10-29',
    author: 'Irwan MediaPatriot',
    mediaType: 'video',
    sourceName: 'YouTube',
    externalUrl: 'https://youtu.be/jgTREAA6bbw',
  },
  {
    id: 'np-pevs-2026-mab-moeldoko',
    title:
      'Moeldoko di PEVS 2026: MAB Hadirkan Mobilitas Bersih dan Command Center',
    slug: 'moeldoko-mab-mobilitas-bersih-command-center-pevs-2026',
    excerpt:
      'Sebagai Founder PT Mobil Anak Bangsa, Moeldoko memaparkan solusi transportasi bersih untuk angkutan ringan, perkebunan, dan tambang, lengkap dengan sistem Command Center.',
    content:
      'Di PEVS 2026, Jenderal (Purn.) Dr. Moeldoko sebagai Founder PT Mobil Anak Bangsa (MAB) Indonesia memaparkan tema mobilitas masa depan yang bersih dan efisien. MAB menyasar kebutuhan transportasi ringan, perkebunan, dan pertambangan, serta dilengkapi aplikasi Command Center untuk memantau dan mengendalikan pergerakan armada.',
    thumbnailUrl: '/assets/news/pevs-2026-mab-moeldoko.jpg',
    category: 'Kegiatan',
    publishedAt: '2026-10-29',
    author: 'Irwan MediaPatriot',
    mediaType: 'video',
    sourceName: 'YouTube',
    externalUrl: 'https://youtu.be/onSvOchAjps',
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

// Data Pengurus Resmi PERIKLINDO sesuai bagan resmi Organization Structure
export const orgMembers: OrgMember[] = [
  {
    id: 'om-chairman',
    fullName: 'General. (ret). Dr. Moeldoko',
    position: 'Ketua Umum',
    positionEn: 'CHAIRMAN',
    level: 'Pimpinan Inti',
    category: 'chairman',
    photoUrl: '/assets/org/moeldoko.png',
    order: 1,
    description:
      'Memimpin visi, arah strategis, serta advokasi kebijakan tingkat tinggi PERIKLINDO bersama kementerian dan pemangku kepentingan ekosistem KBLBB nasional.',
  },
  {
    id: 'om-secgen',
    fullName: 'Tenggono Chuandra Phoa',
    position: 'Sekretaris Jenderal',
    positionEn: 'SECRETARY GENERAL',
    level: 'Pimpinan Inti',
    category: 'secretariat',
    photoUrl: '/assets/org/tenggono.png',
    order: 2,
    description:
      'Mengelola operasional kelembagaan perkumpulan, koordinasi eksekutif antar anggota, serta sinkronisasi program kerja strategis asosiasi.',
  },
  {
    id: 'om-vicesec',
    fullName: 'Eddy Soepadmo',
    position: 'Wakil Sekretaris',
    positionEn: 'VICE SECRETARY',
    level: 'Pimpinan Inti',
    category: 'secretariat',
    photoUrl: '/assets/org/eddy-soepadmo.png',
    order: 3,
    description:
      'Mendukung tata kelola administrasi organisasi harian, keprotokoleran, serta pengawasan ketercapaian target inisiatif program kerja perkumpulan.',
  },
  {
    id: 'om-treasury',
    fullName: 'Cing Hok',
    position: 'Bendahara',
    positionEn: 'TREASURY',
    level: 'Pimpinan Inti',
    category: 'treasury',
    photoUrl: '/assets/org/cing-hok.png',
    order: 4,
    description:
      'Bertanggung jawab atas pengelolaan keuangan, akuntabilitas anggaran, pendanaan kegiatan tahunan, serta kepatuhan fiskal perkumpulan.',
  },
  {
    id: 'om-advisor-1',
    fullName: 'Ir. Danto Restyawan',
    position: 'Penasihat Senior',
    positionEn: 'SENIOR ADVISOR',
    level: 'Dewan Penasihat',
    category: 'advisor',
    photoUrl: '/assets/org/danto-restyawan.png',
    order: 5,
    description:
      'Memberikan arahan strategis, supervisi kebijakan transportasi darat, dan kajian regulasi keselamatan kendaraan listrik nasional.',
  },
  {
    id: 'om-advisor-2',
    fullName: 'Hendra Noer Saleh',
    position: 'Penasihat Senior',
    positionEn: 'SENIOR ADVISOR',
    level: 'Dewan Penasihat',
    category: 'advisor',
    photoUrl: '/assets/org/hendra-noer-saleh.png',
    order: 6,
    description:
      'Memberikan pertimbangan strategis terkait dinamika pameran otomotif nasional, relasi industri multisektor, dan kemitraan strategis.',
  },
  {
    id: 'om-vc-promo',
    fullName: 'Adrianto Gani',
    position: 'Ketua Promosi & Pemasaran',
    positionEn: 'VICE CHAIRMAN OF PROMOTION AND MARKETING',
    level: 'Ketua Bidang',
    category: 'vice-chairman',
    photoUrl: '/assets/org/adrianto-gani.png',
    order: 7,
    description:
      'Memimpin perencanaan promosi pameran PEVS, aktivasi brand para anggota, dan ekspansi penetrasi pasar kendaraan listrik Indonesia.',
  },
  {
    id: 'om-vc-rnd',
    fullName: 'Prabowo Kartoleksono',
    position: 'Ketua Penelitian & Pengembangan',
    positionEn: 'VICE CHAIRMAN OF RESEARCH AND DEVELOPMENT',
    level: 'Ketua Bidang',
    category: 'vice-chairman',
    photoUrl: '/assets/org/prabowo-kartoleksono.png',
    order: 8,
    description:
      'Memimpin riset teknologi elektrifikasi otomotif, kajian standardisasi baterai & komponen, serta riset bersama universitas dan BRIN.',
  },
  {
    id: 'om-vc-org',
    fullName: 'Kelik Irwantono',
    position: 'Ketua Organisasi & Kelembagaan',
    positionEn: 'VICE CHAIRMAN OF ORGANIZATION AND INSTITUTIONAL',
    level: 'Ketua Bidang',
    category: 'vice-chairman',
    photoUrl: '/assets/org/kelik-irwantono.png',
    order: 9,
    description:
      'Membina hubungan sinergis antar produsen anggota, verifikasi keanggotaan baru rantai pasok, dan penguatan tata kelola asosiasi.',
  },
  {
    id: 'om-vc-pr',
    fullName: 'Ahmad Rafiqi',
    position: 'Ketua Hubungan Masyarakat & Edukasi',
    positionEn: 'VICE CHAIRMAN OF PUBLIC RELATION AND EDUCATION',
    level: 'Ketua Bidang',
    category: 'vice-chairman',
    photoUrl: '/assets/org/ahmad-rafiqi.png',
    order: 10,
    description:
      'Menyampaikan informasi resmi kepada publik dan media, sosialisasi keselamatan kendaraan listrik, serta meluruskan miskonsepsi baterai.',
  },
  {
    id: 'om-vc-legal',
    fullName: 'Puryanto',
    position: 'Ketua Hukum & Regulasi',
    positionEn: 'VICE CHAIRMAN OF LEGAL AND REGULATORY',
    level: 'Ketua Bidang',
    category: 'vice-chairman',
    photoUrl: '/assets/org/puryanto.png',
    order: 11,
    description:
      'Mengawal harmonisasi regulasi KBLBB, advokasi kemudahan sertifikasi uji tipe (SUT/SRUT), serta kepatuhan hukum industri otomotif listrik.',
  },
  {
    id: 'om-vc-data',
    fullName: 'Winarto',
    position: 'Ketua Data & Informasi',
    positionEn: 'VICE CHAIRMAN OF DATA AND INFORMATION',
    level: 'Ketua Bidang',
    category: 'vice-chairman',
    photoUrl: '/assets/org/winarto.png',
    order: 12,
    description:
      'Mengelola pusat data ekosistem kendaraan listrik nasional, pemetaan statistik populasi EV, infrastruktur SPKLU, dan analisis pasar.',
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

