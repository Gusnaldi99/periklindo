'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Car, Factory, Leaf, Handshake, ArrowRight, ChevronDown } from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import {
  PENDING_MEMBER_COUNT,
  SHOW_MEMBER_COUNT,
} from '@/data/site-claims';

// ─── Glass Stats Pills Data ──────────────────────────────────────────────────
// Angka anggota dimatikan (SHOW_MEMBER_COUNT) sampai client konfirmasi — PDF Hal. 7.
const statsPills = [
  {
    icon: Car,
    // TODO(R03): nyalakan kembali setelah reconciliation database anggota.
    value: SHOW_MEMBER_COUNT ? PENDING_MEMBER_COUNT : null,
    suffix: SHOW_MEMBER_COUNT ? '+' : '',
    label: SHOW_MEMBER_COUNT
      ? 'Anggota Industri'
      : 'Konsorsium Industri Anggota',
    iconColor: 'text-sky-300',
    iconBg: 'bg-sky-500/20',
  },
  {
    icon: Factory,
    value: null,
    suffix: '',
    label: 'Mendukung Ekosistem EV Nasional',
    iconColor: 'text-blue-300',
    iconBg: 'bg-blue-500/20',
  },
  {
    icon: Leaf,
    value: null,
    suffix: '',
    label: 'Untuk Masa Depan Lebih Bersih',
    iconColor: 'text-emerald-300',
    iconBg: 'bg-emerald-500/20',
  },
  {
    icon: Handshake,
    value: null,
    suffix: '',
    label: 'Kolaborasi untuk Mobilitas Berkelanjutan',
    iconColor: 'text-amber-300',
    iconBg: 'bg-amber-500/20',
  },
] as const;

// ─── Dual Highlight Cards Data ───────────────────────────────────────────────
const highlightCards = [
  {
    tag: '— PERIKLINDO',
    title: 'Electric Vehicle Show (PEVS)',
    description:
      'Pameran kendaraan listrik, booth industri, dan test drive untuk akselerasi adopsi mobilitas bersih.',
    cta: 'Pelajari Lebih Lanjut',
    href: '/berita?kategori=Kegiatan',
    image: '/assets/news/pevs-2026-mab-moeldoko.jpg',
    imageAlt:
      'Booth pameran PEVS dengan kendaraan listrik komersial dan demonstrasi produk di JIExpo Kemayoran',
    objectPosition: 'object-center',
  },
  {
    tag: '— PERIKLINDO',
    title: 'EV Conference (PEVC)',
    description:
      'Forum strategis di panggung konferensi — dialog kebijakan, pembicara, dan audiens industri EV.',
    cta: 'Pelajari Lebih Lanjut',
    href: '/berita?kategori=Kegiatan',
    image: '/assets/news/pevs-2026-pidato-moeldoko.jpg',
    imageAlt:
      'Panggung PERIKLINDO Electric Vehicle Conference (PEVC) — pembicara di podium dengan layar LED',
    objectPosition: 'object-[center_35%]',
  },
];

