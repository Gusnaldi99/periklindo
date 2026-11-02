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
      'Ajang PERIKLINDO Electric Vehicle Show (PEVS) 2026 dan rangkaian Periklindo Electric Vehicle Conference (PEVC) 2026 menjadi momentum akselerasi ekosistem kendaraan listrik di Indonesia. Ketua Umum PERIKLINDO sekaligus Founder PT Mobil Anak Bangsa (MAB), Jenderal TNI (Purn.) Dr. H.C. Moeldoko, bersama Sekretaris Jenderal Tenggono Chuandra Phoa, menegaskan komitmen membawa Indonesia menjadi pemain utama industri kendaraan listrik dunia.\n\n> “Kendaraan listrik bukan sekadar inovasi transportasi. Ini adalah game changer bagi transformasi industri dan energi nasional.” — Jenderal (Purn.) Dr. Moeldoko\n\nDalam pidato utamanya, Moeldoko menyebut peralihan ke EV menekan biaya rumah tangga, mengurangi subsidi BBM yang mencapai Rp264 triliun, menekan inflasi, serta menuntut kesiapan SPKLU, jaringan PLN, dan regulasi eVTOL. Ia membandingkan biaya operasional kendaraan bermesin bakar Rp6–8 juta per bulan dengan kendaraan listrik yang dapat ditekan hingga sekitar Rp800 ribu.\n\nTenggono Chuandra Phoa menekankan kolaborasi pemerintah, asosiasi, dan pelaku industri agar Indonesia tidak hanya menjadi pasar, tetapi juga basis produksi dan rantai pasok EV internasional. PEVS 2026 di JIExpo Kemayoran kembali menjadi ruang pertemuan pabrikan, pemasok baterai, operator SPKLU, kementerian teknis, dan mitra media.\n\nPERIKLINDO menilai momentum pameran tahunan ini harus diikuti dengan kepastian insentif, percepatan TKDN, dan standardisasi keselamatan baterai agar kepercayaan konsumen terus tumbuh.',
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
      'Dalam pidato pembukaan PEVS 2026, Ketua Umum PERIKLINDO Jenderal TNI (Purn.) Dr. Moeldoko menegaskan kendaraan listrik membawa transformasi ide, konsep, teknologi, dan energi. Pembukaan di JIExpo Kemayoran dihadiri pelaku industri anggota, mitra pameran Dyandra Promosindo, serta perwakilan kementerian terkait.\n\n> “Pemerintah tidak perlu ragu memberi insentif, selama ekosistem pendukung disiapkan secara serius.” — Ketua Umum PERIKLINDO\n\nIa membandingkan biaya operasional mobil ICE Rp6–8 juta per bulan dengan EV sekitar Rp800 ribu, menyoroti subsidi BBM Rp264 triliun, serta meminta kesiapan SPKLU, jaringan kelistrikan, dan sumber daya manusia elektrifikasi. Isu eVTOL juga disinggung sebagai tantangan regulasi masa depan.\n\nDokumentasi pidato ini menjadi rujukan publik dan media untuk memahami arah kebijakan asosiasi: efisiensi rumah tangga, pengurangan beban subsidi, dan kedaulatan rantai pasok kendaraan listrik Indonesia.',
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
      'Dalam wawancara di PEVS 2026, Ketua Umum PERIKLINDO Jenderal TNI (Purn.) Dr. H.C. Moeldoko menilai prospek EV Indonesia cerah berkat sumber daya baterai dan motor, pasar yang besar, serta kesadaran masyarakat yang tumbuh. Tren penjualan mobil listrik disebut mendekati 20 persen pada segmen tertentu, menandai pergeseran preferensi konsumen yang semakin terukur.\n\n> “Jangan tergiur harga murah. Periksa keamanan baterai, jarak tempuh, dan kecepatan pengisian daya.” — Jenderal (Purn.) Dr. Moeldoko\n\nMoeldoko mengingatkan publik untuk menilai kualitas sel dan pack baterai, bukan sekadar harga etalase. Target TKDN 60 persen pada 2027 menjadi tonggak hilirisasi yang harus diikuti pabrikan anggota, pemasok komponen, dan pengembang infrastruktur.\n\nPERIKLINDO mendorong edukasi konsumen melalui uji publik, demonstrasi keselamatan, dan data industri yang transparan agar adopsi kendaraan listrik tidak stagnan di wacana, melainkan masuk ke keputusan pembelian yang rasional.',
    thumbnailUrl: '/assets/news/pevs-2026-wawancara-moeldoko.jpg',
    category: 'Industri EV',
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
      'Di PEVS 2026, Jenderal (Purn.) Dr. Moeldoko sebagai Founder PT Mobil Anak Bangsa (MAB) Indonesia memaparkan tema mobilitas masa depan yang bersih dan efisien. MAB menyasar kebutuhan transportasi ringan, perkebunan, dan pertambangan, serta dilengkapi aplikasi Command Center untuk memantau dan mengendalikan pergerakan armada.\n\n> Command Center MAB menempatkan data operasional armada sebagai alat kendali, bukan sekadar hiasan dashboard.\n\nPaparan ini menegaskan bahwa elektrifikasi tidak berhenti pada kendaraan penumpang. Segmen komersial dan off-highway menjadi ujung tombak pengurangan emisi di sektor produktif, sambil menumbuhkan rantai pasok dalam negeri.\n\nPERIKLINDO menilai kehadiran anggota seperti MAB, Wuling, DFSK, dan pabrikan roda dua memperkuat narasi kedaulatan industri: dari pameran ke adopsi armada, dari uji publik ke standar keselamatan.',
    thumbnailUrl: '/assets/news/pevs-2026-mab-moeldoko.jpg',
    category: 'Siaran Pers',
    publishedAt: '2026-10-29',
    author: 'Irwan MediaPatriot',
    mediaType: 'video',
    sourceName: 'YouTube',
    externalUrl: 'https://youtu.be/onSvOchAjps',
  },
  {
    id: 'np-ppn-dtp-insentif-kblbb',
    title:
      'Insentif Fiskal KBLBB: PPN DTP dan Harmonisasi Perpres 55/2019 – 79/2023',
    slug: 'insentif-fiskal-kblbb-ppn-dtp-perpres-55-2019',
    excerpt:
      'PERIKLINDO merangkum arah insentif kendaraan listrik berbasis baterai: PPN ditanggung pemerintah, penguatan TKDN, dan kepastian regulasi bagi pabrikan anggota.',
    content:
      'Payung hukum percepatan program Kendaraan Bermotor Listrik Berbasis Baterai (KBLBB) tetap bertumpu pada Perpres No. 55 Tahun 2019 beserta perubahannya melalui Perpres No. 79 Tahun 2023. PERIKLINDO menempatkan kepastian insentif fiskal sebagai prasyarat investasi pabrikan, pemasok baterai, dan operator SPKLU.\n\n> “Insentif hanya efektif bila diikuti standardisasi, TKDN, dan kesiapan infrastruktur pengisian daya.” — Sekretariat PERIKLINDO\n\nSkema PPN Ditanggung Pemerintah (PPN DTP) untuk kendaraan listrik tertentu menjadi salah satu instrumen yang paling ditunggu pelaku industri. Asosiasi mendorong agar kriteria TKDN, daftar model yang berhak, dan durasi kebijakan diumumkan secara prediktif agar perencanaan produksi tidak terombang-ambing.\n\nSelain insentif pembelian, PERIKLINDO mengawal kemudahan sertifikasi uji tipe (SUT/SRUT), keselamatan baterai, dan interoperabilitas pengisian daya. Harmonisasi lintas kementerian — Kemenperin, Kemenkeu, Kemenhub, dan ESDM — dinilai kunci agar relaksasi fiskal tidak berjalan terpisah dari kesiapan ekosistem.\n\nBagi calon anggota dan pemangku kebijakan, sekretariat membuka kanal audiensi untuk merinci kebutuhan data industri, usulan teknis, dan agenda pameran PEVS sebagai ruang verifikasi publik.',
    thumbnailUrl: '/assets/news/pevs-2026-game-changer.jpg',
    category: 'Regulasi',
    publishedAt: '2026-09-18',
    author: 'Sekretariat PERIKLINDO',
    isFeatured: false,
    mediaType: 'article',
    sourceName: 'PERIKLINDO',
  },
  {
    id: 'np-pevs-undangan-media',
    title:
      'Siaran Pers: PEVS 2026 di JIExpo Kemayoran Dibuka untuk Industri, Media, dan Publik',
    slug: 'siaran-pers-pevs-2026-jiexpo-kemayoran',
    excerpt:
      'PERIKLINDO bersama Dyandra Promosindo mengundang pelaku industri, jurnalis, dan pengunjung untuk menyaksikan pameran kendaraan listrik, uji publik, dan forum bisnis B2B.',
    content:
      'PERIKLINDO bersama Dyandra Promosindo menggelar PERIKLINDO Electric Vehicle Show (PEVS) 2026 di JIExpo Kemayoran sebagai pameran kendaraan listrik tahunan berskala nasional. Ajang ini merangkai area pameran indoor, zona test drive, serta Periklindo Electric Vehicle Conference (PEVC) untuk dialog kebijakan dan bisnis.\n\n> PEVS diposisikan sebagai ruang verifikasi publik: dari uji keselamatan baterai hingga transaksi B2B antar anggota rantai pasok.\n\nMedia dan jurnalis otomotif dapat mengajukan akreditasi liputan melalui sekretariat. Narasumber resmi mencakup Ketua Umum, Sekretaris Jenderal, serta ketua bidang promosi, hukum, dan hubungan masyarakat.\n\nBagi pabrikan yang belum menjadi anggota, PEVS menjadi pintu pengenalan ekosistem: booth, matchmaking pemasok, dan konsultasi keanggotaan. Publik diundang untuk membandingkan kendaraan listrik roda dua, roda empat, dan solusi komersial secara langsung.\n\nInformasi booth, media kit, dan permohonan wawancara dapat diajukan melalui formulir kontak kategori Media atau Sponsorship di situs resmi PERIKLINDO.',
    thumbnailUrl: '/assets/news/pevs-2026-pidato-moeldoko.jpg',
    category: 'Siaran Pers',
    publishedAt: '2026-10-12',
    author: 'Bidang Humas PERIKLINDO',
    isFeatured: false,
    mediaType: 'article',
    sourceName: 'PERIKLINDO',
  },
  {
    id: 'np-hilirisasi-baterai-tkdn',
    title:
      'Hilirisasi Baterai dan Target TKDN: Peta Jalan Rantai Pasok EV Nasional',
    slug: 'hilirisasi-baterai-target-tkdn-rantai-pasok-ev',
    excerpt:
      'Anggota PERIKLINDO dari segmen sel baterai, pack, dan komponen mendorong peta jalan TKDN agar Indonesia tidak berhenti sebagai pasar, tetapi menjadi basis produksi.',
    content:
      'Hilirisasi baterai menjadi salah satu tiga pilar kerja PERIKLINDO bersama advokasi regulasi dan akselerasi pasar melalui PEVS. Anggota dari klaster komponen dan baterai — termasuk Gotion High-Tech, ABC Lithium, dan pemasok pack nasional — menempatkan target TKDN sebagai ukuran kedaulatan industri, bukan sekadar angka administratif.\n\n> Target TKDN 60 persen pada 2027 menuntut investasi sel, pack, manajemen termal, dan rantai daur ulang yang terukur.\n\nPERIKLINDO mendorong riset bersama BRIN dan perguruan tinggi untuk standardisasi konektor SPKLU, interoperabilitas swap battery, serta protokol uji keselamatan. Tanpa standardisasi, insentif fiskal berisiko mempercepat impor utuh tanpa menumbuhkan pabrik dalam negeri.\n\nBidang Penelitian & Pengembangan serta Data & Informasi asosiasi menyusun pemetaan pemasok, kapasitas produksi, dan kebutuhan SDM elektrifikasi. Data ini menjadi bahan audiensi dengan Kemenperin dan ESDM.\n\nProdusen komponen yang ingin masuk konsorsium dapat menempuh prosedur keanggotaan resmi: IUI/NIB, verifikasi rantai pasok, dan komitmen kode etik perkumpulan.',
    thumbnailUrl: '/assets/news/pevs-2026-mab-moeldoko.jpg',
    category: 'Industri EV',
    publishedAt: '2026-08-21',
    author: 'Bidang Litbang PERIKLINDO',
    isFeatured: false,
    mediaType: 'article',
    sourceName: 'PERIKLINDO',
  },
  {
    id: 'np-audiensi-kemenperin-roadmap',
    title:
      'Audiensi Regulator: Roadmap KBLBB, SPKLU, dan Sertifikasi Uji Tipe',
    slug: 'audiensi-regulator-roadmap-kblbb-spklu-sertifikasi',
    excerpt:
      'Pengurus PERIKLINDO menyampaikan masukan industri soal percepatan SPKLU, kemudahan SUT/SRUT, dan kejelasan insentif kepada kementerian teknis.',
    content:
      'Pengurus PERIKLINDO secara berkala melakukan audiensi dengan kementerian teknis untuk menyelaraskan kebutuhan pabrikan dengan instrumen kebijakan. Agenda terkini mencakup percepatan stasiun pengisian kendaraan listrik umum (SPKLU), kemudahan sertifikasi uji tipe, dan kejelasan durasi insentif.\n\n> Harmonisasi Kemenperin, Kemenhub, Kemenkeu, dan ESDM menentukan apakah pabrikan berani menaikkan kapasitas produksi di dalam negeri.\n\nAsosiasi membawa data anggota: sebaran merek roda dua dan roda empat, kesiapan baterai, serta kendala uji kelaikan yang masih memakan waktu. Usulan yang disampaikan bersifat operasional, bukan slogan: antrean sertifikasi, interoperabilitas charger, dan perlindungan konsumen terhadap baterai di bawah standar.\n\nHasil audiensi diteruskan ke bidang Hukum & Regulasi serta Humas untuk disosialisasikan kepada anggota. Publik dapat menelusuri ringkasan kebijakan melalui laman berita dan FAQ situs resmi.\n\nPermohonan audiensi dari kementerian, pemda, atau mitra riset dapat diajukan melalui halaman Kontak dengan kategori Audiensi.',
    thumbnailUrl: '/assets/news/pevs-2026-wawancara-moeldoko.jpg',
    category: 'Regulasi',
    publishedAt: '2026-07-09',
    author: 'Bidang Hukum & Regulasi',
    isFeatured: false,
    mediaType: 'article',
    sourceName: 'PERIKLINDO',
  },
];

