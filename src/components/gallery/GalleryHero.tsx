'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { Camera } from 'lucide-react';
import { galleryItems } from '@/data/mock-data';

export default function GalleryHero() {
  const shouldReduceMotion = useReducedMotion();
  const total = galleryItems.length;
  const categories = new Set(galleryItems.map((item) => item.category)).size;

  return (
    <section className="relative overflow-x-clip border-b border-navy-light bg-navy py-12 text-white sm:py-14 md:py-16 lg:py-18">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, var(--color-slate-100) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-navy-light/40 to-transparent"
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
          }
          className="max-w-4xl min-w-0"
        >
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 font-[family-name:var(--font-body)] text-xs text-slate-300 sm:text-sm">
              <li>
                <Link
                  href="/"
                  className="transition-[color] duration-150 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
                >
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-500">
                /
              </li>
              <li className="font-medium text-white" aria-current="page">
                Galeri Kegiatan
              </li>
            </ol>
          </nav>

          <p className="mb-3 inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-sm font-medium text-slate-300">
            <Camera className="h-3.5 w-3.5 shrink-0 text-teal" aria-hidden="true" />
            <span>Arsip Visual Resmi • DOC-GAL/2026</span>
          </p>

          <h1 className="mb-4 max-w-3xl min-w-0 font-[family-name:var(--font-heading)] text-3xl font-semibold leading-[1.15] tracking-tight text-balance text-white sm:text-4xl md:text-[2.75rem] lg:text-5xl">
            Galeri Kegiatan PERIKLINDO
          </h1>

          <p className="mb-8 max-w-prose font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-300 sm:mb-10 sm:text-lg">
            Dokumentasi pameran PEVS di JIExpo Kemayoran, audiensi kementerian,
            seminar industri, dan kunjungan pabrik anggota. Setiap foto merujuk
            kegiatan nyata asosiasi, bukan ilustrasi generik.
          </p>
        </motion.div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/15 pt-6 sm:grid-cols-4">
          <div className="min-w-0">
            <dt className="mb-1 font-[family-name:var(--font-body)] text-xs font-medium text-slate-300">
              Dokumentasi terkurasi
            </dt>
            <dd className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white sm:text-[1.75rem]">
              {total}
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="mb-1 font-[family-name:var(--font-body)] text-xs font-medium text-slate-300">
              Kategori kegiatan
            </dt>
            <dd className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white sm:text-[1.75rem]">
              {categories}
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="mb-1 font-[family-name:var(--font-body)] text-xs font-medium text-slate-300">
              Panggung utama PEVS
            </dt>
            <dd className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white sm:text-[1.75rem]">
              JIExpo
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="mb-1 font-[family-name:var(--font-body)] text-xs font-medium text-slate-300">
              Arsip tahun berjalan
            </dt>
            <dd className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white sm:text-[1.75rem]">
              2026
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
