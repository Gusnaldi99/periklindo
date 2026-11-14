'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import {
  Battery,
  Cpu,
  Car,
  PlugZap,
  Recycle,
  ArrowRight,
  GitBranch,
  Sparkles,
} from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';

const ecosystemStages = [
  {
    id: 'stage-1',
    step: '01',
    icon: Battery,
    title: 'Baterai & Bahan Baku',
    titleEn: 'Battery & Raw Materials',
    description:
      'Hilirisasi nikel dan material baterai sebagai fondasi kemandirian energi bersih nasional.',
  },
  {
    id: 'stage-2',
    step: '02',
    icon: Cpu,
    title: 'Komponen & Teknologi Lanjutan',
    titleEn: 'Components & Advanced Tech',
    description:
      'Komponen inti, sistem kontrol, dan teknologi pendukung yang memperkuat daya saing manufaktur lokal.',
  },
  {
    id: 'stage-3',
    step: '03',
    icon: Car,
    title: 'Manufaktur Kendaraan Listrik',
    titleEn: 'EV Manufacturing',
    description:
      'Produksi kendaraan roda 2, roda 4, dan bus komersial yang terintegrasi dalam rantai pasok nasional.',
  },
  {
    id: 'stage-4',
    step: '04',
    icon: PlugZap,
    title: 'Pengisian Daya & Jaringan',
    titleEn: 'Charging & Grid Infrastructure',
    description:
      'SPKLU, swap battery, dan infrastruktur jaringan untuk menjamin akses pengisian yang andal.',
  },
  {
    id: 'stage-5',
    step: '05',
    icon: Recycle,
    title: 'Daur Ulang & Mobilitas Berkelanjutan',
    titleEn: 'Recycling & Sustainable Mobility',
    description:
      'Daur ulang baterai dan sirkularitas agar ekosistem EV tetap berkelanjutan hingga hilir.',
  },
] as const;

function PulseConnector({
  reduceMotion,
}: {
  reduceMotion: boolean | null;
}) {
  return (
    <div
      className="flex lg:hidden flex-col items-center justify-center h-8 relative"
      aria-hidden="true"
    >
      <div className="relative h-full w-[2px] overflow-hidden rounded-full bg-white/10">
        <motion.span
          className="absolute inset-x-0 h-1/2 rounded-full bg-gradient-to-b from-transparent via-[#087BEB] to-[#00C8F5]"
          animate={
            reduceMotion ? undefined : { top: ['-50%', '100%'] }
          }
          transition={
            reduceMotion
              ? undefined
              : { repeat: Infinity, duration: 2.4, ease: 'linear' }
          }
          style={reduceMotion ? { top: '25%' } : undefined}
        />
      </div>
      <span className="absolute w-2 h-2 rounded-full bg-[#087BEB] shadow-[0_0_10px_rgba(8,123,235,0.7)]" />
    </div>
  );
}

function StageCard({
  stage,
  index,
  reduceMotion,
}: {
  stage: (typeof ecosystemStages)[number];
  index: number;
  reduceMotion: boolean | null;
}) {
  const Icon = stage.icon;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.45,
        delay: reduceMotion ? 0 : index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative h-full rounded-2xl border border-white/10 bg-[#06152F]/60 p-6 sm:p-7 hover:border-[#087BEB]/40 hover:bg-white/[0.05] transition-colors duration-300"
    >
      <div className="flex items-start gap-4 lg:flex-col lg:items-start lg:gap-5">
        <div className="relative shrink-0">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-[#00C8F5] group-hover:border-[#087BEB]/50 group-hover:text-white transition-colors duration-300">
            <Icon className="w-6 h-6" strokeWidth={1.75} />
          </div>
          <span className="absolute -top-2 -right-2 text-[10px] font-extrabold tracking-wider text-[#087BEB] bg-[#06152F] border border-[#087BEB]/40 rounded-md px-1.5 py-0.5">
            {stage.step}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
            {stage.title}
          </h3>
          <p className="text-xs sm:text-[13px] text-slate-300/90 font-medium mt-1 mb-3 tracking-wide">
            {stage.titleEn}
          </p>
          <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed">
            {stage.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function StrategicPillars() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-16 md:py-24 bg-[#06152F] border-b border-white/10 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,123,235,0.1),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mb-12 md:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/5 text-[#DCEBFA] border border-white/10 backdrop-blur-md mb-4">
              <GitBranch className="w-3.5 h-3.5 text-[#087BEB]" />
              Rantai Pasok Terintegrasi
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Visual Alur Ekosistem Industri EV
            </h2>
            <span
              className="block h-0.5 w-12 rounded-full bg-gradient-to-r from-[#087BEB] to-[#00C8F5] mb-3"
              aria-hidden="true"
            />
            <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">
              PERIKLINDO berperan sebagai fasilitator dan akselerator sinergi nasional
              yang menghubungkan setiap mata rantai ekosistem kendaraan listrik—dari
              material baterai hingga daur ulang—bukan sebagai penguasa sepihak seluruh
              rantai pasok.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5 sm:p-8 lg:p-10">
            {/* Mobile: vertical stepper with connectors */}
            <ol className="flex flex-col lg:hidden gap-0">
              {ecosystemStages.map((stage, index) => {
                const isLast = index === ecosystemStages.length - 1;
                return (
                  <li key={stage.id} className="flex flex-col">
                    <StageCard
                      stage={stage}
                      index={index}
                      reduceMotion={shouldReduceMotion}
                    />
                    {!isLast && (
                      <PulseConnector reduceMotion={shouldReduceMotion} />
                    )}
                  </li>
                );
              })}
            </ol>

            {/* Desktop: 3+2 grid — cards stay readable, never 5 ultra-thin columns */}
            <ol className="hidden lg:grid lg:grid-cols-6 gap-5 xl:gap-6">
              {ecosystemStages.map((stage, index) => {
                const isSecondRow = index >= 3;
                return (
                  <li
                    key={stage.id}
                    className={
                      isSecondRow
                        ? index === 3
                          ? 'lg:col-span-2 lg:col-start-2'
                          : 'lg:col-span-2'
                        : 'lg:col-span-2'
                    }
                  >
                    <StageCard
                      stage={stage}
                      index={index}
                      reduceMotion={shouldReduceMotion}
                    />
                  </li>
                );
              })}
            </ol>

            <p className="mt-8 pt-6 border-t border-white/10 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-4xl">
              Setiap tahapan di atas dijalankan oleh pelaku industri anggota dan mitra
              strategis. PERIKLINDO menjadi wadah pemersatu agar regulasi, standar,
              dan kolaborasi B2B/B2G bergerak selaras untuk mobilitas bersih Indonesia.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                Visi Jangka Panjang KBLBB Nasional
              </div>
              <h4 className="text-base sm:text-xl font-bold text-white mb-1">
                Ingin mengetahui sejarah, visi, misi, dan landasan hukum kami?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Pelajari deklarasi pendiri, anggaran dasar, dan peta jalan elektrifikasi Indonesia.
              </p>
            </div>
            <Link
              href="/tentang-kami"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#087BEB] text-white font-bold text-xs sm:text-sm hover:bg-[#0669c9] active:scale-[0.98] transition-all duration-300 min-h-[44px] whitespace-nowrap shadow-lg shadow-[#087BEB]/25 shrink-0"
            >
              <span>Lihat Profil & Sejarah Lengkap</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
