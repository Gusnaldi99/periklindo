import ScrollReveal from '@/components/shared/ScrollReveal';
import SectionHeader from '@/components/shared/SectionHeader';

export default function LegalAndContactSection() {
  const legalPoints = [
    {
      title: 'Perpres No. 55 Tahun 2019 & Perpres No. 79 Tahun 2023',
      desc: 'Landasan hukum utama percepatan program kendaraan bermotor listrik berbasis baterai (battery electric vehicle) untuk transportasi jalan di Indonesia.',
    },
    {
      title: 'Pengesahan Kementerian Hukum & HAM RI',
      desc: 'Perkumpulan berbadan hukum resmi yang terdaftar dan diakui secara sah oleh Kemenkumham RI sebagai asosiasi perwakilan industri EV.',
    },
    {
      title: 'Anggaran Dasar & Anggaran Rumah Tangga (AD/ART)',
      desc: 'Dibuat di hadapan Notaris resmi serta memuat tata kelola organisasi nirlaba yang transparan, akuntabel, dan berorientasi pada kepentingan industri nasional.',
    },
    {
      title: 'Mitra Kerja Lintas Kementerian',
      desc: 'Diakui sebagai mitra audiensi dan perumusan kebijakan oleh Kemenko Marves/Perekonomian, Kementerian Perindustrian, Kementerian Perhubungan, dan Kementerian ESDM.',
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="container-main">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-100 text-teal mb-3">
              Legalitas & Sekretariat
            </div>
            <SectionHeader
              title="Landasan Hukum & Kantor Asosiasi"
              subtitle="Transparansi hukum, perizinan sah kelembagaan, serta lokasi sekretariat resmi PERIKLINDO di pusat ibukota."
            />
          </div>
        </ScrollReveal>

        {/* 2 Columns: Legal on the Left, Secretariat on the Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Legal Basis */}
          <ScrollReveal delay={100} direction="left">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 h-full shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-electric flex items-center justify-center font-bold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy">
                      Legalitas & Landasan Kebijakan
                    </h3>
                    <p className="text-xs text-slate-500">
                      Asosiasi resmi berbadan hukum di Indonesia
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {legalPoints.map((point) => (
                    <div
                      key={point.title}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-100"
                    >
                      <h4 className="text-sm font-bold text-navy mb-1">
                        {point.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Seluruh dokumen legalitas terverifikasi dan sah</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Office & Contacts */}
          <ScrollReveal delay={150} direction="right">
            <div className="bg-navy text-white rounded-2xl p-6 sm:p-8 h-full shadow-lg border border-navy-light flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-white/10 text-emerald-400 flex items-center justify-center font-bold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Sekretariat Resmi PERIKLINDO
                    </h3>
                    <p className="text-xs text-slate-400">
                      Pusat administrasi dan audiensi publik
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl bg-navy-light/60 border border-slate-800">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Alamat Gedung:
                    </p>
                    <p className="text-sm font-semibold text-white leading-relaxed">
                      The City Tower Lt. 12-1N, Jl. M.H. Thamrin No. 81
                    </p>
                    <p className="text-xs text-slate-300">
                      Dukuh Atas, Menteng, Jakarta Pusat, DKI Jakarta 10310
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-navy-light/60 border border-slate-800">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Surel Resmi (Email):
                    </p>
                    <a
                      href="mailto:sekretariat@periklindo.com"
                      className="text-sm font-semibold text-electric hover:underline"
                    >
                      sekretariat@periklindo.com
                    </a>
                  </div>

                  <div className="p-4 rounded-xl bg-navy-light/60 border border-slate-800">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Kontak WhatsApp & Pendaftaran:
                    </p>
                    <div className="space-y-1 text-sm">
                      <p>
                        Sekretariat: <span className="font-semibold text-white">+62 877-8970-3728</span>
                      </p>
                      <p>
                        Pendaftaran Anggota: <span className="font-semibold text-white">+62 812-9978-7588</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/6287789703728"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-teal text-white text-xs font-bold hover:bg-teal-hover transition-colors min-h-[44px]"
                >
                  Hubungi via WhatsApp
                </a>
                <a
                  href="mailto:sekretariat@periklindo.com"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition-colors min-h-[44px]"
                >
                  Kirim Email Resmi
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
