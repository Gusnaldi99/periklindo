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
    <section id="arsip-berita" className="overflow-x-clip bg-slate-50 py-16 md:py-20">
      <div className="container-main">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center">
          <label className="relative flex-1">
            <span className="sr-only">Cari berita</span>
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
              placeholder="Cari judul, kutipan, atau penulis…"
              className="h-12 w-full border border-slate-500 bg-white pl-11 pr-11 font-[family-name:var(--font-body)] text-sm text-navy outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-slate-500 focus:border-electric focus:ring-4 focus:ring-electric/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
            />
            {query ? (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setPage(1);
                }}
                className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center text-slate-400 transition-[color,background-color] duration-150 hover:bg-slate-100 hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
                aria-label="Hapus pencarian"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            ) : null}
          </label>
        </div>

        <div
          className="scrollbar-none mb-10 flex items-center gap-1 overflow-x-auto border-b border-slate-200 pb-px"
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
                  'relative inline-flex min-h-[44px] shrink-0 items-center gap-2 whitespace-nowrap px-3.5 py-2.5 font-[family-name:var(--font-body)] text-sm font-medium transition-[color,opacity] duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-80 sm:px-4',
                  isActive
                    ? 'text-navy'
                    : 'text-slate-500 hover:text-navy'
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId={shouldReduceMotion ? undefined : 'news-filter-active'}
                    className="absolute inset-x-0 -bottom-px h-0.5 bg-navy"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                ) : null}
                <span className="relative z-10">{FILTER_LABEL[filter]}</span>
                <span
                  className={cn(
                    'relative z-10 font-[family-name:var(--font-body)] text-xs tabular-nums',
                    isActive ? 'text-slate-500' : 'text-slate-400'
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
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            {visiblePosts.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-[repeat(2,minmax(0,1fr))] lg:grid-cols-[repeat(3,minmax(0,1fr))]">
                {visiblePosts.map((post) => (
                  <NewsCard key={post.id} post={post} preferInternal />
                ))}
              </div>
            ) : (
              <div className="border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                <p className="mb-1 font-[family-name:var(--font-body)] text-sm font-semibold text-navy">
                  Tidak ada artikel yang cocok
                </p>
                <p className="font-[family-name:var(--font-body)] text-sm text-slate-500">
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
                    'min-h-[44px] min-w-[44px] border font-[family-name:var(--font-body)] text-sm font-semibold transition-[background-color,border-color,color] duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric',
                    isActive
                      ? 'border-navy bg-navy text-white'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-navy hover:text-navy'
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
