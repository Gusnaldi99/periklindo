import ScrollReveal from '@/components/shared/ScrollReveal';
import SectionHeader from '@/components/shared/SectionHeader';

export default function OrgDutiesAccordion() {
  const divisions = [
    {
      name: 'Promosi & Pemasaran',
      en: 'Promotion & Marketing',
      head: 'Adrianto Gani',
      role: 'Vice Chairman',
      icon: (
        <svg className="w-5 h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      duties: [
        'Penyelenggaraan pameran otomotif tahunan PEVS di JIExpo Kemayoran.',
        'Aktivasi kampanye pemasaran terpadu untuk kendaraan listrik para anggota.',
        'Penetrasi pasar kendaraan listrik komersial dan konsumen perorangan.',
      ],
    },
    {
      name: 'Penelitian & Pengembangan',
      en: 'Research & Development (R&D)',
      head: 'Prabowo Kartoleksono',
      role: 'Vice Chairman',
      icon: (
        <svg className="w-5 h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      duties: [
        'Kajian teknologi sel baterai, manajemen thermal, dan motor penggerak listrik.',
        'Standardisasi konektor pengisian SPKLU dan interoperabilitas battery swapping.',
        'Kerja sama riset dan prototipe bersama BRIN serta perguruan tinggi nasional.',
      ],
    },
    {
      name: 'Organisasi & Kelembagaan',
      en: 'Organization & Institutional',
      head: 'Kelik Irwantono',
      role: 'Vice Chairman',
      icon: (
        <svg className="w-5 h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      duties: [
        'Konsolidasi dan verifikasi kelayakan calon anggota baru PERIKLINDO.',
        'Penyusunan tata kelola organisasi (governance) dan penegakan kode etik asosiasi.',
        'Kolaborasi kelembagaan dengan asosiasi regional dan stakeholder internasional.',
      ],
    },
    {
      name: 'Hubungan Masyarakat & Edukasi',
      en: 'Public Relation & Education',
      head: 'Ahmad Rafiqi',
      role: 'Vice Chairman',
      icon: (
        <svg className="w-5 h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      duties: [
        'Sosialisasi berkala standar keselamatan operasional dan uji rendam air baterai.',
        'Meluruskan miskonsepsi publik seputar keandalan dan daya tahan kendaraan listrik.',
        'Manajemen siaran pers resmi, media briefing, dan diseminasi informasi publik.',
      ],
    },
    {
      name: 'Hukum & Regulasi',
      en: 'Legal & Regulatory',
      head: 'Puryanto',
      role: 'Vice Chairman',
      icon: (
        <svg className="w-5 h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      duties: [
        'Advokasi kebijakan fiskal/non-fiskal bersama kementerian terkait (Kemenperin, Kemenhub).',
        'Harmonisasi regulasi kemudahan sertifikasi uji tipe (SUT dan SRUT).',
        'Kajian regulasi perlindungan konsumen dan kepatuhan hukum rantai pasok EV.',
      ],
    },
    {
      name: 'Data & Informasi',
      en: 'Data & Information',
      head: 'Winarto',
      role: 'Vice Chairman',
      icon: (
        <svg className="w-5 h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      duties: [
        'Pengelolaan pusat data dan intelijen pasar industri kendaraan listrik Indonesia.',
        'Pemetaan statistik pertumbuhan populasi EV roda 2, roda 4, dan infrastruktur SPKLU.',
        'Penerbitan laporan berkala kondisi industri untuk rujukan anggota dan regulator.',
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="container-main">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-blue-100 text-electric mb-3">
              Tupoksi Organisasi
            </div>
            <SectionHeader
              title="Tugas Pokok & Tanggung Jawab Bidang"
              subtitle="Setiap bidang dipimpin oleh Vice Chairman yang berpengalaman untuk memastikan target akselerasi ekosistem EV Indonesia tercapai secara terstruktur."
            />
          </div>
        </ScrollReveal>

        {/* 6 Divisions Grid Appearing One by One on Scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {divisions.map((div, index) => (
            <ScrollReveal
              key={div.name}
              delay={80 + index * 100}
              className="h-full"
            >
              <div className="h-full bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-electric/40 transition-all duration-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                      {div.icon}
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      Bidang 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-navy mb-0.5">
                    Bidang {div.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 mb-3">
                    {div.en}
                  </p>

                  <div className="mb-4 pb-3 border-b border-slate-100">
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                      Ketua Bidang:
                    </p>
                    <p className="text-sm font-bold text-electric">
                      {div.head}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Fokus Utama:
                    </p>
                    {div.duties.map((duty) => (
                      <div key={duty} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                        <span className="text-teal font-bold mt-0.5" aria-hidden="true">
                          &bull;
                        </span>
                        <span>{duty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
