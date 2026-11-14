import type {
  MemberBrand,
  NewsPost,
  SocialMediaPost,
  OrgMember,
  GalleryItem,
  FaqItem,
  ContactInfo,
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
  {
    id: 'mb-evpower',
    name: 'EV Power',
    logoUrl: '/assets/member/logo_evpower.webp',
    category: 'Infrastruktur',
    isFeatured: false,
    order: 26,
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
    category: 'Kegiatan PERIKLINDO',
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
    category: 'Kegiatan PERIKLINDO',
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
      'Moeldoko menilai tren penjualan mobil listrik mendekati 20 persen, mengingatkan publik tidak tergiur harga murah, dan menyinggung target TKDN 60 persen pada 2027 dalam kerangka Perpres 55/2019 jo. Perpres 79/2023.',
    content:
      'Dalam wawancara di PEVS 2026, Ketua Umum PERIKLINDO Jenderal TNI (Purn.) Dr. H.C. Moeldoko menilai prospek EV Indonesia cerah berkat sumber daya baterai dan motor, pasar yang besar, serta kesadaran masyarakat yang tumbuh. Tren penjualan mobil listrik disebut mendekati 20 persen pada segmen tertentu, menandai pergeseran preferensi konsumen yang semakin terukur.\n\n> “Jangan tergiur harga murah. Periksa keamanan baterai, jarak tempuh, dan kecepatan pengisian daya.” — Jenderal (Purn.) Dr. Moeldoko\n\nMoeldoko mengingatkan publik untuk menilai kualitas sel dan pack baterai, bukan sekadar harga etalase. Target TKDN 60 persen pada 2027 — merujuk kerangka Perpres No. 55 Tahun 2019 jo. Perpres No. 79 Tahun 2023 dan ketentuan Permenperin terkait — menjadi tonggak hilirisasi yang harus diikuti pabrikan anggota, pemasok komponen, dan pengembang infrastruktur; ini target regulasi nasional, bukan capaian yang sudah dinyatakan tercapai oleh PERIKLINDO.\n\nPERIKLINDO mendorong edukasi konsumen melalui uji publik, demonstrasi keselamatan, dan data industri yang transparan agar adopsi kendaraan listrik tidak stagnan di wacana, melainkan masuk ke keputusan pembelian yang rasional.',
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
    category: 'Siaran Pers Resmi',
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
    category: 'Kebijakan & Regulasi',
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
    category: 'Siaran Pers Resmi',
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
      'Hilirisasi baterai menjadi salah satu tiga pilar kerja PERIKLINDO bersama advokasi regulasi dan akselerasi pasar melalui PEVS. Anggota dari klaster komponen dan baterai — termasuk Gotion High-Tech, ABC Lithium, dan pemasok pack nasional — menempatkan target TKDN sebagai ukuran kedaulatan industri, bukan sekadar angka administratif.\n\n> Target TKDN 60 persen pada 2027 merujuk kerangka Perpres No. 55 Tahun 2019 jo. Perpres No. 79 Tahun 2023 dan Permenperin terkait — target regulasi nasional yang menuntut investasi sel, pack, manajemen termal, dan rantai daur ulang yang terukur, bukan capaian yang sudah dinyatakan tercapai oleh PERIKLINDO.\n\nPERIKLINDO mendorong riset bersama BRIN dan perguruan tinggi untuk standardisasi konektor SPKLU, interoperabilitas swap battery, serta protokol uji keselamatan. Tanpa standardisasi, insentif fiskal berisiko mempercepat impor utuh tanpa menumbuhkan pabrik dalam negeri.\n\nBidang Penelitian & Pengembangan serta Data & Informasi asosiasi menyusun pemetaan pemasok, kapasitas produksi, dan kebutuhan SDM elektrifikasi. Data ini menjadi bahan audiensi dengan Kemenperin dan ESDM.\n\nProdusen komponen yang ingin masuk konsorsium dapat menempuh prosedur keanggotaan resmi: IUI/NIB, verifikasi rantai pasok, dan komitmen kode etik perkumpulan.',
    thumbnailUrl: '/assets/news/pevs-2026-mab-moeldoko.jpg',
    category: 'Industri EV',
    publishedAt: '2026-08-21',
    author: 'Bidang Litbang PERIKLINDO',
    isFeatured: false,
    mediaType: 'article',
    sourceName: 'PERIKLINDO',
  },
  {
    id: 'np-afeva-kemitraan-regional',
    title:
      'Kemitraan Regional: PERIKLINDO Perkuat Jejaring bersama AFEVA',
    slug: 'kemitraan-regional-periklindo-afeva',
    excerpt:
      'PERIKLINDO meneguhkan kerja sama dengan Asian Federation of Electric Vehicle Associations (AFEVA) untuk berbagi praktik terbaik elektrifikasi, standardisasi, dan pengembangan pasar ASEAN.',
    // TODO(R03): teks menyebut “Bidang Kerja Sama Internasional”; orgMembers memakai
    // “Penelitian & Pengembangan” / “Hubungan Antar Lembaga”. Biarkan existing sampai SK.
    content:
      'Dalam rangka memperkuat posisi Indonesia di peta industri kendaraan listrik Asia, PERIKLINDO menjalin kemitraan dengan Asian Federation of Electric Vehicle Associations (AFEVA). Kolaborasi ini membuka ruang pertukaran kebijakan, data industri, dan praktik terbaik antar asosiasi EV regional.\n\n> Kerja sama AFEVA menempatkan Indonesia sebagai mitra dialog, bukan sekadar pasar tujuan.\n\nAgenda bersama mencakup standardisasi keselamatan baterai, interoperabilitas infrastruktur pengisian, serta fasilitasi matchmaking pabrikan dan pemasok lintas negara. Bidang Kerja Sama Internasional PERIKLINDO menjadi titik koordinasi teknis dengan mitra AFEVA.\n\nHasil kemitraan ini diselaraskan dengan agenda domestik: target TKDN dalam kerangka Perpres 55/2019 jo. Perpres 79/2023, perluasan keanggotaan, dan penyelenggaraan PEVS/PEVC sebagai etalase industri nasional. Publik dan anggota dapat mengikuti perkembangan melalui kanal berita resmi PERIKLINDO.',
    thumbnailUrl: '/assets/news/pevs-2026-game-changer.jpg',
    category: 'Kerja Sama',
    publishedAt: '2026-06-20',
    author: 'Bidang Hubungan Antar Lembaga',
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
    category: 'Kebijakan & Regulasi',
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

// Data Pengurus Resmi PERIKLINDO Periode 2026–2031
// Hierarki: Dewan Pembina → Dewan Pengawas → Pimpinan Inti → Ketua Bidang
// Catatan: nama lengkap Dewan Pengawas final mengikuti SK resmi (pembaruan sekretariat).
// TODO(R03): cocokkan nomenklatur Ketua Bidang dengan SK; dokumen kerja saling
// bertentangan di tempat lain (“Kerja Sama Internasional” vs “Penelitian & Pengembangan”).
export const orgMembers: OrgMember[] = [
  // --- Tingkat I: Dewan Pembina ---
  {
    id: 'om-pembina-1',
    fullName: 'Ir. Danto Restyawan',
    position: 'Dewan Pembina',
    level: 'Dewan Pembina',
    category: 'pembina',
    photoUrl: '/assets/org/danto-restyawan.png',
    order: 1,
    description:
      'Memberikan arahan strategis, supervisi kebijakan transportasi darat, dan kajian regulasi keselamatan kendaraan listrik nasional.',
  },
  {
    id: 'om-pembina-2',
    fullName: 'Hendra Noer Saleh',
    position: 'Dewan Pembina',
    level: 'Dewan Pembina',
    category: 'pembina',
    photoUrl: '/assets/org/hendra-noer-saleh.png',
    order: 2,
    description:
      'Memberikan pertimbangan strategis terkait dinamika pameran otomotif nasional, relasi industri multisektor, dan kemitraan strategis.',
  },

  // --- Tingkat II: Dewan Pengawas ---
  // Slot data siap diisi sesuai SK resmi Periode 2026–2031 (pembaruan sekretariat).
  // Contoh entri:
  // { id: 'om-pengawas-1', fullName: '...', position: 'Ketua Dewan Pengawas', level: 'Dewan Pengawas', category: 'pengawas', photoUrl: '/assets/org/...', order: 3, description: '...' },

  // --- Tingkat III: Pimpinan Inti (Pengurus Harian) ---
  {
    id: 'om-chairman',
    fullName: 'Jenderal TNI (Purn.) Dr. Moeldoko',
    position: 'Ketua Umum',
    level: 'Pimpinan Inti',
    category: 'chairman',
    photoUrl: '/assets/org/moeldoko.png',
    order: 5,
    description:
      'Memimpin visi, arah strategis, serta advokasi kebijakan tingkat tinggi PERIKLINDO bersama kementerian dan pemangku kepentingan ekosistem KBLBB nasional.',
  },
  {
    id: 'om-secgen',
    fullName: 'Tenggono Chuandra Phoa',
    position: 'Sekretaris Jenderal',
    level: 'Pimpinan Inti',
    category: 'secretariat',
    photoUrl: '/assets/org/tenggono.png',
    order: 6,
    description:
      'Mengelola operasional kelembagaan perkumpulan, koordinasi eksekutif antar anggota, serta sinkronisasi program kerja strategis asosiasi.',
  },
  {
    id: 'om-vicesec',
    fullName: 'Eddy Soepadmo',
    position: 'Wakil Sekretaris Jenderal',
    level: 'Pimpinan Inti',
    category: 'secretariat',
    photoUrl: '/assets/org/eddy-soepadmo.png',
    order: 7,
    description:
      'Mendukung tata kelola administrasi organisasi harian, keprotokoleran, serta pengawasan ketercapaian target inisiatif program kerja perkumpulan.',
  },
  {
    id: 'om-treasury',
    fullName: 'Cing Hok',
    position: 'Bendahara',
    level: 'Pimpinan Inti',
    category: 'treasury',
    photoUrl: '/assets/org/cing-hok.png',
    order: 8,
    description:
      'Bertanggung jawab atas pengelolaan keuangan, akuntabilitas anggaran, pendanaan kegiatan tahunan, serta kepatuhan fiskal perkumpulan.',
  },

  // --- Tingkat IV: Ketua Bidang Teknis ---
  {
    id: 'om-bidang-promo',
    fullName: 'Adrianto Gani',
    position: 'Ketua Bidang Promosi & Pemasaran',
    level: 'Ketua Bidang',
    category: 'vice-chairman',
    photoUrl: '/assets/org/adrianto-gani.png',
    order: 9,
    description:
      'Memimpin perencanaan promosi pameran PEVS, aktivasi brand para anggota, dan ekspansi penetrasi pasar kendaraan listrik Indonesia.',
  },
  {
    id: 'om-bidang-lembaga',
    fullName: 'Kelik Irwantono',
    position: 'Ketua Bidang Hubungan Antar Lembaga',
    level: 'Ketua Bidang',
    category: 'vice-chairman',
    photoUrl: '/assets/org/kelik-irwantono.png',
    order: 10,
    description:
      'Membangun sinergi kelembagaan dengan kementerian, BUMN, asosiasi mitra, serta pemangku kepentingan lintas sektor untuk penguatan ekosistem EV.',
  },
  {
    id: 'om-bidang-regulasi',
    fullName: 'Ahmad Rafiqi',
    position: 'Ketua Bidang Regulasi & Sertifikasi',
    level: 'Ketua Bidang',
    category: 'vice-chairman',
    photoUrl: '/assets/org/ahmad-rafiqi.png',
    order: 11,
    description:
      'Mengawal harmonisasi regulasi KBLBB, advokasi kemudahan sertifikasi uji tipe (SUT/SRUT), serta kepatuhan standar kelaikan kendaraan listrik.',
  },
  {
    id: 'om-bidang-industri',
    fullName: 'Puryanto',
    position: 'Ketua Bidang Industri & Rantai Pasok',
    level: 'Ketua Bidang',
    category: 'vice-chairman',
    photoUrl: '/assets/org/puryanto.png',
    order: 12,
    description:
      'Mendorong integrasi rantai pasok manufaktur EV, hilirisasi komponen, dan kolaborasi industri dari hulu hingga hilir.',
  },
  {
    id: 'om-bidang-data',
    fullName: 'Winarto',
    position: 'Ketua Bidang Data & Informasi',
    level: 'Ketua Bidang',
    category: 'vice-chairman',
    photoUrl: '/assets/org/winarto.png',
    order: 13,
    description:
      'Mengelola pusat data ekosistem kendaraan listrik nasional, pemetaan statistik populasi EV, infrastruktur SPKLU, dan analisis pasar.',
  },
  {
    id: 'om-bidang-rnd',
    fullName: 'Prabowo Kartoleksono',
    position: 'Ketua Bidang Penelitian & Pengembangan',
    level: 'Ketua Bidang',
    category: 'vice-chairman',
    photoUrl: '/assets/org/prabowo-kartoleksono.png',
    order: 14,
    description:
      'Memimpin riset teknologi elektrifikasi otomotif, kajian standardisasi baterai & komponen, serta riset bersama universitas dan BRIN.',
  },
];

// Hanya item dengan foto dokumentasi asli kategori tersebut.
// Kategori non-PEVS sengaja kosong sampai client menyediakan aset di public/assets/gallery/.
export const galleryItems: GalleryItem[] = [
  {
    id: 'gi-1',
    title: 'PEVS 2026 Grand Opening',
    category: 'PEVS (Pameran)',
    imageUrl: '/assets/news/pevs-2026-game-changer.jpg',
    date: '2026-10-29',
    location: 'JIExpo Kemayoran, Jakarta',
    description:
      'Pembukaan resmi PERIKLINDO Electric Vehicle Show bersama Dyandra Promosindo di JIExpo Kemayoran. Ketua Umum Jenderal (Purn.) Dr. Moeldoko menegaskan kendaraan listrik sebagai game changer ekonomi nasional.',
  },
  {
    id: 'gi-2',
    title: 'Pidato Pembukaan Ketua Umum',
    category: 'PEVS (Pameran)',
    imageUrl: '/assets/news/pevs-2026-pidato-moeldoko.jpg',
    date: '2026-10-29',
    location: 'JIExpo Kemayoran, Jakarta',
    description:
      'Pidato pembukaan PEVS 2026 menyoroti efisiensi biaya rumah tangga, pengurangan subsidi BBM, kesiapan SPKLU, serta tantangan eVTOL dan SDM elektrifikasi.',
  },
  {
    id: 'gi-3',
    title: 'Booth MAB & Command Center',
    category: 'PEVS (Pameran)',
    imageUrl: '/assets/news/pevs-2026-mab-moeldoko.jpg',
    date: '2026-10-29',
    location: 'JIExpo Kemayoran, Jakarta',
    description:
      'PT Mobil Anak Bangsa (MAB) menampilkan solusi mobilitas bersih untuk angkutan ringan, perkebunan, dan tambang, lengkap dengan sistem Command Center.',
  },
  {
    id: 'gi-4',
    title: 'Wawancara Industri di Arena PEVS',
    category: 'PEVS (Pameran)',
    imageUrl: '/assets/news/pevs-2026-wawancara-moeldoko.jpg',
    date: '2026-10-29',
    location: 'JIExpo Kemayoran, Jakarta',
    description:
      'Dokumentasi wawancara Ketua Umum PERIKLINDO membahas prospek EV Indonesia, kualitas baterai, dan target TKDN di arena pameran.',
  },
];

// FAQ: 8 pertanyaan kunci klien sesuai Laporan Koreksi Website
export const faqItems: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Apa itu PERIKLINDO dan kapan didirikan?',
    answer:
      'PERIKLINDO (Perkumpulan Industri Kendaraan Listrik Indonesia) didirikan pada April 2021 atas prakarsa prinsipal EV terkemuka—PT Mobil Anak Bangsa (MAB), PT SGMW Motor Indonesia (Wuling), dan PT Sokonindo Automobile (DFSK)—untuk mengawal pelaksanaan Perpres No. 55 Tahun 2019 tentang Percepatan Program Kendaraan Bermotor Listrik Berbasis Baterai (KBLBB). Perkumpulan berbadan hukum resmi berdasarkan SK Kemenkumham RI dan AD/ART notaris.',
    category: 'Seputar PERIKLINDO',
    order: 1,
  },
  {
    id: 'faq-2',
    question: 'Apa tujuan dan fungsi utama PERIKLINDO?',
    answer:
      'Sesuai AD/ART perkumpulan, PERIKLINDO berfungsi sebagai wadah industri untuk advokasi regulasi dan standardisasi, akselerasi pasar melalui PEVS/PEVC, serta hilirisasi rantai pasok baterai dan komponen dalam negeri. Asosiasi menjadi jembatan antara pabrikan, regulator (Kemenperin, Kemenhub, ESDM), BUMN PLN, BRIN, dan masyarakat.',
    category: 'Seputar PERIKLINDO',
    order: 2,
  },
  {
    id: 'faq-3',
    question: 'Siapa saja yang dapat bergabung menjadi anggota?',
    answer:
      'Keanggotaan terbuka bagi pabrikan kendaraan listrik roda 4, roda 2, dan kendaraan niaga; produsen sel/pack baterai dan komponen; penyedia SPKLU/swap station; serta bengkel konversi resmi. Setiap calon anggota melalui verifikasi legalitas dan komitmen terhadap kode etik perkumpulan.',
    category: 'Prosedur Anggota',
    order: 3,
  },
  {
    id: 'faq-4',
    question: 'Bagaimana prosedur dan alur pendaftaran anggota baru?',
    answer:
      'Calon anggota mengisi formulir Pengajuan Keanggotaan di halaman Kontak, melampirkan dokumen legalitas (NIB/IUI), lalu menunggu verifikasi sekretariat. Berkas juga dapat dikirim ke sekretariat@periklindo.com atau WhatsApp Pendaftaran Anggota +62 812-9978-7588 pada hari kerja pukul 08.00–17.00 WIB.',
    category: 'Prosedur Anggota',
    order: 4,
  },
  {
    id: 'faq-5',
    question: 'Apa keuntungan dan manfaat menjadi anggota PERIKLINDO?',
    answer:
      'Anggota memperoleh akses advokasi regulasi/fiskal, jejaring B2B rantai pasok, fasilitas partisipasi PEVS, data industri, serta forum standardisasi dan keselamatan baterai. Sekretariat juga memfasilitasi audiensi kelembagaan dan kemitraan strategis.',
    category: 'Prosedur Anggota',
    order: 5,
  },
  {
    id: 'faq-6',
    question: 'Apa itu PEVS dan apa bedanya dengan pameran otomotif konvensional?',
    answer:
      'PERIKLINDO Electric Vehicle Show (PEVS) adalah pameran yang fokus 100% pada kendaraan listrik dan ekosistemnya, digelar bersama Dyandra Promosindo di JIExpo Kemayoran. Berbeda dari pameran otomotif konvensional, PEVS menonjolkan edukasi keselamatan (termasuk uji rendam air baterai), test drive EV, serta platform transaksi B2B/B2G antar pelaku rantai pasok.',
    category: 'PEVS & PEVC',
    order: 6,
  },
  {
    id: 'faq-7',
    question: 'Apa itu PEVC (PERIKLINDO Electric Vehicle Conference)?',
    answer:
      'PEVC adalah simposium strategis yang digelar bersamaan dengan PEVS. Forum ini mempertemukan pabrikan, pemasok baterai, akademisi, dan kementerian untuk membahas kebijakan, teknologi, dan peta jalan mobilitas listrik nasional.',
    category: 'PEVS & PEVC',
    order: 7,
  },
  {
    id: 'faq-8',
    question:
      'Bagaimana cara instansi/lembaga mengajukan permohonan audiensi atau kerja sama?',
    answer:
      'Instansi, pemda, perguruan tinggi, atau mitra industri dapat mengajukan permohonan melalui formulir Pertanyaan/Audiensi Umum di halaman Kontak, email sekretariat@periklindo.com, atau WhatsApp Sekretariat & Informasi +62 877-8970-3728. Alamat sekretariat: The City Tower Lt. 12-1N, Jl. M.H. Thamrin No. 81, Jakarta Pusat.',
    category: 'Layanan Sekretariat',
    order: 8,
  },
];

