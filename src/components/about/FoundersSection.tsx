'use client';

import Image from 'next/image';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function FoundersSection() {
  const founders = [
    {
      name: 'PT Mobil Anak Bangsa (MAB)',
      legalName: 'PT Mobil Anak Bangsa Indonesia',
      role: 'Inisiator & Pelopor Bus Listrik Nasional',
      badge: 'Pelopor Kendaraan Komersial Listrik',
      logoUrl: '/assets/member/logo_mab.webp',
      description:
        'Pionir kendaraan komersial listrik karya anak bangsa yang didirikan oleh Jenderal TNI (Purn.) Dr. Moeldoko. Berfokus pada manufaktur bus listrik perkotaan, truk listrik pertambangan/perkebunan, dan sistem armada cerdas berbasis Command Center.',
      focus: 'Bus Listrik & Kendaraan Niaga',
      year: 'April 2021',
      code: 'FND-MAB-01',
      highlights: [
        'Pelopor bus listrik perkotaan pertama di Indonesia',
        'Fasilitas karoseri manufaktur listrik di Kudus, Jateng',
        'Inisiator awal bersama pembentukan PERIKLINDO',
      ],
    },
    {
      name: 'PT SGMW Motor Indonesia (Wuling)',
      legalName: 'PT SGMW Motor Indonesia',
      role: 'Inisiator & Pemimpin Segmen Roda Empat',
      badge: 'Pionir Mobil Penumpang Terjangkau',
      logoUrl: '/assets/member/logo_wuling.webp',
      description:
        'Produsen otomotif global dengan fasilitas manufaktur canggih seluas 60 hektar di Cikarang, Jawa Barat. Menjadi katalis akselerasi penetrasi mobil listrik penumpang di Indonesia melalui ekosistem kendaraan kompak berbasis baterai.',
      focus: 'Mobil Penumpang (Roda 4)',
      year: 'April 2021',
      code: 'FND-SGMW-02',
      highlights: [
        'Basis manufaktur ekspor kendaraan listrik regional',
        'Pangsa pasar mobil listrik terbesar di tanah air',
        'Investasi terintegrasi rantai pasok baterai lokal',
      ],
    },
    {
      name: 'PT Sokonindo Automobile (DFSK)',
      legalName: 'PT Sokonindo Automobile',
      role: 'Inisiator & Solusi EV Komersial Ringan',
      badge: 'Pionir Armada Logistik Bersih',
      logoUrl: '/assets/member/logo_dfsk.webp',
      description:
        'Pabrikan otomotif modern dengan fasilitas manufaktur di Kawasan Industri Modern Cikande, Serang, Banten. Memelopori lini blind van dan pick-up niaga listrik murni untuk efisiensi rantai logistik dan UMKM nasional.',
      focus: 'Armada Niaga Ringan & Logistik',
      year: 'April 2021',
      code: 'FND-DFSK-03',
      highlights: [
        'Pabrik otomotif berstandar Industri 4.0 di Banten',
        'Pelopor armada van listrik niaga di Indonesia',
        'Dukungan penuh dekarbonisasi transportasi logistik',
      ],
    },
  ];

  return (
    <section
      id="inisiator-pendiri"
      className="scroll-mt-20 border-b border-slate-200 bg-slate-50 py-16 md:py-20 lg:py-24"
    >
      <div className="container-main">
        <ScrollReveal>
          <div className="mb-12 max-w-3xl min-w-0 lg:mb-16">
            <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-medium text-slate-500">
              Kelahiran Organisasi & Momentum Deklarasi
            </p>
            <SectionHeader
              title="Inisiator Pendiri Asosiasi"
              subtitle="PERIKLINDO dideklarasikan secara resmi pada April 2021 atas kesamaan visi dan inisiatif dari tiga entitas pabrikan otomotif pionir di Indonesia guna mempercepat implementasi Perpres No. 55 Tahun 2019."
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {founders.map((founder, index) => (
            <ScrollReveal key={founder.name} delay={index * 80} className="h-full min-w-0">
              <article className="flex h-full flex-col justify-between border border-slate-200 bg-white p-6 lg:p-8">
                <div>
                  <div className="mb-6 flex h-24 w-full items-center justify-center border border-slate-100 bg-slate-50 p-4">
                    <Image
                      src={founder.logoUrl}
                      alt={founder.name}
                      width={170}
                      height={65}
                      className="max-h-14 w-auto object-contain"
                    />
                  </div>

                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="font-[family-name:var(--font-body)] text-xs font-medium text-slate-600">
                      {founder.focus}
                    </span>
                    <span className="font-[family-name:var(--font-body)] text-xs font-medium text-slate-500">
                      {founder.year}
                    </span>
                  </div>

                  <h3 className="mb-1 font-[family-name:var(--font-heading)] text-lg font-semibold text-navy">
                    {founder.name}
                  </h3>
                  <p className="mb-3.5 font-[family-name:var(--font-body)] text-xs font-semibold text-electric">
                    {founder.role}
                  </p>

                  <p className="mb-5 font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-600">
                    {founder.description}
                  </p>

                  <ul className="mb-6 space-y-1.5 border-t border-slate-100 pt-4">
                    {founder.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 font-[family-name:var(--font-body)] text-xs text-slate-600"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-4 font-[family-name:var(--font-body)] text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                    <span className="font-semibold text-slate-700">Inisiator Pendiri 2021</span>
                  </div>
                  <span className="text-slate-500">{founder.code}</span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={120}>
          <div className="mt-12 border border-slate-200 bg-white p-6 lg:p-8">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-3xl min-w-0">
                <p className="mb-2 font-[family-name:var(--font-body)] text-xs font-semibold text-electric">
                  Konsensus Bersama Tiga Raksasa Otomotif
                </p>
                <h4 className="mb-2 font-[family-name:var(--font-heading)] text-base font-semibold text-navy sm:text-lg">
                  Komitmen Sinergis Percepatan Ekosistem KBLBB dari Hulu ke Hilir
                </h4>
                <p className="max-w-prose font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-600">
                  Para pendiri menyadari bahwa revolusi elektrifikasi transportasi tidak dapat berjalan sendiri secara parsial oleh masing-masing pabrikan. Dibutuhkan sebuah perkumpulan berbadan hukum yang mampu menyuarakan kepentingan bersama, memberikan rekomendasi kebijakan solutif kepada regulator kementerian, serta mengawal standardisasi keselamatan dan kesiapan infrastruktur dari hulu hingga hilir secara berkelanjutan.
                </p>
              </div>
              <div className="w-full shrink-0 border border-slate-200 bg-slate-50 px-6 py-4 text-center lg:w-auto">
                <span className="mb-1 block font-[family-name:var(--font-body)] text-[11px] font-medium text-slate-500">
                  Status Keabsahan Kelembagaan
                </span>
                <span className="mb-0.5 block font-[family-name:var(--font-body)] text-sm font-semibold text-navy">
                  Akta Notaris & SK Kemenkumham
                </span>
                <span className="inline-block font-[family-name:var(--font-body)] text-xs font-semibold text-navy">
                  Terverifikasi Sah Sejak 2021
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
