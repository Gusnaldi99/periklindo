'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { CalendarDays, ChevronLeft, ChevronRight, MapPin, X } from 'lucide-react';
import { formatDateId } from '@/lib/content';
import type { GalleryItem } from '@/types';

interface GalleryLightboxModalProps {
  items: GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function GalleryLightboxModal({
  items,
  activeIndex,
  onClose,
  onNavigate,
}: GalleryLightboxModalProps) {
  const shouldReduceMotion = useReducedMotion();
  const item = activeIndex !== null ? items[activeIndex] : null;
  const isOpen = Boolean(item);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight' && activeIndex !== null) {
        onNavigate((activeIndex + 1) % items.length);
      }
      if (event.key === 'ArrowLeft' && activeIndex !== null) {
        onNavigate((activeIndex - 1 + items.length) % items.length);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, activeIndex, items.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {item && activeIndex !== null ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-navy/92 p-3 sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Pratinjau ${item.title}`}
        >
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
            transition={
              shouldReduceMotion
                ? { duration: 0.12 }
                : { duration: 0.28, ease: [0.16, 1, 0.3, 1] }
            }
            className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden border border-white/15 bg-navy-light"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
              <p className="min-w-0 font-[family-name:var(--font-body)] text-sm font-medium text-teal">
                {item.category}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 min-h-[40px] min-w-[40px] items-center justify-center bg-white/10 text-white transition-[background-color,opacity] duration-150 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90"
                aria-label="Tutup pratinjau"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="relative min-h-[240px] flex-1 bg-slate-900 sm:min-h-[420px]">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />

              {items.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate((activeIndex - 1 + items.length) % items.length)
                    }
                    className="absolute left-3 top-1/2 inline-flex h-11 w-11 min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center border border-white/20 bg-navy/70 text-white transition-[background-color,opacity] duration-150 hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90"
                    aria-label="Foto sebelumnya"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate((activeIndex + 1) % items.length)}
                    className="absolute right-3 top-1/2 inline-flex h-11 w-11 min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center border border-white/20 bg-navy/70 text-white transition-[background-color,opacity] duration-150 hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90"
                    aria-label="Foto berikutnya"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </>
              ) : null}
            </div>

            <div className="bg-navy px-5 py-5 text-white sm:px-6">
              <h2 className="mb-2 min-w-0 break-words font-[family-name:var(--font-heading)] text-lg font-semibold text-white sm:text-xl">
                {item.title}
              </h2>
              <p className="mb-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-300">
                {item.description}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-[family-name:var(--font-body)] text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5 shrink-0 text-electric" aria-hidden="true" />
                  {formatDateId(item.date)}
                </span>
                {item.location ? (
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-teal" aria-hidden="true" />
                    {item.location}
                  </span>
                ) : null}
                <span className="ml-auto tabular-nums text-slate-500">
                  {activeIndex + 1} / {items.length}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
