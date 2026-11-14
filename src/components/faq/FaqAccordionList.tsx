'use client';

import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ChevronDown, Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { FaqItem } from '@/types';

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
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const shouldReduceMotion = useReducedMotion();
  const normalizedQuery = query.trim();

  const filteredItems = useMemo(() => {
    return items
      .filter((item) => {
        if (!normalizedQuery) return true;
        const haystack = `${item.question} ${item.answer}`.toLowerCase();
        return haystack.includes(normalizedQuery.toLowerCase());
      })
      .sort((a, b) => a.order - b.order);
  }, [items, normalizedQuery]);

  return (
    <section id="daftar-faq" className="py-16 md:py-20 bg-slate-50">
      <div className="container-main max-w-3xl">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">
            8 Pertanyaan Kunci
          </h2>
          <span className="block h-0.5 w-12 rounded-full bg-gradient-to-r from-electric to-teal mb-3" />
          <p className="text-sm text-slate-500">
            Jawaban ringkas seputar PERIKLINDO, keanggotaan, PEVS/PEVC, dan layanan
            sekretariat.
          </p>
        </div>

        <div className="mb-8">
          <label className="relative block">
            <span className="sr-only">Cari pertanyaan</span>
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Cari pertanyaan, misalnya PEVS, anggota, atau audiensi…"
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

        {filteredItems.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <p className="text-sm font-semibold text-navy">Tidak ada pertanyaan yang cocok</p>
            <p className="text-sm text-slate-500 mt-1">
              Coba kata kunci lain atau hubungi sekretariat melalui halaman Kontak.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredItems.map((item) => {
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
                      <span className="text-electric font-mono text-xs mr-2">
                        {String(item.order).padStart(2, '0')}
                      </span>
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

                  {/* Zero-jitter accordion: CSS grid 0fr/1fr avoids height:auto jump */}
                  <div
                    className={cn(
                      'grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                      shouldReduceMotion && 'duration-0'
                    )}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        <p className="pt-4">
                          <Highlight text={item.answer} query={normalizedQuery} />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
