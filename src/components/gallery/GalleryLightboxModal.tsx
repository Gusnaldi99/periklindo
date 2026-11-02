'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { CalendarDays, ChevronLeft, ChevronRight, MapPin, X } from 'lucide-react';
import { formatDateId } from '@/lib/content';
import { cn } from '@/lib/utils';
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
          className="fixed inset-0 z-[80] bg-navy/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Pratinjau ${item.title}`}
        >
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 8 }}
            transition={
              shouldReduceMotion
                ? { duration: 0.12 }
                : { type: 'spring', stiffness: 320, damping: 28 }
            }
            className="relative w-full max-w-5xl max-h-[94vh] bg-navy-light rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b border-white/10">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-300">
                {item.category}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 min-h-[40px] min-w-[40px]"
                aria-label="Tutup pratinjau"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative bg-black min-h-[240px] sm:min-h-[420px] flex-1">
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
                    className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded-full bg-navy/70 text-white border border-white/20 hover:bg-navy min-h-[44px] min-w-[44px]"
                    aria-label="Foto sebelumnya"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate((activeIndex + 1) % items.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded-full bg-navy/70 text-white border border-white/20 hover:bg-navy min-h-[44px] min-w-[44px]"
                    aria-label="Foto berikutnya"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              ) : null}
            </div>

            <div className="px-5 sm:px-6 py-5 bg-navy text-white">
              <h2 className="text-lg sm:text-xl font-extrabold text-white mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5 text-electric" />
                  {formatDateId(item.date)}
                </span>
                {item.location ? (
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-teal" />
                    {item.location}
                  </span>
                ) : null}
                <span className={cn('ml-auto font-mono text-slate-500')}>
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
