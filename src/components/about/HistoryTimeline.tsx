'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Calendar, Flag, Sparkles, CheckCircle2, Award, Zap, Globe } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import { cn } from '@/lib/utils';

export default function HistoryTimeline() {
  const shouldReduceMotion = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 70%'],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const milestones = [
    {
      year: '2021',
      badge: 'Deklarasi Pendirian',
      title: 'Deklarasi resmi pembentukan asosiasi',
      theme: 'emerald',
      dotColor: 'bg-emerald-500 border-emerald-200',
      badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
      icon: Flag,
      description:
        'Pada April 2021, PERIKLINDO dideklarasikan secara resmi atas prakarsa PT Mobil Anak Bangsa (MAB), PT SGMW Motor Indonesia (Wuling), dan PT Sokonindo Automobile (DFSK) untuk mengawal pelaksanaan Perpres No. 55 Tahun 2019. Perkumpulan memperoleh pengesahan badan hukum melalui SK Kemenkumham RI dan AD/ART notaris.',
      achievements: [
        'Deklarasi konsensus tiga prinsipal EV nasional',
        'Pencatatan legalitas Notaris & SK Kemenkumham RI',
        'Pembentukan sekretariat dan struktur kepengurusan awal',
      ],
    },
    {
      year: '2022',
      badge: 'PEVS Perdana',
      title: 'Peluncuran perdana pameran PEVS di JIExpo Kemayoran',
      theme: 'electric',
      dotColor: 'bg-electric border-blue-200',
      badgeColor: 'text-electric bg-blue-50 border-blue-200',
      icon: Award,
      description:
        'PERIKLINDO bersama Dyandra Promosindo menggelar PERIKLINDO Electric Vehicle Show (PEVS) perdana di JIExpo Kemayoran—pameran yang fokus pada ekosistem kendaraan listrik sebagai ruang edukasi publik dan transaksi industri.',
      achievements: [
        'Pameran EV murni berskala nasional di JIExpo Kemayoran',
        'Kehadiran pabrikan, pemasok baterai, dan infrastruktur',
        'Fondasi agenda tahunan PEVS sebagai etalase industri',
      ],
    },
    {
      year: '2023',
      badge: 'Keselamatan & Regulasi',
      title: 'Demonstrasi uji rendam air baterai EV & simposium regulasi',
      theme: 'amber',
      dotColor: 'bg-amber-500 border-amber-200',
      badgeColor: 'text-amber-800 bg-amber-50 border-amber-200',
      icon: Zap,
      description:
        'PERIKLINDO memperkuat edukasi publik melalui demonstrasi uji rendam air baterai EV serta menyelenggarakan simposium regulasi untuk menyelaraskan kebutuhan industri dengan instrumen kebijakan KBLBB.',
      achievements: [
        'Uji publik kekedapan dan keselamatan pack baterai',
        'Forum dialog regulasi bersama kementerian teknis',
        'Perluasan edukasi konsumen di arena pameran',
      ],
    },
    {
      year: '2024',
      badge: 'Kemitraan Regional',
      title: 'Kemitraan internasional bersama AFEVA',
      theme: 'teal',
      dotColor: 'bg-teal border-emerald-200',
      badgeColor: 'text-teal bg-emerald-50 border-emerald-200',
      icon: Globe,
      description:
        'PERIKLINDO meneguhkan jejaring regional bersama Asian Federation of Electric Vehicle Associations (AFEVA) untuk berbagi praktik terbaik elektrifikasi, standardisasi, dan pengembangan pasar Asia.',
      achievements: [
        'Kolaborasi dengan Asian Federation of Electric Vehicle Associations',
        'Pertukaran data industri dan praktik kebijakan regional',
        'Penguatan posisi Indonesia dalam dialog EV Asia',
      ],
    },
    {
      year: '2025–2026',
      badge: 'Hilirisasi Nasional',
      title: 'Konsolidasi rantai pasok baterai & pendampingan target TKDN 60%',
      theme: 'cyan',
      dotColor: 'bg-cyan-500 border-cyan-200',
      badgeColor: 'text-cyan-800 bg-cyan-50 border-cyan-200',
      icon: Sparkles,
      description:
        'Fokus organisasi diarahkan pada konsolidasi rantai pasok baterai nasional, perluasan keanggotaan roda 2 dan ekosistem swap, serta pendampingan anggota menuju target TKDN 60% dalam kerangka Perpres 55/2019 jo. Perpres 79/2023 dan Permenperin terkait.',
      achievements: [
        'Konsolidasi pemasok sel, pack, dan komponen lokal',
        'Pendampingan industri menuju target TKDN 60%',
        'Penguatan PEVS/PEVC sebagai platform verifikasi publik',
      ],
    },
  ];

  return (
    <section
      id="garis-waktu"
      className="py-16 md:py-20 lg:py-24 bg-white border-b border-slate-200 scroll-mt-20"
    >
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-100 text-teal mb-3">
            <Calendar className="w-3.5 h-3.5" />
            Milestone Kronologis 2021–2026
          </div>
          <SectionHeader
            title="Tonggak Perjalanan PERIKLINDO"
            subtitle="Dari deklarasi pembentukan asosiasi pada April 2021 hingga konsolidasi rantai pasok baterai dan pendampingan target TKDN nasional."
          />
        </motion.div>

        <div ref={timelineRef} className="relative ml-4 md:ml-36 space-y-10 md:space-y-12">
          <div
            className="absolute left-[-1px] top-4 bottom-4 w-0.5 bg-slate-200 pointer-events-none"
            aria-hidden="true"
          />
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-[-1px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-electric via-teal to-blue-500 pointer-events-none z-0"
            aria-hidden="true"
          />

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96, y: 24 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.55,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative pl-7 sm:pl-9 group z-10"
              >
                <div
                  className={cn(
                    'absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-125 z-10',
                    milestone.dotColor
                  )}
                />

                <div className="md:absolute md:-left-40 md:top-1.5 md:w-32 md:text-right">
                  <span className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-extrabold text-navy group-hover:text-electric transition-colors duration-150 block">
                    {milestone.year}
                  </span>
                  <span className="text-[10px] uppercase font-mono font-semibold text-slate-400 block">
                    Fase {index + 1}
                  </span>
                </div>

                <div className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-5 sm:p-7 hover:bg-white hover:shadow-xl hover:border-electric/50 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span
                      className={cn(
                        'text-xs font-bold px-3 py-1 rounded-full border',
                        milestone.badgeColor
                      )}
                    >
                      {milestone.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Icon className="w-3.5 h-3.5 text-slate-500" />
                      <span className="font-mono text-[11px] font-semibold">
                        Tahun {milestone.year}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-navy mb-2.5 group-hover:text-electric transition-colors duration-150 font-[family-name:var(--font-heading)]">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {milestone.description}
                  </p>

                  <div className="pt-3 border-t border-slate-200/80 space-y-1.5">
                    {milestone.achievements.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
