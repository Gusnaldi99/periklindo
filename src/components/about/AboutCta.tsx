'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { MessageCircle, Users2, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AboutCta() {
  const shouldReduceMotion = useReducedMotion();

  const perks = [
    'Akses jaringan 25+ pabrikan anggota aktif',
    'Partisipasi eksklusif PEVS & PEVC tahunan',
    'Advokasi regulasi dan insentif fiskal bersama',
    'Forum koordinasi standardisasi komponen & baterai',
  ];

  return (
    <section className="bg-navy py-16 md:py-24 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 50% 100%, #0066FF 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Blueprint dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* Decorative accent glows */}
      <div
        className="absolute top-0 -left-40 w-80 h-80 bg-teal/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -right-40 w-80 h-80 bg-electric/25 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <Users2 className="w-3.5 h-3.5" />
            Keanggotaan & Kolaborasi Ekosistem KBLBB
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight font-[family-name:var(--font-heading)]">
            Bergabung Bersama Ekosistem Kendaraan Listrik Terbesar di Indonesia
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Apakah perusahaan Anda bergerak di bidang manufaktur kendaraan listrik, komponen & baterai, pengembangan SPKLU, atau bengkel konversi resmi? Mari bersinergi bersama asosiasi resmi yang menjadi mitra kebijakan pemerintah.
          </p>

          {/* Member Benefits Checklist */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mb-10">
            {perks.map((perk, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                <span>{perk}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Primary CTA: WhatsApp Membership with Hover Elevation */}
            <motion.a
              href="https://wa.me/6281299787588?text=Halo%20Sekretariat%20PERIKLINDO%2C%20kami%20tertarik%20untuk%20mendaftar%20sebagai%20anggota%20resmi%20PERIKLINDO."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-teal text-white font-bold text-sm sm:text-base min-h-[48px] shadow-xl shadow-teal/40 hover:bg-teal-hover hover:shadow-teal/60 transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              Pendaftaran Anggota via WhatsApp
            </motion.a>

            {/* Secondary CTA: Hubungi Sekretariat */}
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-electric text-white font-bold text-sm sm:text-base min-h-[48px] shadow-lg shadow-electric/30 hover:bg-electric-hover transition-colors duration-200"
              >
                <Zap className="w-4 h-4 shrink-0" />
                Hubungi Sekretariat
              </Link>
            </motion.div>

            {/* Tertiary CTA: Lihat Daftar Anggota */}
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link
                href="/#anggota"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:bg-white/10 hover:border-slate-500 min-h-[48px] text-sm sm:text-base font-semibold transition-all duration-150 group"
              >
                Lihat Daftar Anggota
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </Link>
            </motion.div>
          </div>

          {/* Trust Signal: Legal badge */}
          <div className="mt-10 flex items-center justify-center gap-2 text-xs text-slate-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>
              Asosiasi resmi berbadan hukum berdasarkan SK Kemenkumham RI · Berdiri sejak 25 April 2021
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
