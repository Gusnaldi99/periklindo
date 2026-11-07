'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { CalendarDays, MapPin } from 'lucide-react';
import { formatDateId } from '@/lib/content';
import { cn } from '@/lib/utils';
import type { GalleryItem } from '@/types';
import GalleryLightboxModal from './GalleryLightboxModal';

const FILTERS = [
  'Semua',
  'Pameran PEVS',
  'Audiensi Pemerintah',
  'Seminar',
  'Kunjungan Pabrik',
] as const;

type Filter = (typeof FILTERS)[number];

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>('Semua');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const filteredItems = useMemo(
    () =>
      activeFilter === 'Semua'
        ? items
        : items.filter((item) => item.category === activeFilter),
    [activeFilter, items]
  );

  const counts = useMemo(() => {
    const next: Record<string, number> = { Semua: items.length };
    for (const filter of FILTERS) {
      if (filter === 'Semua') continue;
      next[filter] = items.filter((item) => item.category === filter).length;
    }
    return next;
  }, [items]);

  return (
    <section id="arsip-galeri" className="overflow-x-clip bg-slate-50 py-16 md:py-20 lg:py-24">
      <div className="container-main">
        <div
          className="scrollbar-none mb-10 flex items-center gap-1 overflow-x-auto border-b border-slate-200 pb-px"
          role="tablist"
          aria-label="Filter kategori galeri"
        >
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  'relative inline-flex min-h-[44px] shrink-0 items-center gap-2 whitespace-nowrap px-3.5 py-2.5 font-[family-name:var(--font-body)] text-sm font-medium transition-[color,opacity] duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-80 sm:px-4',
                  isActive ? 'text-navy' : 'text-slate-500 hover:text-navy'
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId={shouldReduceMotion ? undefined : 'gallery-filter-active'}
                    className="absolute inset-x-0 -bottom-px h-0.5 bg-navy"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                ) : null}
                <span className="relative z-10">{filter}</span>
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
            key={activeFilter}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-[repeat(2,minmax(0,1fr))] lg:grid-cols-[repeat(3,minmax(0,1fr))]"
          >
            {filteredItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  setActiveIndex(items.findIndex((entry) => entry.id === item.id))
                }
                className="group min-w-0 overflow-hidden border border-slate-200 bg-white text-left transition-[border-color,opacity] duration-150 hover:border-navy/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90"
              >
                <div className="relative aspect-[4/3] min-w-0 overflow-hidden bg-slate-100">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 p-4 sm:p-5">
                  <p className="mb-2 font-[family-name:var(--font-body)] text-xs font-medium text-slate-600">
                    {item.category}
                  </p>
                  <p className="mb-3 min-w-0 break-words font-[family-name:var(--font-heading)] text-base font-semibold leading-snug text-navy sm:text-lg">
                    {item.title}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-[family-name:var(--font-body)] text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      {formatDateId(item.date, 'short')}
                    </span>
                    {item.location ? (
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        {item.location}
                      </span>
                    ) : null}
                  </div>
                </div>
              </button>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredItems.length === 0 ? (
          <div className="border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <p className="font-[family-name:var(--font-body)] text-sm text-slate-500">
              Belum ada dokumentasi pada kategori ini.
            </p>
          </div>
        ) : null}
      </div>

      <GalleryLightboxModal
        items={items}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
