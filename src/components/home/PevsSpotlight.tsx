'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Sparkles,
  Calendar,
  MapPin,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Zap,
  Users,
  Coins,
  ArrowRight,
} from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function PevsSpotlight() {
  const highlights = [
    {
      title: 'Indoor EV Test Track & Uji Rendam Air Baterai',
      desc: 'Arena uji coba kendaraan listrik di dalam gedung dan kolam demonstrasi rendam air baterai untuk membuktikan ketahanan serta keamanan sistem kelistrikan dari genangan banjir.',
    },
    {
      title: 'Pusat Transaksi Bisnis B2B, B2G & B2C',
      desc: 'Platform negosiasi pengadaan armada komersial instansi pemerintah, BUMN PLN, korporasi logistik, serta transaksi retail kendaraan penumpang dan roda dua.',
    },
    {
      title: 'Konferensi Internasional PEVC (Electric Vehicle Conference)',
      desc: 'Simposium tingkat tinggi bersama pemangku kebijakan, pakar energi terbarukan, BRIN, dan asosiasi regional Asia Tenggara (AFEVA).',
    },
  ];

  return (
    <section id="pevs" className="py-16 md:py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="container-main">
        {/* Top Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-bold bg-emerald-100 text-teal border border-emerald-200 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-teal" />
                Ajang Tahunan Resmi Asosiasi &bull; Kolaborasi Dyandra Promosindo
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight leading-tight">
                PERIKLINDO Electric Vehicle Show (PEVS)
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Pameran akbar kendaraan listrik terbesar di Indonesia yang diselenggarakan
                setiap tahun di JIExpo Kemayoran, menjadi barometer utama kemajuan teknologi
                dan percepatan adopsi mobilitas bersih nasional.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700">
                <MapPin className="w-4 h-4 text-electric" />
                <span>JIExpo Kemayoran, Jakarta</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700">
                <Calendar className="w-4 h-4 text-emerald-600" />
                <span>Penyelenggaraan Tahunan</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 2-Column Spotlight Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          {/* Visual Showcase (7 Cols) */}
          <ScrollReveal delay={150} className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Card 1: Main Stage & Leadership Opening */}
              <div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-lg aspect-[4/3] sm:col-span-2">
                <Image
                  src="/assets/news/pevs-2026-game-changer.jpg"
                  alt="Pidato Pembukaan PEVS 2026 oleh Ketua Umum Dr. Moeldoko"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest bg-electric px-2.5 py-1 rounded-md mb-1.5 shadow-xs">
                    Opening Ceremony
                  </span>
                  <h4 className="text-base sm:text-lg font-bold leading-snug text-white">
                    Moeldoko Tegaskan Kendaraan Listrik Sebagai Game Changer Ekonomi Indonesia
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    Mewadahi peluncuran produk baru dari merek global, demo teknologi baterai,
                    dan komitmen penurunan emisi gas buang.
                  </p>
                </div>
              </div>

              {/* Card 2: Innovation & Commercial Fleet */}
              <div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md aspect-[4/3]">
                <Image
                  src="/assets/news/pevs-2026-mab-moeldoko.jpg"
                  alt="Pameran Kendaraan Listrik Komersial & Command Center MAB di PEVS"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-bold text-cyan-300 block mb-0.5">
                    Solusi Industri & Komersial
                  </span>
                  <p className="text-xs font-bold leading-snug line-clamp-2">
                    Bus Listrik MAB & Sistem Monitoring Command Center
                  </p>
                </div>
              </div>

              {/* Card 3: Keynote & Conference */}
              <div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md aspect-[4/3]">
                <Image
                  src="/assets/news/pevs-2026-pidato-moeldoko.jpg"
                  alt="Konferensi PEVC dan Diskusi Ekosistem Elektrifikasi"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-bold text-emerald-300 block mb-0.5">
                    Konferensi PEVC
                  </span>
                  <p className="text-xs font-bold leading-snug line-clamp-2">
                    Harmonisasi Regulasi Bersama Kementerian & Perguruan Tinggi
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Highlights & Scope (5 Cols) */}
          <ScrollReveal delay={250} className="lg:col-span-5">
            <div className="space-y-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-slate-50 rounded-2xl border border-slate-200 hover:border-electric/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-electric/10 text-electric flex items-center justify-center shrink-0 mt-0.5">
                      <Zap className="w-4 h-4 text-electric" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy leading-snug mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-2">
                <Link
                  href="/berita?kategori=Kegiatan"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy text-white text-xs sm:text-sm font-bold hover:bg-navy-light active:scale-[0.98] transition-all min-h-[44px] shadow-sm shadow-navy/20"
                >
                  <span>Lihat Dokumentasi & Liputan PEVS</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 4 Quick Impact Counters */}
        <ScrollReveal delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 bg-gradient-to-r from-slate-900 to-navy text-white rounded-2xl border border-slate-800 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-cyan-300 shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black font-[family-name:var(--font-heading)] text-white">
                  100K+
                </p>
                <p className="text-[11px] text-slate-400 font-medium">Pengunjung Tiap Edisi</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black font-[family-name:var(--font-heading)] text-white">
                  130+
                </p>
                <p className="text-[11px] text-slate-400 font-medium">Exhibitor & Merek Peserta</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 shrink-0">
                <Coins className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black font-[family-name:var(--font-heading)] text-white">
                  Rp 1+ T
                </p>
                <p className="text-[11px] text-slate-400 font-medium">Transaksi B2B & Retail</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-yellow-300 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black font-[family-name:var(--font-heading)] text-white">
                  Tahunan
                </p>
                <p className="text-[11px] text-slate-400 font-medium">Agenda Resmi Nasional</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

