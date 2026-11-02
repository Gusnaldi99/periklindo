'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { NewsPost } from '@/types';
import NewsCard from '@/components/shared/NewsCard';

const FILTERS = [
  'Semua',
  'Siaran Pers',
  'Regulasi',
  'Kegiatan',
  'Industri EV',
] as const;

type Filter = (typeof FILTERS)[number];

const FILTER_LABEL: Record<Filter, string> = {
  Semua: 'Semua',
  'Siaran Pers': 'Siaran Pers',
  Regulasi: 'Regulasi',
  Kegiatan: 'Kegiatan Asosiasi',
  'Industri EV': 'Teknologi EV',
};

const PAGE_SIZE = 6;

interface NewsFilterBarProps {
  posts: NewsPost[];
  featuredId?: string;
}

export default function NewsFilterBar({ posts, featuredId }: NewsFilterBarProps) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Filter>('Semua');
  const [page, setPage] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  const normalizedQuery = query.trim().toLowerCase();
  const isFiltering = category !== 'Semua' || normalizedQuery.length > 0;

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      if (!isFiltering && featuredId && post.id === featuredId) return false;
      if (category !== 'Semua' && post.category !== category) return false;
      if (!normalizedQuery) return true;
      const haystack = `${post.title} ${post.excerpt} ${post.author}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [posts, category, normalizedQuery, isFiltering, featuredId]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visiblePosts = filteredPosts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const counts = useMemo(() => {
    const next: Record<string, number> = { Semua: posts.length };
    for (const filter of FILTERS) {
      if (filter === 'Semua') continue;
      next[filter] = posts.filter((post) => post.category === filter).length;
    }
    return next;
  }, [posts]);

  return (
    <section id="arsip-berita" className="py-16 md:py-20 bg-slate-50">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-8">
          <label className="relative flex-1">
            <span className="sr-only">Cari berita</span>
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
              placeholder="Cari judul, kutipan, atau penulis…"
              className="w-full h-12 pl-11 pr-11 rounded-xl border border-slate-200 bg-white text-sm text-navy placeholder:text-slate-400 shadow-sm focus:border-electric focus:ring-4 focus:ring-electric/15 outline-none transition-[box-shadow,border-color] duration-200"
            />
            {query ? (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setPage(1);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-8 h-8 rounded-full text-slate-400 hover:text-navy hover:bg-slate-100"
                aria-label="Hapus pencarian"
              >
                <X className="w-4 h-4" />
              </button>
            ) : null}
          </label>
        </div>

        <div
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none"
          role="tablist"
          aria-label="Filter kategori berita"
        >
          {FILTERS.map((filter) => {
            const isActive = category === filter;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setCategory(filter);
                  setPage(1);
                }}
                className={cn(
                  'relative whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold min-h-[44px] flex items-center gap-2',
                  isActive
                    ? 'text-white'
                    : 'bg-white text-slate-600 hover:text-navy border border-slate-200'
                )}
              >
                {isActive && !shouldReduceMotion ? (
                  <motion.span
                    layoutId="news-filter-active"
                    className="absolute inset-0 rounded-xl bg-navy -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                ) : null}
                {isActive && shouldReduceMotion ? (
                  <span className="absolute inset-0 rounded-xl bg-navy -z-10" />
                ) : null}
                <span className="relative z-10">{FILTER_LABEL[filter]}</span>
                <span
                  className={cn(
                    'relative z-10 text-[11px] px-2 py-0.5 rounded-full font-extrabold',
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  )}
                >
                  {counts[filter] ?? 0}
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${category}-${normalizedQuery}-${currentPage}`}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {visiblePosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visiblePosts.map((post) => (
                  <NewsCard key={post.id} post={post} preferInternal />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                <p className="text-sm font-semibold text-navy mb-1">
                  Tidak ada artikel yang cocok
                </p>
                <p className="text-sm text-slate-500">
                  Ubah kata kunci atau pilih kategori lain.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {totalPages > 1 ? (
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              const isActive = pageNumber === currentPage;
              return (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => setPage(pageNumber)}
                  className={cn(
                    'min-w-[44px] min-h-[44px] rounded-xl text-sm font-bold border transition-colors duration-150',
                    isActive
                      ? 'bg-navy text-white border-navy'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-navy hover:text-navy'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
