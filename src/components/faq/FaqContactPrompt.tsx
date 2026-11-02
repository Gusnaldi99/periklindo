'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';

export default function FaqContactPrompt() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16 md:py-20 bg-white border-t border-slate-200">
      <div className="container-main">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-navy text-white p-8 md:p-10 border border-navy-light"
        >
          <div
            className="absolute -right-16 -top-16 w-64 h-64 bg-electric/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-teal mb-3">
                Belum menemukan jawaban
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Hubungi Sekretariat PERIKLINDO
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Tim sekretariat siap menindaklanjuti pertanyaan keanggotaan, audiensi,
                liputan media, dan kemitraan PEVS pada hari kerja pukul 08.00–17.00 WIB.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-electric text-white text-sm font-bold hover:bg-electric-hover min-h-[44px] shadow-md shadow-electric/30"
              >
                <Mail className="w-4 h-4" />
                Formulir Kontak
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/6287789703728"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal text-white text-sm font-bold hover:bg-teal-hover min-h-[44px] shadow-md shadow-teal/30"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Sekretariat
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
