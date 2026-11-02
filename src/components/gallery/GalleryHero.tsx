'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { Camera, MapPin, CalendarDays, Images } from 'lucide-react';
import { galleryItems } from '@/data/mock-data';

export default function GalleryHero() {
  const shouldReduceMotion = useReducedMotion();
  const total = galleryItems.length;
  const categories = new Set(galleryItems.map((item) => item.category)).size;

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
        className="absolute -top-32 -right-24 w-96 h-96 bg-electric/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-24 w-80 h-80 bg-teal/15 rounded-full blur-3xl pointer-events-none"
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
                Galeri Kegiatan
              </li>
            </ol>
          </motion.nav>

          <motion.div variants={itemVariants} className="mb-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-electric/15 text-blue-300 border border-electric/35">
              <Camera className="w-3.5 h-3.5 text-teal" />
              <span>Arsip Visual Resmi • DOC-GAL/2026</span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.18] mb-6"
          >
            Galeri Kegiatan PERIKLINDO
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-3xl"
          >
            Dokumentasi pameran PEVS di JIExpo Kemayoran, audiensi kementerian,
            seminar industri, dan kunjungan pabrik anggota. Setiap foto merujuk
            kegiatan nyata asosiasi, bukan ilustrasi generik.
          </motion.p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-800"
        >
          <div className="bg-navy-light/70 border border-slate-800 rounded-xl p-4">
            <Images className="w-4 h-4 text-electric mb-2" aria-hidden="true" />
            <p className="font-[family-name:var(--font-heading)] text-2xl font-extrabold text-white">
              {total}
            </p>
            <p className="text-xs text-slate-400 font-medium">Dokumentasi terkurasi</p>
          </div>
          <div className="bg-navy-light/70 border border-slate-800 rounded-xl p-4">
            <Camera className="w-4 h-4 text-teal mb-2" aria-hidden="true" />
            <p className="font-[family-name:var(--font-heading)] text-2xl font-extrabold text-teal">
              {categories}
            </p>
            <p className="text-xs text-slate-400 font-medium">Kategori kegiatan</p>
          </div>
          <div className="bg-navy-light/70 border border-slate-800 rounded-xl p-4">
            <MapPin className="w-4 h-4 text-blue-300 mb-2" aria-hidden="true" />
            <p className="font-[family-name:var(--font-heading)] text-lg font-extrabold text-white">
              JIExpo
            </p>
            <p className="text-xs text-slate-400 font-medium">Panggung utama PEVS</p>
          </div>
          <div className="bg-navy-light/70 border border-slate-800 rounded-xl p-4">
            <CalendarDays className="w-4 h-4 text-amber-300 mb-2" aria-hidden="true" />
            <p className="font-[family-name:var(--font-heading)] text-lg font-extrabold text-white">
              2026
            </p>
            <p className="text-xs text-slate-400 font-medium">Arsip tahun berjalan</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
