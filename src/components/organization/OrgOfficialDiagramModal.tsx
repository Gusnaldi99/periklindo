'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Maximize2,
  Download,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X,
  ShieldCheck,
} from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';
import SectionHeader from '@/components/shared/SectionHeader';

export default function OrgOfficialDiagramModal() {
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  const handleOpenModal = () => {
    setZoomLevel(1);
    setIsOpen(true);
  };

  return (
    <section
      id="bagan-resmi"
      className="overflow-x-clip border-b border-slate-200 bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="container-main">
        <ScrollReveal>
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-medium text-slate-500">
              Dokumen Skematik Resmi
            </p>
            <SectionHeader
              title="Bagan Visual Asli Organisasi"
              subtitle="Diagram skematik resmi susunan kepengurusan PERIKLINDO yang menghubungkan jalur komando pimpinan, fungsi penasihat senior, dan distribusi 6 bidang kerja."
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="relative border border-slate-200 bg-slate-50 p-4 sm:p-6 lg:p-8">
            <div className="mb-5 flex flex-col justify-between gap-4 border-b border-slate-200 pb-4 sm:flex-row sm:items-center">
              <p className="font-[family-name:var(--font-body)] text-xs font-medium text-slate-700">
                Format Resmi: Organization Structure PERIKLINDO (Bagan Induk)
              </p>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleOpenModal}
                  className="inline-flex min-h-[40px] items-center gap-2 whitespace-nowrap bg-electric px-4 py-2 font-[family-name:var(--font-body)] text-xs font-semibold text-white transition-[background-color,opacity] duration-150 hover:bg-electric-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90"
                >
                  <Maximize2 className="h-4 w-4" aria-hidden="true" />
                  <span>Buka Bagan Lengkap (Fullscreen)</span>
                </button>

                <a
                  href="/assets/org/chart-official.png"
                  download="Struktur-Organisasi-PERIKLINDO.png"
                  className="inline-flex min-h-[40px] items-center gap-2 border border-slate-300 bg-white px-4 py-2 font-[family-name:var(--font-body)] text-xs font-semibold text-slate-700 transition-[background-color,opacity] duration-150 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90"
                >
                  <Download className="h-4 w-4 text-slate-500" aria-hidden="true" />
                  <span>Unduh PNG</span>
                </a>
              </div>
            </div>

            <div
              onClick={handleOpenModal}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenModal();
                }
              }}
              className="group/img relative w-full cursor-zoom-in overflow-hidden border border-slate-200/90 bg-white text-left focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
              aria-label="Klik untuk memperbesar bagan organisasi"
            >
              <Image
                src="/assets/org/chart-official.png"
                alt="Bagan Struktur Organisasi Resmi PERIKLINDO"
                width={1024}
                height={703}
                className="h-auto w-full object-contain transition-[opacity] duration-300 group-hover/img:opacity-95"
                priority
              />

              <div className="absolute inset-0 flex items-center justify-center bg-navy/25 opacity-0 transition-[opacity] duration-200 group-hover/img:opacity-100">
                <span className="flex items-center gap-2.5 border border-white/20 bg-navy/95 px-5 py-2.5 font-[family-name:var(--font-body)] text-xs font-semibold text-white backdrop-blur-md">
                  <Maximize2 className="h-4 w-4 text-teal" aria-hidden="true" />
                  Klik untuk melihat tampilan penuh resolusi tinggi
                </span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 font-[family-name:var(--font-body)] text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5 font-medium text-slate-600">
                <ShieldCheck className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
                Dokumen Arsip Resmi Perkumpulan Industri Kendaraan Listrik Indonesia (PERIKLINDO)
              </span>
              <span className="text-slate-600">Dimensi Asli: 1024 &times; 703 piksel</span>
            </div>
          </div>
        </ScrollReveal>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 backdrop-blur-md sm:p-6"
              onClick={() => setIsOpen(false)}
              role="dialog"
              aria-modal="true"
              aria-label="Pratinjau bagan organisasi resolusi tinggi"
            >
              <motion.div
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { scale: 0.96, opacity: 0 }
                }
                animate={{ scale: 1, opacity: 1 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { scale: 0.96, opacity: 0 }
                }
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden border border-slate-200 bg-white"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold leading-tight text-navy sm:text-base">
                      Organization Structure &bull; PERIKLINDO
                    </h3>
                    <p className="hidden font-[family-name:var(--font-body)] text-[11px] text-slate-500 sm:block">
                      Bagan Induk Kepengurusan Periode Aktif
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="hidden items-center gap-1 border border-slate-200 bg-white p-1 sm:flex">
                      <button
                        type="button"
                        onClick={handleZoomOut}
                        disabled={zoomLevel <= 0.75}
                        className="rounded p-1.5 text-slate-600 transition-[background-color,color] duration-150 hover:bg-slate-100 hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric disabled:opacity-40"
                        title="Perkecil (-)"
                      >
                        <ZoomOut className="h-4 w-4" aria-hidden="true" />
                      </button>
                      <span className="min-w-[42px] px-1.5 text-center font-[family-name:var(--font-body)] text-xs font-semibold text-slate-700">
                        {Math.round(zoomLevel * 100)}%
                      </span>
                      <button
                        type="button"
                        onClick={handleZoomIn}
                        disabled={zoomLevel >= 2.5}
                        className="rounded p-1.5 text-slate-600 transition-[background-color,color] duration-150 hover:bg-slate-100 hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric disabled:opacity-40"
                        title="Perbesar (+)"
                      >
                        <ZoomIn className="h-4 w-4" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={handleResetZoom}
                        className="rounded p-1.5 text-slate-600 transition-[background-color,color] duration-150 hover:bg-slate-100 hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
                        title="Reset 100%"
                      >
                        <RotateCcw className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>

                    <a
                      href="/assets/org/chart-official.png"
                      download="Struktur-Organisasi-PERIKLINDO.png"
                      className="inline-flex items-center gap-1.5 bg-electric px-3 py-1.5 font-[family-name:var(--font-body)] text-xs font-semibold text-white transition-[background-color,opacity] duration-150 hover:bg-electric-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90"
                    >
                      <Download className="h-3.5 w-3.5" aria-hidden="true" />
                      <span className="hidden sm:inline">Unduh</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="flex h-8 w-8 min-h-[32px] min-w-[32px] items-center justify-center bg-slate-200 text-slate-700 transition-[background-color] duration-150 hover:bg-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
                      aria-label="Tutup jendela pratinjau"
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div className="flex max-h-[calc(94vh-75px)] select-none items-center justify-center overflow-auto bg-slate-100 p-4 sm:p-6">
                  <div
                    style={{
                      transform: `scale(${zoomLevel})`,
                      transformOrigin: 'center center',
                      transition: 'transform 0.2s ease-out',
                    }}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src="/assets/org/chart-official.png"
                      alt="Bagan Struktur Organisasi Resmi PERIKLINDO Resolusi Tinggi"
                      width={1400}
                      height={962}
                      className="h-auto w-full object-contain"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
