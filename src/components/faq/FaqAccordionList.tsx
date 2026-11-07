'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronDown, Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { FaqItem } from '@/types';

const CATEGORIES = [
  'Semua',
  'Seputar PERIKLINDO',
  'Prosedur Anggota',
  'PEVS',
  'Regulasi & Insentif EV',
] as const;

type CategoryFilter = (typeof CATEGORIES)[number];

interface FaqAccordionListProps {
  items: FaqItem[];
}

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark
            key={`${part}-${index}`}
            className="rounded-sm bg-electric/15 px-0.5 text-navy"
          >
            {part}
          </mark>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        )
      )}
    </>
  );
}

export default function FaqAccordionList({ items }: FaqAccordionListProps) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('Semua');
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const shouldReduceMotion = useReducedMotion();
  const normalizedQuery = query.trim();

  const filteredItems = useMemo(() => {
    return items
      .filter((item) => (category === 'Semua' ? true : item.category === category))
      .filter((item) => {
        if (!normalizedQuery) return true;
        const haystack = `${item.question} ${item.answer}`.toLowerCase();
        return haystack.includes(normalizedQuery.toLowerCase());
      })
      .sort((a, b) => a.order - b.order);
  }, [items, category, normalizedQuery]);

  const grouped = useMemo(() => {
    const groups = new Map<string, FaqItem[]>();
    for (const item of filteredItems) {
      const list = groups.get(item.category) ?? [];
      list.push(item);
      groups.set(item.category, list);
    }
    return groups;
  }, [filteredItems]);

  const counts = useMemo(() => {
    const next: Record<string, number> = { Semua: items.length };
    for (const filter of CATEGORIES) {
      if (filter === 'Semua') continue;
      next[filter] = items.filter((item) => item.category === filter).length;
    }
    return next;
  }, [items]);

  return (
    <section id="daftar-faq" className="overflow-x-clip bg-slate-50 py-16 md:py-20 lg:py-24">
      <div className="container-main">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center">
          <label className="relative flex-1">
            <span className="sr-only">Cari pertanyaan</span>
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Cari pertanyaan, misalnya PEVS, anggota, atau PPN DTP…"
              className="h-12 w-full border border-slate-500 bg-white pl-11 pr-11 font-[family-name:var(--font-body)] text-sm text-navy outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-slate-500 focus:border-electric focus:ring-4 focus:ring-electric/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center text-slate-400 transition-[color,background-color] duration-150 hover:bg-slate-100 hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-80"
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
          aria-label="Filter kategori FAQ"
        >
          {CATEGORIES.map((filter) => {
            const isActive = category === filter;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setCategory(filter)}
                className={cn(
                  'relative inline-flex min-h-[44px] shrink-0 items-center gap-2 whitespace-nowrap px-3.5 py-2.5 font-[family-name:var(--font-body)] text-sm font-medium transition-[color,opacity] duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-80 sm:px-4',
                  isActive ? 'text-navy' : 'text-slate-500 hover:text-navy'
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId={shouldReduceMotion ? undefined : 'faq-filter-active'}
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

        {filteredItems.length === 0 ? (
          <div className="border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <p className="font-[family-name:var(--font-body)] text-sm font-semibold text-navy">
              Tidak ada pertanyaan yang cocok
            </p>
            <p className="mt-1 font-[family-name:var(--font-body)] text-sm text-slate-500">
              Coba kata kunci lain atau hubungi sekretariat melalui halaman Kontak.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {Array.from(grouped.entries()).map(([groupName, groupItems]) => (
              <div key={groupName}>
                <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-medium text-slate-500">
                  {groupName}
                </p>
                <div className="space-y-3">
                  {groupItems.map((item) => {
                    const isOpen = openId === item.id;
                    return (
                      <div
                        key={item.id}
                        className={cn(
                          'overflow-hidden border bg-white transition-[border-color] duration-200',
                          isOpen
                            ? 'border-electric/35'
                            : 'border-slate-200 hover:border-slate-300'
                        )}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenId(isOpen ? null : item.id)}
                          aria-expanded={isOpen}
                          className="flex min-h-[52px] w-full items-start justify-between gap-4 px-5 py-4 text-left transition-[background-color,opacity] duration-150 hover:bg-slate-50/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90"
                        >
                          <span className="font-[family-name:var(--font-heading)] text-sm font-semibold leading-snug text-navy sm:text-base">
                            <Highlight text={item.question} query={normalizedQuery} />
                          </span>
                          <span
                            className={cn(
                              'inline-flex h-8 w-8 shrink-0 items-center justify-center border transition-[transform,background-color,color,border-color] duration-200',
                              isOpen
                                ? 'rotate-180 border-navy bg-navy text-white'
                                : 'rotate-0 border-slate-200 bg-slate-50 text-slate-500'
                            )}
                            aria-hidden="true"
                          >
                            <ChevronDown className="h-4 w-4" />
                          </span>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen ? (
                            <motion.div
                              initial={
                                shouldReduceMotion
                                  ? { opacity: 0 }
                                  : { height: 0, opacity: 0 }
                              }
                              animate={
                                shouldReduceMotion
                                  ? { opacity: 1 }
                                  : { height: 'auto', opacity: 1 }
                              }
                              exit={
                                shouldReduceMotion
                                  ? { opacity: 0 }
                                  : { height: 0, opacity: 0 }
                              }
                              transition={
                                shouldReduceMotion
                                  ? { duration: 0 }
                                  : { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
                              }
                              className="overflow-hidden"
                            >
                              <div className="border-t border-slate-100 px-5 pb-5 pt-0 font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-600">
                                <p className="pt-4">
                                  <Highlight text={item.answer} query={normalizedQuery} />
                                </p>
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
