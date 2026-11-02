'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  TrendingUp,
  Award,
  Sparkles,
  ChevronRight,
  Gauge,
} from 'lucide-react';
import AnimatedCounter from '@/components/shared/AnimatedCounter';

export default function HeroSection() {
  return (
    <section className="relative bg-navy text-white overflow-hidden py-16 md:py-20 lg:py-28 border-b border-navy-light">
      {/* Background Blueprint Grid & Radial Glow */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-electric/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        {/* Asymmetrical 12-Column Grid (7 Columns Left : 5 Columns Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ================= LEFT COLUMN: Editorial Powerhouse (7 Cols) ================= */}
          <div className="lg:col-span-7">
            {/* Status & Mandate Pill */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/15 text-emerald-400 mb-6 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Asosiasi Resmi Industri Kendaraan Listrik Indonesia</span>
              <span className="text-white/30 hidden sm:inline">&bull;</span>
              <span className="text-slate-300 hidden sm:inline">SK Kemenkumham RI</span>
            </motion.div>

            {/* Main Institutional Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight text-white leading-[1.12] mb-6 font-[family-name:var(--font-heading)]"
            >
              Akselerasi Kedaulatan{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">
                Ekosistem Kendaraan Listrik
              </span>{' '}
              Indonesia
            </motion.h1>

            {/* Subtitle with Regulatory Anchor */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal"
            >
              Didirikan pada April 2021 untuk mengawal pelaksanaan{' '}
              <strong className="text-white font-semibold">Perpres No. 55 Tahun 2019</strong>.
              PERIKLINDO memadukan produsen otomotif roda 4, roda 2, industri baterai
              nasional, dan jaringan infrastruktur pengisian daya untuk mewujudkan kedaulatan
              energi bersih Indonesia di kancah global.
            </motion.p>

            {/* Dual Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <Link
                href="#anggota"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-electric text-white font-bold text-sm sm:text-base hover:bg-electric-hover active:scale-[0.98] shadow-lg shadow-electric/30 transition-all duration-150 min-h-[48px]"
              >
                <span>Jelajahi Anggota Konsorsium</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/tentang-kami"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/10 hover:border-white/40 active:scale-[0.98] transition-all duration-150 min-h-[48px] backdrop-blur-xs"
              >
                <span>Visi & Landasan Kebijakan</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </motion.div>

            {/* Live Telemetry / Cockpit Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10"
            >
              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-xs">
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-1">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Landasan</span>
                </div>
                <p className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-black text-white">
                  <AnimatedCounter end={2021} duration={1400} />
                </p>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Perpres 55/2019
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-xs">
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Produsen</span>
                </div>
                <p className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-black text-white">
                  <AnimatedCounter end={25} suffix="+" duration={1500} />
                </p>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Merek Resmi
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-xs">
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Target TKDN</span>
                </div>
                <p className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-black text-white">
                  <AnimatedCounter end={60} suffix="%" duration={1600} />
                </p>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Rantai Pasok 2027
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-xs">
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-1">
                  <Zap className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Emisi Bersih</span>
                </div>
                <p className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-black text-white">
                  <AnimatedCounter end={100} suffix="%" duration={1700} />
                </p>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Net Zero 2060
                </p>
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN: Visual Dynamic Showcase (5 Cols) ================= */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-electric via-cyan-500 to-emerald-400 rounded-2xl opacity-30 blur-lg" />

              {/* Visual Card Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-navy-light border border-white/15 shadow-2xl">
                {/* Visual Image with Real PEVS Exhibition Documentation */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/assets/news/pevs-2026-game-changer.jpg"
                    alt="PERIKLINDO Electric Vehicle Show - Momentum Transformasi Industri EV Nasional"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Top & Bottom Gradient Shadows */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                </div>

                {/* Micro-telemetry & Floating Cards */}
                <div className="p-5 sm:p-6 bg-gradient-to-b from-navy/90 to-navy border-t border-white/10 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      PEVS Flagship Annual Show
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white/10 text-slate-300 border border-white/10">
                      JIExpo Kemayoran
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    Pusat Pameran & Kolaborasi Industri EV Terbesar di Asia Tenggara
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    Menghubungkan ratusan produsen, kementerian teknis, perbankan, dan ratusan
                    ribu konsumen dalam satu ekosistem mobilitas bersih terpadu.
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs text-slate-300">
                    <span className="flex items-center gap-1.5 font-medium text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Kolaborasi Dyandra Promosindo
                    </span>
                    <Link
                      href="#pevs"
                      className="text-cyan-300 font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Lihat Sorotan</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Floating Status Badge (Top-Left Accent) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 sm:-left-6 z-20 hidden sm:flex items-center gap-2 bg-navy/95 border border-white/20 text-white px-3.5 py-2 rounded-xl shadow-2xl backdrop-blur-md"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold">
                  Mandat Perpres 55/2019 Aktif
                </span>
              </motion.div>

              {/* Floating Gauge Badge (Bottom-Right Accent) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 z-20 hidden sm:flex items-center gap-2 bg-white text-navy px-3.5 py-2 rounded-xl shadow-2xl border border-slate-200"
              >
                <Gauge className="w-4 h-4 text-electric" />
                <span className="text-xs font-black">
                  Ekosistem R4, R2 & Baterai
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
