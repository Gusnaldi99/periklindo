'use client';

import { motion, useReducedMotion } from 'motion/react';
import { TrendingUp, Compass, CheckCircle2, Share2, Sparkles, Quote, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import { cn } from '@/lib/utils';

export default function VisionMissionSection() {
  const shouldReduceMotion = useReducedMotion();

  const missions = [
    {
      code: 'MISI-01',
      title: 'Peningkatan Daya Saing Industri',
      description:
        'Mendorong adopsi teknologi terkini, peningkatan kapasitas manufaktur dalam negeri, riset pengembangan (R&D), serta penguatan rantai pasok komponen dan baterai lokal berstandar global.',
      icon: TrendingUp,
      accent: 'text-blue-500 bg-blue-50 border-blue-200',
      badge: 'Manufaktur & R&D',
    },
    {
      code: 'MISI-02',
      title: 'Kemitraan Strategis Stakeholder',
      description:
        'Menjadi jembatan dan mitra terpercaya pemerintah dalam perumusan regulasi, harmonisasi standar teknis, insentif fiskal (PPN DTP), serta penciptaan iklim investasi yang kondusif bagi ekosistem EV.',
      icon: Compass,
      accent: 'text-amber-500 bg-amber-50 border-amber-200',
      badge: 'Regulasi & Kebijakan',
    },
    {
      code: 'MISI-03',
      title: 'Sosialisasi & Edukasi Publik',
      description:
        'Meluruskan mitos dan mengedukasi masyarakat luas mengenai keselamatan, efisiensi operasional, dan keandalan kendaraan listrik melalui kegiatan interaktif, edukasi uji banjir, serta pameran PEVS tahunan.',
      icon: CheckCircle2,
      accent: 'text-teal bg-emerald-50 border-emerald-200',
      badge: 'Edukasi & Pameran PEVS',
    },
    {
      code: 'MISI-04',
      title: 'Lingkungan Hidup Bersih & Berkelanjutan',
      description:
        'Mendukung target Net Zero Emission Indonesia melalui dekarbonisasi sektor transportasi, pengembangan daur ulang baterai (battery circularity), dan utilisasi energi baru terbarukan.',
      icon: Share2,
      accent: 'text-purple-500 bg-purple-50 border-purple-200',
      badge: 'Keberlanjutan & NZE',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0.1 }
        : { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="visi-misi" className="py-16 md:py-20 lg:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-100 text-teal mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Fondasi Idealisme & Arah Haluan
          </div>
          <SectionHeader
            title="Visi & Misi PERIKLINDO"
            subtitle="Pedoman strategis yang mengarahkan setiap langkah advokasi, kerja sama industri lintas sektoral, dan edukasi publik demi kedaulatan industri kendaraan listrik nasional."
          />
        </motion.div>

        {/* Executive Statement Banner (Visi Resmi) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-[#0d2244] to-navy text-white p-8 sm:p-10 lg:p-14 mb-14 shadow-2xl border border-slate-800"
        >
          {/* Subtle Circuit Line SVGs */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
            aria-hidden="true"
          />

          {/* Glowing Ambient Lights */}
          <div
            className="absolute -right-24 -bottom-24 w-96 h-96 bg-electric/25 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -left-24 -top-24 w-96 h-96 bg-teal/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-emerald-400 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Visi Eksekutif Organisasi
              </span>
              <span className="text-xs text-slate-400 font-mono">
                [STATUTA ASOSIASI 2021]
              </span>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-electric/40 shrink-0 mt-1 hidden sm:block" />
              <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug tracking-tight text-white font-[family-name:var(--font-heading)]">
                &ldquo;Memajukan industri Kendaraan Bermotor Listrik Berbasis Baterai (KBLBB) dan memasyarakatkan kendaraan listrik di seluruh penjuru Indonesia.&rdquo;
              </blockquote>
            </div>

            <div className="sm:pl-14">
              <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl">
                Sebuah komitmen jangka panjang untuk mentransformasi sistem transportasi nasional menjadi ramah lingkungan, menekan subsidi bahan bakar fosil, dan menempatkan Indonesia sebagai pusat produksi dan inovasi rantai pasok kendaraan listrik utama di kawasan Asia Tenggara.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Industrial Serialized Missions (MISI-01 to MISI-04) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {missions.map((mission) => {
            const Icon = mission.icon;
            return (
              <motion.div
                key={mission.code}
                variants={cardVariants}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="group h-full bg-slate-50/80 border border-slate-200/90 rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-xl hover:border-electric/50 transition-all duration-300 ease-out flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-electric/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className={cn('w-12 h-12 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm', mission.accent)}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-slate-500 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full">
                        {mission.badge}
                      </span>
                      <span className="font-mono text-xs font-bold text-electric bg-blue-50 px-2 py-0.5 rounded">
                        {mission.code}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-navy mb-3 group-hover:text-electric transition-colors duration-150 font-[family-name:var(--font-heading)]">
                    {mission.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {mission.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500 group-hover:text-navy transition-colors duration-150">
                  <span className="font-semibold">Pilar Pelaksanaan Mandat Organisasi</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-electric group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
