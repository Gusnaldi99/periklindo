'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Megaphone,
  FlaskConical,
  Building2,
  GraduationCap,
  Globe2,
  Scale,
  ChevronDown,
  CheckCircle2,
  UserCheck,
} from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';
import SectionHeader from '@/components/shared/SectionHeader';
import { cn } from '@/lib/utils';

interface Division {
  id: string;
  name: string;
  en: string;
  head: string;
  role: string;
  icon: typeof Megaphone;
  duties: string[];
}

const divisions: Division[] = [
  {
    id: 'div-1',
    name: 'Promosi & Pemasaran',
    en: 'Promotion & Marketing',
    head: 'Adrianto Gani',
    role: 'Vice Chairman',
    icon: Megaphone,
    duties: [
      'Penyelenggaraan pameran otomotif tahunan PEVS (PERIKLINDO Electric Vehicle Show) di JIExpo Kemayoran bersama Dyandra Promosindo.',
      'Aktivasi kampanye pemasaran terpadu untuk kendaraan listrik para anggota di tingkat nasional dan regional.',
      'Penetrasi pasar kendaraan listrik komersial, armada korporasi, dan konsumen perorangan.',
    ],
  },
  {
    id: 'div-2',
    name: 'Penelitian & Pengembangan',
    en: 'Research & Development (R&D)',
    head: 'Prabowo Kartoleksono',
    role: 'Vice Chairman',
    icon: FlaskConical,
    duties: [
      'Kajian teknologi sel baterai, manajemen termal (thermal management), dan efisiensi motor penggerak listrik.',
      'Standardisasi konektor pengisian SPKLU dan interoperabilitas sistem penukaran baterai (battery swapping).',
      'Kerja sama riset dan prototipe bersama BRIN, BUMN Industri Pertahanan, serta perguruan tinggi terkemuka nasional.',
    ],
  },
  {
    id: 'div-3',
    name: 'Organisasi & Kelembagaan',
    en: 'Organization & Institutional',
    head: 'Kelik Irwantono',
    role: 'Vice Chairman',
    icon: Building2,
    duties: [
      'Konsolidasi, verifikasi kelayakan, dan proses kurasi calon anggota baru PERIKLINDO.',
      'Penyusunan tata kelola organisasi (good corporate governance) dan penegakan kode etik asosiasi.',
      'Kolaborasi kelembagaan dengan asosiasi regional se-Asia Tenggara (AFEVA) dan stakeholder industri global.',
    ],
  },
  {
    id: 'div-4',
    name: 'Hubungan Masyarakat & Edukasi',
    en: 'Public Relation & Education',
    head: 'Ahmad Rafiqi',
    role: 'Vice Chairman',
    icon: GraduationCap,
    duties: [
      'Sosialisasi berkala standar keselamatan operasional dan demonstrasi uji rendam air baterai kendaraan listrik.',
      'Meluruskan miskonsepsi publik seputar keandalan, degradasi baterai, dan biaya pengisian daya EV.',
      'Manajemen siaran pers resmi, media briefing berkala, serta diseminasi data ke kanal jurnalis otomotif.',
    ],
  },
  {
    id: 'div-5',
    name: 'Hukum & Regulasi',
    en: 'Legal & Regulatory',
    head: 'Puryanto',
    role: 'Vice Chairman',
    icon: Scale,
    duties: [
      'Advokasi kebijakan fiskal dan non-fiskal bersama kementerian teknis (Kemenperin, Kemenhub, Kemenkeu, dan Kemenko).',
      'Harmonisasi regulasi kemudahan sertifikasi uji tipe kendaraan (SUT & SRUT) serta sertifikasi kelaikan jalan.',
      'Kajian kepatuhan hukum rantai pasok EV dan perlindungan konsumen kendaraan listrik nasional.',
    ],
  },
  {
    id: 'div-6',
    name: 'Data & Informasi',
    en: 'Data & Information',
    head: 'Winarto',
    role: 'Vice Chairman',
    icon: Globe2,
    duties: [
      'Pengelolaan pusat data intelijen pasar industri kendaraan listrik Indonesia secara akurat dan transparan.',
      'Pemetaan statistik pertumbuhan populasi EV roda 2, roda 4, bus listrik, dan sebaran infrastruktur SPKLU nasional.',
      'Penerbitan laporan kuartalan industri kendaraan listrik sebagai rujukan strategis bagi anggota dan regulator.',
    ],
  },
];