// Postingan social media resmi dan dokumentasi kegiatan PERIKLINDO
export const socialPosts: SocialMediaPost[] = [
  {
    id: 'sp-1',
    platform: 'Instagram',
    caption:
      'Dokumentasi hari pertama PEVS 2026 di JIExpo Kemayoran. Antusiasme pengunjung dan pelaku industri otomotif luar biasa!',
    mediaUrl: '/assets/news/pevs-2026-game-changer.jpg',
    externalUrl: 'https://instagram.com/periklindo',
    postedAt: '2026-10-10',
    isActive: true,
  },
  {
    id: 'sp-2',
    platform: 'YouTube',
    caption:
      'Keynote speech Ketua Umum PERIKLINDO Jend (Purn) Dr. Moeldoko, S.I.P pada pembukaan PEVS.',
    mediaUrl: '/assets/news/pevs-2026-pidato-moeldoko.jpg',
    externalUrl: 'https://youtube.com/@periklindo',
    postedAt: '2026-10-10',
    isActive: true,
  },
  {
    id: 'sp-3',
    platform: 'Instagram',
    caption:
      'Test drive dan sosialisasi kendaraan listrik roda dua serta roda empat di arena outdoor PEVS.',
    mediaUrl: '/assets/news/pevs-2026-wawancara-moeldoko.jpg',
    externalUrl: 'https://instagram.com/periklindo',
    postedAt: '2026-10-11',
    isActive: true,
  },
  {
    id: 'sp-4',
    platform: 'LinkedIn',
    caption:
      'Diskusi panel percepatan ekosistem KBLBB nasional bersama Kementerian Perindustrian dan produsen anggota PERIKLINDO.',
    mediaUrl: '/assets/news/pevs-2026-mab-moeldoko.jpg',
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
    imageUrl: '/assets/news/pevs-2026-game-changer.jpg',
    date: '2026-10-29',
    location: 'JIExpo Kemayoran, Jakarta',
    description:
      'Pembukaan resmi PERIKLINDO Electric Vehicle Show bersama Dyandra Promosindo di JIExpo Kemayoran. Ketua Umum Jenderal (Purn.) Dr. Moeldoko menegaskan kendaraan listrik sebagai game changer ekonomi nasional.',
  },
  {
    id: 'gi-2',
    title: 'Pidato Pembukaan Ketua Umum',
    category: 'Pameran PEVS',
    imageUrl: '/assets/news/pevs-2026-pidato-moeldoko.jpg',
    date: '2026-10-29',
    location: 'Hall Utama JIExpo Kemayoran',
    description:
      'Pidato pembukaan PEVS 2026 menyoroti efisiensi biaya rumah tangga, pengurangan subsidi BBM, kesiapan SPKLU, serta tantangan eVTOL dan SDM elektrifikasi.',
  },
  {
    id: 'gi-3',
    title: 'Booth MAB & Command Center',
    category: 'Pameran PEVS',
    imageUrl: '/assets/news/pevs-2026-mab-moeldoko.jpg',
    date: '2026-10-29',
    location: 'JIExpo Kemayoran, Jakarta',
    description:
      'PT Mobil Anak Bangsa (MAB) menampilkan solusi mobilitas bersih untuk angkutan ringan, perkebunan, dan tambang, lengkap dengan sistem Command Center.',
  },
  {
    id: 'gi-4',
    title: 'Audiensi Kementerian Perindustrian',
    category: 'Audiensi Pemerintah',
    imageUrl: '/assets/news/pevs-2026-wawancara-moeldoko.jpg',
    date: '2026-07-09',
    location: 'Jakarta Pusat',
    description:
      'Pertemuan pengurus PERIKLINDO dengan jajaran regulator membahas roadmap KBLBB nasional, percepatan SPKLU, dan kemudahan sertifikasi uji tipe.',
  },
  {
    id: 'gi-5',
    title: 'Dialog Kebijakan Insentif Fiskal',
    category: 'Audiensi Pemerintah',
    imageUrl: '/assets/news/pevs-2026-game-changer.jpg',
    date: '2026-09-18',
    location: 'Sekretariat PERIKLINDO, The City Tower',
    description:
      'Konsultasi kelembagaan terkait PPN DTP, target TKDN, dan harmonisasi Perpres 55/2019 jo. Perpres 79/2023 bersama pemangku kebijakan teknis.',
  },
  {
    id: 'gi-6',
    title: 'PEVC 2026: Forum Industri & Regulasi',
    category: 'Seminar',
    imageUrl: '/assets/news/pevs-2026-pidato-moeldoko.jpg',
    date: '2026-10-30',
    location: 'JIExpo Kemayoran, Jakarta',
    description:
      'Periklindo Electric Vehicle Conference mempertemukan pabrikan, pemasok baterai, akademisi, dan kementerian untuk merumuskan peta jalan elektrifikasi.',
  },
  {
    id: 'gi-7',
    title: 'Seminar Keselamatan Baterai EV',
    category: 'Seminar',
    imageUrl: '/assets/news/pevs-2026-wawancara-moeldoko.jpg',
    date: '2026-08-14',
    location: 'Jakarta',
    description:
      'Sosialisasi standar keselamatan pack baterai, uji publik, dan edukasi konsumen agar tidak menilai kendaraan listrik semata dari harga etalase.',
  },
  {
    id: 'gi-8',
    title: 'Kunjungan Lini Produksi MAB',
    category: 'Kunjungan Pabrik',
    imageUrl: '/assets/news/pevs-2026-mab-moeldoko.jpg',
    date: '2026-06-22',
    location: 'Fasilitas Produksi MAB',
    description:
      'Kunjungan industri ke fasilitas PT Mobil Anak Bangsa meninjau kesiapan produksi kendaraan listrik komersial dan sistem pemantauan armada.',
  },
  {
    id: 'gi-9',
    title: 'Inspeksi Rantai Pasok Komponen',
    category: 'Kunjungan Pabrik',
    imageUrl: '/assets/news/pevs-2026-game-changer.jpg',
    date: '2026-05-16',
    location: 'Kawasan Industri Anggota',
    description:
      'Verifikasi kesiapan pemasok komponen dan baterai anggota PERIKLINDO dalam mendukung target hilirisasi dan TKDN kendaraan listrik nasional.',
  },
];

