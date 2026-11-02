'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import { Crown, Users2, BadgeCheck, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import { orgMembers } from '@/data/mock-data';
import { cn } from '@/lib/utils';

export default function LeadershipSpotlight() {
  const shouldReduceMotion = useReducedMotion();

  // Pimpinan Inti (4 orang) + 1 Ketua Bidang pertama untuk preview
  const coreLeaders = orgMembers.filter((m) => m.level === 'Pimpinan Inti').slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const cardVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0.1 }
        : { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  // Assign a distinct accent per role
  const roleAccent: Record<string, { badge: string; icon: typeof Crown }> = {
    chairman: { badge: 'bg-amber-400 text-navy border-amber-300', icon: Crown },
    secretariat: { badge: 'bg-electric text-white border-blue-700', icon: Users2 },
    treasury: { badge: 'bg-emerald-600 text-white border-emerald-500', icon: BadgeCheck },
  };

  return (
    <section id="pimpinan" className="py-16 md:py-20 lg:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="container-main">
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-blue-100 text-electric mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Dewan Pengurus Inti
            </div>
            <SectionHeader
              title="Kepemimpinan & Dewan Pimpinan"
              subtitle="Dikelola oleh figur-figur berpengalaman dari pemerintahan, pelaku industri otomotif, serta praktisi ekosistem KBLBB yang berkomitmen membangun mandiri industri kendaraan listrik nasional."
            />
          </div>

          <Link
            href="/struktur-organisasi"
            className="inline-flex items-center gap-2 text-sm font-semibold text-electric hover:text-electric-hover transition-colors whitespace-nowrap group min-h-[44px]"
          >
            <span>Lihat Seluruh Struktur Organisasi</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Core Leaders Grid — 4 portrait cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {coreLeaders.map((leader) => {
            const accent = roleAccent[leader.category as string] ?? {
              badge: 'bg-slate-700 text-white border-slate-600',
              icon: BadgeCheck,
            };
            const BadgeIcon = accent.icon;

            return (
              <motion.div
                key={leader.id}
                variants={cardVariants}
                whileHover={shouldReduceMotion ? {} : { y: -6 }}
                className="group h-full bg-slate-50 border border-slate-200/90 rounded-2xl overflow-hidden hover:shadow-xl hover:border-electric/50 transition-all duration-300 ease-out flex flex-col"
              >
                {/* Photo Container — uniform aspect ratio */}
                <div className="relative w-full aspect-square bg-slate-100 flex items-center justify-center border-b border-slate-200/80 overflow-hidden">
                  <Image
                    src={leader.photoUrl}
                    alt={leader.fullName}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Position Badge Overlay (top-left) */}
                  <div className={cn(
                    'absolute top-3 left-3 flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg border shadow-md',
                    accent.badge
                  )}>
                    <BadgeIcon className="w-3 h-3 shrink-0" />
                    <span className="truncate max-w-[100px]">{leader.positionEn}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-navy mb-0.5 group-hover:text-electric transition-colors duration-150 font-[family-name:var(--font-heading)] leading-snug">
                      {leader.fullName}
                    </h3>
                    <p className="text-xs font-semibold text-electric mb-2">
                      {leader.position}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {leader.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500">
                    <span>Pimpinan Aktif</span>
                    <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[10px] uppercase tracking-wide">
                      Resmi
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Banner — Structure full org chart */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 sm:p-8 bg-navy rounded-2xl text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-navy-light shadow-lg"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              <Users2 className="w-3.5 h-3.5 text-blue-400" />
              6 Ketua Bidang Eksekutif Tersedia
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-1 font-[family-name:var(--font-heading)]">
              Ingin melihat susunan lengkap Ketua Bidang dan seluruh dewan pimpinan?
            </h4>
            <p className="text-sm text-slate-300">
              Kunjungi halaman Struktur Organisasi untuk bagan hierarki interaktif Promosi, Legal, R&D, Data & Informasi, Organisasi, dan Hubungan Masyarakat.
            </p>
          </div>
          <Link
            href="/struktur-organisasi"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-electric text-white font-semibold text-sm hover:bg-electric-hover active:scale-[0.98] transition-all duration-150 min-h-[44px] whitespace-nowrap shadow-md shadow-electric/30"
          >
            Buka Struktur Lengkap
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
