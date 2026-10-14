import Link from 'next/link';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function AboutBrief() {
  const pillars = [
    {
      number: '01',
      title: 'Mitra Strategis Kebijakan',
      description:
        'Partner strategis pemerintah dalam merumuskan regulasi, standar keselamatan, dan insentif KBLBB untuk mempercepat implementasi Perpres No. 55 Tahun 2019.',
    },
    {
      number: '02',
      title: 'PEVS & Sosialisasi Publik',
      description:
        'Menyelenggarakan pameran akbar tahunan PEVS di JIExpo Kemayoran bersama Dyandra Promosindo serta mengedukasi masyarakat luas tentang keandalan kendaraan listrik.',
    },
    {
      number: '03',
      title: 'Kolaborasi Rantai Pasok & R&D',
      description:
        'Mensinergikan pabrikan roda 4, roda 2, produsen sel baterai nasional, dan penyedia stasiun pengisian daya (SPKLU) serta riset pengembangan (R&D).',
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="container-main">
        {/* Top Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12">
            <SectionHeader
              title="Mendorong Indonesia Menuju Era Elektrifikasi"
              subtitle="Berdiri atas inisiatif produsen otomotif nasional guna memajukan industri KBLBB dan mewujudkan ekosistem transportasi Indonesia yang bersih serta berdaya saing global."
            />
          </div>
        </ScrollReveal>

        {/* 3 Pillars Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <ScrollReveal
              key={pillar.number}
              delay={index * 120}
              className="h-full"
            >
              <div className="group h-full bg-slate-50 border border-slate-200 rounded-xl p-6 lg:p-8 flex flex-col justify-between hover:shadow-lg hover:border-electric/40 hover:-translate-y-1.5 transition-all duration-200 ease-out">
                <div>
                  <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-electric mb-4 block group-hover:scale-105 transition-transform duration-200 origin-left">
                    {pillar.number}
                  </span>
                  <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-electric transition-colors duration-150">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA to Full About Page with ScrollReveal */}
        <ScrollReveal delay={200}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-6 sm:p-8 bg-slate-900 rounded-xl text-white gap-6 hover:shadow-xl transition-shadow duration-200">
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                Ingin mengenal struktur dan sejarah PERIKLINDO?
              </h4>
              <p className="text-sm text-slate-300">
                Pelajari visi, misi, dan susunan dewan pengurus resmi organisasi.
              </p>
            </div>
            <Link
              href="/tentang-kami"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-navy font-semibold text-sm hover:bg-slate-100 active:scale-[0.98] transition-all duration-150 min-h-[44px] whitespace-nowrap shadow-sm"
            >
              Lihat Profil Lengkap
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