export default function HeroSection() {
  return (
    <section className="relative text-white overflow-hidden" aria-label="Hero utama PERIKLINDO">
      {/* ═══════════════════════════════════════════════════════════════════
          CINEMATIC HERO BACKGROUND
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="relative min-h-[92vh] flex flex-col justify-end">
        {/* Background Image — EV Ecosystem Panoramic */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero/hero-ev.jpg"
            alt="Ekosistem kendaraan listrik Indonesia — mobil EV, bus listrik 100% Electric, motor listrik, SPKLU, siluet Monas"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Dark Navy Gradient Overlay — WCAG AA contrast for text */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(6,21,47,0.55) 0%, rgba(6,21,47,0.30) 40%, rgba(6,21,47,0.80) 80%, rgba(6,21,47,0.97) 100%)',
            }}
            aria-hidden="true"
          />
          {/* Subtle left-side vignette for text legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(6,21,47,0.60) 0%, transparent 60%)',
            }}
            aria-hidden="true"
          />
        </div>

        {/* ─── Hero Text Content ─────────────────────────────────────────── */}
        <div className="container-main relative z-10 pb-14 pt-32 md:pt-40 lg:pt-48">
          <div className="max-w-3xl">
            {/* Kicker / Tagline Atas — BI (PDF Hal. 9 & 11) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="h-px w-8 bg-sky-400/70" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-sky-300/90">
                Bersama untuk Masa Depan Berkelanjutan
              </span>
              <span className="h-px w-8 bg-sky-400/70" aria-hidden="true" />
            </motion.div>

            {/* Main Headline — EN retained per official PDF example */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-black tracking-tight text-white leading-[1.06] mb-5 font-[family-name:var(--font-heading)]"
            >
              Driving Indonesia&apos;s{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #38BDF8 0%, #60A5FA 50%, #818CF8 100%)',
                }}
              >
                Electric Mobility
              </span>{' '}
              Future
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-200/85 leading-relaxed mb-8 max-w-xl font-normal"
            >
              Bersama membangun ekosistem kendaraan listrik nasional yang inovatif, berdaya saing,
              dan berkelanjutan.
            </motion.p>

            {/* Dual CTA Buttons — Opsi A (PDF Hal. 6) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3"
            >
              {/* Primary — Electric Blue Pill */}
              <Link
                href="/tentang-kami"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm sm:text-base text-white transition-all duration-200 active:scale-[0.98] min-h-[48px]"
                style={{
                  backgroundColor: '#087BEB',
                  boxShadow: '0 4px 24px rgba(8,123,235,0.40)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#0668CA';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#087BEB';
                }}
              >
                <span>Tentang PERIKLINDO</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Secondary — Frosted Glass Pill → #anggota */}
              <Link
                href="#anggota"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base text-white border border-white/25 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-200 active:scale-[0.98] min-h-[48px]"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                <span>Jelajahi Anggota</span>
                <ChevronDown className="w-4 h-4 text-slate-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          4 GLASS STATS PILLS
      ═══════════════════════════════════════════════════════════════════ */}
      <div
        className="relative z-10"
        style={{ backgroundColor: '#06152F' }}
      >
        <div className="container-main py-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
          >
            {statsPills.map((pill, idx) => {
              const Icon = pill.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl border border-white/[0.12] backdrop-blur-md"
                  style={{ background: 'rgba(6,21,47,0.60)' }}
                >
                  {/* Circular Icon */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${pill.iconBg}`}
                    style={{ boxShadow: '0 0 12px rgba(56,189,248,0.15)' }}
                    aria-hidden="true"
                  >
                    <Icon className={`w-5 h-5 ${pill.iconColor}`} />
                  </div>

                  <div className="min-w-0">
                    {pill.value != null && (
                      <p className="font-black text-xl text-white leading-none font-[family-name:var(--font-heading)]">
                        <AnimatedCounter end={pill.value} suffix={pill.suffix} />
                      </p>
                    )}
                    <p
                      className={`text-xs leading-snug font-medium ${
                        pill.value != null ? 'text-slate-400' : 'text-slate-200 font-semibold'
                      }`}
                    >
                      {pill.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            DUAL HIGHLIGHT CARDS — PEVS & PEVC
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="container-main pb-14">
          <div
            id="kegiatan"
            className="grid grid-cols-1 md:grid-cols-2 gap-5 scroll-mt-24"
          >
            {highlightCards.map((card, idx) => (
              <ScrollReveal key={idx} delay={idx * 120}>
                <div className="group relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 shadow-2xl">
                  {/* Background Photo */}
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`object-cover ${card.objectPosition} transition-transform duration-700 ease-out group-hover:scale-[1.04]`}
                  />

                  {/* Gradient overlay — heavier at bottom for text legibility */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(6,21,47,0.92) 0%, rgba(6,21,47,0.45) 55%, rgba(6,21,47,0.10) 100%)',
                    }}
                    aria-hidden="true"
                  />

                  {/* Card Content */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <span className="text-[11px] font-bold tracking-widest uppercase text-sky-300/80 block mb-1.5">
                      {card.tag}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug mb-1">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-300/85 mb-4 leading-relaxed">
                      {card.description}
                    </p>
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-300 hover:text-white transition-colors duration-150 group/link"
                      aria-label={`${card.cta} tentang ${card.title}`}
                    >
                      <span>{card.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
