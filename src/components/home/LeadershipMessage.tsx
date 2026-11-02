'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Quote,
  ShieldCheck,
  Scale,
  BatteryCharging,
  Zap,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function LeadershipMessage() {
  const leadershipPillars = [
    {
      icon: Scale,
      title: 'Advokasi Regulasi & Insentif Fiskal',
      desc: 'Mengawal implementasi Perpres 55/2019, pembebasan PPN DTP, serta kemudahan izin sertifikasi kelaikan jalan bagi produsen.',
    },
    {
      icon: BatteryCharging,
      title: 'Kedaulatan Baterai & Rantai Pasok',
      desc: 'Mendorong integrasi hilirisasi nikel nasional menuju target TKDN 60% pada tahun 2027 dan standardisasi sistem penukaran baterai.',
    },
    {
      icon: Zap,
      title: 'Akselerasi Pasar & Sosialisasi PEVS',
      desc: 'Membuktikan keamanan baterai lewat uji rendam air terbuka di PEVS JIExpo dan mengedukasi efisiensi biaya kendaraan listrik kepada publik.',
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white border-b border-slate-200 overflow-hidden">
      {/* Subtle background circuit pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #0A192F 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        {/* Section Tag */}
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-bold bg-blue-50 text-electric border border-blue-200 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-electric" />
            Pesan Otoritas Kepemimpinan & Arah Kebijakan
          </div>
        </ScrollReveal>

        {/* Master Editorial Card */}
        <ScrollReveal delay={100}>
          <div className="bg-gradient-to-br from-slate-900 via-navy to-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl overflow-hidden p-6 sm:p-8 lg:p-12 relative">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-electric/15 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Leader Photo Column (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col items-center text-center">
                <div className="relative group">
                  {/* Outer Ring Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-tr from-amber-400 via-electric to-emerald-400 rounded-3xl opacity-30 blur-md group-hover:opacity-50 transition-opacity" />

                  {/* Photo Frame with subtle chamfered corners */}
                  <div className="relative w-64 sm:w-72 lg:w-80 h-80 sm:h-92 bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex items-center justify-center p-3">
                    <Image
                      src="/assets/org/moeldoko.png"
                      alt="Jenderal TNI (Purn.) Dr. Moeldoko - Ketua Umum PERIKLINDO"
                      width={320}
                      height={400}
                      className="max-h-full w-auto object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                      priority
                    />

                    {/* Verified Official Ribbon */}
                    <div className="absolute bottom-3 inset-x-3 bg-navy/90 backdrop-blur-md border border-white/15 rounded-xl py-2 px-3 text-center shadow-lg">
                      <div className="flex items-center justify-center gap-1.5 text-emerald-400 text-xs font-bold mb-0.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Pucuk Pimpinan Tertinggi</span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-medium">
                        Periode Kepengurusan Aktif
                      </p>
                    </div>
                  </div>
                </div>

                {/* Identity & Rank */}
                <div className="mt-6">
                  <h3 className="text-xl sm:text-2xl font-black text-white font-[family-name:var(--font-heading)] leading-snug">
                    Jenderal TNI (Purn.) Dr. Moeldoko
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-cyan-300 mt-1 uppercase tracking-wider">
                    Ketua Umum PERIKLINDO &bull; Founder PT MAB
                  </p>
                </div>
              </div>

              {/* Quote & Mandate Column (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                {/* Quote Icon & Headline */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-electric/20 border border-electric/40 flex items-center justify-center text-electric mb-4 shadow-lg shadow-electric/20">
                    <Quote className="w-6 h-6 text-cyan-300" />
                  </div>

                  <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-slate-100 leading-snug italic mb-4">
                    &ldquo;Kendaraan listrik bukan sekadar inovasi transportasi, melainkan{' '}
                    <span className="text-cyan-300 font-extrabold not-italic">
                      game changer
                    </span>{' '}
                    bagi kedaulatan industri dan transformasi energi nasional. Indonesia
                    tidak boleh hanya menjadi pasar produk impor, melainkan harus berdiri
                    sebagai pusat rantai pasok dan manufaktur EV berdaya saing global.&rdquo;
                  </blockquote>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    Disampaikan pada pembukaan{' '}
                    <strong className="text-slate-200">PERIKLINDO Electric Vehicle Show (PEVS) 2026</strong>{' '}
                    di JIExpo Kemayoran, menyoroti urgensi efisiensi biaya rumah tangga,
                    pengurangan subsidi BBM Rp264 triliun, dan akselerasi hilirisasi baterai.
                  </p>
                </div>

                {/* 3 Strategic Directives */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-6 pt-6 border-t border-white/10">
                  {leadershipPillars.map((pillar, idx) => {
                    const Icon = pillar.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-xs hover:bg-white/10 transition-colors"
                      >
                        <div className="w-7 h-7 rounded-lg bg-electric/25 flex items-center justify-center text-cyan-300 mb-2">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-xs font-bold text-white mb-1 leading-tight">
                          {pillar.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Navigation Link */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-slate-300">
                  <span className="text-slate-400">
                    Didukung Sekretaris Jenderal & 6 Jajaran Bidang Eksekutif.
                  </span>
                  <Link
                    href="/struktur-organisasi"
                    className="group inline-flex items-center gap-1.5 font-bold text-cyan-300 hover:text-white transition-colors"
                  >
                    <span>Lihat Struktur Kepengurusan Lengkap</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

