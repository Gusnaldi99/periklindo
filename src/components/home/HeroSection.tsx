'use client';

import Link from 'next/link';
import Image from 'next/image';
import AnimatedCounter from '@/components/shared/AnimatedCounter';

export default function HeroSection() {
  return (
    <section className="relative overflow-x-clip border-b border-navy-light bg-navy py-14 text-white md:py-16 lg:py-20">
      {/* Quiet institutional field — no blur orbs */}
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
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Left: brand + claim + actions + quiet facts */}
          <div className="min-w-0 lg:col-span-7">
            <p className="mb-4 max-w-xl font-[family-name:var(--font-body)] text-sm font-medium text-slate-300">
              Asosiasi Resmi Industri Kendaraan Listrik Indonesia
              <span className="mt-1 block text-slate-400 sm:mt-0 sm:inline">
                <span className="hidden sm:inline">: </span>
                SK Kemenkumham RI
              </span>
            </p>

            <h1 className="mb-5 max-w-3xl font-[family-name:var(--font-heading)] text-3xl font-semibold leading-[1.15] tracking-tight text-balance text-white sm:text-4xl md:text-[2.75rem] lg:text-5xl">
              Akselerasi Kedaulatan Ekosistem Kendaraan Listrik Indonesia
            </h1>

            <p className="mb-8 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-300 sm:text-lg">
              Didirikan pada April 2021 untuk mengawal pelaksanaan{' '}
              <strong className="font-semibold text-white">Perpres No. 55 Tahun 2019</strong>.
              PERIKLINDO memadukan produsen otomotif roda 4, roda 2, industri baterai
              nasional, dan jaringan infrastruktur pengisian daya untuk mewujudkan kedaulatan
              energi bersih Indonesia di kancah global.
            </p>

            <div className="mb-10 flex flex-wrap items-center gap-3">
              <Link
                href="#anggota"
                className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-electric px-6 py-3.5 font-[family-name:var(--font-body)] text-sm font-semibold text-white transition-[background-color,opacity] duration-150 hover:bg-electric-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90 sm:text-base"
              >
                Jelajahi Anggota Konsorsium
              </Link>

              <Link
                href="/tentang-kami"
                className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-white/25 px-6 py-3.5 font-[family-name:var(--font-body)] text-sm font-semibold text-white transition-[background-color,border-color,opacity] duration-150 hover:border-white/45 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90 sm:text-base"
              >
                Visi & Landasan Kebijakan
              </Link>
            </div>

            {/* Quiet institutional facts — same figures, no cockpit cards */}
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/15 pt-6 sm:grid-cols-4">
              <div className="min-w-0">
                <dt className="mb-1 font-[family-name:var(--font-body)] text-xs font-medium text-slate-400">
                  Landasan
                </dt>
                <dd className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white sm:text-[1.75rem]">
                  <AnimatedCounter end={2021} duration={1400} />
                </dd>
                <p className="mt-0.5 font-[family-name:var(--font-body)] text-xs text-slate-400">
                  Perpres 55/2019
                </p>
              </div>

              <div className="min-w-0">
                <dt className="mb-1 font-[family-name:var(--font-body)] text-xs font-medium text-slate-400">
                  Produsen
                </dt>
                <dd className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white sm:text-[1.75rem]">
                  <AnimatedCounter end={25} suffix="+" duration={1500} />
                </dd>
                <p className="mt-0.5 font-[family-name:var(--font-body)] text-xs text-slate-400">
                  Merek Resmi
                </p>
              </div>

              <div className="min-w-0">
                <dt className="mb-1 font-[family-name:var(--font-body)] text-xs font-medium text-slate-400">
                  Target TKDN
                </dt>
                <dd className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white sm:text-[1.75rem]">
                  <AnimatedCounter end={60} suffix="%" duration={1600} />
                </dd>
                <p className="mt-0.5 font-[family-name:var(--font-body)] text-xs text-slate-400">
                  Rantai Pasok 2027
                </p>
              </div>

              <div className="min-w-0">
                <dt className="mb-1 font-[family-name:var(--font-body)] text-xs font-medium text-slate-400">
                  Emisi Bersih
                </dt>
                <dd className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white sm:text-[1.75rem]">
                  <AnimatedCounter end={100} suffix="%" duration={1700} />
                </dd>
                <p className="mt-0.5 font-[family-name:var(--font-body)] text-xs text-slate-400">
                  Net Zero 2060
                </p>
              </div>
            </dl>
          </div>

          {/* Right: PEVS documentation plane */}
          <div className="relative min-w-0 lg:col-span-5">
            <div className="relative overflow-hidden border border-white/15 bg-navy-light">
              <div className="relative aspect-[4/3] w-full min-w-0 bg-navy">
                <Image
                  src="/assets/news/pevs-2026-game-changer.jpg"
                  alt="PERIKLINDO Electric Vehicle Show - Momentum Transformasi Industri EV Nasional"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/15 to-transparent"
                  aria-hidden="true"
                />
              </div>

              <div className="border-t border-white/10 px-5 py-5 sm:px-6">
                <p className="mb-1 font-[family-name:var(--font-body)] text-sm font-medium text-slate-300">
                  PEVS Flagship Annual Show
                </p>
                <p className="mb-2 font-[family-name:var(--font-body)] text-xs text-slate-400">
                  JIExpo Kemayoran
                </p>

                <h3 className="mb-2 font-[family-name:var(--font-heading)] text-base font-semibold leading-snug text-white sm:text-lg">
                  Pusat Pameran & Kolaborasi Industri EV Terbesar di Asia Tenggara
                </h3>

                <p className="mb-4 font-[family-name:var(--font-body)] text-xs leading-relaxed text-slate-400">
                  Menghubungkan ratusan produsen, kementerian teknis, perbankan, dan ratusan
                  ribu konsumen dalam satu ekosistem mobilitas bersih terpadu.
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3 font-[family-name:var(--font-body)] text-xs text-slate-300">
                  <span>Kolaborasi Dyandra Promosindo</span>
                  <Link
                    href="#pevs"
                    className="font-semibold text-white underline-offset-4 transition-[opacity] duration-150 hover:opacity-80 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
                  >
                    Lihat Sorotan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
