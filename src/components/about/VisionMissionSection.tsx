'use client';

import { TrendingUp, Compass, CheckCircle2, Share2 } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function VisionMissionSection() {
  const missions = [
    {
      code: 'MISI-01',
      title: 'Peningkatan Daya Saing Industri',
      description:
        'Mendorong adopsi teknologi terkini, peningkatan kapasitas manufaktur dalam negeri, riset pengembangan (R&D), serta penguatan rantai pasok komponen dan baterai lokal berstandar global.',
      icon: TrendingUp,
      badge: 'Manufaktur & R&D',
    },
    {
      code: 'MISI-02',
      title: 'Kemitraan Strategis Stakeholder',
      description:
        'Menjadi jembatan dan mitra terpercaya pemerintah dalam perumusan regulasi, harmonisasi standar teknis, insentif fiskal (PPN DTP), serta penciptaan iklim investasi yang kondusif bagi ekosistem EV.',
      icon: Compass,
      badge: 'Regulasi & Kebijakan',
    },
    {
      code: 'MISI-03',
      title: 'Sosialisasi & Edukasi Publik',
      description:
        'Meluruskan mitos dan mengedukasi masyarakat luas mengenai keselamatan, efisiensi operasional, dan keandalan kendaraan listrik melalui kegiatan interaktif, edukasi uji banjir, serta pameran PEVS tahunan.',
      icon: CheckCircle2,
      badge: 'Edukasi & Pameran PEVS',
    },
    {
      code: 'MISI-04',
      title: 'Lingkungan Hidup Bersih & Berkelanjutan',
      description:
        'Mendukung target Net Zero Emission Indonesia melalui dekarbonisasi sektor transportasi, pengembangan daur ulang baterai (battery circularity), dan utilisasi energi baru terbarukan.',
      icon: Share2,
      badge: 'Keberlanjutan & NZE',
    },
  ];

  return (
    <section
      id="visi-misi"
      className="scroll-mt-20 border-b border-slate-200 bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="container-main">
        <ScrollReveal>
          <div className="mb-12 max-w-3xl min-w-0 lg:mb-16">
            <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-medium text-slate-500">
              Fondasi Idealisme & Arah Haluan
            </p>
            <SectionHeader
              title="Visi & Misi PERIKLINDO"
              subtitle="Pedoman strategis yang mengarahkan setiap langkah advokasi, kerja sama industri lintas sektoral, dan edukasi publik demi kedaulatan industri kendaraan listrik nasional."
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative mb-14 overflow-x-clip border border-navy-light bg-navy p-8 text-white sm:p-10 lg:p-14">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, var(--color-slate-100) 1px, transparent 0)',
                backgroundSize: '32px 32px',
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-4xl min-w-0">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <p className="font-[family-name:var(--font-body)] text-xs font-medium text-slate-300">
                  Visi Eksekutif Organisasi
                </p>
                <span className="font-[family-name:var(--font-body)] text-xs text-slate-400">
                  [STATUTA ASOSIASI 2021]
                </span>
              </div>

              <blockquote className="mb-6 font-[family-name:var(--font-heading)] text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
                &ldquo;Memajukan industri Kendaraan Bermotor Listrik Berbasis Baterai (KBLBB) dan memasyarakatkan kendaraan listrik di seluruh penjuru Indonesia.&rdquo;
              </blockquote>

              <p className="max-w-prose font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
                Sebuah komitmen jangka panjang untuk mentransformasi sistem transportasi nasional menjadi ramah lingkungan, menekan subsidi bahan bakar fosil, dan menempatkan Indonesia sebagai pusat produksi dan inovasi rantai pasok kendaraan listrik utama di kawasan Asia Tenggara.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <ScrollReveal key={mission.code} delay={index * 70} className="h-full min-w-0">
                <article className="flex h-full flex-col justify-between border border-slate-200 bg-slate-50 p-6 sm:p-8">
                  <div>
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <Icon className="h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
                      <div className="flex items-center gap-2">
                        <span className="font-[family-name:var(--font-body)] text-[11px] font-medium text-slate-500">
                          {mission.badge}
                        </span>
                        <span className="font-[family-name:var(--font-body)] text-xs font-semibold text-electric">
                          {mission.code}
                        </span>
                      </div>
                    </div>

                    <h3 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-navy sm:text-xl">
                      {mission.title}
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-600">
                      {mission.description}
                    </p>
                  </div>

                  <p className="mt-6 border-t border-slate-200 pt-4 font-[family-name:var(--font-body)] text-xs font-semibold text-slate-500">
                    Pilar Pelaksanaan Mandat Organisasi
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
