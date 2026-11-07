'use client';

import Link from 'next/link';
import { ShieldCheck, Zap, BatteryCharging, FileCheck2 } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function StrategicPillars() {
  const pillars = [
    {
      id: 'pillar-1',
      icon: ShieldCheck,
      tag: 'Pilar Regulasi',
      title: 'Advokasi Regulasi & Standarisasi Nasional',
      description:
        'Mitra strategis pemerintah Republik Indonesia dalam mengawal implementasi Perpres No. 55 Tahun 2019, perumusan insentif pembebasan PPN DTP, serta harmonisasi uji tipe kendaraan (SUT & SRUT) demi kepastian investasi manufaktur.',
      highlights: [
        'Kawal Perpres 55/2019 & Perpres 79/2023',
        'Harmonisasi Insentif Fiskal (PPN DTP)',
        'Standardisasi Kelaikan Uji Tipe Kendaraan',
      ],
    },
    {
      id: 'pillar-2',
      icon: Zap,
      tag: 'Pilar Edukasi & Pasar',
      title: 'Akselerasi Pasar & Sosialisasi PEVS',
      description:
        'Menyelenggarakan pameran akbar tahunan PEVS di JIExpo Kemayoran bersama Dyandra Promosindo serta aktif melakukan demonstrasi keselamatan (seperti uji rendam air baterai) untuk mengikis miskonsepsi publik seputar kendaraan listrik.',
      highlights: [
        'Penyelenggaraan Pameran Tahunan PEVS di JIExpo',
        'Demonstrasi Uji Rendam Air Baterai Terbuka',
        'Penetrasi Armada Komersial & Transportasi Publik',
      ],
    },
    {
      id: 'pillar-3',
      icon: BatteryCharging,
      tag: 'Pilar Rantai Pasok',
      title: 'Hilirisasi Baterai & Ekosistem Rantai Pasok',
      description:
        'Mensinergikan produsen kendaraan roda 4, roda 2, pengembang sel baterai nasional, dan penyedia stasiun pengisian daya (SPKLU/Swap Battery) guna merealisasikan target TKDN 60% dan kemandirian industri energi terbarukan.',
      highlights: [
        'Pendampingan Target TKDN 60% pada 2027',
        'Standardisasi Interoperabilitas Swap Battery',
        'Sinergi Pabrikan EV & Infrastruktur SPKLU',
      ],
    },
  ];

  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16 md:py-24">
      <div className="container-main">
        <ScrollReveal>
          <div className="mb-12 max-w-3xl min-w-0">
            <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-medium text-slate-500">
              Tiga Sumbu Gerak Utama Asosiasi
            </p>
            <SectionHeader
              title="Pilar Strategis Transformasi Industri EV"
              subtitle="PERIKLINDO beroperasi berdasarkan tiga sumbu strategis untuk memastikan akselerasi ekosistem mobilitas bersih Indonesia berlangsung kokoh dari aspek regulasi hukum, kesiapan pasar, hingga kemandirian komponen lokal."
            />
          </div>
        </ScrollReveal>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <ScrollReveal key={pillar.id} delay={index * 100} className="h-full min-w-0">
                <article className="flex h-full flex-col border border-slate-200 bg-white p-6 sm:p-8">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
                    <span className="font-[family-name:var(--font-body)] text-xs font-medium text-slate-500">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold leading-snug text-navy sm:text-xl">
                    {pillar.title}
                  </h3>

                  <p className="mb-6 max-w-[65ch] font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>

                  <ul className="mt-auto space-y-2 border-t border-slate-100 pt-4">
                    {pillar.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 font-[family-name:var(--font-body)] text-xs font-medium text-slate-700"
                      >
                        <FileCheck2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 border-t border-slate-100 pt-4 font-[family-name:var(--font-body)] text-xs font-semibold text-navy">
                    Pelajari Selengkapnya
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={160}>
          <div className="flex flex-col gap-6 border border-navy/20 bg-navy p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="min-w-0">
              <p className="mb-1 font-[family-name:var(--font-body)] text-sm font-medium text-slate-300">
                Visi Jangka Panjang KBLBB Nasional
              </p>
              <h4 className="mb-1 font-[family-name:var(--font-heading)] text-lg font-semibold text-white sm:text-xl">
                Ingin mengetahui sejarah pendirian, visi, misi, dan landasan hukum kami?
              </h4>
              <p className="font-[family-name:var(--font-body)] text-sm text-slate-300">
                Pelajari deklarasi pendiri, anggaran dasar, dan target peta jalan elektrifikasi Indonesia.
              </p>
            </div>
            <Link
              href="/tentang-kami"
              className="inline-flex min-h-[44px] shrink-0 items-center justify-center whitespace-nowrap bg-white px-6 py-3.5 font-[family-name:var(--font-body)] text-sm font-semibold text-navy transition-[opacity,background-color] duration-150 hover:bg-slate-100 active:opacity-90"
            >
              Lihat Profil & Sejarah Lengkap
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
