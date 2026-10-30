import ScrollReveal from '@/components/shared/ScrollReveal';
import SectionHeader from '@/components/shared/SectionHeader';

export default function CoreValuesSection() {
  const values = [
    {
      title: 'Integritas & Obyektivitas',
      description:
        'Berlandaskan data teknis dan analisis objektif industri dalam setiap rekomendasi kebijakan publik demi terciptanya regulasi yang adil, kredibel, dan transparan.',
      icon: (
        <svg className="w-6 h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Kolaborasi Inklusif',
      description:
        'Merangkul seluruh pemangku kepentingan dalam ekosistem KBLBB tanpa sekat—mulai dari pabrikan roda 4, roda 2, produsen baterai, startup teknologi, hingga institusi pendidikan.',
      icon: (
        <svg className="w-6 h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: 'Inovasi Berkelanjutan',
      description:
        'Mendorong adopsi teknologi ramah lingkungan, riset baterai mutakhir, efisiensi energi terbarukan, dan daur ulang demi terwujudnya ekonomi sirkular bebas emisi.',
      icon: (
        <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: 'Keselamatan & Standar Mutu',
      description:
        'Menempatkan standar keselamatan kelistrikan, proteksi baterai terhadap cuaca ekstrem, dan keamanan berkendara konsumen sebagai prioritas utama tanpa kompromi.',
      icon: (
        <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="container-main">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-blue-100 text-electric mb-3">
              Budaya & Prinsip
            </div>
            <SectionHeader
              title="Nilai-Nilai Utama Organisasi"
              subtitle="Empat pilar nilai yang menuntun PERIKLINDO dalam bertindak, berkolaborasi, dan mengabdi untuk kemajuan industri otomotif tanah air."
            />
          </div>
        </ScrollReveal>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, index) => (
            <ScrollReveal
              key={val.title}
              delay={index * 100}
              className="h-full"
            >
              <div className="h-full bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-electric/40 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5">
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2.5">
                    {val.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
