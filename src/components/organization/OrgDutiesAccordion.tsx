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
    <section
      id="tupoksi"
      className="overflow-x-clip border-b border-slate-200 bg-slate-50 py-16 md:py-20 lg:py-24"
    >
      <div className="container-main">
        <ScrollReveal>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-medium text-slate-500">
                Tupoksi Kerja Bidang Eksekutif
              </p>
              <SectionHeader
                title="Tugas Pokok & Tanggung Jawab Bidang"
                subtitle="Setiap bidang kerja dipimpin oleh Vice Chairman berpengalaman untuk memastikan akselerasi ekosistem kendaraan listrik Indonesia berjalan terstruktur, terukur, dan berdampak nyata."
              />
            </div>

            <div className="flex items-center gap-2 self-start md:self-end">
              <button
                type="button"
                onClick={expandAll}
                className="min-h-[40px] whitespace-nowrap border border-slate-300 bg-white px-3.5 py-2 font-[family-name:var(--font-body)] text-xs font-semibold text-navy transition-[background-color,color,opacity] duration-150 hover:bg-slate-50 hover:text-electric focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90"
              >
                Buka Semua
              </button>
              <button
                type="button"
                onClick={collapseAll}
                className="min-h-[40px] whitespace-nowrap border border-slate-200 bg-white px-3.5 py-2 font-[family-name:var(--font-body)] text-xs font-semibold text-slate-600 transition-[background-color,color,opacity] duration-150 hover:bg-slate-50 hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90"
              >
                Tutup Semua
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {divisions.map((div, index) => {
            const isOpen = !!openIds[div.id];
            const Icon = div.icon;

            return (
              <ScrollReveal
                key={div.id}
                delay={60 + index * 70}
                className="h-full min-w-0"
              >
                <div
                  className={cn(
                    'flex h-full flex-col justify-between overflow-hidden border bg-white transition-[border-color] duration-200',
                    isOpen ? 'border-electric/35' : 'border-slate-200'
                  )}
                >
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleAccordion(div.id)}
                      className="flex w-full select-none items-start justify-between gap-4 p-6 text-left transition-[background-color] duration-150 hover:bg-slate-50/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-3.5">
                        <div
                          className={cn(
                            'flex h-11 w-11 shrink-0 items-center justify-center transition-[background-color,color] duration-200',
                            isOpen
                              ? 'bg-electric text-white'
                              : 'border border-slate-200 bg-slate-50 text-electric'
                          )}
                        >
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>

                        <div className="min-w-0">
                          <p className="mb-1 font-[family-name:var(--font-body)] text-[11px] font-medium text-slate-500">
                            Bidang 0{index + 1}
                          </p>
                          <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold leading-snug text-navy">
                            {div.name}
                          </h3>
                          <p className="font-[family-name:var(--font-body)] text-xs font-medium text-slate-600">
                            {div.en}
                          </p>
                        </div>
                      </div>

                      <div
                        className={cn(
                          'flex h-8 w-8 shrink-0 items-center justify-center border transition-[transform,background-color,color] duration-200',
                          isOpen
                            ? 'rotate-180 border-navy bg-navy text-white'
                            : 'rotate-0 border-slate-200 bg-slate-100 text-slate-500'
                        )}
                        aria-hidden="true"
                      >
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </button>

                    <div className="px-6 pb-4">
                      <div className="flex items-center gap-2 border border-slate-100 bg-slate-50 p-2.5">
                        <UserCheck className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                        <div className="font-[family-name:var(--font-body)] text-xs">
                          <span className="font-medium text-slate-600">Ketua Bidang: </span>
                          <span className="font-semibold text-navy">{div.head}</span>
                        </div>
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={
                            shouldReduceMotion
                              ? { opacity: 0 }
                              : { height: 0, opacity: 0 }
                          }
                          animate={
                            shouldReduceMotion
                              ? { opacity: 1 }
                              : { height: 'auto', opacity: 1 }
                          }
                          exit={
                            shouldReduceMotion
                              ? { opacity: 0 }
                              : { height: 0, opacity: 0 }
                          }
                          transition={
                            shouldReduceMotion
                              ? { duration: 0 }
                              : { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
                          }
                          className="overflow-hidden"
                        >
                          <div className="space-y-2.5 border-t border-slate-100 px-6 pt-1 pb-6">
                            <p className="mt-2 font-[family-name:var(--font-body)] text-[11px] font-medium text-slate-500">
                              Fokus &amp; Lingkup Tugas:
                            </p>
                            {div.duties.map((duty, dIdx) => (
                              <div
                                key={dIdx}
                                className="flex items-start gap-2.5 font-[family-name:var(--font-body)] text-xs leading-relaxed text-slate-600"
                              >
                                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" aria-hidden="true" />
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
