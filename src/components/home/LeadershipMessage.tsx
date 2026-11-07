'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Scale, BatteryCharging, Zap } from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function LeadershipMessage() {
  const leadershipPillars = [
    {
      icon: Scale,
      title: 'Advokasi Regulasi & Insentif Fiskal',
      desc: 'Mengawal implementasi Perpres 55/2019, pembebasan PPN DTP, serta kemudahan izin sertifikasi kelaikan jalan bagi produsen.',
    },
    {
      icon: BatteryCharging,
      title: 'Kedaulatan Baterai & Rantai Pasok',
      desc: 'Mendorong integrasi hilirisasi nikel nasional menuju target TKDN 60% pada tahun 2027 dan standardisasi sistem penukaran baterai.',
    },
    {
      icon: Zap,
      title: 'Akselerasi Pasar & Sosialisasi PEVS',
      desc: 'Membuktikan keamanan baterai lewat uji rendam air terbuka di PEVS JIExpo dan mengedukasi efisiensi biaya kendaraan listrik kepada publik.',
    },
  ];

  return (
    <section className="relative overflow-x-clip border-b border-slate-200 bg-white py-16 md:py-24">
      <div className="container-main relative z-10">
        <ScrollReveal>
          <p className="mb-6 font-[family-name:var(--font-body)] text-sm font-medium text-slate-500">
            Pesan Otoritas Kepemimpinan & Arah Kebijakan
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="overflow-hidden border border-navy/15 bg-navy text-white">
            <div className="grid grid-cols-1 items-center gap-10 p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-12">
              {/* Leader photo */}
              <div className="flex flex-col items-center text-center lg:col-span-5">
                <div className="relative w-64 overflow-hidden border border-white/20 bg-navy-light sm:w-72 lg:w-80">
                  <div className="relative flex aspect-[4/5] items-end justify-center px-3 pt-4">
                    <Image
                      src="/assets/org/moeldoko.png"
                      alt="Jenderal TNI (Purn.) Dr. Moeldoko - Ketua Umum PERIKLINDO"
                      width={320}
                      height={400}
                      className="h-full w-auto max-h-[22rem] object-contain"
                      priority
                    />
                  </div>
                  <div className="border-t border-white/15 bg-navy/95 px-3 py-2.5 text-center">
                    <p className="font-[family-name:var(--font-body)] text-xs font-semibold text-white">
                      Pucuk Pimpinan Tertinggi
                    </p>
                    <p className="mt-0.5 font-[family-name:var(--font-body)] text-[11px] text-slate-400">
                      Periode Kepengurusan Aktif
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold leading-snug text-white sm:text-2xl">
                    Jenderal TNI (Purn.) Dr. Moeldoko
                  </h3>
                  <p className="mt-1 font-[family-name:var(--font-body)] text-sm font-medium text-slate-300">
                    Ketua Umum PERIKLINDO
                  </p>
                  <p className="mt-0.5 font-[family-name:var(--font-body)] text-sm text-slate-400">
                    Founder PT MAB
                  </p>
                </div>
              </div>

              {/* Quote & directives */}
              <div className="flex flex-col justify-between lg:col-span-7 min-w-0">
                <div className="mb-6">
                  <blockquote className="mb-4 font-[family-name:var(--font-heading)] text-lg font-medium leading-snug text-slate-100 sm:text-xl md:text-2xl">
                    &ldquo;Kendaraan listrik bukan sekadar inovasi transportasi, melainkan game
                    changer bagi kedaulatan industri dan transformasi energi nasional. Indonesia
                    tidak boleh hanya menjadi pasar produk impor, melainkan harus berdiri
                    sebagai pusat rantai pasok dan manufaktur EV berdaya saing global.&rdquo;
                  </blockquote>

                  <p className="font-[family-name:var(--font-body)] text-xs leading-relaxed text-slate-400">
                    Disampaikan pada pembukaan{' '}
                    <strong className="font-semibold text-slate-200">
                      PERIKLINDO Electric Vehicle Show (PEVS) 2026
                    </strong>{' '}
                    di JIExpo Kemayoran, menyoroti urgensi efisiensi biaya rumah tangga,
                    pengurangan subsidi BBM Rp264 triliun, dan akselerasi hilirisasi baterai.
                  </p>
                </div>

                <div className="my-6 grid grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
                  {leadershipPillars.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <div key={pillar.title} className="min-w-0 border border-white/10 p-3.5">
                        <Icon className="mb-2 h-4 w-4 text-slate-300" aria-hidden="true" />
                        <h4 className="mb-1 font-[family-name:var(--font-heading)] text-sm font-semibold leading-tight text-white">
                          {pillar.title}
                        </h4>
                        <p className="font-[family-name:var(--font-body)] text-xs leading-relaxed text-slate-400">
                          {pillar.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4 font-[family-name:var(--font-body)] text-xs text-slate-300">
                  <span className="text-slate-400">
                    Didukung Sekretaris Jenderal & 6 Jajaran Bidang Eksekutif.
                  </span>
                  <Link
                    href="/struktur-organisasi"
                    className="font-semibold text-white underline-offset-4 transition-[opacity] duration-150 hover:opacity-80 hover:underline"
                  >
                    Lihat Struktur Kepengurusan Lengkap
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
