'use client';

import { motion, useReducedMotion } from 'motion/react';
import { Target, Scale, ShoppingBag, Cpu, Globe2, CheckCircle2, Sparkles, Activity } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import { cn } from '@/lib/utils';

export default function StrategicObjectives() {
  const shouldReduceMotion = useReducedMotion();

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
      : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0.1 }
        : { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="tujuan-strategis" className="py-16 md:py-20 lg:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
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
            <Target className="w-3.5 h-3.5" />
            Arah Kebijakan & Target Nasional
          </div>
          <SectionHeader
            title="Tujuan Strategis & Pilar Fokus"
            subtitle="Empat pilar komitmen objektif berstandar industri otomotif yang dijalankan PERIKLINDO untuk memastikan ekosistem kendaraan listrik tumbuh mandiri, aman, dan berkesinambungan."
          />
        </motion.div>

        {/* 4 Pillars Automotive Engineering Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {objectives.map((obj) => {
            const Icon = obj.icon;
            return (
              <motion.div
                key={obj.code}
                variants={cardVariants}
                whileHover={shouldReduceMotion ? {} : { y: -5 }}
                className="group h-full bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 hover:border-electric/60 hover:shadow-xl transition-all duration-300 ease-out flex flex-col justify-between relative overflow-hidden"
              >
                {/* Engineering corner crosshairs */}
                <span className="absolute top-3 left-3 text-[10px] font-mono text-slate-300 group-hover:text-electric transition-colors">
                  +
                </span>
                <span className="absolute top-3 right-3 text-[10px] font-mono text-slate-300 group-hover:text-electric transition-colors">
                  +
                </span>

                <div>
                  {/* Top Bar with Tag and Code */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-semibold text-electric bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      {obj.tag}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-navy transition-colors">
                      {obj.code}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-navy flex items-center justify-center shrink-0 group-hover:bg-electric group-hover:text-white transition-colors duration-200 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-navy group-hover:text-electric transition-colors duration-150 font-[family-name:var(--font-heading)]">
                      {obj.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {obj.description}
                  </p>

                  {/* Progress / National Metric Telemetry Box */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-slate-500 font-medium flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-electric" />
                        {obj.metricLabel}
                      </span>
                      <span className="font-bold text-navy font-mono">
                        {obj.metricValue}
                      </span>
                    </div>
                    {/* Visual Progress Bar */}
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-electric to-teal rounded-full transition-all duration-500"
                        style={{ width: `${obj.metricPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Key Action Initiatives */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                      Inisiatif Kunci Strategis:
                    </p>
                    {obj.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 text-[11px] text-slate-400 font-mono border-t border-slate-50 flex items-center justify-between">
                  <span>TELEMETRY: TARGET_AKTIF</span>
                  <span className="text-emerald-600 font-semibold">&bull; MONITORING BERKALA</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
