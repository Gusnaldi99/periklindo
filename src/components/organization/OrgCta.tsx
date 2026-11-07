import Link from 'next/link';
import { Mail, MessageSquare, Info, ShieldCheck } from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function OrgCta() {
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
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-xs font-medium text-slate-300">
              <ShieldCheck className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
              <span>Kemitraan &amp; Hubungan Kelembagaan Nasional</span>
            </p>

            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight tracking-tight text-balance text-white sm:text-3xl md:text-4xl">
              Kemitraan Strategis Bersama Pengurus PERIKLINDO
            </h2>

            <p className="mx-auto mb-8 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-300 sm:text-lg">
              Perusahaan pabrikan, lembaga kementerian, asosiasi industri mitra, perguruan tinggi, dan media pers dapat mengajukan audiensi resmi, kerja sama riset, atau permohonan narasumber kepada sekretariat dewan pengurus.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/kontak"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 bg-electric px-6 py-3.5 font-[family-name:var(--font-body)] text-sm font-semibold text-white transition-[background-color,opacity] duration-150 hover:bg-electric-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90 sm:text-base"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Kirim Permohonan Audiensi</span>
              </Link>

              <a
                href="https://wa.me/6287789703728?text=Halo%20Sekretariat%20PERIKLINDO,%20kami%20ingin%20mengajukan%20komunikasi%20dengan%20pengurus."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 bg-navy-light px-6 py-3.5 font-[family-name:var(--font-body)] text-sm font-semibold text-white ring-1 ring-white/25 transition-[background-color,opacity] duration-150 hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90 sm:text-base"
              >
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                <span>Kontak Sekretariat via WhatsApp</span>
              </a>

              <Link
                href="/tentang-kami"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 border border-white/25 px-6 py-3.5 font-[family-name:var(--font-body)] text-sm font-semibold text-slate-300 transition-[background-color,border-color,color,opacity] duration-150 hover:border-white/45 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90 sm:text-base"
              >
                <Info className="h-4 w-4" aria-hidden="true" />
                <span>Tentang Asosiasi</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
