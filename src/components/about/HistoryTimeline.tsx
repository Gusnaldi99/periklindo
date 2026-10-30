import ScrollReveal from '@/components/shared/ScrollReveal';
import SectionHeader from '@/components/shared/SectionHeader';

export default function HistoryTimeline() {
  const milestones = [
    {
      year: '2019',
      badge: 'Tonggak Regulasi',
      title: 'Keluarnya Perpres No. 55 Tahun 2019',
      description:
        'Pemerintah Republik Indonesia mengundangkan Perpres 55/2019 tentang Percepatan Program Kendaraan Bermotor Listrik Berbasis Baterai (KBLBB) untuk Transportasi Jalan, menandai babak baru transisi energi otomotif nasional.',
    },
    {
      year: '2021',
      badge: 'Deklarasi Pendirian',
      title: 'Resmi Berdirinya PERIKLINDO (25 April 2021)',
      description:
        'Tiga pionir industri kendaraan listrik (PT Mobil Anak Bangsa, PT SGMW Motor Indonesia/Wuling, dan PT Sokonindo Automobile/DFSK) secara resmi mendeklarasikan PERIKLINDO dengan Jenderal TNI (Purn) Dr. Moeldoko sebagai Ketua Umum.',
    },
    {
      year: '2022',
      badge: 'PEVS Perdana',
      title: 'Sukses Penyelenggaraan PEVS 2022 di JIExpo Kemayoran',
      description:
        'Bersama Dyandra Promosindo, PERIKLINDO menggelar pameran kendaraan listrik murni pertama di Indonesia (PERIKLINDO Electric Vehicle Show 2022), membukukan total transaksi melampaui Rp 257 miliar dan dihadiri puluhan ribu pengunjung.',
    },
    {
      year: '2023',
      badge: 'Ekspansi Ekosistem',
      title: 'Advokasi Insentif PPN DTP & Masuknya Sektor Baterai',
      description:
        'PERIKLINDO aktif mengawal lahirnya insentif PPN DTP mobil listrik berbasis TKDN, sekaligus memperluas keanggotaan mencakup produsen sel baterai nasional (seperti Gotion dan ABC) serta produsen motor listrik roda dua.',
    },
    {
      year: '2024',
      badge: 'Skala Internasional',
      title: 'PEVS 2024 Bersama Asia Bike Jakarta & Edukasi Keselamatan',
      description:
        'Pameran PEVS 2024 berkembang pesat menggandeng mitra internasional (Messe Frankfurt / Asia Bike Jakarta) dan menggelar uji rendam banjir (water immersion test) secara langsung untuk membuktikan standar keamanan baterai EV.',
    },
    {
      year: '2025 - 2026',
      badge: 'Hilirisasi Mandiri',
      title: 'Akselerasi Baterai Lokal & Standardisasi Pengisian Daya',
      description:
        'Memperkuat utilisasi sel baterai lokal berbasis hilirisasi nikel Indonesia, perumusan standar interoperabilitas swapping station roda dua nasional, serta percepatan adopsi armada komersial ramah lingkungan.',
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="container-main">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-100 text-teal mb-3">
              Jejak Langkah
            </div>
            <SectionHeader
              title="Tonggak Perjalanan PERIKLINDO"
              subtitle="Dari inisiasi tiga produsen pionir hingga kini menaungi lebih dari 25 perusahaan kendaraan listrik terdepan di Indonesia."
            />
          </div>
        </ScrollReveal>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-32 space-y-10 md:space-y-12">
          {milestones.map((milestone, index) => (
            <ScrollReveal
              key={milestone.year}
              delay={index * 100}
              direction="up"
            >
              <div className="relative pl-6 sm:pl-8 group">
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-electric group-hover:scale-125 group-hover:border-teal transition-all duration-200" />

                {/* Left Year Badge for Desktop */}
                <div className="md:absolute md:-left-36 md:top-0 md:w-28 md:text-right">
                  <span className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-extrabold text-navy group-hover:text-electric transition-colors duration-150">
                    {milestone.year}
                  </span>
                </div>

                {/* Card Container */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 lg:p-7 hover:bg-white hover:shadow-lg hover:border-electric/40 transition-all duration-200">
                  <div className="inline-block text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 mb-2">
                    {milestone.badge}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-navy mb-2 group-hover:text-electric transition-colors duration-150">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
