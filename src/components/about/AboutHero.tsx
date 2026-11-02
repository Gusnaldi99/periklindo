'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { ShieldCheck, FileCheck, Sparkles, ArrowRight, Layers, Award } from 'lucide-react';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import { cn } from '@/lib/utils';

export default function AboutHero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0.1 }
        : { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative bg-navy text-white overflow-hidden py-14 sm:py-18 md:py-20 lg:py-24 border-b border-navy-light">
      {/* Blueprint Circuit Background & Ambient Lighting */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* Decorative EV Circuit Blueprint SVGs */}
      <svg
        className="absolute -right-20 -top-20 w-[600px] h-[600px] text-electric/15 pointer-events-none stroke-current"
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M50 150 H200 L260 210 H420 L480 150 H550"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M100 280 H240 L300 220 H380 L440 280 H520"
          strokeWidth="2"
        />
        <path
          d="M150 420 H280 L340 360 H460 L500 400"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        <circle cx="200" cy="150" r="4" fill="currentColor" />
        <circle cx="420" cy="210" r="4" fill="currentColor" />
        <circle cx="240" cy="280" r="4" fill="currentColor" />
        <circle cx="440" cy="280" r="4" fill="currentColor" />
        <circle cx="340" cy="360" r="5" fill="#10B981" />
        <circle cx="300" cy="220" r="6" fill="#0066FF" />
      </svg>

      {/* Ambient Radial Glows */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 bg-electric/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Breadcrumb Navigation */}
          <motion.nav
            variants={itemVariants}
            aria-label="Breadcrumb"
            className="mb-6"
          >
            <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors duration-150"
                >
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-600">
                /
              </li>
              <li className="text-white font-medium" aria-current="page">
                Tentang Kami
              </li>
            </ol>
          </motion.nav>

          {/* Legal Status & Identity Badge */}
          <motion.div variants={itemVariants} className="mb-5">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-electric/15 text-blue-300 border border-electric/35 backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <ShieldCheck className="w-3.5 h-3.5 text-teal" />
              <span>Profil Resmi & Mandat Kebijakan Industri KBLBB Nasional</span>
            </div>
          </motion.div>

          {/* Institutional Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.18] mb-6 font-[family-name:var(--font-heading)]"
          >
            Mewujudkan Ekosistem Kendaraan Listrik Indonesia yang Mandiri, Bersih, dan Berdaya Saing Global
          </motion.h1>

          {/* Subtitle / Executive Summary */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-8 font-normal"
          >
            <strong className="text-white font-semibold">PERIKLINDO</strong> (Perkumpulan Industri Kendaraan Listrik Indonesia) adalah wadah resmi perkumpulan industri kendaraan listrik yang berdiri sejak 2021 atas inisiatif para pionir otomotif nasional guna mendukung akselerasi transisi energi bersih dan kemandirian teknologi mobilitas listrik tanah air.
          </motion.p>

          {/* Foundation Quote: Perpres 55/2019 & 79/2023 */}
          <motion.div
            variants={itemVariants}
            className="p-4 sm:p-5 rounded-xl bg-navy-light/80 border border-slate-700/80 mb-10 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-start gap-3.5">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-teal/15 text-teal border border-teal/30 flex items-center justify-center mt-0.5">
                <FileCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-teal mb-1">
                  Landasan Hukum Deklarasi Organisasi
                </p>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  &ldquo;PERIKLINDO dibentuk sebagai mitra strategis pemerintah guna mengawal mandat{' '}
                  <strong className="text-white font-semibold not-italic">Perpres No. 55 Tahun 2019</strong>{' '}
                  dan perubahannya{' '}
                  <strong className="text-white font-semibold not-italic">Perpres No. 79 Tahun 2023</strong>{' '}
                  tentang Percepatan Program Kendaraan Bermotor Listrik Berbasis Baterai (KBLBB) untuk Transportasi Jalan.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick Navigation Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-2.5 mb-10 text-xs"
          >
            <span className="text-slate-400 font-medium mr-1 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              Akses Cepat:
            </span>
            <a
              href="#inisiator-pendiri"
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-slate-700/80 transition-colors"
            >
              Inisiator Pendiri
            </a>
            <a
              href="#visi-misi"
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-slate-700/80 transition-colors"
            >
              Visi & Misi
            </a>
            <a
              href="#tujuan-strategis"
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-slate-700/80 transition-colors"
            >
              Pilar Strategis
            </a>
            <a
              href="#garis-waktu"
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-slate-700/80 transition-colors"
            >
              Timeline 2019-2026
            </a>
            <a
              href="#pimpinan"
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-slate-700/80 transition-colors"
            >
              Dewan Pimpinan
            </a>
            <a
              href="#legalitas"
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-slate-700/80 transition-colors"
            >
              Legalitas & Kantor
            </a>
          </motion.div>
        </motion.div>

        {/* Industrial Cockpit Metrics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-slate-800"
        >
          {/* Card 1 */}
          <div className="relative group bg-navy-light/70 border border-slate-800 hover:border-electric/50 rounded-xl p-4 sm:p-5 transition-all duration-200">
            <div className="absolute top-2 right-2 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] text-slate-500 font-mono">EST</span>
            </div>
            <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-extrabold text-white mb-1">
              <AnimatedCounter end={2021} duration={1400} />
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-300 mb-0.5">
              Tahun Didirikan
            </p>
            <p className="text-[11px] text-slate-400">
              Deklarasi 25 April 2021
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative group bg-navy-light/70 border border-slate-800 hover:border-electric/50 rounded-xl p-4 sm:p-5 transition-all duration-200">
            <div className="absolute top-2 right-2 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="text-[10px] text-slate-500 font-mono">MBR</span>
            </div>
            <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-extrabold text-blue-400 mb-1">
              <AnimatedCounter end={25} suffix="+" duration={1600} />
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-300 mb-0.5">
              Korporasi Anggota
            </p>
            <p className="text-[11px] text-slate-400">
              Terverifikasi & Aktif
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative group bg-navy-light/70 border border-slate-800 hover:border-emerald-500/50 rounded-xl p-4 sm:p-5 transition-all duration-200">
            <div className="absolute top-2 right-2 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              <span className="text-[10px] text-slate-500 font-mono">SEC</span>
            </div>
            <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-extrabold text-emerald-400 mb-1">
              4 Sektor
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-300 mb-0.5">
              Ekosistem Terintegrasi
            </p>
            <p className="text-[11px] text-slate-400">
              Roda 4, Roda 2, Baterai, SPKLU
            </p>
          </div>

          {/* Card 4 */}
          <div className="relative group bg-navy-light/70 border border-slate-800 hover:border-purple-500/50 rounded-xl p-4 sm:p-5 transition-all duration-200">
            <div className="absolute top-2 right-2 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span className="text-[10px] text-slate-500 font-mono">EXPO</span>
            </div>
            <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-extrabold text-purple-300 mb-1">
              PEVS
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-300 mb-0.5">
              Pameran EV Terbesar
            </p>
            <p className="text-[11px] text-slate-400">
              Rutin Tahunan di JIExpo
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
