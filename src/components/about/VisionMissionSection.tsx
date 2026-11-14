'use client';

import { motion, useReducedMotion } from 'motion/react';
import { Quote, Scale, Sparkles } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

export default function VisionMissionSection() {
  const shouldReduceMotion = useReducedMotion();

  const missions = [
    'Mewadahi dan memperjuangkan kepentingan industri kendaraan bermotor listrik berbasis baterai di Indonesia sesuai Anggaran Dasar perkumpulan.',
    'Menjadi mitra pemerintah dalam perumusan dan pelaksanaan kebijakan percepatan program KBLBB, termasuk standardisasi dan kepastian regulasi.',
    'Mendorong akselerasi pasar kendaraan listrik melalui edukasi publik, pameran PEVS, serta forum konferensi PEVC.',
    'Memperkuat hilirisasi rantai pasok baterai, komponen, dan infrastruktur pengisian daya dalam negeri menuju kemandirian industri.',
  ];

  return (
    <section
      id="visi-misi"
      className="py-16 md:py-20 lg:py-24 bg-[#06152F] border-b border-navy-light scroll-mt-20"
    >
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-10 lg:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-white/10 text-teal mb-3 border border-white/10">
            <Scale className="w-3.5 h-3.5" />
            Merujuk AD/ART resmi perkumpulan
          </div>
          <SectionHeader
            title="Visi & Misi PERIKLINDO"
            subtitle="Rumusan di bawah merujuk Anggaran Dasar / Anggaran Rumah Tangga (AD/ART) perkumpulan berbadan hukum yang disahkan melalui SK Kemenkumham RI—bukan rumusan spekulatif baru."
            className="[&_h2]:text-white [&_p]:text-slate-300"
          />
          <p className="mt-3 text-xs text-slate-400 leading-relaxed max-w-2xl">
            Redaksi final mengikuti AD/ART resmi sekretariat. Salinan verbatim dokumen
            belum dipublikasikan di laman ini; teks di bawah adalah rumusan kerja yang
            merujuk AD/ART, bukan parafrase baru untuk keperluan pemasaran.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-7 sm:p-9 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-electric/20 via-transparent to-teal/10 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-teal/20 text-teal border border-teal/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  Visi (AD/ART)
                </span>
              </div>
              <Quote className="w-8 h-8 text-electric/50 mb-4" aria-hidden="true" />
              <blockquote className="text-xl sm:text-2xl font-extrabold leading-snug text-white font-[family-name:var(--font-heading)]">
                Memajukan industri Kendaraan Bermotor Listrik Berbasis Baterai (KBLBB) dan
                memasyarakatkan kendaraan listrik di seluruh penjuru Indonesia.
              </blockquote>
              <p className="mt-5 text-sm text-slate-300 leading-relaxed">
                Visi resmi perkumpulan sebagaimana tertuang dalam AD/ART yang disahkan
                bersama akta notaris dan SK Kemenkumham RI.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-7 sm:p-9 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal/15 via-transparent to-electric/10 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-electric/20 text-blue-200 border border-electric/30">
                  Misi (AD/ART)
                </span>
              </div>
              <ol className="space-y-4">
                {missions.map((mission, index) => (
                  <li key={mission} className="flex items-start gap-3">
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-white/10 border border-white/15 text-xs font-bold text-white flex items-center justify-center font-mono">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm sm:text-[15px] text-slate-100 leading-relaxed">
                      {mission}
                    </p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-xs text-slate-400 leading-relaxed border-t border-white/10 pt-4">
                Redaksi final mengikuti AD/ART resmi sekretariat. Pembaruan verbatim akan
                diselaraskan di laman ini setelah dokumen diterima — tanpa mengubah makna
                kelembagaan.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
