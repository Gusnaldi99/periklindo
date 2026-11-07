import Link from 'next/link';
import { ArrowDown, FileText, ShieldCheck } from 'lucide-react';

export default function OrgHero() {
  return (
    <section className="relative overflow-x-clip border-b border-navy-light bg-navy py-12 text-white sm:py-14 md:py-16 lg:py-18">
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
        <div className="max-w-4xl min-w-0">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 font-[family-name:var(--font-body)] text-xs text-slate-300 sm:text-sm">
              <li>
                <Link
                  href="/"
                  className="transition-[color] duration-150 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
                >
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-500">
                /
              </li>
              <li className="font-medium text-white" aria-current="page">
                Struktur Organisasi
              </li>
            </ol>
          </nav>

          <p className="mb-3 inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-sm font-medium text-slate-300">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-teal" aria-hidden="true" />
            <span>
              Kepengurusan Resmi Periode Berjalan &bull; Landasan AD/ART &amp; SK Kemenkumham RI
            </span>
          </p>

          <h1 className="mb-4 max-w-3xl font-[family-name:var(--font-heading)] text-3xl font-semibold leading-[1.15] tracking-tight text-balance text-white sm:text-4xl md:text-[2.75rem] lg:text-5xl">
            Struktur Organisasi PERIKLINDO
          </h1>

          <p className="mb-6 max-w-prose font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-300 sm:text-lg">
            Bagan susunan dewan pimpinan inti, penasihat senior, dan ketua bidang eksekutif yang memandu arah kebijakan, riset, standardisasi, serta advokasi ekosistem industri kendaraan bermotor listrik berbasis baterai nasional.
          </p>

          <div className="mb-8 flex flex-wrap items-center gap-3">
            <a
              href="#struktur-hirarki"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 bg-electric px-6 py-3 font-[family-name:var(--font-body)] text-sm font-semibold text-white transition-[background-color,opacity] duration-150 hover:bg-electric-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90"
            >
              <span>Jelajahi Hierarki Pengurus</span>
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#bagan-resmi"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 border border-white/25 bg-white/5 px-6 py-3 font-[family-name:var(--font-body)] text-sm font-semibold text-slate-200 transition-[background-color,border-color,color,opacity] duration-150 hover:border-white/45 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90"
            >
              <FileText className="h-4 w-4 text-slate-300" aria-hidden="true" />
              <span>Lihat Bagan Resmi</span>
            </a>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/15 pt-6 sm:grid-cols-3 lg:grid-cols-5">
          <div className="min-w-0">
            <dd className="mb-0.5 font-[family-name:var(--font-heading)] text-2xl font-semibold text-white sm:text-[1.75rem]">
              1
            </dd>
            <dt className="font-[family-name:var(--font-body)] text-xs font-medium text-slate-300">
              Chairman (Ketua Umum)
            </dt>
          </div>

          <div className="min-w-0">
            <dd className="mb-0.5 font-[family-name:var(--font-heading)] text-2xl font-semibold text-white sm:text-[1.75rem]">
              2
            </dd>
            <dt className="font-[family-name:var(--font-body)] text-xs font-medium text-slate-300">
              Sekretariat Jenderal
            </dt>
          </div>

          <div className="min-w-0">
            <dd className="mb-0.5 font-[family-name:var(--font-heading)] text-2xl font-semibold text-white sm:text-[1.75rem]">
              1
            </dd>
            <dt className="font-[family-name:var(--font-body)] text-xs font-medium text-slate-300">
              Treasury (Bendahara)
            </dt>
          </div>

          <div className="min-w-0">
            <dd className="mb-0.5 font-[family-name:var(--font-heading)] text-2xl font-semibold text-white sm:text-[1.75rem]">
              2
            </dd>
            <dt className="font-[family-name:var(--font-body)] text-xs font-medium text-slate-300">
              Senior Advisors
            </dt>
          </div>

          <div className="min-w-0 col-span-2 sm:col-span-1">
            <dd className="mb-0.5 font-[family-name:var(--font-heading)] text-2xl font-semibold text-white sm:text-[1.75rem]">
              6
            </dd>
            <dt className="font-[family-name:var(--font-body)] text-xs font-medium text-slate-300">
              Vice Chairmen (Ketua Bidang)
            </dt>
          </div>
        </dl>
      </div>
    </section>
  );
}
