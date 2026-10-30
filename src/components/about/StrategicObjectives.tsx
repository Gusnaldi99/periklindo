import ScrollReveal from '@/components/shared/ScrollReveal';
import SectionHeader from '@/components/shared/SectionHeader';

export default function StrategicObjectives() {
  const objectives = [
    {
      title: 'Partner Strategis Pemerintah',
      tag: 'Regulasi & Insentif',
      description:
        'Aktif memberikan kajian teknis, usulan insentif fiskal (PPN DTP, pembebasan bea masuk komponen), serta masukan harmonisasi regulasi percepatan KBLBB bersama Kementerian Koordinator, Kemenperin, Kemenhub, dan Kementerian ESDM.',
      items: [
        'Advokasi insentif fiskal & kemudahan investasi',
        'Harmonisasi standar uji tipe kendaraan listrik (SUT/SRUT)',
        'Rekomendasi percepatan konversi kendaraan BBM ke listrik',
      ],
    },
    {
      title: 'Akomodasi Kebutuhan Pasar',
      tag: 'Penetrasi Pasar Domestik',
      description:
        'Membantu para anggota dalam memetakan kebutuhan pasar kendaraan listrik di Indonesia, baik segmen komersial (armada logistik, bus kota), maupun kendaraan pribadi roda dua dan roda empat yang efisien serta terjangkau.',
      items: [
        'Pemetaan preferensi dan daya beli konsumen Indonesia',
        'Fasilitasi armada niaga listrik untuk B2B dan logistik',
        'Dukungan penetrasi segmen motor listrik komuter',
      ],
    },
    {
      title: 'Sinergi Ekosistem & TKDN',
      tag: 'Hilirisasi & Rantai Pasok',
      description:
        'Mensinergikan rantai pasok dari hulu ke hilir: dari pabrik perakitan sel baterai berbasis nikel dalam negeri, manufaktur komponen lokal, hingga pengembang stasiun pengisian kendaraan listrik (SPKLU) dan penukaran baterai.',
      items: [
        'Peningkatan Tingkat Komponen Dalam Negeri (TKDN)',
        'Standardisasi konektor pengisian daya & protokol swap baterai',
        'Kolaborasi bersama produsen baterai nasional dan PLN',
      ],
    },
    {
      title: 'Kemitraan Multilateral & PEVS',
      tag: 'Kolaborasi & Promosi Global',
      description:
        'Membangun jejaring kolaborasi dengan asosiasi industri internasional, akademisi/BRIN, serta menyelenggarakan PERIKLINDO Electric Vehicle Show (PEVS) sebagai panggung inovasi terdepan di kawasan ASEAN.',
      items: [
        'Penyelenggaraan rutin tahunan PEVS di JIExpo Kemayoran',
        'Kolaborasi riset teknologi baterai bersama universitas',
        'Pertukaran wawasan dengan asosiasi EV regional & global',
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="container-main">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-blue-100 text-electric mb-3">
              Arah Kebijakan
            </div>
            <SectionHeader
              title="Tujuan Strategis & Pilar Fokus"
              subtitle="Empat komitmen objektif yang dijalankan PERIKLINDO untuk memastikan ekosistem kendaraan listrik tumbuh berkesinambungan dan memberikan dampak nyata bagi perekonomian nasional."
            />
          </div>
        </ScrollReveal>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {objectives.map((obj, index) => (
            <ScrollReveal
              key={obj.title}
              delay={index * 120}
              className="h-full"
            >
              <div className="h-full bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-electric/50 hover:shadow-xl transition-all duration-200 ease-out flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-semibold text-electric bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      {obj.tag}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      Pilar 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-3">
                    {obj.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {obj.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Inisiatif Kunci:
                    </p>
                    {obj.items.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <span className="text-teal font-bold mt-0.5" aria-hidden="true">
                          ✓
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
