'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, CalendarDays, Clock, Newspaper } from 'lucide-react';
import { estimateReadMinutes, formatDateId } from '@/lib/content';
import type { NewsPost } from '@/types';

const CATEGORY_LABEL: Record<NewsPost['category'], string> = {
  'Siaran Pers': 'Siaran Pers',
  Regulasi: 'Regulasi',
  Kegiatan: 'Kegiatan Asosiasi',
  'Industri EV': 'Teknologi EV',
};

interface NewsHeroProps {
  featured: NewsPost;
}

export default function NewsHero({ featured }: NewsHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const readMinutes = estimateReadMinutes(featured);

  return (
    <section className="relative bg-navy text-white overflow-hidden border-b border-navy-light">
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-24 right-0 w-96 h-96 bg-electric/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-main relative z-10 py-12 md:py-16 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-6">
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
              Berita & Artikel
            </li>
          </ol>
        </nav>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-electric/15 text-blue-300 border border-electric/35 mb-5">
          <Newspaper className="w-3.5 h-3.5 text-teal" />
          <span>Warta Industri • NEWS-IDX/2026</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.18] mb-3">
          Berita & Artikel
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-10">
          Liputan kegiatan asosiasi, siaran pers, dinamika regulasi KBLBB, dan
          perkembangan teknologi kendaraan listrik nasional.
        </p>

        <motion.article
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-white/10 bg-navy-light/80 shadow-2xl"
        >
          <div className="relative lg:col-span-7 aspect-[16/10] lg:aspect-auto lg:min-h-[420px]">
            <Image
              src={featured.thumbnailUrl}
              alt={featured.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-electric text-white px-2.5 py-1 rounded-md">
                {CATEGORY_LABEL[featured.category]}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                <CalendarDays className="w-3.5 h-3.5" />
                {formatDateId(featured.publishedAt)}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                {readMinutes} mnt baca
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-[1.7rem] font-extrabold text-white leading-snug mb-4">
              {featured.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 line-clamp-4">
              {featured.excerpt}
            </p>

            <Link
              href={`/berita/${featured.slug}`}
              className="group inline-flex items-center justify-center gap-2 self-start px-5 py-3 rounded-xl bg-electric text-white text-sm font-bold hover:bg-electric-hover shadow-md shadow-electric/30 min-h-[44px] transition-colors duration-150"
            >
              Baca artikel unggulan
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
