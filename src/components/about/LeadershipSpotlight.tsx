import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/shared/ScrollReveal';
import SectionHeader from '@/components/shared/SectionHeader';
import { orgMembers } from '@/data/mock-data';

export default function LeadershipSpotlight() {
  // Ambil jajaran pimpinan inti (level: 'Pimpinan Inti')
  const coreLeaders = orgMembers.filter((m) => m.level === 'Pimpinan Inti').slice(0, 5);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="container-main">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-blue-100 text-electric mb-3">
                Dewan Pengurus
              </div>
              <SectionHeader
                title="Kepemimpinan & Dewan Pimpinan"
                subtitle="Dikelola oleh figur-figur berpengalaman dari kalangan pemerintahan, pimpinan asosiasi otomotif, dan praktisi industri kendaraan listrik nasional."
              />
            </div>

            <Link
              href="/struktur-organisasi"
              className="inline-flex items-center gap-2 text-sm font-semibold text-electric hover:text-electric-hover transition-colors whitespace-nowrap group min-h-[44px] items-center"
            >
              <span>Lihat Seluruh Struktur Organisasi</span>
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          </div>
        </ScrollReveal>

        {/* Core Leaders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {coreLeaders.map((leader, index) => (
            <ScrollReveal
              key={leader.id}
              delay={index * 100}
              className="h-full"
            >
              <div className="h-full bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:border-electric/40 transition-all duration-200 ease-out flex flex-col justify-between">
                <div>
                  {/* Photo / Avatar Placeholder with elegant badge */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-200 mb-5 flex items-center justify-center border border-slate-200/80">
                    <Image
                      src={leader.photoUrl}
                      alt={leader.fullName}
                      width={180}
                      height={180}
                      className="max-h-36 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-sm"
                    />
                    <div className="absolute top-3 left-3 bg-navy text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-sm">
                      {leader.position}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-navy mb-1">
                    {leader.fullName}
                  </h3>
                  <p className="text-xs font-semibold text-electric">
                    {leader.level} PERIKLINDO
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <span>Periode Aktif Organisasi</span>
                  <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    Resmi
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Structure CTA Banner */}
        <ScrollReveal delay={200}>
          <div className="p-6 sm:p-8 bg-slate-900 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                Ingin mengetahui susunan lengkap ketua bidang dan sekretariat?
              </h4>
              <p className="text-sm text-slate-300">
                Kunjungi halaman Struktur Organisasi untuk melihat pembagian divisi riset, legal, promosi, dan kelembagaan.
              </p>
            </div>
            <Link
              href="/struktur-organisasi"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-electric text-white font-semibold text-sm hover:bg-electric-hover active:scale-[0.98] transition-all duration-150 min-h-[44px] whitespace-nowrap shadow-md shadow-electric/25"
            >
              Buka Struktur Lengkap
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
