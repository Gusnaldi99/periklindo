'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import { Award, CheckCircle2, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import { cn } from '@/lib/utils';

export default function FoundersSection() {
  const shouldReduceMotion = useReducedMotion();

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0.1 }
        : { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="inisiator-pendiri" className="py-16 md:py-20 lg:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-blue-100 text-electric mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Kelahiran Organisasi & Momentum Deklarasi
          </div>
          <SectionHeader
            title="Inisiator Pendiri Asosiasi"
            subtitle="PERIKLINDO dideklarasikan secara resmi pada April 2021 atas kesamaan visi dan inisiatif dari tiga entitas pabrikan otomotif pionir di Indonesia guna mempercepat implementasi Perpres No. 55 Tahun 2019."
          />
        </motion.div>

        {/* 3 Founders Grid with Reflective Borders & Hover Lift */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {founders.map((founder) => (
            <motion.div
              key={founder.name}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              className="group h-full bg-white border border-slate-200/90 rounded-2xl p-6 lg:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-electric/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle top reflective border highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-electric/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Logo Container with crisp white padding & subtle inner shadow */}
                <div className="h-24 w-full flex items-center justify-center p-4 mb-6 bg-slate-50/90 rounded-xl border border-slate-100 group-hover:bg-blue-50/40 group-hover:border-blue-100 transition-colors duration-200">
                  <Image
                    src={founder.logoUrl}
                    alt={founder.name}
                    width={170}
                    height={65}
                    className="max-h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Badges: Sector focus & Founding year */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    {founder.focus}
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {founder.year}
                  </span>
                </div>

                {/* Company Name & Role Badge */}
                <h3 className="text-lg font-bold text-navy mb-1 group-hover:text-electric transition-colors duration-150 font-[family-name:var(--font-heading)]">
                  {founder.name}
                </h3>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-electric mb-3.5">
                  <Award className="w-3.5 h-3.5 shrink-0 text-amber-500" />
                  <span>{founder.role}</span>
                </div>

                {/* Historic Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {founder.description}
                </p>

                {/* Key Historical Contributions */}
                <div className="space-y-1.5 pt-4 border-t border-slate-100 mb-6">
                  {founder.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-slate-700">Inisiator Pendiri 2021</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">{founder.code}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Narrative Inception Callout with Legal Verification */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 p-6 lg:p-8 bg-white border border-slate-200 rounded-2xl shadow-sm"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-electric uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>Konsensus Bersama Tiga Raksasa Otomotif</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-navy mb-2 font-[family-name:var(--font-heading)]">
                Komitmen Sinergis Percepatan Ekosistem KBLBB dari Hulu ke Hilir
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Para pendiri menyadari bahwa revolusi elektrifikasi transportasi tidak dapat berjalan sendiri secara parsial oleh masing-masing pabrikan. Dibutuhkan sebuah perkumpulan berbadan hukum yang mampu menyuarakan kepentingan bersama, memberikan rekomendasi kebijakan solutif kepada regulator kementerian, serta mengawal standardisasi keselamatan dan kesiapan infrastruktur dari hulu hingga hilir secara berkelanjutan.
              </p>
            </div>
            <div className="shrink-0 bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 text-center w-full lg:w-auto">
              <span className="block text-[11px] uppercase tracking-wider font-semibold text-slate-500 mb-1">
                Status Keabsahan Kelembagaan
              </span>
              <span className="text-sm font-bold text-navy block mb-0.5">
                Akta Notaris & SK Kemenkumham
              </span>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 inline-block">
                Terverifikasi Sah Sejak 2021
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
