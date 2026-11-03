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
          <mark key={`${part}-${index}`} className="bg-electric/15 text-navy rounded-sm px-0.5">
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

  return (
    <section id="daftar-faq" className="py-16 md:py-20 bg-slate-50">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-8">
          <label className="relative flex-1">
            <span className="sr-only">Cari pertanyaan</span>
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Cari pertanyaan, misalnya PEVS, anggota, atau PPN DTP…"
              className="w-full h-12 pl-11 pr-11 rounded-xl border border-slate-200 bg-white text-sm text-navy placeholder:text-slate-400 shadow-sm focus:border-electric focus:ring-4 focus:ring-electric/15 outline-none transition-[box-shadow,border-color] duration-200"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery('')}
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
                  'relative whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold min-h-[44px]',
                  isActive
                    ? 'text-white'
                    : 'bg-white text-slate-600 hover:text-navy border border-slate-200'
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId={shouldReduceMotion ? undefined : 'faq-filter-active'}
                    className="absolute inset-0 rounded-xl bg-navy -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                ) : null}
                <span className="relative z-10">{filter}</span>
              </button>
            );
          })}
        </div>

        {filteredItems.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <p className="text-sm font-semibold text-navy">Tidak ada pertanyaan yang cocok</p>
            <p className="text-sm text-slate-500 mt-1">
              Coba kata kunci lain atau hubungi sekretariat melalui halaman Kontak.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {Array.from(grouped.entries()).map(([groupName, groupItems]) => (
              <div key={groupName}>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-electric mb-3">
                  {groupName}
                </p>
                <div className="space-y-3">
                  {groupItems.map((item) => {
                    const isOpen = openId === item.id;
                    return (
                      <div
                        key={item.id}
                        className={cn(
                          'bg-white border rounded-2xl overflow-hidden transition-colors duration-200',
                          isOpen
                            ? 'border-electric/40 shadow-lg shadow-electric/5'
                            : 'border-slate-200 hover:border-slate-300'
                        )}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenId(isOpen ? null : item.id)}
                          aria-expanded={isOpen}
                          className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 min-h-[56px]"
                        >
                          <span className="text-sm sm:text-base font-bold text-navy leading-snug">
                            <Highlight text={item.question} query={normalizedQuery} />
                          </span>
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                            className={cn(
                              'shrink-0 w-8 h-8 rounded-full flex items-center justify-center border',
                              isOpen
                                ? 'bg-navy text-white border-navy'
                                : 'bg-slate-50 text-slate-500 border-slate-200'
                            )}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.span>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen ? (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={
                                shouldReduceMotion
                                  ? { duration: 0 }
                                  : { type: 'spring', stiffness: 320, damping: 28 }
                              }
                              className="overflow-hidden"
                            >
                              <div className="px-5 pb-5 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
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
