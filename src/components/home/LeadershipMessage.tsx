'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Quote, ArrowRight, BadgeCheck, Users } from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';

/** Hierarchy signal only — no fabricated Pengawas names (PDF Hal. 8). */
const hierarchyChips = [
  {
    label: 'Dewan Pembina',
    href: '/struktur-organisasi#tier-1',
    hint: 'Arahan strategis',
  },
  {
    label: 'Dewan Pengawas',
    href: '/struktur-organisasi#tier-2',
    hint: 'Sesuai SK resmi',
  },
  {
    label: 'Pengurus Harian',
    href: '/struktur-organisasi#tier-3',
    hint: 'Pimpinan inti',
  },
] as const;

export default function LeadershipMessage() {
  return (
    <section className="relative py-16 md:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(ellipse_at_top_right, rgba(8,123,235,0.08),transparent_50%)',
        }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Photo column — asymmetric, larger presence */}
            <div className="lg:col-span-5">
              <div className="relative h-full min-h-[420px] sm:min-h-[480px] lg:min-h-[560px] rounded-3xl overflow-hidden border border-white/10 bg-[#06152F] shadow-xl">
                <div
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(8,123,235,0.18),transparent_55%)]"
                  aria-hidden="true"
                />

                <div className="absolute inset-0 flex items-end justify-center pt-8 px-4 sm:px-6">
                  <Image
                    src="/assets/org/moeldoko.png"
                    alt="Jenderal TNI (Purn.) Dr. Moeldoko — Ketua Umum PERIKLINDO"
                    width={520}
                    height={640}
                    className="relative z-10 w-full max-w-[360px] sm:max-w-[400px] lg:max-w-none h-auto max-h-[92%] object-contain object-bottom drop-shadow-2xl"
                    priority
                  />
                </div>

                {/* Soft bottom fade for identity overlay */}
                <div
                  className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#06152F] via-[#06152F]/85 to-transparent z-20"
                  aria-hidden="true"
                />

                <div className="absolute inset-x-0 bottom-0 z-30 p-5 sm:p-6">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 mb-2">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    <span>Periode 2026–2031</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    Jenderal TNI (Purn.) Dr. Moeldoko
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#00C8F5]">
                    Ketua Umum PERIKLINDO
                  </p>
                </div>
              </div>
            </div>

            {/* Message column — frosted glass card */}
            <div className="lg:col-span-7 flex">
              <div className="relative flex flex-col justify-between w-full rounded-3xl border border-white/10 bg-[#06152F] p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden">
                <div
                  className="pointer-events-none absolute -top-24 -right-16 w-64 h-64 rounded-full bg-[#087BEB]/15 blur-3xl"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-white/[0.03] backdrop-blur-[2px]"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00C8F5] mb-6">
                    <Quote className="w-6 h-6" />
                  </div>

                  <blockquote className="text-xl sm:text-2xl lg:text-[1.65rem] font-medium text-[#DCEBFA] leading-relaxed tracking-tight">
                    &ldquo;Kendaraan listrik bukan sekadar inovasi transportasi, melainkan{' '}
                    <span className="text-[#00C8F5] font-semibold">game changer</span>{' '}
                    bagi kedaulatan industri dan kemandirian energi bersih Indonesia.&rdquo;
                  </blockquote>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
                      Di bawah kepemimpinan Ketua Umum, PERIKLINDO memperkuat sinergi
                      industri, pemerintah, dan mitra strategis untuk akselerasi ekosistem
                      kendaraan listrik nasional.
                    </p>
                  </div>
                </div>

                <div className="relative z-10 mt-10">
                  <Link
                    href="/struktur-organisasi"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#087BEB] text-white text-sm font-bold hover:bg-[#0669c9] active:scale-[0.98] transition-all duration-300 min-h-[44px] shadow-lg shadow-[#087BEB]/25"
                  >
                    <span>Lihat Struktur Pengurus Lengkap</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Multi-figur hierarchy signal — PDF Hal. 8 */}
        <ScrollReveal delay={120}>
          <div className="mt-8 sm:mt-10 rounded-2xl border border-[#06152F]/10 bg-[#06152F] p-5 sm:p-6 shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
              <div className="flex items-start gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00C8F5] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    Hierarki Kepemimpinan Asosiasi
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed max-w-xl">
                    PERIKLINDO dipimpin kolektif melalui Dewan Pembina, Dewan Pengawas,
                    dan pengurus harian — bukan satu figur saja.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {hierarchyChips.map((chip) => (
                  <Link
                    key={chip.label}
                    href={chip.href}
                    className="inline-flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#087BEB]/45 hover:bg-white/[0.08] transition-colors min-h-[44px]"
                  >
                    <span className="text-xs font-bold text-white">{chip.label}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{chip.hint}</span>
                  </Link>
                ))}
                <Link
                  href="/struktur-organisasi#struktur-hirarki"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#00C8F5] hover:text-white transition-colors min-h-[44px]"
                >
                  <span>Lihat struktur lengkap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
