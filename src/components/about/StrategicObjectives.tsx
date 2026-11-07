'use client';

import { Scale, ShoppingBag, Cpu, Globe2, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function StrategicObjectives() {
  const objectives = [
    {
      code: 'PLR-01',
      title: 'Partner Strategis Pemerintah',
      tag: 'Regulasi & Insentif Fiskal',
      icon: Scale,
      metricLabel: 'Harmonisasi Regulasi',
      metricValue: '100% Sinergi',
      metricPercent: 100,
      description:
        'Aktif memberikan kajian teknis, usulan insentif fiskal (PPN DTP, pembebasan bea masuk komponen), serta masukan harmonisasi regulasi percepatan KBLBB bersama Kemenko, Kemenperin, Kemenhub, dan Kementerian ESDM.',
      items: [
        'Advokasi insentif fiskal & kemudahan investasi manufaktur',
        'Harmonisasi standar uji tipe kendaraan listrik (SUT/SRUT)',
        'Rekomendasi percepatan konversi armada kendaraan dinas & umum',
      ],
    },
    {
      code: 'PLR-02',
      title: 'Akomodasi Kebutuhan Pasar',
      tag: 'Penetrasi Pasar Domestik',
      icon: ShoppingBag,
      metricLabel: 'Adopsi Segmen Urban & B2B',
      metricValue: 'Tren Menuju 20%',
      metricPercent: 75,
      description:
        'Membantu para produsen anggota dalam memetakan kebutuhan pasar kendaraan listrik di Indonesia, baik armada komersial logistik perkotaan maupun kendaraan pribadi roda dua dan roda empat yang efisien serta terjangkau.',
      items: [
        'Pemetaan preferensi konsumen dan daya beli masyarakat',
        'Fasilitasi armada niaga listrik untuk operasional logistik B2B',
        'Dukungan penetrasi segmen motor listrik komuter harian',
      ],
    },
    {
      code: 'PLR-03',
      title: 'Sinergi Ekosistem & TKDN',
      tag: 'Hilirisasi & Rantai Pasok',
      icon: Cpu,
      metricLabel: 'Target TKDN KBLBB',
      metricValue: '60% Menuju 2027',
      metricPercent: 60,
      description:
        'Mensinergikan rantai pasok dari hulu ke hilir: dari pabrik perakitan sel baterai berbasis nikel dalam negeri, manufaktur komponen lokal, hingga pengembang stasiun pengisian daya (SPKLU) dan swap baterai.',
      items: [
        'Peningkatan Tingkat Komponen Dalam Negeri (TKDN) terukur',
        'Standardisasi konektor pengisian daya & protokol penukaran baterai',
        'Kolaborasi bersama produsen baterai nasional, BUMN, dan PLN',
      ],
    },
    {
      code: 'PLR-04',
      title: 'Kemitraan Multilateral & PEVS',
      tag: 'Promosi & Skala Internasional',
      icon: Globe2,
      metricLabel: 'Pameran PEVS JIExpo',
      metricValue: 'Skala Regional ASEAN',
      metricPercent: 90,
      description:
        'Membangun jejaring kolaborasi dengan asosiasi industri internasional, akademisi BRIN/universitas, serta menyelenggarakan PERIKLINDO Electric Vehicle Show (PEVS) sebagai etalase inovasi terdepan di kawasan ASEAN.',
      items: [
        'Penyelenggaraan rutin tahunan PEVS bersama Dyandra Promosindo',
        'Kolaborasi riset teknologi elektrifikasi bersama universitas',
        'Pertukaran wawasan dengan asosiasi EV regional & global',
      ],
    },
  ];

  return (
    <section
      id="tujuan-strategis"
      className="scroll-mt-20 border-b border-slate-200 bg-slate-50 py-16 md:py-20 lg:py-24"
    >
      <div className="container-main">
        <ScrollReveal>
          <div className="mb-12 max-w-3xl min-w-0 lg:mb-16">
            <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-medium text-slate-500">
              Arah Kebijakan & Target Nasional
            </p>
            <SectionHeader
              title="Tujuan Strategis & Pilar Fokus"
              subtitle="Empat pilar komitmen objektif berstandar industri otomotif yang dijalankan PERIKLINDO untuk memastikan ekosistem kendaraan listrik tumbuh mandiri, aman, dan berkesinambungan."
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {objectives.map((obj, index) => {
            const Icon = obj.icon;
            return (
              <ScrollReveal key={obj.code} delay={index * 70} className="h-full min-w-0">
                <article className="flex h-full flex-col justify-between border border-slate-200 bg-white p-6 sm:p-8">
                  <div>
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="font-[family-name:var(--font-body)] text-xs font-medium text-electric">
                        {obj.tag}
                      </span>
                      <span className="font-[family-name:var(--font-body)] text-xs font-semibold text-slate-500">
                        {obj.code}
                      </span>
                    </div>

                    <div className="mb-3 flex items-center gap-3.5">
                      <Icon className="h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-navy">
                        {obj.title}
                      </h3>
                    </div>

                    <p className="mb-6 font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-600">
                      {obj.description}
                    </p>

                    <div className="mb-6 border border-slate-100 bg-slate-50 p-3.5">
                      <div className="mb-1.5 flex items-center justify-between gap-3 font-[family-name:var(--font-body)] text-xs">
                        <span className="font-medium text-slate-500">{obj.metricLabel}</span>
                        <span className="font-semibold text-navy">{obj.metricValue}</span>
                      </div>
                      <div
                        className="h-1.5 w-full overflow-hidden bg-slate-200"
                        role="progressbar"
                        aria-valuenow={obj.metricPercent}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={obj.metricLabel}
                      >
                        <div
                          className="h-full bg-electric"
                          style={{ width: `${obj.metricPercent}%` }}
                        />
                      </div>
                    </div>

                    <div className="space-y-2.5 border-t border-slate-100 pt-4">
                      <p className="font-[family-name:var(--font-body)] text-[11px] font-semibold text-slate-500">
                        Inisiatif Kunci Strategis:
                      </p>
                      {obj.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2.5 font-[family-name:var(--font-body)] text-xs text-slate-700 sm:text-sm"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
