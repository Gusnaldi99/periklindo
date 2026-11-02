'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Zap,
  BatteryCharging,
  ArrowRight,
  Layers,
  Sparkles,
  FileCheck2,
} from 'lucide-react';
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
      accentColor: 'from-blue-600 via-electric to-cyan-400',
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
      accentColor: 'from-electric via-cyan-400 to-emerald-400',
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
      accentColor: 'from-emerald-500 via-teal to-blue-500',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="container-main">
        {/* Top Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-bold bg-blue-100 text-electric border border-blue-200 mb-3">
              <Layers className="w-3.5 h-3.5 text-electric" />
              Tiga Sumbu Gerak Utama Asosiasi
            </div>
            <SectionHeader
              title="Pilar Strategis Transformasi Industri EV"
              subtitle="PERIKLINDO beroperasi berdasarkan tiga sumbu strategis untuk memastikan akselerasi ekosistem mobilitas bersih Indonesia berlangsung kokoh dari aspek regulasi hukum, kesiapan pasar, hingga kemandirian komponen lokal."
            />
          </div>
        </ScrollReveal>

        {/* 3 Strategic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <ScrollReveal
                key={pillar.id}
                delay={index * 120}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative h-full bg-white border border-slate-200 rounded-2xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-electric/50 transition-all duration-300"
                >
                  {/* Top Electric Accent Line */}
                  <div
                    className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${pillar.accentColor}`}
                  />

                  <div>
                    {/* Icon & Pillar Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-electric border border-blue-100 flex items-center justify-center group-hover:bg-electric group-hover:text-white transition-colors duration-200 shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                        {pillar.tag}
                      </span>
                    </div>

                    {/* Pillar Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-navy mb-3 group-hover:text-electric transition-colors leading-snug">
                      {pillar.title}
                    </h3>

                    {/* Pillar Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      {pillar.highlights.map((item, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                        >
                          <FileCheck2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-electric group-hover:translate-x-0.5 transition-transform">
                    <span>Pelajari Selengkapnya</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Institutional Bottom Banner */}
        <ScrollReveal delay={200}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-navy to-slate-900 rounded-2xl text-white gap-6 shadow-xl border border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                Visi Jangka Panjang KBLBB Nasional
              </div>
              <h4 className="text-base sm:text-xl font-bold text-white mb-1">
                Ingin mengetahui sejarah pendirian, visi, misi, dan landasan hukum kami?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Pelajari deklarasi pendiri, anggaran dasar, dan target peta jalan elektrifikasi Indonesia.
              </p>
            </div>
            <Link
              href="/tentang-kami"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-navy font-bold text-xs sm:text-sm hover:bg-slate-100 active:scale-[0.98] transition-all min-h-[44px] whitespace-nowrap shadow-sm shrink-0"
            >
              Lihat Profil & Sejarah Lengkap &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

