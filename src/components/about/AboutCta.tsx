'use client';

import Link from 'next/link';
import { MessageCircle, Users2, CheckCircle2, Zap } from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function AboutCta() {
  const perks = [
    'Akses jaringan 25+ pabrikan anggota aktif',
    'Partisipasi eksklusif PEVS & PEVC tahunan',
    'Advokasi regulasi dan insentif fiskal bersama',
    'Forum koordinasi standardisasi komponen & baterai',
  ];

  return (
    <section className="relative overflow-x-clip border-t border-navy-light bg-navy py-16 text-white md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, var(--color-slate-100) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-xs font-medium text-slate-300">
              <Users2 className="h-3.5 w-3.5" aria-hidden="true" />
              Keanggotaan & Kolaborasi Ekosistem KBLBB
            </p>

            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight tracking-tight text-balance text-white sm:text-3xl md:text-4xl">
              Bergabung Bersama Ekosistem Kendaraan Listrik Terbesar di Indonesia
            </h2>

            <p className="mx-auto mb-8 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-300 sm:text-lg">
              Apakah perusahaan Anda bergerak di bidang manufaktur kendaraan listrik, komponen & baterai, pengembangan SPKLU, atau bengkel konversi resmi? Mari bersinergi bersama asosiasi resmi yang menjadi mitra kebijakan pemerintah.
            </p>

            <div className="mb-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {perks.map((perk) => (
                <div
                  key={perk}
                  className="flex items-center gap-2 font-[family-name:var(--font-body)] text-xs text-slate-300 sm:text-sm"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/6281299787588?text=Halo%20Sekretariat%20PERIKLINDO%2C%20kami%20tertarik%20untuk%20mendaftar%20sebagai%20anggota%20resmi%20PERIKLINDO."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 bg-navy-light px-7 py-3.5 font-[family-name:var(--font-body)] text-sm font-semibold text-white ring-1 ring-white/25 transition-[background-color,opacity] duration-150 hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90 sm:text-base"
              >
                <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                Pendaftaran Anggota via WhatsApp
              </a>

              <Link
                href="/kontak"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-electric px-7 py-3.5 font-[family-name:var(--font-body)] text-sm font-semibold text-white transition-[background-color,opacity] duration-150 hover:bg-electric-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90 sm:text-base"
              >
                <Zap className="h-4 w-4 shrink-0" aria-hidden="true" />
                Hubungi Sekretariat
              </Link>

              <Link
                href="/#anggota"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 border border-white/25 px-6 py-3.5 font-[family-name:var(--font-body)] text-sm font-semibold text-slate-300 transition-[background-color,border-color,color,opacity] duration-150 hover:border-white/45 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90 sm:text-base"
              >
                Lihat Daftar Anggota
              </Link>
            </div>

            <div className="mt-10 flex items-center justify-center gap-2 font-[family-name:var(--font-body)] text-xs text-slate-400">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-teal" aria-hidden="true" />
              <span>
                Asosiasi resmi berbadan hukum berdasarkan SK Kemenkumham RI · Berdiri sejak 25 April 2021
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
