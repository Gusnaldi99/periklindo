'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { Mail, MessageCircle } from 'lucide-react';

export default function FaqContactPrompt() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="overflow-x-clip border-t border-slate-200 bg-white py-16 md:py-20">
      <div className="container-main">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
          }
          className="relative overflow-hidden border border-navy-light bg-navy p-8 text-white md:p-10"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, var(--color-slate-100) 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl min-w-0">
              <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-medium text-slate-300">
                Belum menemukan jawaban
              </p>
              <h2 className="mb-3 font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight tracking-tight text-balance text-white sm:text-3xl">
                Hubungi Sekretariat PERIKLINDO
              </h2>
              <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-300 sm:text-base">
                Tim sekretariat siap menindaklanjuti pertanyaan keanggotaan, audiensi,
                liputan media, dan kemitraan PEVS pada hari kerja pukul 08.00–17.00 WIB.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/kontak"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 whitespace-nowrap bg-electric px-5 py-3 font-[family-name:var(--font-body)] text-sm font-semibold text-white transition-[background-color,opacity] duration-150 hover:bg-electric-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Formulir Kontak
              </Link>
              <a
                href="https://wa.me/6287789703728"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 whitespace-nowrap bg-navy-light px-5 py-3 font-[family-name:var(--font-body)] text-sm font-semibold text-white ring-1 ring-white/25 transition-[background-color,opacity] duration-150 hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp Sekretariat
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
