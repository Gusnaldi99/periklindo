'use client';

import { motion, useReducedMotion } from 'motion/react';
import { ShieldCheck, Users, Zap, Award, Sparkles, Check } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import { cn } from '@/lib/utils';

export default function CoreValuesSection() {
  const shouldReduceMotion = useReducedMotion();

  const values = [
    {
      code: 'VAL-01',
      title: 'Integritas & Objektivitas',
      tag: 'Kredibilitas Data',
      description:
        'Berlandaskan data teknis empiris dan analisis objektif industri dalam setiap rekomendasi kebijakan publik demi terwujudnya regulasi yang adil, kredibel, dan transparan.',
      icon: ShieldCheck,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      pillColor: 'text-blue-700 bg-blue-50 border-blue-200',
      keyPoints: ['Transparansi regulasi', 'Analisis berbasis data', 'Kepatuhan tata kelola'],
    },
    {
      code: 'VAL-02',
      title: 'Kolaborasi Inklusif',
      tag: 'Ekosistem Terpadu',
      description:
        'Merangkul seluruh pemangku kepentingan dalam ekosistem KBLBB tanpa sekat—mulai dari pabrikan roda 4, roda 2, manufaktur baterai, startup teknologi, hingga institusi pendidikan tinggi.',
      icon: Users,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      pillColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
      keyPoints: ['Kemitraan multisektoral', 'Ruang kolaborasi terbuka', 'Sinergi hulu ke hilir'],
    },
    {
      code: 'VAL-03',
      title: 'Inovasi Berkelanjutan',
      tag: 'Riset & Hilirisasi',
      description:
        'Mendorong adopsi teknologi ramah lingkungan, riset material baterai mutakhir, efisiensi energi terbarukan, dan daur ulang demi terwujudnya ekonomi sirkular bebas emisi.',
      icon: Zap,
      color: 'text-amber-500 bg-amber-50 border-amber-200',
      pillColor: 'text-amber-800 bg-amber-50 border-amber-200',
      keyPoints: ['Penguatan R&D nasional', 'Daur ulang sel baterai', 'Efisiensi energi hijau'],
    },
    {
      code: 'VAL-04',
      title: 'Keselamatan & Standar Mutu',
      tag: 'Prioritas Utama',
      description:
        'Menempatkan standar keselamatan kelistrikan tegangan tinggi, proteksi baterai terhadap cuaca ekstrem tropis (uji banjir IP67), dan kenyamanan konsumen sebagai prioritas utama tanpa kompromi.',
      icon: Award,
      color: 'text-purple-600 bg-purple-50 border-purple-200',
      pillColor: 'text-purple-800 bg-purple-50 border-purple-200',
      keyPoints: ['Sertifikasi ketat SUT/SRUT', 'Proteksi iklim tropis', 'Jaminan keselamatan publik'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.1, delayChildren: 0.1 },
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
    <section id="nilai-inti" className="py-16 md:py-20 lg:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-blue-100 text-electric mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Budaya & Prinsip Kelembagaan
          </div>
          <SectionHeader
            title="Nilai-Nilai Utama Organisasi"
            subtitle="Empat nilai fundamental yang memandu PERIKLINDO dalam bertindak, merumuskan rekomendasi, dan mengabdi untuk kemajuan mobilitas bersih Indonesia."
          />
        </motion.div>

        {/* 4 Core Values Grid with Technical Accents */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.code}
                variants={cardVariants}
                whileHover={shouldReduceMotion ? {} : { y: -5 }}
                className="group h-full bg-white border border-slate-200/90 rounded-2xl p-6 hover:shadow-xl hover:border-electric/50 transition-all duration-300 ease-out flex flex-col justify-between relative overflow-hidden"
              >
                {/* Geometric technical border corner mark */}
                <div className="absolute top-2 right-2 font-mono text-[10px] text-slate-300 group-hover:text-electric transition-colors">
                  {val.code}
                </div>

                <div>
                  {/* Icon with Subtle Floating Physics on Hover */}
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { y: -4, rotate: 3 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className={cn(
                      'w-12 h-12 rounded-xl border flex items-center justify-center mb-5 shadow-sm transition-transform',
                      val.color
                    )}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>

                  <div className="mb-2">
                    <span
                      className={cn(
                        'text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border inline-block mb-1.5',
                        val.pillColor
                      )}
                    >
                      {val.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-navy group-hover:text-electric transition-colors duration-150 font-[family-name:var(--font-heading)]">
                      {val.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {val.description}
                  </p>
                </div>

                {/* Key Points Checklist */}
                <div className="pt-3.5 border-t border-slate-100 space-y-1.5">
                  {val.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Check className="w-3.5 h-3.5 text-teal shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