// Data Kontak Resmi Sekretariat & Pendaftaran Anggota PERIKLINDO
export const contactInfo: ContactInfo = {
  address: {
    building: 'The City Tower Lt. 12-1N',
    street: 'Jl. M.H. Thamrin No. 81',
    district: 'Dukuh Atas, Menteng',
    city: 'Jakarta Pusat',
    postalCode: '10310',
    full: 'The City Tower Lt. 12-1N, Jl. M.H. Thamrin No. 81, Dukuh Atas, Menteng, Jakarta Pusat 10310',
  },
  email: 'sekretariat@periklindo.com',
  phone: {
    secretariat: {
      label: 'WhatsApp Sekretariat & Informasi',
      number: '+62 877-8970-3728',
      waUrl: 'https://wa.me/6287789703728',
    },
    registration: {
      label: 'WhatsApp Pendaftaran Anggota',
      number: '+62 812-9978-7588',
      waUrl: 'https://wa.me/6281299787588',
    },
  },
  officeHours: {
    days: 'Senin – Jumat',
    hours: '08.00 – 17.00 WIB',
    note: 'Sabtu – Minggu & Hari Libur Nasional tutup',
  },
  socialMedia: {
    instagram: 'https://instagram.com/periklindo',
    youtube: 'https://youtube.com/@periklindo',
    linkedin: 'https://linkedin.com/company/periklindo',
  },
};

