/**
 * Klaim kelembagaan PERIKLINDO — terverifikasi vs pending.
 * Sumber: Laporan Koreksi Website Hal. 7–10; R03 soft-handling.
 *
 * Bagian B (isi nomor resmi / nyalakan angka): HANYA setelah data client tertulis.
 */

/** PDF Hal. 7: jumlah anggota “perlu didiskusikan lagi”. */
export const SHOW_MEMBER_COUNT = false;

/** Angka cadangan — JANGAN tampilkan sampai reconciliation database anggota. */
export const PENDING_MEMBER_COUNT = 26;

/** Statistik PEVS (pengunjung / exhibitor / transaksi) — tunggu laporan Dyandra. */
export const SHOW_PEVS_NUMERIC_STATS = false;

export const legalitasClaims = {
  /** Generik — boleh dipublikasikan tanpa nomor. */
  berbadanHukum:
    'Perkumpulan berbadan hukum berdasarkan SK Kementerian Hukum dan HAM Republik Indonesia.',
  /** Slot resmi — kosong sampai dokumen client. */
  skKemenkumham: {
    label: 'Nomor SK Kemenkumham',
    number: null as string | null,
    date: null as string | null,
    status: 'Belum dipublikasikan' as const,
  },
  aktaNotaris: {
    label: 'Akta Notaris',
    notaryName: null as string | null,
    number: null as string | null,
    date: null as string | null,
    status: 'Belum dipublikasikan' as const,
  },
  adArtVerbatimReceived: false,
} as const;

/** Target TKDN — sebutkan hanya sebagai target regulasi, bukan capaian PERIKLINDO. */
export const tkdnRegulatoryContext =
  'Target TKDN 60% (2027) merujuk kerangka Perpres No. 55 Tahun 2019 jo. Perpres No. 79 Tahun 2023 dan ketentuan Permenperin terkait — bukan capaian yang sudah dinyatakan tercapai oleh PERIKLINDO.';

export const partnerLogoPolicy = {
  /** Jangan pasang logo kementerian tanpa file + izin resmi. */
  allowOfficialLogos: false,
  namesOnly: [
    'Kementerian Perindustrian (Kemenperin)',
    'Kementerian Perhubungan (Kemenhub)',
    'Kementerian ESDM',
    'PT PLN (Persero)',
    'Badan Riset dan Inovasi Nasional (BRIN)',
  ] as const,
} as const;

/**
 * TODO(R03): Cocokkan daftar Ketua Bidang dengan SK resmi Periode 2026–2031.
 * Dokumen kerja saat ini memakai “Penelitian & Pengembangan”; satu artikel mock
 * menyebut “Kerja Sama Internasional” — jangan tebak; tunggu SK.
 */
export const ORG_BIDANG_PENDING_SK_RECONCILIATION = true;

/**
 * TODO(R03): Domain — metadataBase memakai periklindo.or.id; email sekretariat
 * memakai periklindo.com. Jangan ganti sembarangan sampai client konfirmasi.
 */
export const DOMAIN_PENDING_CONFIRMATION = {
  websiteMetadataBase: 'https://periklindo.or.id',
  emailDomain: 'periklindo.com',
} as const;
