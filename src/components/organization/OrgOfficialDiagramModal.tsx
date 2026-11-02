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
  FileText,
  ShieldCheck,
} from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';
import SectionHeader from '@/components/shared/SectionHeader';
import { cn } from '@/lib/utils';

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
    <section id="bagan-resmi" className="py-16 md:py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="container-main">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-100 text-teal mb-3 border border-emerald-200">
              <FileText className="w-3.5 h-3.5 text-teal" />
              Dokumen Skematik Resmi
            </div>
            <SectionHeader
              title="Bagan Visual Asli Organisasi"
              subtitle="Diagram skematik resmi susunan kepengurusan PERIKLINDO yang menghubungkan jalur komando pimpinan, fungsi penasihat senior, dan distribusi 6 bidang kerja."
            />
          </div>
        </ScrollReveal>

        {/* Diagram Card with Institutional Frame & Zoom Trigger */}
        <ScrollReveal delay={150}>
          <div className="relative group bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300">
            {/* Header Action Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span>Format Resmi: Organization Structure PERIKLINDO (Bagan Induk)</span>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleOpenModal}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-electric text-white text-xs font-bold hover:bg-electric-hover active:scale-[0.98] transition-all min-h-[40px] shadow-sm shadow-electric/20"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>Buka Bagan Lengkap (Fullscreen)</span>
                </button>

                <a
                  href="/assets/org/chart-official.png"
                  download="Struktur-Organisasi-PERIKLINDO.png"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 text-xs font-bold hover:bg-slate-50 active:scale-[0.98] transition-all min-h-[40px] shadow-2xs"
                >
                  <Download className="w-4 h-4 text-slate-500" />
                  <span>Unduh PNG</span>
                </a>
              </div>
            </div>

            {/* Visual Image Container with Institutional Document Border & Hint */}
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
              className="w-full relative rounded-xl overflow-hidden bg-white border border-slate-200/90 shadow-inner group/img cursor-zoom-in text-left focus:outline-none focus:ring-2 focus:ring-electric"
              aria-label="Klik untuk memperbesar bagan organisasi"
            >
              {/* Subtle Document Grid Overlay */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, #0A192F 1px, transparent 0)',
                  backgroundSize: '20px 20px',
                }}
              />

              <Image
                src="/assets/org/chart-official.png"
                alt="Bagan Struktur Organisasi Resmi PERIKLINDO"
                width={1024}
                height={703}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover/img:scale-[1.01]"
                priority
              />

              {/* Hover Overlay Hint */}
              <div className="absolute inset-0 bg-navy/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-navy/95 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-xl backdrop-blur-md flex items-center gap-2.5 border border-white/20">
                  <Maximize2 className="w-4 h-4 text-emerald-400" />
                  Klik untuk melihat tampilan penuh resolusi tinggi
                </span>
              </div>
            </div>

            {/* Institutional Seal Footnote */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5 font-medium text-slate-600">
                <ShieldCheck className="w-3.5 h-3.5 text-teal" />
                Dokumen Arsip Resmi Perkumpulan Industri Kendaraan Listrik Indonesia (PERIKLINDO)
              </span>
              <span className="text-slate-400">Dimensi Asli: 1024 &times; 703 piksel</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Lightbox / Modal for Full Zoom with Spring Physics */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
              onClick={() => setIsOpen(false)}
              role="dialog"
              aria-modal="true"
              aria-label="Pratinjau bagan organisasi resolusi tinggi"
            >
              <motion.div
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { scale: 0.94, opacity: 0, y: 10 }
                }
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { scale: 0.94, opacity: 0, y: 10 }
                }
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-6xl w-full max-h-[94vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-200 bg-slate-50">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-electric shadow-xs" />
                    <div>
                      <h3 className="font-extrabold text-navy text-sm sm:text-base leading-tight">
                        Organization Structure &bull; PERIKLINDO
                      </h3>
                      <p className="text-[11px] text-slate-500 hidden sm:block">
                        Bagan Induk Kepengurusan Periode Aktif
                      </p>
                    </div>
                  </div>

                  {/* Controls: Zoom In, Zoom Out, Reset, Download, Close */}
                  <div className="flex items-center gap-2">
                    <div className="hidden sm:flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-1">
                      <button
                        type="button"
                        onClick={handleZoomOut}
                        disabled={zoomLevel <= 0.75}
                        className="p-1.5 rounded text-slate-600 hover:text-navy hover:bg-slate-100 disabled:opacity-40 transition-colors"
                        title="Perkecil (-)"
                      >
                        <ZoomOut className="w-4 h-4" />
                      </button>
                      <span className="text-xs font-mono font-bold px-1.5 min-w-[42px] text-center text-slate-700">
                        {Math.round(zoomLevel * 100)}%
                      </span>
                      <button
                        type="button"
                        onClick={handleZoomIn}
                        disabled={zoomLevel >= 2.5}
                        className="p-1.5 rounded text-slate-600 hover:text-navy hover:bg-slate-100 disabled:opacity-40 transition-colors"
                        title="Perbesar (+)"
                      >
                        <ZoomIn className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleResetZoom}
                        className="p-1.5 rounded text-slate-600 hover:text-navy hover:bg-slate-100 transition-colors"
                        title="Reset 100%"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>

                    <a
                      href="/assets/org/chart-official.png"
                      download="Struktur-Organisasi-PERIKLINDO.png"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-electric text-white text-xs font-bold hover:bg-electric-hover transition-colors shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Unduh</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="w-8 h-8 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors min-h-[32px] min-w-[32px]"
                      aria-label="Tutup jendela pratinjau"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Modal Body with Zooming & Scrollable Canvas */}
                <div className="p-4 sm:p-6 overflow-auto flex items-center justify-center bg-slate-100 max-h-[calc(94vh-75px)] select-none">
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
                      className="w-full h-auto object-contain rounded-lg shadow-md"
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
