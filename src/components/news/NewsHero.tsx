'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { CalendarDays, Clock, Newspaper } from 'lucide-react';
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
              Berita & Artikel
            </li>
          </ol>
        </nav>

        <p className="mb-3 inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-sm font-medium text-slate-300">
          <Newspaper className="h-3.5 w-3.5 shrink-0 text-teal" aria-hidden="true" />
          <span>Warta Industri • NEWS-IDX/2026</span>
        </p>

        <h1 className="mb-3 max-w-3xl min-w-0 font-[family-name:var(--font-heading)] text-3xl font-semibold leading-[1.15] tracking-tight text-balance text-white sm:text-4xl md:text-[2.75rem] lg:text-5xl">
          Berita & Artikel
        </h1>
        <p className="mb-8 max-w-prose font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-300 sm:mb-10 sm:text-lg">
          Liputan kegiatan asosiasi, siaran pers, dinamika regulasi KBLBB, dan
          perkembangan teknologi kendaraan listrik nasional.
        </p>

        <motion.article
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
          }
          className="grid grid-cols-1 overflow-hidden border border-white/15 bg-navy-light/80 lg:grid-cols-12"
        >
          <div className="relative aspect-[16/10] min-w-0 lg:col-span-7 lg:aspect-auto lg:min-h-[420px]">
            <Image
              src={featured.thumbnailUrl}
              alt={featured.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-col justify-center p-6 sm:p-8 lg:col-span-5 lg:p-10">
            <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-[family-name:var(--font-body)] text-xs text-slate-300 sm:text-sm">
              <span className="font-medium text-teal">
                {CATEGORY_LABEL[featured.category]}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {formatDateId(featured.publishedAt)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {readMinutes} mnt baca
              </span>
            </div>

            <h2 className="mb-4 min-w-0 break-words font-[family-name:var(--font-heading)] text-xl font-semibold leading-snug text-balance text-white sm:text-2xl lg:text-[1.7rem]">
              {featured.title}
            </h2>
            <p className="mb-8 line-clamp-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-300 sm:text-base">
              {featured.excerpt}
            </p>

            <Link
              href={`/berita/${featured.slug}`}
              className="inline-flex min-h-[44px] items-center justify-center self-start bg-electric px-5 py-3 font-[family-name:var(--font-body)] text-sm font-semibold text-white transition-[background-color,opacity] duration-150 hover:bg-electric-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90"
            >
              Baca artikel unggulan
            </Link>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
