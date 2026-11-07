'use client';

import { ShieldCheck, Users, Zap, Award, Check } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function CoreValuesSection() {
  const values = [
    {
      code: 'VAL-01',
      title: 'Integritas & Objektivitas',
      tag: 'Kredibilitas Data',
      description:
        'Berlandaskan data teknis empiris dan analisis objektif industri dalam setiap rekomendasi kebijakan publik demi terwujudnya regulasi yang adil, kredibel, dan transparan.',
      icon: ShieldCheck,
      keyPoints: ['Transparansi regulasi', 'Analisis berbasis data', 'Kepatuhan tata kelola'],
    },
    {
      code: 'VAL-02',
      title: 'Kolaborasi Inklusif',
      tag: 'Ekosistem Terpadu',
      description:
        'Merangkul seluruh pemangku kepentingan dalam ekosistem KBLBB tanpa sekat—mulai dari pabrikan roda 4, roda 2, manufaktur baterai, startup teknologi, hingga institusi pendidikan tinggi.',
      icon: Users,
      keyPoints: ['Kemitraan multisektoral', 'Ruang kolaborasi terbuka', 'Sinergi hulu ke hilir'],
    },
    {
      code: 'VAL-03',
      title: 'Inovasi Berkelanjutan',
      tag: 'Riset & Hilirisasi',
      description:
        'Mendorong adopsi teknologi ramah lingkungan, riset material baterai mutakhir, efisiensi energi terbarukan, dan daur ulang demi terwujudnya ekonomi sirkular bebas emisi.',
      icon: Zap,
      keyPoints: ['Penguatan R&D nasional', 'Daur ulang sel baterai', 'Efisiensi energi hijau'],
    },
    {
      code: 'VAL-04',
      title: 'Keselamatan & Standar Mutu',
      tag: 'Prioritas Utama',
      description:
        'Menempatkan standar keselamatan kelistrikan tegangan tinggi, proteksi baterai terhadap cuaca ekstrem tropis (uji banjir IP67), dan kenyamanan konsumen sebagai prioritas utama tanpa kompromi.',
      icon: Award,
      keyPoints: ['Sertifikasi ketat SUT/SRUT', 'Proteksi iklim tropis', 'Jaminan keselamatan publik'],
    },
  ];

  return (
    <section
      id="nilai-inti"
      className="scroll-mt-20 border-b border-slate-200 bg-slate-50 py-16 md:py-20 lg:py-24"
    >
      <div className="container-main">
        <ScrollReveal>
          <div className="mb-12 max-w-3xl min-w-0 lg:mb-16">
            <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-medium text-slate-500">
              Budaya & Prinsip Kelembagaan
            </p>
            <SectionHeader
              title="Nilai-Nilai Utama Organisasi"
              subtitle="Empat nilai fundamental yang memandu PERIKLINDO dalam bertindak, merumuskan rekomendasi, dan mengabdi untuk kemajuan mobilitas bersih Indonesia."
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((val, index) => {
            const Icon = val.icon;
            return (
              <ScrollReveal key={val.code} delay={index * 70} className="h-full min-w-0">
                <article className="relative flex h-full flex-col justify-between border border-slate-200 bg-white p-6">
                  <div>
                    <p className="mb-4 font-[family-name:var(--font-body)] text-xs font-medium text-slate-500">
                      {val.code}
                    </p>

                    <Icon className="mb-5 h-5 w-5 text-navy" aria-hidden="true" />

                    <p className="mb-1.5 font-[family-name:var(--font-body)] text-[11px] font-medium text-slate-500">
                      {val.tag}
                    </p>
                    <h3 className="mb-2 font-[family-name:var(--font-heading)] text-base font-semibold text-navy sm:text-lg">
                      {val.title}
                    </h3>

                    <p className="mb-5 font-[family-name:var(--font-body)] text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {val.description}
                    </p>
                  </div>

                  <ul className="space-y-1.5 border-t border-slate-100 pt-3.5">
                    {val.keyPoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-1.5 font-[family-name:var(--font-body)] text-xs text-slate-500"
                      >
                        <Check className="h-3.5 w-3.5 shrink-0 text-teal" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
