import Image from 'next/image';
import ScrollReveal from '@/components/shared/ScrollReveal';
import SectionHeader from '@/components/shared/SectionHeader';

export default function FoundersSection() {
  const founders = [
    {
      name: 'PT Mobil Anak Bangsa (MAB)',
      role: 'Inisiator & Pelopor Bus Listrik Nasional',
      logoUrl: '/assets/member/logo_mab.webp',
      description:
        'Pionir kendaraan komersial listrik karya anak bangsa yang didirikan oleh Jenderal TNI (Purn) Dr. Moeldoko. Berfokus pada perakitan bus listrik, truk listrik perkotaan, dan kendaraan niaga ramah lingkungan untuk transportasi massal Indonesia.',
      focus: 'Bus Listrik & Kendaraan Niaga',
      year: 'Inisiator 2021',
    },
    {
      name: 'PT SGMW Motor Indonesia (Wuling)',
      role: 'Inisiator & Pemimpin Segmen Roda Empat',
      logoUrl: '/assets/member/logo_wuling.webp',
      description:
        'Produsen otomotif global dengan fasilitas manufaktur berteknologi tinggi di Cikarang, Jawa Barat. Menjadi pelopor penetrasi mobil listrik terjangkau di Indonesia dan kontributor utama ekosistem kendaraan listrik penumpang berbasis baterai.',
      focus: 'Mobil Penumpang (Roda 4)',
      year: 'Inisiator 2021',
    },
    {
      name: 'PT Sokonindo Automobile (DFSK)',
      role: 'Inisiator & Solusi EV Komersial Ringan',
      logoUrl: '/assets/member/logo_dfsk.webp',
      description:
        'Pabrikan otomotif terintegrasi di Serang, Banten yang memelopori armada niaga ringan listrik (blind van & pick-up listrik) serta lini kendaraan penumpang berbasis energi baru untuk mendukung logistik modern perkotaan.',
      focus: 'Kendaraan Niaga Ringan & Penumpang',
      year: 'Inisiator 2021',
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="container-main">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-blue-100 text-electric mb-3">
              Kelahiran Organisasi
            </div>
            <SectionHeader
              title="Inisiator Pendiri Asosiasi"
              subtitle="PERIKLINDO dideklarasikan secara resmi pada April 2021 atas inisiatif dan kesamaan visi dari tiga pabrikan otomotif pionir di Indonesia guna mempercepat implementasi Perpres No. 55 Tahun 2019."
            />
          </div>
        </ScrollReveal>

        {/* 3 Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <ScrollReveal
              key={founder.name}
              delay={index * 120}
              className="h-full"
            >
              <div className="group h-full bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 flex flex-col justify-between hover:shadow-xl hover:border-electric/50 hover:-translate-y-1.5 transition-all duration-200 ease-out">
                <div>
                  {/* Logo Container with crisp white padding */}
                  <div className="h-20 w-full flex items-center justify-center p-3 mb-6 bg-slate-50/80 rounded-xl border border-slate-100 group-hover:bg-blue-50/50 transition-colors duration-200">
                    <Image
                      src={founder.logoUrl}
                      alt={founder.name}
                      width={160}
                      height={60}
                      className="max-h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      {founder.focus}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {founder.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy mb-1 group-hover:text-electric transition-colors duration-150">
                    {founder.name}
                  </h3>
                  <p className="text-xs font-semibold text-electric mb-3">
                    {founder.role}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {founder.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                  <svg
                    className="w-4 h-4 text-emerald-600 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Anggota Pendiri Resmi (Founding Member)</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Narrative Inception Callout */}
        <ScrollReveal delay={250}>
          <div className="mt-12 p-6 lg:p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-3xl">
                <h4 className="text-base sm:text-lg font-bold text-navy mb-2">
                  Komitmen Bersama untuk Transisi Energi Bersih
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Para pendiri menyadari bahwa revolusi elektrifikasi transportasi tidak dapat berjalan sendiri secara parsial. Dibutuhkan sebuah perkumpulan berbadan hukum yang mampu menyuarakan kepentingan industri, memberikan rekomendasi kebijakan solutif kepada regulator, serta mengawal standardisasi dan kesiapan infrastruktur dari hulu hingga hilir secara berkelanjutan.
                </p>
              </div>
              <div className="shrink-0 bg-slate-50 px-5 py-3 rounded-xl border border-slate-200 text-center">
                <span className="block text-xs uppercase tracking-wider font-semibold text-slate-500 mb-0.5">
                  Legalitas Notaris & SK Kemenkumham
                </span>
                <span className="text-sm font-bold text-navy">
                  Terdaftar Resmi Sejak 2021
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
