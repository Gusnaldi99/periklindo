'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Landmark, Shield, Users, Layers, Sparkles, Clock3 } from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';
import SectionHeader from '@/components/shared/SectionHeader';
import OrgMemberCard from './OrgMemberCard';
import OrgConnectorBeam from './OrgConnectorBeam';
import OrgTierStepper from './OrgTierStepper';
import { orgMembers } from '@/data/mock-data';
import { cn } from '@/lib/utils';

type FilterId = 'all' | 'dewan' | 'pimpinan' | 'bidang';

export default function OrgChartInteractive() {
  const shouldReduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<FilterId>('all');
  const [activeTier, setActiveTier] = useState<number>(1);

  const tier1Ref = useRef<HTMLDivElement>(null);
  const tier2Ref = useRef<HTMLDivElement>(null);
  const tier3Ref = useRef<HTMLDivElement>(null);
  const tier4Ref = useRef<HTMLDivElement>(null);

  const pembina = useMemo(
    () => orgMembers.filter((m) => m.category === 'pembina' || m.level === 'Dewan Pembina'),
    []
  );
  const pengawas = useMemo(
    () => orgMembers.filter((m) => m.category === 'pengawas' || m.level === 'Dewan Pengawas'),
    []
  );
  const chairman = useMemo(
    () => orgMembers.find((m) => m.category === 'chairman'),
    []
  );
  const secretariat = useMemo(
    () => orgMembers.filter((m) => m.category === 'secretariat'),
    []
  );
  const treasury = useMemo(
    () => orgMembers.find((m) => m.category === 'treasury'),
    []
  );
  const ketuaBidang = useMemo(
    () =>
      orgMembers
        .filter((m) => m.category === 'vice-chairman' || m.level === 'Ketua Bidang')
        .sort((a, b) => a.order - b.order),
    []
  );

  const pimpinanCount = (chairman ? 1 : 0) + secretariat.length + (treasury ? 1 : 0);

  const tierContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  };

  const cardCascadeVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: shouldReduceMotion
        ? { duration: 0.1 }
        : { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  useEffect(() => {
    const tierRefs = [
      { tier: 1, ref: tier1Ref },
      { tier: 2, ref: tier2Ref },
      { tier: 3, ref: tier3Ref },
      { tier: 4, ref: tier4Ref },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const id = visibleEntries[0].target.id;
          if (id === 'tier-1') setActiveTier(1);
          else if (id === 'tier-2') setActiveTier(2);
          else if (id === 'tier-3') setActiveTier(3);
          else if (id === 'tier-4') setActiveTier(4);
        }
      },
      {
        rootMargin: '-20% 0px -30% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    tierRefs.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [activeFilter]);

  const handleSelectTierFromStepper = (tierNum: number) => {
    setActiveTier(tierNum);
    if (activeFilter !== 'all') {
      if ((tierNum === 1 || tierNum === 2) && activeFilter !== 'dewan') setActiveFilter('all');
      if (tierNum === 3 && activeFilter !== 'pimpinan') setActiveFilter('all');
      if (tierNum === 4 && activeFilter !== 'bidang') setActiveFilter('all');
    }
  };

  const filterTabs = [
    {
      id: 'all' as const,
      label: 'Seluruh Hierarki',
      count: pembina.length + pengawas.length + pimpinanCount + ketuaBidang.length,
    },
    {
      id: 'dewan' as const,
      label: 'Dewan Pembina & Pengawas',
      count: pembina.length + pengawas.length,
    },
    { id: 'pimpinan' as const, label: 'Pimpinan Inti', count: pimpinanCount },
    { id: 'bidang' as const, label: 'Ketua Bidang', count: ketuaBidang.length },
  ];

  const renderTierBadge = ({
    active,
    icon: Icon,
    label,
    tone,
  }: {
    active: boolean;
    icon: typeof Landmark;
    label: string;
    tone: 'amber' | 'sky' | 'navy' | 'blue';
  }) => {
    const tones = {
      amber: active
        ? 'bg-amber-100 text-amber-950 border-2 border-amber-400 ring-2 ring-amber-400/40 shadow-xl shadow-amber-500/20 scale-[1.03]'
        : 'bg-amber-50 text-amber-950 border border-amber-300 shadow-sm',
      sky: active
        ? 'bg-sky-100 text-sky-950 border-2 border-sky-400 ring-2 ring-sky-400/40 shadow-xl shadow-sky-500/20 scale-[1.03]'
        : 'bg-sky-50 text-sky-950 border border-sky-300 shadow-sm',
      navy: active
        ? 'bg-navy text-white border border-amber-400/80 ring-2 ring-amber-400/50 shadow-xl shadow-amber-500/20 scale-[1.03]'
        : 'bg-navy text-white border border-[#087BEB]/40 shadow-lg shadow-navy/25',
      blue: active
        ? 'bg-blue-100 text-blue-950 border-2 border-[#087BEB] ring-2 ring-cyan-400/40 shadow-xl shadow-[#087BEB]/25 scale-[1.03]'
        : 'bg-blue-50 text-blue-950 border border-blue-300 shadow-sm',
    };

    return (
      <div className="flex items-center justify-center gap-3 mb-8">
        <span className="h-px bg-gradient-to-r from-transparent via-slate-300 to-slate-400 w-12 sm:w-28" />
        <div
          className={cn(
            'inline-flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-300',
            tones[tone]
          )}
        >
          <Icon className="w-4 h-4" />
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest">
            {label}
          </span>
          {active && <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />}
        </div>
        <span className="h-px bg-gradient-to-l from-transparent via-slate-300 to-slate-400 w-12 sm:w-28" />
      </div>
    );
  };

  return (
    <section
      id="struktur-hirarki"
      className="relative py-16 md:py-20 lg:py-24 bg-slate-50 border-b border-slate-200"
    >
      <OrgTierStepper activeTier={activeTier} onSelectTier={handleSelectTierFromStepper} />

      <div className="container-main">
        <ScrollReveal>
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-bold bg-blue-100 text-[#087BEB] mb-3 border border-blue-200">
              <Sparkles className="w-3.5 h-3.5" />
              Kepengurusan PERIKLINDO Periode 2026–2031
            </div>
            <SectionHeader
              title="Bagan Struktur Organisasi Resmi"
              subtitle="Struktur komando dan koordinasi PERIKLINDO dirancang untuk memastikan kelincahan advokasi, kedalaman riset, dan soliditas sinergi ekosistem dari jajaran dewan pembina, pengawas, pimpinan harian hingga bidang eksekutif operasional."
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-wrap items-center gap-2 mb-14 p-1.5 bg-slate-200/80 rounded-xl max-w-max border border-slate-300/70">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={cn(
                  'px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-150 min-h-[40px] flex items-center gap-2',
                  activeFilter === tab.id
                    ? 'bg-navy text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy hover:bg-white/50'
                )}
              >
                <span>{tab.label}</span>
                <span
                  className={cn(
                    'text-[11px] px-1.5 py-0.5 rounded-full',
                    activeFilter === tab.id
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-300 text-slate-700'
                  )}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <div key={activeFilter} className="space-y-4">
            {/* Tingkat I — Dewan Pembina */}
            {(activeFilter === 'all' || activeFilter === 'dewan') && (
              <div id="tier-1" ref={tier1Ref} className="scroll-mt-24 pt-4">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4 }}
                >
                  {renderTierBadge({
                    active: activeTier === 1,
                    icon: Landmark,
                    label: 'Tingkat I • Dewan Pembina',
                    tone: 'amber',
                  })}
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={tierContainerVariants}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto"
                >
                  {pembina.map((member) => (
                    <motion.div key={member.id} variants={cardCascadeVariants} className="h-full">
                      <OrgMemberCard member={member} />
                    </motion.div>
                  ))}
                </motion.div>

                {activeFilter === 'all' && (
                  <OrgConnectorBeam
                    label="Pengawasan Tata Kelola & Akuntabilitas"
                    isActive={activeTier >= 2}
                  />
                )}
              </div>
            )}

            {/* Tingkat II — Dewan Pengawas */}
            {(activeFilter === 'all' || activeFilter === 'dewan') && (
              <div id="tier-2" ref={tier2Ref} className="scroll-mt-24 pt-4">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4 }}
                >
                  {renderTierBadge({
                    active: activeTier === 2,
                    icon: Shield,
                    label: 'Tingkat II • Dewan Pengawas',
                    tone: 'sky',
                  })}
                </motion.div>

                {pengawas.length > 0 ? (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    variants={tierContainerVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto"
                  >
                    {pengawas.map((member) => (
                      <motion.div key={member.id} variants={cardCascadeVariants} className="h-full">
                        <OrgMemberCard member={member} />
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <div className="max-w-3xl mx-auto rounded-2xl border border-sky-200 bg-sky-50/80 p-6 sm:p-8 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-sky-200 text-sky-600 mb-4">
                      <Clock3 className="w-6 h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-navy mb-2">
                      Dewan Pengawas Periode 2026–2031
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
                      Tingkatan visual Dewan Pengawas telah disiapkan sesuai hierarki SK resmi.
                      Nama lengkap, gelar, jabatan, dan foto pengawas akan ditampilkan segera
                      setelah data final dari sekretariat tersedia—tanpa mengubah struktur halaman.
                    </p>
                  </div>
                )}

                {activeFilter === 'all' && (
                  <OrgConnectorBeam
                    label="Garis Koordinasi Pengurus Harian"
                    isActive={activeTier >= 3}
                  />
                )}
              </div>
            )}

            {/* Tingkat III — Pimpinan Inti */}
            {(activeFilter === 'all' || activeFilter === 'pimpinan') && (
              <div id="tier-3" ref={tier3Ref} className="scroll-mt-24 pt-4">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4 }}
                >
                  {renderTierBadge({
                    active: activeTier === 3,
                    icon: Users,
                    label: 'Tingkat III • Pimpinan Inti (Pengurus Harian)',
                    tone: 'navy',
                  })}
                </motion.div>

                {chairman && (
                  <div className="max-w-md mx-auto mb-8">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-40px' }}
                      variants={cardCascadeVariants}
                    >
                      <OrgMemberCard member={chairman} featured />
                    </motion.div>
                  </div>
                )}

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={tierContainerVariants}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
                >
                  {secretariat.map((member) => (
                    <motion.div key={member.id} variants={cardCascadeVariants} className="h-full">
                      <OrgMemberCard member={member} />
                    </motion.div>
                  ))}
                  {treasury && (
                    <motion.div variants={cardCascadeVariants} className="h-full">
                      <OrgMemberCard member={treasury} />
                    </motion.div>
                  )}
                </motion.div>

                {activeFilter === 'all' && (
                  <OrgConnectorBeam
                    label="Distribusi Portofolio Bidang Teknis"
                    isActive={activeTier >= 4}
                  />
                )}
              </div>
            )}

            {/* Tingkat IV — Ketua Bidang */}
            {(activeFilter === 'all' || activeFilter === 'bidang') && (
              <div id="tier-4" ref={tier4Ref} className="scroll-mt-24 pt-4">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4 }}
                >
                  {renderTierBadge({
                    active: activeTier === 4,
                    icon: Layers,
                    label: 'Tingkat IV • Ketua Bidang Teknis',
                    tone: 'blue',
                  })}
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={tierContainerVariants}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                  {ketuaBidang.map((member) => (
                    <motion.div key={member.id} variants={cardCascadeVariants} className="h-full">
                      <OrgMemberCard member={member} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
