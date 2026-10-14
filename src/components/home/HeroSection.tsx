import Link from 'next/link';
import ScrollReveal from '@/components/shared/ScrollReveal';
import AnimatedCounter from '@/components/shared/AnimatedCounter';

export default function HeroSection() {
  return (
    <section className="relative bg-navy text-white overflow-hidden py-16 md:py-24 lg:py-28 border-b border-navy-light">
      {/* Subtle architectural background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <div className="max-w-3xl">
          {/* Status Indicator Badge */}
          <ScrollReveal delay={50}>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-teal/10 text-emerald-400 border border-teal/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Asosiasi Resmi Industri EV Indonesia
            </div>
          </ScrollReveal>

          {/* Institutional headline with staggered slide-up */}
          <ScrollReveal delay={150}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Akselerasi Ekosistem Kendaraan Listrik Indonesia
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl font-normal">
              Asosiasi resmi industri kendaraan listrik Indonesia sejak 2021. Mewadahi
              produsen otomotif, inovator baterai, dan pengembang infrastruktur pengisian
              daya nasional untuk masa depan transportasi berkelanjutan.
            </p>
          </ScrollReveal>

          {/* Action CTAs with interactive hover & active feedback */}
          <ScrollReveal delay={350}>
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <Link
                href="#anggota"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-electric text-white font-semibold text-sm sm:text-base hover:bg-electric-hover active:scale-[0.98] hover:shadow-md hover:shadow-electric/20 transition-all duration-150 min-h-[44px]"
              >
                Jelajahi Anggota
              </Link>

              <Link
                href="/tentang-kami"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-slate-600 text-white font-semibold text-sm sm:text-base hover:bg-white/10 hover:border-slate-400 active:scale-[0.98] transition-all duration-150 min-h-[44px]"
              >
                Tentang PERIKLINDO
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Fact-based key facts with Animated Counter */}
        <ScrollReveal delay={450}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-slate-800">
            <div>
              <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-1">
                <AnimatedCounter end={2021} duration={1400} />
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-snug">
                Tahun Pendirian Resmi Asosiasi
              </p>
            </div>

            <div>
              <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-1">
                <AnimatedCounter end={50} suffix="+" duration={1600} />
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-snug">
                Merek & Pelaku Ekosistem EV Tergabung
              </p>
            </div>

            <div className="col-span-2 md:col-span-1">
              <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-1">
                PEVS
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-snug">
                Pameran Kendaraan Listrik Tahunan Nasional
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
