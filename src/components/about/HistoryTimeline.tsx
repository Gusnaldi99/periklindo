'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Calendar, Flag, Sparkles, CheckCircle2, Award, Zap, FileText, Globe } from 'lucide-react';
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
      year: '2019',
      badge: 'Tonggak Regulasi',
      title: 'Pengundangan Perpres No. 55 Tahun 2019',
      theme: 'blue',
      dotColor: 'bg-blue-500 border-blue-200',
      badgeColor: 'text-blue-700 bg-blue-50 border-blue-200',
      icon: FileText,
      description:
        'Pemerintah Republik Indonesia resmi mengundangkan Peraturan Presiden No. 55 Tahun 2019 tentang Percepatan Program Kendaraan Bermotor Listrik Berbasis Baterai (KBLBB) untuk Transportasi Jalan, menjadi payung hukum fundamental elektrifikasi otomotif nasional.',
      achievements: [
        'Payung hukum formal pertama adopsi massal kendaraan listrik',
        'Mandat target TKDN bertahap industri manufaktur otomotif',
        'Pondasi insentif fiskal dan non-fiskal dari kementerian terkait',
      ],
    },
    {
      year: '2021',
      badge: 'Deklarasi Pendirian',
      title: 'Resmi Berdirinya PERIKLINDO (25 April 2021)',
      theme: 'emerald',
      dotColor: 'bg-emerald-500 border-emerald-200',
      badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
      icon: Flag,
      description:
        'Tiga pionir industri (PT Mobil Anak Bangsa / MAB, PT SGMW Motor Indonesia / Wuling, dan PT Sokonindo Automobile / DFSK) mendeklarasikan PERIKLINDO. Jenderal TNI (Purn.) Dr. Moeldoko terpilih secara aklamasi memimpin asosiasi sebagai Ketua Umum.',
      achievements: [
        'Deklarasi konsensus 3 pabrikan pionir roda empat dan bus',
        'Pencatatan legalitas resmi Notaris & SK Kemenkumham RI',
        'Penetapan sekretariat jenderal dan dewan pimpinan eksekutif',
      ],
    },
    {
      year: '2022',
      badge: 'PEVS Perdana',
      title: 'Sukses Penyelenggaraan PEVS 2022 di JIExpo',
      theme: 'electric',
      dotColor: 'bg-electric border-blue-200',
      badgeColor: 'text-electric bg-blue-50 border-blue-200',
      icon: Award,
      description:
        'PERIKLINDO berkolaborasi bersama Dyandra Promosindo menggelar pameran kendaraan listrik murni perdana di Indonesia (PERIKLINDO Electric Vehicle Show 2022), mencetak transaksi melampaui Rp 257 miliar dan menarik lebih dari 40.000 pengunjung.',
      achievements: [
        'Transaksi pameran melampaui Rp 257 miliar dalam 10 hari',
        'Lebih dari 50 brand ekosistem EV turut berpartisipasi',
        'Area uji berkendara (test drive) indoor bebas polusi',
      ],
    },
    {
      year: '2023',
      badge: 'Ekspansi Ekosistem',
      title: 'Advokasi Insentif PPN DTP & Masuknya Sektor Baterai',
      theme: 'purple',
      dotColor: 'bg-purple-500 border-purple-200',
      badgeColor: 'text-purple-700 bg-purple-50 border-purple-200',
      icon: Zap,
      description:
        'PERIKLINDO aktif mengawal lahirnya insentif PPN DTP mobil listrik berbasis TKDN bersama Kementerian Koordinator, sekaligus memperluas keanggotaan ke produsen sel baterai nasional (Gotion, ABC Lithium) dan manufaktur roda dua lokal.',
      achievements: [
        'Realisasi insentif PPN DTP (1%) mendongkrak penjualan EV',
        'Integrasi produsen baterai lithium dan motor listrik nasional',
        'Penyelenggaraan PEVS 2023 dengan ekspansi area pameran 150%',
      ],
    },
    {
      year: '2024',
      badge: 'Skala Internasional',
      title: 'PEVS 2024 Bersama Asia Bike Jakarta & Uji Rendam Banjir',
      theme: 'teal',
      dotColor: 'bg-teal border-emerald-200',
      badgeColor: 'text-teal bg-emerald-50 border-emerald-200',
      icon: Globe,
      description:
        'Pameran PEVS 2024 berskala internasional menggandeng Messe Frankfurt (Asia Bike Jakarta), menyajikan atraksi live "Water Immersion Test" untuk mengedukasi publik mengenai kekedapan dan standar keamanan baterai IP67/IP68.',
      achievements: [
        'Kemitraan internasional bersama Asia Bike Jakarta / Messe Frankfurt',
        'Atraksi edukasi uji rendam air (water test) membuktikan safety EV',
        'Total transaksi menembus Rp 400+ miliar di JIExpo Kemayoran',
      ],
    },
    {
      year: '2025 - 2026',
      badge: 'Hilirisasi Mandiri',
      title: 'Akselerasi Baterai Lokal & Standardisasi Swapping Nasional',
      theme: 'cyan',
      dotColor: 'bg-cyan-500 border-cyan-200',
      badgeColor: 'text-cyan-800 bg-cyan-50 border-cyan-200',
      icon: Sparkles,
      description:
        'Memperkuat utilisasi sel baterai lokal berbasis hilirisasi nikel Indonesia menuju target TKDN 60% pada 2027, serta perumusan standar interoperabilitas swapping station motor listrik dan integrasi pengisian daya terpadu.',
      achievements: [
        'Akselerasi adopsi pack baterai rakitan dalam negeri',
        'Standar konektor dan protokol baterai swap lintas pabrikan',
        'Ekspansi armada komersial ramah lingkungan sektor tambang & logistik',
      ],
    },
  ];

  return (
    <section id="garis-waktu" className="py-16 md:py-20 lg:py-24 bg-white border-b border-slate-200 scroll-mt-20">
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
            <Calendar className="w-3.5 h-3.5" />
            Jejak Langkah & Rekam Jejak
          </div>
          <SectionHeader
            title="Tonggak Perjalanan Sejarah PERIKLINDO"
            subtitle="Dari lahirnya konsensus tiga pabrikan pionir pada 2021 hingga kini menaungi lebih dari 25 entitas terdepan di seluruh mata rantai industri kendaraan listrik Indonesia."
          />
        </motion.div>

        {/* Interactive Progress Timeline Container */}
        <div ref={timelineRef} className="relative ml-4 md:ml-36 space-y-10 md:space-y-12">
          {/* Static Background Rail Line */}
          <div
            className="absolute left-[-1px] top-4 bottom-4 w-0.5 bg-slate-200 pointer-events-none"
            aria-hidden="true"
          />

          {/* Dynamic Scroll-Scalable Active Progress Line */}
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
                {/* Timeline Node Dot (Thematic Pulse) */}
                <div
                  className={cn(
                    'absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-125 z-10',
                    milestone.dotColor
                  )}
                />

                {/* Left Year Badge for Desktop */}
                <div className="md:absolute md:-left-40 md:top-1.5 md:w-32 md:text-right">
                  <span className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-extrabold text-navy group-hover:text-electric transition-colors duration-150 block">
                    {milestone.year}
                  </span>
                  <span className="text-[10px] uppercase font-mono font-semibold text-slate-400 block">
                    Fase {index + 1}
                  </span>
                </div>

                {/* Card Container with Interactive Milestone Details */}
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
                      <span className="font-mono text-[11px] font-semibold">Tahun {milestone.year}</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-navy mb-2.5 group-hover:text-electric transition-colors duration-150 font-[family-name:var(--font-heading)]">
                    {milestone.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {milestone.description}
                  </p>

                  {/* Concrete Milestone Achievements */}
                  <div className="pt-3 border-t border-slate-200/80 space-y-1.5">
                    {milestone.achievements.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
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
