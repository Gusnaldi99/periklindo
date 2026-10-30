import ScrollReveal from '@/components/shared/ScrollReveal';
import SectionHeader from '@/components/shared/SectionHeader';

export default function VisionMissionSection() {
  const missions = [
    {
      number: '01',
      title: 'Peningkatan Daya Saing Industri',
      description:
        'Mendorong adopsi teknologi terkini, peningkatan kapasitas manufaktur dalam negeri, riset pengembangan (R&D), serta penguatan rantai pasok komponen dan baterai lokal.',
      icon: (
        <svg className="w-6 h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Kemitraan Strategis Stakeholder',
      description:
        'Menjadi jembatan dan mitra terpercaya pemerintah dalam perumusan regulasi, harmonisasi standar teknis, insentif fiskal, serta penciptaan iklim investasi yang kondusif.',
      icon: (
        <svg className="w-6 h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Sosialisasi & Edukasi Publik',
      description:
        'Meluruskan mitos dan mengedukasi masyarakat luas mengenai keselamatan, efisiensi operasional, dan keandalan kendaraan listrik melalui kegiatan interaktif serta pameran PEVS tahunan.',
      icon: (
        <svg className="w-6 h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Lingkungan Hidup Bersih & Berkelanjutan',
      description:
        'Mendukung target Net Zero Emission Indonesia melalui pengurangan emisi karbon sektor transportasi, pengelolaan daur ulang baterai (battery recycling), dan efisiensi energi terbarukan.',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="container-main">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-100 text-teal mb-3">
              Fondasi Idealisme
            </div>
            <SectionHeader
              title="Visi & Misi PERIKLINDO"
              subtitle="Pedoman strategis yang mengarahkan setiap langkah advokasi, kerja sama industri, dan edukasi publik kami demi kemajuan ekosistem kendaraan listrik Indonesia."
            />
          </div>
        </ScrollReveal>

        {/* Featured Vision Card */}
        <ScrollReveal delay={100}>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-navy to-navy-light text-white p-8 sm:p-10 lg:p-12 mb-12 shadow-xl border border-slate-800">
            {/* Subtle decorative glow */}
            <div
              className="absolute -right-20 -bottom-20 w-80 h-80 bg-electric/20 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -left-20 -top-20 w-80 h-80 bg-teal/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-emerald-400 border border-white/10 mb-6">
                Visi Resmi Asosiasi
              </div>

              <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white mb-6">
                &ldquo;Memajukan industri Kendaraan Bermotor Listrik Berbasis Baterai (KBLBB) dan memasyarakatkan kendaraan listrik di seluruh penjuru Indonesia.&rdquo;
              </blockquote>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                Sebuah komitmen jangka panjang untuk mentransformasi sistem transportasi nasional menjadi ramah lingkungan, menekan emisi gas rumah kaca perkotaan, dan menempatkan Indonesia sebagai pusat produksi dan inovasi kendaraan listrik di kawasan Asia Tenggara.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Mission 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {missions.map((mission, index) => (
            <ScrollReveal
              key={mission.number}
              delay={index * 100}
              className="h-full"
            >
              <div className="group h-full bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-lg hover:border-electric/40 hover:-translate-y-1 transition-all duration-200 ease-out flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:bg-blue-50/50 group-hover:border-electric/30 transition-colors duration-200">
                      {mission.icon}
                    </div>
                    <span className="font-[family-name:var(--font-heading)] text-xl font-bold text-slate-400 group-hover:text-electric transition-colors duration-200">
                      Misi {mission.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy mb-2.5 group-hover:text-electric transition-colors duration-150">
                    {mission.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {mission.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-semibold text-slate-500 group-hover:text-navy transition-colors duration-150">
                  <span>Pilar Pelaksanaan Mandat</span>
                  <span aria-hidden="true">&rarr;</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
