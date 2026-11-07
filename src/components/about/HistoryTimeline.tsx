'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Flag, CheckCircle2, Award, Zap, FileText, Globe, Calendar } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';
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
      dotColor: 'bg-electric border-slate-200',
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
      dotColor: 'bg-teal border-slate-200',
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
      dotColor: 'bg-electric border-slate-200',
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
      dotColor: 'bg-navy border-slate-200',
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
      dotColor: 'bg-teal border-slate-200',
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
      dotColor: 'bg-electric border-slate-200',
      icon: Calendar,
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
    <section
      id="garis-waktu"
      className="scroll-mt-20 border-b border-slate-200 bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="container-main">
        <ScrollReveal>
          <div className="mb-12 max-w-3xl min-w-0 lg:mb-16">
            <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-medium text-slate-500">
              Jejak Langkah & Rekam Jejak
            </p>
            <SectionHeader
              title="Tonggak Perjalanan Sejarah PERIKLINDO"
              subtitle="Dari lahirnya konsensus tiga pabrikan pionir pada 2021 hingga kini menaungi lebih dari 25 entitas terdepan di seluruh mata rantai industri kendaraan listrik Indonesia."
            />
          </div>
        </ScrollReveal>

        <div ref={timelineRef} className="relative ml-4 space-y-10 md:ml-36 md:space-y-12">
          <div
            className="pointer-events-none absolute bottom-4 left-[-1px] top-4 w-0.5 bg-slate-200"
            aria-hidden="true"
          />

          <motion.div
            style={shouldReduceMotion ? undefined : { scaleY, transformOrigin: 'top' }}
            className={cn(
              'pointer-events-none absolute bottom-4 left-[-1px] top-4 z-0 w-0.5 bg-electric',
              shouldReduceMotion && 'opacity-40'
            )}
            aria-hidden="true"
          />

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <ScrollReveal key={milestone.year} delay={index * 60} className="relative z-10 min-w-0 pl-7 sm:pl-9">
                <div
                  className={cn(
                    'absolute -left-[9px] top-2 z-10 h-4 w-4 rounded-full border-2',
                    milestone.dotColor
                  )}
                  aria-hidden="true"
                />

                <div className="md:absolute md:-left-40 md:top-1.5 md:w-32 md:text-right">
                  <span className="mb-0.5 block font-[family-name:var(--font-heading)] text-lg font-semibold text-navy sm:text-xl">
                    {milestone.year}
                  </span>
                  <span className="block font-[family-name:var(--font-body)] text-xs font-medium text-slate-500">
                    Fase {index + 1}
                  </span>
                </div>

                <article className="border border-slate-200 bg-slate-50 p-5 sm:p-7">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="font-[family-name:var(--font-body)] text-xs font-semibold text-navy">
                      {milestone.badge}
                    </span>
                    <div className="flex items-center gap-1.5 font-[family-name:var(--font-body)] text-xs text-slate-500">
                      <Icon className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
                      <span className="text-xs font-medium">Tahun {milestone.year}</span>
                    </div>
                  </div>

                  <h3 className="mb-2.5 font-[family-name:var(--font-heading)] text-base font-semibold text-navy sm:text-lg lg:text-xl">
                    {milestone.title}
                  </h3>

                  <p className="mb-4 max-w-prose font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-600">
                    {milestone.description}
                  </p>

                  <ul className="space-y-1.5 border-t border-slate-200 pt-3">
                    {milestone.achievements.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 font-[family-name:var(--font-body)] text-xs text-slate-600"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" aria-hidden="true" />
                        <span>{item}</span>
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