export default function OrgDutiesAccordion() {
  const shouldReduceMotion = useReducedMotion();

  // Track open state for each division. Default: all open for immediate accessibility
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'div-1': true,
    'div-2': true,
    'div-3': true,
    'div-4': true,
    'div-5': true,
    'div-6': true,
  });

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    divisions.forEach((d) => (allOpen[d.id] = true));
    setOpenIds(allOpen);
  };

  const collapseAll = () => {
    setOpenIds({});
  };

  return (
    <section id="tupoksi" className="py-16 md:py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="container-main">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-blue-100 text-electric mb-3 border border-blue-200">
                Tupoksi Kerja Bidang Eksekutif
              </div>
              <SectionHeader
                title="Tugas Pokok & Tanggung Jawab Bidang"
                subtitle="Setiap bidang kerja dipimpin oleh Vice Chairman berpengalaman untuk memastikan akselerasi ekosistem kendaraan listrik Indonesia berjalan terstruktur, terukur, dan berdampak nyata."
              />
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 self-start md:self-end">
              <button
                type="button"
                onClick={expandAll}
                className="text-xs font-bold text-navy hover:text-electric px-3.5 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 active:scale-[0.98] transition-all shadow-2xs"
              >
                Buka Semua
              </button>
              <button
                type="button"
                onClick={collapseAll}
                className="text-xs font-bold text-slate-600 hover:text-navy px-3.5 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 active:scale-[0.98] transition-all shadow-2xs"
              >
                Tutup Semua
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* 6 Divisions Interactive Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((div, index) => {
            const isOpen = !!openIds[div.id];
            const Icon = div.icon;

            return (
              <ScrollReveal
                key={div.id}
                delay={60 + index * 70}
                className="h-full"
              >
                <div
                  className={cn(
                    'h-full bg-white border rounded-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between',
                    isOpen
                      ? 'border-electric/40 shadow-lg shadow-electric/5 ring-1 ring-electric/20'
                      : 'border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md'
                  )}
                >
                  <div>
                    {/* Header Button (Clickable Accordion Trigger) */}
                    <button
                      type="button"
                      onClick={() => toggleAccordion(div.id)}
                      className="w-full text-left p-6 flex items-start justify-between gap-4 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded-t-2xl transition-colors hover:bg-slate-50/50"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-3.5">
                        <div
                          className={cn(
                            'w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200',
                            isOpen
                              ? 'bg-electric text-white shadow-md shadow-electric/25'
                              : 'bg-blue-50 text-electric border border-blue-100'
                          )}
                        >
                          <Icon className="w-5 h-5" />
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                              Bidang 0{index + 1}
                            </span>
                          </div>
                          <h3 className="text-base font-bold text-navy leading-snug">
                            {div.name}
                          </h3>
                          <p className="text-xs font-semibold text-slate-400">
                            {div.en}
                          </p>
                        </div>
                      </div>

                      <div
                        className={cn(
                          'w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300',
                          isOpen
                            ? 'bg-navy text-white border-navy rotate-180'
                            : 'bg-slate-100 text-slate-500 border-slate-200 hover:bg-slate-200 rotate-0'
                        )}
                        aria-hidden="true"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {/* Head Officer Badge */}
                    <div className="px-6 pb-4">
                      <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                        <UserCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <div className="text-xs">
                          <span className="text-slate-400 font-medium">Ketua Bidang: </span>
                          <span className="font-bold text-navy">{div.head}</span>
                        </div>
                      </div>
                    </div>

                    {/* Collapsible Content with Zero Jitter Spring Physics */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={
                            shouldReduceMotion
                              ? { duration: 0 }
                              : { type: 'spring', stiffness: 320, damping: 28 }
                          }
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 border-t border-slate-100 space-y-2.5">
                            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mt-2">
                              Fokus & Lingkup Tugas:
                            </p>
                            {div.duties.map((duty, dIdx) => (
                              <div
                                key={dIdx}
                                className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                                <span>{duty}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
