'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { ShieldCheck, FileCheck, Layers } from 'lucide-react';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import { memberBrands } from '@/data/mock-data';
import {
  PENDING_MEMBER_COUNT,
  SHOW_MEMBER_COUNT,
} from '@/data/site-claims';

export default function AboutHero() {
  const shouldReduceMotion = useReducedMotion();
  // TODO(R03): angka anggota menunggu reconciliation database + konfirmasi client.
  const memberCount = SHOW_MEMBER_COUNT
    ? memberBrands.length || PENDING_MEMBER_COUNT
    : null;

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
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
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
          <motion.nav variants={itemVariants} aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-150">
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

          <motion.div variants={itemVariants} className="mb-5">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-electric/15 text-blue-300 border border-electric/35 backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-teal" />
              <span>Didirikan April 2021 • Berbadan Hukum Resmi SK Kemenkumham RI</span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.18] mb-6 font-[family-name:var(--font-heading)]"
          >
            Mengenal Perkumpulan Industri Kendaraan Listrik Indonesia
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-8"
          >
            <strong className="text-white font-semibold">PERIKLINDO</strong> berdiri pada
            April 2021 atas prakarsa prinsipal EV nasional—PT Mobil Anak Bangsa (MAB), PT
            SGMW Motor Indonesia (Wuling), dan PT Sokonindo Automobile (DFSK)—untuk mengawal
            akselerasi Perpres No. 55 Tahun 2019.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="p-4 sm:p-5 rounded-xl bg-navy-light/80 border border-slate-700/80 mb-10 backdrop-blur-sm"
          >
            <div className="flex items-start gap-3.5">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-teal/15 text-teal border border-teal/30 flex items-center justify-center mt-0.5">
                <FileCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-teal mb-1">
                  Landasan Hukum Pendirian
                </p>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  PERIKLINDO dibentuk sebagai payung industri yang menghubungkan kepentingan
                  pabrikan, regulator, dan masyarakat dalam pelaksanaan{' '}
                  <strong className="text-white font-semibold">Perpres No. 55 Tahun 2019</strong>{' '}
                  jo.{' '}
                  <strong className="text-white font-semibold">Perpres No. 79 Tahun 2023</strong>{' '}
                  tentang Percepatan Program Kendaraan Bermotor Listrik Berbasis Baterai (KBLBB).
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-2.5 mb-10 text-xs"
          >
            <span className="text-slate-400 font-medium mr-1 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              Akses Cepat:
            </span>
            {[
              ['#inisiator-pendiri', 'Sejarah Pendirian'],
              ['#visi-misi', 'Visi & Misi AD/ART'],
              ['#garis-waktu', 'Milestone 2021–2026'],
              ['#mitra-strategis', 'Mitra Strategis'],
              ['#legalitas', 'Legalitas & Kantor'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-slate-700/80 transition-colors"
              >
                {label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-slate-800"
        >
          <div className="bg-navy-light/70 border border-slate-800 rounded-xl p-4 sm:p-5">
            <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-extrabold text-white mb-1">
              <AnimatedCounter end={2021} duration={1400} />
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-300 mb-0.5">
              Tahun Didirikan
            </p>
            <p className="text-[11px] text-slate-400">Deklarasi April 2021</p>
          </div>
          <div className="bg-navy-light/70 border border-slate-800 rounded-xl p-4 sm:p-5">
            {memberCount != null ? (
              <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-extrabold text-blue-400 mb-1">
                <AnimatedCounter end={memberCount} duration={1600} />
              </p>
            ) : (
              <p className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-extrabold text-blue-400 mb-1 leading-tight">
                Anggota
              </p>
            )}
            <p className="text-xs sm:text-sm font-semibold text-slate-300 mb-0.5">
              {memberCount != null ? 'Anggota Industri' : 'Konsorsium Industri'}
            </p>
            <p className="text-[11px] text-slate-400">
              {memberCount != null
                ? 'Terdaftar di direktori resmi'
                : 'Direktori merek anggota'}
            </p>
          </div>
          <div className="bg-navy-light/70 border border-slate-800 rounded-xl p-4 sm:p-5">
            <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-extrabold text-emerald-400 mb-1">
              4 Sektor
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-300 mb-0.5">
              Ekosistem Terintegrasi
            </p>
            <p className="text-[11px] text-slate-400">Roda 4, Roda 2, Baterai, SPKLU</p>
          </div>
          <div className="bg-navy-light/70 border border-slate-800 rounded-xl p-4 sm:p-5">
            <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-extrabold text-teal mb-1">
              PEVS
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-300 mb-0.5">
              Pameran EV Tahunan
            </p>
            <p className="text-[11px] text-slate-400">JIExpo Kemayoran, Jakarta</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
