'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactHero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.08, delayChildren: 0.04 },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0.1 }
        : { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative bg-navy text-white overflow-hidden py-14 sm:py-18 md:py-20 lg:py-24 border-b border-navy-light">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-16 w-80 h-80 bg-teal/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.nav variants={itemVariants} aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-150">
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-600">
                /
              </li>
              <li className="text-white font-medium" aria-current="page">
                Kontak Kami
              </li>
            </ol>
          </motion.nav>

          <motion.div variants={itemVariants} className="mb-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-electric/15 text-blue-300 border border-electric/35">
              <Mail className="w-3.5 h-3.5 text-teal" />
              <span>Sekretariat Resmi • CTR-12/THAMRIN</span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.18] mb-6"
          >
            Hubungi Sekretariat PERIKLINDO
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-10"
          >
            Saluran resmi untuk pengajuan keanggotaan, permohonan audiensi,
            pertanyaan media, dan kemitraan sponsorship PEVS.
          </motion.p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-slate-800"
        >
          <div className="bg-navy-light/70 border border-slate-800 rounded-xl p-4">
            <MapPin className="w-4 h-4 text-electric mb-2" />
            <p className="text-sm font-semibold text-white">The City Tower Lt. 12-1N</p>
            <p className="text-xs text-slate-400 mt-1">Jl. M.H. Thamrin No. 81, Jakarta Pusat</p>
          </div>
          <div className="bg-navy-light/70 border border-slate-800 rounded-xl p-4">
            <Clock className="w-4 h-4 text-amber-300 mb-2" />
            <p className="text-sm font-semibold text-white">Senin–Jumat, 08.00–17.00 WIB</p>
            <p className="text-xs text-slate-400 mt-1">Sabtu–Minggu tutup</p>
          </div>
          <div className="bg-navy-light/70 border border-slate-800 rounded-xl p-4">
            <Mail className="w-4 h-4 text-blue-300 mb-2" />
            <a
              href="mailto:sekretariat@periklindo.com"
              className="text-sm font-semibold text-white hover:text-electric"
            >
              sekretariat@periklindo.com
            </a>
            <p className="text-xs text-slate-400 mt-1">Email resmi perkumpulan</p>
          </div>
          <div className="bg-navy-light/70 border border-slate-800 rounded-xl p-4">
            <Phone className="w-4 h-4 text-teal mb-2" />
            <p className="text-sm font-semibold text-white">+62 877-8970-3728</p>
            <p className="text-xs text-slate-400 mt-1">WhatsApp sekretariat</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
