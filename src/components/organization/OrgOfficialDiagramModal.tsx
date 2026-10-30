'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/shared/ScrollReveal';
import SectionHeader from '@/components/shared/SectionHeader';

export default function OrgOfficialDiagramModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="bagan-resmi" className="py-16 md:py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="container-main">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-100 text-teal mb-3">
              Dokumen Resmi
            </div>
            <SectionHeader
              title="Bagan Visual Asli Organisasi"
              subtitle="Diagram skematik resmi susunan kepengurusan PERIKLINDO yang menghubungkan jalur kepemimpinan, penasihat, dan seluruh bidang kerja."
            />
          </div>
        </ScrollReveal>

        {/* Diagram Card with Interactive Zoom trigger */}
        <ScrollReveal delay={150}>
          <div className="relative group bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-200">
            {/* Click to zoom overlay banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Format Resmi: Organization Structure PERIKLINDO</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-electric text-white text-xs font-semibold hover:bg-electric-hover active:scale-[0.98] transition-all min-h-[40px]"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  <span>Perbesar Diagram (Zoom)</span>
                </button>

                <a
                  href="/assets/org/chart-official.png"
                  download="Struktur-Organisasi-PERIKLINDO.png"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 text-xs font-semibold hover:bg-slate-50 active:scale-[0.98] transition-all min-h-[40px]"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Unduh Gambar</span>
                </a>
              </div>
            </div>

            {/* Visual Image container with cursor zoom pointer */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="w-full relative rounded-xl overflow-hidden bg-white border border-slate-200/90 shadow-inner group/img cursor-zoom-in text-left focus:outline-none focus:ring-2 focus:ring-electric"
              aria-label="Klik untuk memperbesar bagan organisasi"
            >
              <Image
                src="/assets/org/chart-official.png"
                alt="Bagan Struktur Organisasi Resmi PERIKLINDO"
                width={1024}
                height={703}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover/img:scale-[1.01]"
                priority
              />

              {/* Hover Overlay Hint */}
              <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-navy/90 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg backdrop-blur-xs flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  Klik untuk melihat tampilan penuh
                </span>
              </div>
            </button>
          </div>
        </ScrollReveal>

        {/* Lightbox / Modal for Full Zoom */}
        {isOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Pratinjau bagan organisasi ukuran penuh"
          >
            <div
              className="relative max-w-6xl w-full max-h-[92vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-electric" />
                  <h3 className="font-bold text-navy text-sm sm:text-base">
                    Organization Structure &bull; PERIKLINDO
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="/assets/org/chart-official.png"
                    download="Struktur-Organisasi-PERIKLINDO.png"
                    className="text-xs font-semibold text-electric hover:underline"
                  >
                    Unduh PNG
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors min-h-[32px] min-w-[32px]"
                    aria-label="Tutup jendela pratinjau"
                  >
                    &times;
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-4 overflow-auto flex items-center justify-center bg-slate-100 max-h-[calc(92vh-70px)]">
                <Image
                  src="/assets/org/chart-official.png"
                  alt="Bagan Struktur Organisasi Resmi PERIKLINDO"
                  width={1400}
                  height={962}
                  className="w-full h-auto object-contain rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
