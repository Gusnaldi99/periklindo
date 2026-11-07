'use client';

import Link from 'next/link';
import { Building2, Mail, MessageSquare, Headphones, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function CtaSection() {
  const b2bBenefits = [
    'Advokasi regulasi fiskal (PPN DTP) & harmonisasi uji kelaikan jalan',
    'Kepesertaan prioritas ajang pameran akbar tahunan PEVS di JIExpo',
    'Sinergi rantai pasok sel baterai lokal dan jaringan SPKLU nasional',
  ];

  const publicBenefits = [
    'Permohonan audiensi resmi bersama kementerian dan BUMN',
    'Pusat rujukan data industri, siaran pers, dan narasumber media',
    'Layanan informasi publik seputar standar keselamatan ekosistem EV',
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
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 font-[family-name:var(--font-body)] text-sm font-medium text-slate-300">
              Gerbang Kemitraan Strategis Terpadu
            </p>
            <h2 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-semibold leading-tight tracking-tight text-white text-balance md:text-4xl">
              Mari Bersama Membangun Kedaulatan Mobilitas Bersih Indonesia
            </h2>
            <p className="mx-auto max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-300">
              Pilihlah jalur komunikasi sesuai kebutuhan institusi Anda: bergabung sebagai
              mitra produsen/industri anggota atau berkoordinasi langsung dengan sekretariat jenderal.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <ScrollReveal delay={80} className="h-full min-w-0">
            <div className="flex h-full flex-col justify-between border border-electric/35 bg-navy-light p-6 sm:p-8">
              <div>
                <div className="mb-5 flex items-start justify-between gap-3">
                  <Building2 className="h-5 w-5 shrink-0 text-slate-300" aria-hidden="true" />
                  <span className="text-right font-[family-name:var(--font-body)] text-xs font-medium text-slate-300">
                    Jalur Produsen & Korporasi (B2B)
                  </span>
                </div>

                <h3 className="mb-2 font-[family-name:var(--font-heading)] text-xl font-semibold leading-snug text-white sm:text-2xl">
                  Pendaftaran Keanggotaan Asosiasi
                </h3>
                <p className="mb-6 max-w-[65ch] font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-300">
                  Dikhususkan bagi perusahaan manufaktur kendaraan listrik (Roda 4, Roda 2,
                  Bus), pabrikan sel baterai, dan penyedia stasiun pengisian daya (SPKLU).
                </p>

                <ul className="mb-8 space-y-3 border-t border-white/10 pt-4">
                  {b2bBenefits.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 font-[family-name:var(--font-body)] text-xs text-slate-200">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/kontak?kategori=keanggotaan"
                className="inline-flex min-h-[48px] w-full items-center justify-center bg-electric px-6 py-4 font-[family-name:var(--font-body)] text-sm font-semibold text-white transition-[background-color,opacity] duration-150 hover:bg-electric-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90 sm:text-base"
              >
                Ajukan Permohonan Anggota B2B
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160} className="h-full min-w-0">
            <div className="flex h-full flex-col justify-between border border-white/15 bg-navy-light p-6 sm:p-8">
              <div>
                <div className="mb-5 flex items-start justify-between gap-3">
                  <Headphones className="h-5 w-5 shrink-0 text-slate-300" aria-hidden="true" />
                  <span className="text-right font-[family-name:var(--font-body)] text-xs font-medium text-slate-300">
                    Jalur Sekretariat & Media
                  </span>
                </div>

                <h3 className="mb-2 font-[family-name:var(--font-heading)] text-xl font-semibold leading-snug text-white sm:text-2xl">
                  Sekretariat & Hubungan Kelembagaan
                </h3>
                <p className="mb-6 max-w-[65ch] font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-300">
                  Dikhususkan bagi kementerian/lembaga pemerintah, institusi akademisi riset,
                  jurnalis pers otomotif, serta permohonan kemitraan pameran PEVS.
                </p>

                <ul className="mb-8 space-y-3 border-t border-white/10 pt-4">
                  {publicBenefits.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 font-[family-name:var(--font-body)] text-xs text-slate-200">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col items-center gap-3 sm:flex-row">
                <Link
                  href="/kontak"
                  className="inline-flex min-h-[48px] w-full flex-1 items-center justify-center gap-2 border border-white/20 px-5 py-4 font-[family-name:var(--font-body)] text-sm font-semibold text-white transition-[background-color,opacity] duration-150 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90"
                >
                  <Mail className="h-4 w-4 text-slate-300" aria-hidden="true" />
                  <span>Kontak Formal</span>
                </Link>

                <a
                  href="https://wa.me/6287789703728"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] w-full flex-1 items-center justify-center gap-2 bg-teal px-5 py-4 font-[family-name:var(--font-body)] text-sm font-semibold text-navy transition-[background-color,opacity] duration-150 hover:bg-teal-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90"
                >
                  <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  <span>WhatsApp Resmi</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