// FAQ faktual sesuai latar belakang dan regulasi PERIKLINDO resmi
export const faqItems: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Apa itu PERIKLINDO dan kapan didirikan?',
    answer:
      'PERIKLINDO (Perkumpulan Industri Kendaraan Listrik Indonesia) didirikan pada tahun 2021 atas inisiatif PT Mobil Anak Bangsa (MAB), PT SGMW Motor Indonesia (Wuling Motors), dan PT Sokonindo Automobile (DFSK) guna mendukung percepatan implementasi Perpres No. 55 Tahun 2019 tentang Percepatan Program Kendaraan Bermotor Listrik Berbasis Baterai (KBLBB).',
    category: 'Seputar PERIKLINDO',
    order: 1,
  },
  {
    id: 'faq-2',
    question: 'Apa mandat utama PERIKLINDO sebagai asosiasi industri?',
    answer:
      'PERIKLINDO mewadahi pabrikan kendaraan listrik, industri baterai, dan penyedia infrastruktur SPKLU. Tiga fokus utamanya adalah advokasi regulasi & standardisasi, akselerasi pasar melalui PEVS, serta hilirisasi baterai dan rantai pasok dalam negeri. Perkumpulan berbadan hukum berdasarkan SK Kemenkumham RI dan AD/ART notaris.',
    category: 'Seputar PERIKLINDO',
    order: 2,
  },
  {
    id: 'faq-3',
    question: 'Siapa yang memimpin PERIKLINDO saat ini?',
    answer:
      'Ketua Umum (Chairman) adalah General (ret). Dr. Moeldoko. Sekretaris Jenderal dijabat Tenggono Chuandra Phoa, Wakil Sekretaris Eddy Soepadmo, dan Bendahara Cing Hok. Dewan Penasihat serta enam Ketua Bidang menopang kerja eksekutif asosiasi.',
    category: 'Seputar PERIKLINDO',
    order: 3,
  },
  {
    id: 'faq-4',
    question: 'Bagaimana cara perusahaan mendaftar menjadi anggota PERIKLINDO?',
    answer:
      'Perusahaan yang bergerak di bidang manufaktur kendaraan listrik (roda 2, 4, niaga), komponen & baterai, maupun penyedia infrastruktur pengisian daya dapat mendaftar melalui formulir keanggotaan di halaman Kontak, melampirkan fotokopi Izin Usaha Industri (IUI/NIB), atau mengirim berkas ke sekretariat@periklindo.com dan WhatsApp pendaftaran +62 812-9978-7588.',
    category: 'Prosedur Anggota',
    order: 4,
  },
  {
    id: 'faq-5',
    question: 'Apakah keanggotaan terbuka untuk produsen komponen dan pengembang infrastruktur?',
    answer:
      'Ya. PERIKLINDO terbuka bagi seluruh rantai pasok ekosistem kendaraan listrik nasional, termasuk produsen sel/pack baterai, stasiun pengisian kendaraan listrik (SPKLU), sistem pertukaran baterai (swap station), penyedia IoT, hingga bengkel konversi resmi. Setiap calon anggota melalui verifikasi kelembagaan.',
    category: 'Prosedur Anggota',
    order: 5,
  },
  {
    id: 'faq-6',
    question: 'Apa manfaat bergabung sebagai anggota resmi?',
    answer:
      'Anggota memperoleh akses advokasi regulasi fiskal dan non-fiskal, jejaring rantai pasok B2B, prioritas partisipasi PEVS, data industri, serta forum standardisasi komponen dan keselamatan baterai. Sekretariat juga memfasilitasi audiensi dan kemitraan kelembagaan.',
    category: 'Prosedur Anggota',
    order: 6,
  },
  {
    id: 'faq-7',
    question: 'Apa itu PEVS dan kapan diselenggarakan?',
    answer:
      'PERIKLINDO Electric Vehicle Show (PEVS) adalah pameran kendaraan listrik tahunan yang diselenggarakan PERIKLINDO bersama Dyandra Promosindo di JIExpo Kemayoran. Rangkaiannya mencakup area pameran, uji publik/test drive, transaksi B2B, dan Periklindo Electric Vehicle Conference (PEVC).',
    category: 'PEVS',
    order: 7,
  },
  {
    id: 'faq-8',
    question: 'Bagaimana cara media atau sponsor berpartisipasi di PEVS?',
    answer:
      'Jurnalis dapat mengajukan akreditasi liputan melalui formulir Kontak kategori Media. Calon sponsor, penyewa booth, dan mitra aktivasi menempuh kategori Sponsorship. Tim humas dan bidang promosi akan menindaklanjuti media kit, slot wawancara, serta paket kemitraan pameran.',
    category: 'PEVS',
    order: 8,
  },
  {
    id: 'faq-9',
    question: 'Apakah publik dapat mengunjungi PEVS?',
    answer:
      'Ya. PEVS dibuka untuk pelaku industri, pemerintah, media, dan pengunjung umum. Pengunjung dapat membandingkan kendaraan listrik roda dua, roda empat, bus, dan solusi komersial, serta mengikuti edukasi keselamatan baterai di arena pameran.',
    category: 'PEVS',
    order: 9,
  },
  {
    id: 'faq-10',
    question: 'Regulasi apa yang menjadi landasan program KBLBB?',
    answer:
      'Landasan utama adalah Peraturan Presiden No. 55 Tahun 2019 tentang Percepatan Program Kendaraan Bermotor Listrik Berbasis Baterai untuk Transportasi Jalan, beserta perubahannya melalui Perpres No. 79 Tahun 2023. PERIKLINDO mengawal implementasi kebijakan ini bersama kementerian teknis.',
    category: 'Regulasi & Insentif EV',
    order: 10,
  },
  {
    id: 'faq-11',
    question: 'Bagaimana posisi PERIKLINDO terhadap insentif PPN DTP dan TKDN?',
    answer:
      'PERIKLINDO mendukung insentif fiskal seperti PPN Ditanggung Pemerintah sepanjang diikuti kriteria TKDN yang jelas, standardisasi keselamatan, dan kesiapan SPKLU. Target TKDN 60 persen pada 2027 menjadi rujukan hilirisasi agar Indonesia tidak hanya menjadi pasar impor.',
    category: 'Regulasi & Insentif EV',
    order: 11,
  },
  {
    id: 'faq-12',
    question: 'Ke mana permohonan audiensi kebijakan harus diajukan?',
    answer:
      'Permohonan audiensi kementerian, pemda, perguruan tinggi, atau mitra industri diajukan melalui halaman Kontak kategori Audiensi, email sekretariat@periklindo.com, atau WhatsApp sekretariat +62 877-8970-3728 pada hari kerja pukul 08.00–17.00 WIB.',
    category: 'Regulasi & Insentif EV',
    order: 12,
  },
];

