'use client';

import Image from 'next/image';
import Link from 'next/link';
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
    <section id="pevs" className="overflow-x-clip border-b border-slate-200 bg-white py-16 md:py-24">
      <div className="container-main">
        <ScrollReveal>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl min-w-0">
              <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-medium text-slate-500">
                Ajang Tahunan Resmi Asosiasi &bull; Kolaborasi Dyandra Promosindo
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-tight text-navy text-balance md:text-4xl">
                PERIKLINDO Electric Vehicle Show (PEVS)
              </h2>
              <p className="mt-3 font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-600">
                Pameran akbar kendaraan listrik terbesar di Indonesia yang diselenggarakan
                setiap tahun di JIExpo Kemayoran, menjadi barometer utama kemajuan teknologi
                dan percepatan adopsi mobilitas bersih nasional.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 font-[family-name:var(--font-body)] text-sm text-slate-600">
              <p>
                <span className="block text-xs font-medium text-slate-500">Lokasi</span>
                JIExpo Kemayoran, Jakarta
              </p>
              <p>
                <span className="block text-xs font-medium text-slate-500">Jadwal</span>
                Penyelenggaraan Tahunan
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mb-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <ScrollReveal delay={120} className="min-w-0 lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              <div className="group relative aspect-[4/3] overflow-hidden border border-slate-200 bg-navy sm:col-span-2">
                <Image
                  src="/assets/news/pevs-2026-game-changer.jpg"
                  alt="Pidato Pembukaan PEVS 2026 oleh Ketua Umum Dr. Moeldoko"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                  <p className="mb-1.5 font-[family-name:var(--font-body)] text-xs font-medium text-slate-300">
                    Opening Ceremony
                  </p>
                  <h4 className="font-[family-name:var(--font-heading)] text-base font-semibold leading-snug text-white sm:text-lg">
                    Moeldoko Tegaskan Kendaraan Listrik Sebagai Game Changer Ekonomi Indonesia
                  </h4>
                  <p className="mt-1 line-clamp-2 font-[family-name:var(--font-body)] text-xs text-slate-300">
                    Mewadahi peluncuran produk baru dari merek global, demo teknologi baterai,
                    dan komitmen penurunan emisi gas buang.
                  </p>
                </div>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden border border-slate-200 bg-navy">
                <Image
                  src="/assets/news/pevs-2026-mab-moeldoko.jpg"
                  alt="Pameran Kendaraan Listrik Komersial & Command Center MAB di PEVS"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                  <p className="mb-0.5 font-[family-name:var(--font-body)] text-xs font-medium text-slate-300">
                    Solusi Industri & Komersial
                  </p>
                  <p className="line-clamp-2 font-[family-name:var(--font-heading)] text-xs font-semibold leading-snug">
                    Bus Listrik MAB & Sistem Monitoring Command Center
                  </p>
                </div>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden border border-slate-200 bg-navy">
                <Image
                  src="/assets/news/pevs-2026-pidato-moeldoko.jpg"
                  alt="Konferensi PEVC dan Diskusi Ekosistem Elektrifikasi"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                  <p className="mb-0.5 font-[family-name:var(--font-body)] text-xs font-medium text-slate-300">
                    Konferensi PEVC
                  </p>
                  <p className="line-clamp-2 font-[family-name:var(--font-heading)] text-xs font-semibold leading-snug">
                    Harmonisasi Regulasi Bersama Kementerian & Perguruan Tinggi
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="min-w-0 lg:col-span-5">
            <div className="space-y-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="border border-slate-200 bg-slate-50 p-5"
                >
                  <h4 className="mb-1.5 font-[family-name:var(--font-heading)] text-sm font-semibold leading-snug text-navy">
                    {item.title}
                  </h4>
                  <p className="font-[family-name:var(--font-body)] text-xs leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}

              <div className="pt-2">
                <Link
                  href="/berita?kategori=Kegiatan"
                  className="inline-flex min-h-[44px] items-center justify-center bg-navy px-6 py-3.5 font-[family-name:var(--font-body)] text-sm font-semibold text-white transition-[background-color,opacity] duration-150 hover:bg-navy-light active:opacity-90"
                >
                  Lihat Dokumentasi & Liputan PEVS
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={240}>
          <div className="grid grid-cols-2 gap-6 border border-navy/20 bg-navy p-6 text-white md:grid-cols-4 sm:p-8">
            <div className="min-w-0">
              <p className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white">
                100K+
              </p>
              <p className="mt-1 font-[family-name:var(--font-body)] text-xs text-slate-400">
                Pengunjung Tiap Edisi
              </p>
            </div>
            <div className="min-w-0">
              <p className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white">
                130+
              </p>
              <p className="mt-1 font-[family-name:var(--font-body)] text-xs text-slate-400">
                Exhibitor & Merek Peserta
              </p>
            </div>
            <div className="min-w-0">
              <p className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white">
                Rp 1+ T
              </p>
              <p className="mt-1 font-[family-name:var(--font-body)] text-xs text-slate-400">
                Transaksi B2B & Retail
              </p>
            </div>
            <div className="min-w-0">
              <p className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white">
                Tahunan
              </p>
              <p className="mt-1 font-[family-name:var(--font-body)] text-xs text-slate-400">
                Agenda Resmi Nasional
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
