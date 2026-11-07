'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Users2, ChevronRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { orgMembers } from '@/data/mock-data';

export default function LeadershipSpotlight() {
  const coreLeaders = orgMembers.filter((m) => m.level === 'Pimpinan Inti').slice(0, 4);

  return (
    <section
      id="pimpinan"
      className="scroll-mt-20 border-b border-slate-200 bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="container-main">
        <ScrollReveal>
          <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end lg:mb-16">
            <div className="max-w-2xl min-w-0">
              <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-medium text-slate-500">
                Dewan Pengurus Inti
              </p>
              <SectionHeader
                title="Kepemimpinan & Dewan Pimpinan"
                subtitle="Dikelola oleh figur-figur berpengalaman dari pemerintahan, pelaku industri otomotif, serta praktisi ekosistem KBLBB yang berkomitmen membangun mandiri industri kendaraan listrik nasional."
              />
            </div>

            <Link
              href="/struktur-organisasi"
              className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap font-[family-name:var(--font-body)] text-sm font-semibold text-electric transition-[color] duration-150 hover:text-electric-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
            >
              <span>Lihat Seluruh Struktur Organisasi</span>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreLeaders.map((leader, index) => (
            <ScrollReveal key={leader.id} delay={index * 70} className="h-full min-w-0">
              <article className="flex h-full flex-col overflow-hidden border border-slate-200 bg-slate-50">
                <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden border-b border-slate-200 bg-slate-100">
                  <Image
                    src={leader.photoUrl}
                    alt={leader.fullName}
                    width={200}
                    height={200}
                    className="h-full w-full object-contain p-4"
                  />
                  <p className="absolute left-3 top-3 max-w-[70%] truncate border border-white/20 bg-navy px-2.5 py-1 font-[family-name:var(--font-body)] text-[11px] font-semibold text-white">
                    {leader.positionEn}
                  </p>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="mb-0.5 font-[family-name:var(--font-heading)] text-sm font-semibold leading-snug text-navy sm:text-base">
                      {leader.fullName}
                    </h3>
                    <p className="mb-2 font-[family-name:var(--font-body)] text-xs font-semibold text-electric">
                      {leader.position}
                    </p>
                    <p className="line-clamp-3 font-[family-name:var(--font-body)] text-xs leading-relaxed text-slate-500">
                      {leader.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3 font-[family-name:var(--font-body)] text-xs text-slate-500">
                    <span>Pimpinan Aktif</span>
                    <span className="font-semibold text-navy">Resmi</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={100}>
          <div className="flex flex-col items-start justify-between gap-6 border border-navy-light bg-navy p-6 text-white sm:flex-row sm:items-center sm:p-8">
            <div className="max-w-2xl min-w-0">
              <p className="mb-2 flex items-center gap-1.5 font-[family-name:var(--font-body)] text-xs font-medium text-slate-400">
                <Users2 className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                6 Ketua Bidang Eksekutif Tersedia
              </p>
              <h4 className="mb-1 font-[family-name:var(--font-heading)] text-base font-semibold text-white sm:text-lg">
                Ingin melihat susunan lengkap Ketua Bidang dan seluruh dewan pimpinan?
              </h4>
              <p className="max-w-prose font-[family-name:var(--font-body)] text-sm text-slate-300">
                Kunjungi halaman Struktur Organisasi untuk bagan hierarki interaktif Promosi, Legal, R&D, Data & Informasi, Organisasi, dan Hubungan Masyarakat.
              </p>
            </div>
            <Link
              href="/struktur-organisasi"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 whitespace-nowrap bg-electric px-6 py-3 font-[family-name:var(--font-body)] text-sm font-semibold text-white transition-[background-color,opacity] duration-150 hover:bg-electric-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90"
            >
              Buka Struktur Lengkap
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
