'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { Mail } from 'lucide-react';

export default function ContactHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-x-clip border-b border-navy-light bg-navy py-12 text-white sm:py-14 md:py-16 lg:py-18">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, var(--color-slate-100) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-navy-light/40 to-transparent"
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
          }
          className="max-w-4xl min-w-0"
        >
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 font-[family-name:var(--font-body)] text-xs text-slate-300 sm:text-sm">
              <li>
                <Link
                  href="/"
                  className="transition-[color] duration-150 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
                >
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-500">
                /
              </li>
              <li className="font-medium text-white" aria-current="page">
                Kontak Kami
              </li>
            </ol>
          </nav>

          <p className="mb-3 inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-sm font-medium text-slate-300">
            <Mail className="h-3.5 w-3.5 shrink-0 text-teal" aria-hidden="true" />
            <span>Sekretariat Resmi • CTR-12/THAMRIN</span>
          </p>

          <h1 className="mb-4 max-w-3xl min-w-0 font-[family-name:var(--font-heading)] text-3xl font-semibold leading-[1.15] tracking-tight text-balance text-white sm:text-4xl md:text-[2.75rem] lg:text-5xl">
            Hubungi Sekretariat PERIKLINDO
          </h1>
          <p className="mb-8 max-w-prose font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-300 sm:mb-10 sm:text-lg">
            Saluran resmi untuk pengajuan keanggotaan, permohonan audiensi,
            pertanyaan media, dan kemitraan sponsorship PEVS.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-5 border-t border-white/15 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="min-w-0">
            <p className="font-[family-name:var(--font-heading)] text-base font-semibold leading-snug text-white sm:text-lg">
              The City Tower Lt. 12-1N
            </p>
            <p className="mt-1 font-[family-name:var(--font-body)] text-xs leading-relaxed text-slate-300">
              Jl. M.H. Thamrin No. 81, Jakarta Pusat
            </p>
          </div>
          <div className="min-w-0">
            <p className="font-[family-name:var(--font-heading)] text-base font-semibold leading-snug text-white sm:text-lg">
              Senin–Jumat, 08.00–17.00 WIB
            </p>
            <p className="mt-1 font-[family-name:var(--font-body)] text-xs leading-relaxed text-slate-300">
              Sabtu–Minggu tutup
            </p>
          </div>
          <div className="min-w-0">
            <a
              href="mailto:sekretariat@periklindo.com"
              className="font-[family-name:var(--font-heading)] text-base font-semibold leading-snug text-white transition-[color] duration-150 hover:text-electric focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric sm:text-lg"
            >
              sekretariat@periklindo.com
            </a>
            <p className="mt-1 font-[family-name:var(--font-body)] text-xs leading-relaxed text-slate-300">
              Email resmi perkumpulan
            </p>
          </div>
          <div className="min-w-0">
            <p className="font-[family-name:var(--font-heading)] text-base font-semibold leading-snug text-white sm:text-lg">
              +62 877-8970-3728
            </p>
            <p className="mt-1 font-[family-name:var(--font-body)] text-xs leading-relaxed text-slate-300">
              WhatsApp sekretariat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
