'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { CircleHelp, Scale, Users2, Zap } from 'lucide-react';
import { faqItems } from '@/data/mock-data';

export default function FaqHero() {
  const shouldReduceMotion = useReducedMotion();
  const categories = new Set(faqItems.map((item) => item.category)).size;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.08, delayChildren: 0.04 },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0.1 }
        : { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
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
        className="absolute -top-24 -right-16 w-80 h-80 bg-electric/20 rounded-full blur-3xl pointer-events-none"
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
                FAQ
              </li>
            </ol>
          </motion.nav>

          <motion.div variants={itemVariants} className="mb-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-electric/15 text-blue-300 border border-electric/35">
              <CircleHelp className="w-3.5 h-3.5 text-teal" />
              <span>Pusat Bantuan • FAQ-DESK/2026</span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.18] mb-6"
          >
            Pertanyaan yang Sering Diajukan
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl"
          >
            Ringkasan resmi seputar PERIKLINDO, prosedur keanggotaan, pameran PEVS,
            serta regulasi dan insentif kendaraan listrik berbasis baterai.
          </motion.p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800"
        >
          <div className="bg-navy-light/70 border border-slate-800 rounded-xl p-4">
            <CircleHelp className="w-4 h-4 text-electric mb-2" />
            <p className="font-[family-name:var(--font-heading)] text-2xl font-extrabold text-white">
              {faqItems.length}
            </p>
            <p className="text-xs text-slate-400">Entri FAQ aktif</p>
          </div>
          <div className="bg-navy-light/70 border border-slate-800 rounded-xl p-4">
            <Users2 className="w-4 h-4 text-teal mb-2" />
            <p className="font-[family-name:var(--font-heading)] text-2xl font-extrabold text-teal">
              {categories}
            </p>
            <p className="text-xs text-slate-400">Kelompok topik</p>
          </div>
          <div className="bg-navy-light/70 border border-slate-800 rounded-xl p-4">
            <Zap className="w-4 h-4 text-amber-300 mb-2" />
            <p className="font-[family-name:var(--font-heading)] text-lg font-extrabold text-white">
              PEVS
            </p>
            <p className="text-xs text-slate-400">Pameran & konferensi</p>
          </div>
          <div className="bg-navy-light/70 border border-slate-800 rounded-xl p-4">
            <Scale className="w-4 h-4 text-blue-300 mb-2" />
            <p className="font-[family-name:var(--font-heading)] text-lg font-extrabold text-white">
              Perpres 55
            </p>
            <p className="text-xs text-slate-400">Landasan KBLBB</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
