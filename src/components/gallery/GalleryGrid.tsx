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
    <section id="arsip-galeri" className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="container-main">
        <div
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none"
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
                  'relative whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold min-h-[44px] flex items-center gap-2 transition-colors duration-150',
                  isActive
                    ? 'text-white'
                    : 'bg-white text-slate-600 hover:text-navy border border-slate-200'
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId={shouldReduceMotion ? undefined : 'gallery-filter-active'}
                    className="absolute inset-0 rounded-xl bg-navy -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                ) : null}
                <span className="relative z-10">{filter}</span>
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

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                layout
                initial={
                  shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 16 }
                }
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={
                  shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 8 }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0.12 }
                    : {
                        type: 'spring',
                        stiffness: 260,
                        damping: 25,
                        delay: index * 0.05,
                      }
                }
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                onClick={() =>
                  setActiveIndex(items.findIndex((entry) => entry.id === item.id))
                }
                className="group text-left bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-electric/30 transition-shadow duration-200"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent opacity-80" />
                  <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-wider bg-electric text-white px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-sm font-bold leading-snug line-clamp-2">
                      {item.title}
                    </p>
                    <div className="mt-1.5 flex flex-wrap items-center gap-3 text-[11px] text-slate-200">
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="w-3 h-3" />
                        {formatDateId(item.date, 'short')}
                      </span>
                      {item.location ? (
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 ? (
          <p className="text-center text-sm text-slate-500 py-16">
            Belum ada dokumentasi pada kategori ini.
          </p>
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
