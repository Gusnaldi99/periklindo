'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Megaphone,
  FlaskConical,
  Building2,
  Scale,
  Factory,
  Database,
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
  head: string;
  role: string;
  icon: typeof Megaphone;
  duties: string[];
}

const divisions: Division[] = [
  {
    id: 'div-1',
    name: 'Promosi & Pemasaran',
    head: 'Adrianto Gani',
    role: 'Ketua Bidang',
    icon: Megaphone,
    duties: [
      'Penyelenggaraan pameran otomotif tahunan PEVS di JIExpo Kemayoran bersama Dyandra Promosindo.',
      'Aktivasi kampanye pemasaran terpadu untuk kendaraan listrik para anggota di tingkat nasional.',
      'Penetrasi pasar kendaraan listrik komersial, armada korporasi, dan konsumen perorangan.',
    ],
  },
  {
    id: 'div-2',
    name: 'Hubungan Antar Lembaga',
    head: 'Kelik Irwantono',
    role: 'Ketua Bidang',
    icon: Building2,
    duties: [
      'Membangun sinergi kelembagaan dengan kementerian, BUMN, dan asosiasi mitra.',
      'Fasilitasi audiensi dan kemitraan lintas sektor untuk penguatan ekosistem EV nasional.',
      'Penguatan hubungan kerja sama dengan pemangku kepentingan industri dan pemerintah.',
    ],
  },
  {
    id: 'div-3',
    name: 'Regulasi & Sertifikasi',
    head: 'Ahmad Rafiqi',
    role: 'Ketua Bidang',
    icon: Scale,
    duties: [
      'Mengawal harmonisasi regulasi KBLBB dan advokasi kemudahan sertifikasi uji tipe (SUT/SRUT).',
      'Pendampingan kepatuhan standar kelaikan kendaraan listrik bagi anggota industri.',
      'Koordinasi dengan regulator terkait kebijakan fiskal dan non-fiskal sektor EV.',
    ],
  },
  {
    id: 'div-4',
    name: 'Industri & Rantai Pasok',
    head: 'Puryanto',
    role: 'Ketua Bidang',
    icon: Factory,
    duties: [
      'Mendorong integrasi rantai pasok manufaktur EV dari hulu hingga hilir.',
      'Fasilitasi hilirisasi komponen, baterai, dan kemitraan industri anggota.',
      'Penguatan daya saing manufaktur roda 2, roda 4, dan kendaraan komersial listrik.',
    ],
  },
  {
    id: 'div-5',
    name: 'Data & Informasi',
    head: 'Winarto',
    role: 'Ketua Bidang',
    icon: Database,
    duties: [
      'Pengelolaan pusat data ekosistem kendaraan listrik Indonesia secara akurat dan transparan.',
      'Pemetaan statistik populasi EV dan sebaran infrastruktur SPKLU nasional.',
      'Penerbitan laporan industri sebagai rujukan strategis anggota dan regulator.',
    ],
  },
  {
    id: 'div-6',
    name: 'Penelitian & Pengembangan',
    head: 'Prabowo Kartoleksono',
    role: 'Ketua Bidang',
    icon: FlaskConical,
    duties: [
      'Kajian teknologi sel baterai, manajemen termal, dan efisiensi motor penggerak listrik.',
      'Standardisasi konektor pengisian SPKLU dan interoperabilitas sistem swap battery.',
      'Kerja sama riset bersama BRIN, BUMN, serta perguruan tinggi terkemuka nasional.',
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
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    divisions.forEach((d) => (allOpen[d.id] = true));
    setOpenIds(allOpen);
  };

  const collapseAll = () => setOpenIds({});

  return (
    <section id="tupoksi" className="py-16 md:py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="container-main">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-blue-100 text-[#087BEB] mb-3 border border-blue-200">
                Tupoksi Kerja Bidang Eksekutif
              </div>
              <SectionHeader
                title="Tugas Pokok & Tanggung Jawab Bidang"
                subtitle="Setiap bidang kerja dipimpin oleh Ketua Bidang berpengalaman untuk memastikan akselerasi ekosistem kendaraan listrik Indonesia berjalan terstruktur, terukur, dan berdampak nyata."
              />
            </div>

            <div className="flex items-center gap-2 self-start md:self-end">
              <button
                type="button"
                onClick={expandAll}
                className="px-3 py-2 rounded-lg text-xs font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 min-h-[40px]"
              >
                Buka Semua
              </button>
              <button
                type="button"
                onClick={collapseAll}
                className="px-3 py-2 rounded-lg text-xs font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 min-h-[40px]"
              >
                Tutup Semua
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {divisions.map((div, index) => {
            const Icon = div.icon;
            const isOpen = !!openIds[div.id];

            return (
              <ScrollReveal key={div.id} delay={index * 40}>
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(div.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-slate-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4 min-w-0">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 text-[#087BEB] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                          {div.role}
                        </p>
                        <h3 className="text-base sm:text-lg font-bold text-navy leading-snug">
                          {div.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1 flex items-center gap-1.5">
                          <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{div.head}</span>
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300',
                        isOpen && 'rotate-180'
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-100">
                          <ul className="pt-4 space-y-2.5">
                            {div.duties.map((duty) => (
                              <li
                                key={duty}
                                className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed"
                              >
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{duty}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
