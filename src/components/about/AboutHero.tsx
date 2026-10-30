import Link from 'next/link';
import ScrollReveal from '@/components/shared/ScrollReveal';
import AnimatedCounter from '@/components/shared/AnimatedCounter';

export default function AboutHero() {
  return (
    <section className="relative bg-navy text-white overflow-hidden py-14 sm:py-18 md:py-20 lg:py-24 border-b border-navy-light">
      {/* Subtle architectural background pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* Decorative ambient gradient glow */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 bg-electric/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        {/* Breadcrumb Navigation */}
        <ScrollReveal delay={50}>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors duration-150"
                >
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-600">
                /
              </li>
              <li className="text-white font-medium" aria-current="page">
                Tentang Kami
              </li>
            </ol>
          </nav>
        </ScrollReveal>

        <div className="max-w-4xl">
          {/* Badge Indicator */}
          <ScrollReveal delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-electric/10 text-blue-300 border border-electric/30 mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              Profil & Sejarah Organisasi Resmi
            </div>
          </ScrollReveal>

          {/* Institutional Heading */}
          <ScrollReveal delay={180}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.18] mb-6">
              Mewujudkan Ekosistem Kendaraan Listrik Indonesia yang Mandiri, Bersih, dan Berdaya Saing Global
            </h1>
          </ScrollReveal>

          {/* Subtitle / Executive Summary */}
          <ScrollReveal delay={260}>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-10 font-normal">
              <strong className="text-white font-semibold">PERIKLINDO</strong> (Perkumpulan Industri Kendaraan Listrik Indonesia) adalah wadah resmi perkumpulan industri kendaraan listrik yang berdiri sejak 2021 atas inisiatif para pionir otomotif nasional guna mendukung implementasi Perpres No. 55 Tahun 2019 dan Perpres No. 79 Tahun 2023 demi percepatan transisi energi bersih di Indonesia.
            </p>
          </ScrollReveal>
        </div>

        {/* Key Highlights Metrics */}
        <ScrollReveal delay={340}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-slate-800">
            <div className="bg-navy-light/60 border border-slate-800 rounded-xl p-4 sm:p-5">
              <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-extrabold text-white mb-1">
                <AnimatedCounter end={2021} duration={1400} />
              </p>
              <p className="text-xs sm:text-sm text-slate-400">
                Tahun Didirikan Resmi
              </p>
            </div>

            <div className="bg-navy-light/60 border border-slate-800 rounded-xl p-4 sm:p-5">
              <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-extrabold text-white mb-1">
                <AnimatedCounter end={25} suffix="+" duration={1600} />
              </p>
              <p className="text-xs sm:text-sm text-slate-400">
                Perusahaan Anggota Resmi
              </p>
            </div>

            <div className="bg-navy-light/60 border border-slate-800 rounded-xl p-4 sm:p-5">
              <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-extrabold text-emerald-400 mb-1">
                4 Sektor
              </p>
              <p className="text-xs sm:text-sm text-slate-400">
                Roda 4, Roda 2, Baterai, SPKLU
              </p>
            </div>

            <div className="bg-navy-light/60 border border-slate-800 rounded-xl p-4 sm:p-5">
              <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-extrabold text-blue-400 mb-1">
                PEVS
              </p>
              <p className="text-xs sm:text-sm text-slate-400">
                Pameran Tahunan di JIExpo
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
