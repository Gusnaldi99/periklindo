import Link from 'next/link';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function OrgHero() {
  return (
    <section className="relative bg-navy text-white overflow-hidden py-14 sm:py-18 md:py-20 lg:py-24 border-b border-navy-light">
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* Decorative ambient gradient glows */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 bg-electric/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        {/* Breadcrumb */}
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
                Struktur Organisasi
              </li>
            </ol>
          </nav>
        </ScrollReveal>

        <div className="max-w-4xl">
          {/* Status Badge */}
          <ScrollReveal delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-electric/10 text-blue-300 border border-electric/30 mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              Bagan Kepengurusan Resmi (Organization Structure)
            </div>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal delay={180}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.18] mb-6">
              Struktur Organisasi PERIKLINDO
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal delay={260}>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl font-normal">
              Bagan susunan dewan pimpinan inti, penasihat senior, dan ketua bidang eksekutif yang memandu arah kebijakan, riset, standardisasi, serta advokasi ekosistem industri kendaraan bermotor listrik berbasis baterai nasional.
            </p>
          </ScrollReveal>

          {/* Action Anchors */}
          <ScrollReveal delay={320}>
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#struktur-hirarki"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-electric text-white font-semibold text-sm hover:bg-electric-hover active:scale-[0.98] transition-all duration-150 min-h-[44px] shadow-md shadow-electric/25"
              >
                Jelajahi Hierarki Pengurus
              </a>

              <a
                href="#bagan-resmi"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-700 bg-white/5 text-slate-200 font-semibold text-sm hover:bg-white/10 hover:border-slate-500 active:scale-[0.98] transition-all duration-150 min-h-[44px]"
              >
                Lihat Bagan Resmi
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Quick Stats Grid */}
        <ScrollReveal delay={380}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-8 border-t border-slate-800">
            <div className="bg-navy-light/60 border border-slate-800 rounded-xl p-4">
              <p className="font-[family-name:var(--font-heading)] text-2xl font-extrabold text-white mb-0.5">
                1
              </p>
              <p className="text-xs text-slate-400 font-medium">
                Chairman (Ketua Umum)
              </p>
            </div>

            <div className="bg-navy-light/60 border border-slate-800 rounded-xl p-4">
              <p className="font-[family-name:var(--font-heading)] text-2xl font-extrabold text-blue-400 mb-0.5">
                2
              </p>
              <p className="text-xs text-slate-400 font-medium">
                Sekretariat Jenderal
              </p>
            </div>

            <div className="bg-navy-light/60 border border-slate-800 rounded-xl p-4">
              <p className="font-[family-name:var(--font-heading)] text-2xl font-extrabold text-emerald-400 mb-0.5">
                1
              </p>
              <p className="text-xs text-slate-400 font-medium">
                Treasury (Bendahara)
              </p>
            </div>

            <div className="bg-navy-light/60 border border-slate-800 rounded-xl p-4">
              <p className="font-[family-name:var(--font-heading)] text-2xl font-extrabold text-amber-300 mb-0.5">
                2
              </p>
              <p className="text-xs text-slate-400 font-medium">
                Senior Advisors
              </p>
            </div>

            <div className="bg-navy-light/60 border border-slate-800 rounded-xl p-4 col-span-2 sm:col-span-1">
              <p className="font-[family-name:var(--font-heading)] text-2xl font-extrabold text-purple-400 mb-0.5">
                6
              </p>
              <p className="text-xs text-slate-400 font-medium">
                Vice Chairmen (Ketua Bidang)
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
