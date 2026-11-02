'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Crown, FileSpreadsheet, Award, Layers, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';
import SectionHeader from '@/components/shared/SectionHeader';
import OrgMemberCard from './OrgMemberCard';
import OrgConnectorBeam from './OrgConnectorBeam';
import OrgTierStepper from './OrgTierStepper';
import { orgMembers } from '@/data/mock-data';
import { cn } from '@/lib/utils';

export default function OrgChartInteractive() {
  const shouldReduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<'all' | 'pimpinan' | 'advisor' | 'bidang'>('all');
  const [activeTier, setActiveTier] = useState<number>(1);

  // References to tier DOM elements for intersection observation
  const tier1Ref = useRef<HTMLDivElement>(null);
  const tier2Ref = useRef<HTMLDivElement>(null);
  const tier3Ref = useRef<HTMLDivElement>(null);
  const tier4Ref = useRef<HTMLDivElement>(null);

  // Animation variants for Staggered Cascade
  const tierContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            staggerChildren: 0.12, // 120ms stagger delay
            delayChildren: 0.08,
          },
    },
  };

  const cardCascadeVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 24, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: shouldReduceMotion
        ? { duration: 0.1 }
        : {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1] as const,
          },
    },
  };

  const chairmanVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, scale: 0.96, y: 18 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0.1 }
        : {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] as const,
          },
    },
  };

  // Viewport detection via IntersectionObserver with required rootMargin '-20% 0px -30% 0px'
  useEffect(() => {
    const tierRefs = [
      { tier: 1, ref: tier1Ref },
      { tier: 2, ref: tier2Ref },
      { tier: 3, ref: tier3Ref },
      { tier: 4, ref: tier4Ref },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible entries and sort by intersection ratio
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const topVisible = visibleEntries[0];
          const id = topVisible.target.id;
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

    return () => {
      observer.disconnect();
    };
  }, [activeFilter]);

  // Handle tier selection from stepper: ensure tier is visible
  const handleSelectTierFromStepper = (tierNum: number) => {
    setActiveTier(tierNum);
    // If current filter hides the chosen tier, reset to 'all' so element exists in DOM
    if (activeFilter !== 'all') {
      if (tierNum === 1 && activeFilter !== 'pimpinan') setActiveFilter('all');
      if (tierNum === 2 && activeFilter !== 'pimpinan') setActiveFilter('all');
      if (tierNum === 3 && activeFilter !== 'advisor') setActiveFilter('all');
      if (tierNum === 4 && activeFilter !== 'bidang') setActiveFilter('all');
    }
  };

  // Segregate members based on the official hierarchy
  const chairman = orgMembers.find((m) => m.category === 'chairman');
  const secretariat = orgMembers.filter((m) => m.category === 'secretariat');
  const treasury = orgMembers.find((m) => m.category === 'treasury');
  const advisors = orgMembers.filter((m) => m.category === 'advisor');
  const viceChairmen = orgMembers.filter((m) => m.category === 'vice-chairman');

  const filterTabs = [
    { id: 'all', label: 'Seluruh Hierarki', count: 12 },
    { id: 'pimpinan', label: 'Pimpinan & Sekretariat', count: 4 },
    { id: 'advisor', label: 'Dewan Penasihat', count: 2 },
    { id: 'bidang', label: 'Ketua Bidang', count: 6 },
  ] as const;

  return (
    <section id="struktur-hirarki" className="relative py-16 md:py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      {/* Floating HUD Stepper with ScrollSpy */}
      <OrgTierStepper
        activeTier={activeTier}
        onSelectTier={handleSelectTierFromStepper}
      />

      <div className="container-main">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-bold bg-blue-100 text-electric mb-3 border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-electric" />
              Hierarki Kepengurusan Terstruktur & Dinamis
            </div>
            <SectionHeader
              title="Bagan Struktur Organisasi Resmi"
              subtitle="Struktur komando dan koordinasi PERIKLINDO dirancang untuk memastikan kelincahan advokasi, kedalaman riset, dan soliditas sinergi ekosistem dari pucuk pimpinan tertinggi hingga bidang eksekutif operasional."
            />
          </div>
        </ScrollReveal>

        {/* Filter Navigation Tabs */}
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
            {/* ============================================================== */}
            {/* ---------------- TIER 1: CHAIRMAN (Pimpinan Tertinggi) ------- */}
            {/* ============================================================== */}
            {(activeFilter === 'all' || activeFilter === 'pimpinan') && chairman && (
              <div id="tier-1" ref={tier1Ref} className="scroll-mt-24 pt-4">
                {/* Tier Indicator Header with Dynamic Active Glow */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-center gap-3 mb-8"
                >
                  <span className="h-px bg-gradient-to-r from-transparent via-slate-300 to-slate-400 w-12 sm:w-28" />
                  <div
                    className={cn(
                      'inline-flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-300',
                      activeTier === 1
                        ? 'bg-navy text-white border border-amber-400/80 ring-2 ring-amber-400/50 shadow-xl shadow-amber-500/20 scale-[1.03]'
                        : 'bg-navy text-white border border-electric/40 shadow-lg shadow-navy/25'
                    )}
                  >
                    <Crown
                      className={cn(
                        'w-4 h-4 transition-colors duration-300',
                        activeTier === 1 ? 'text-amber-400 fill-amber-400' : 'text-amber-400'
                      )}
                    />
                    <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-white">
                      Tingkat I &bull; Pimpinan Tertinggi
                    </span>
                    {activeTier === 1 && (
                      <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                    )}
                  </div>
                  <span className="h-px bg-gradient-to-l from-transparent via-slate-300 to-slate-400 w-12 sm:w-28" />
                </motion.div>

                {/* Chairman Card with Dignified Glow & Scale Transition */}
                <div className="max-w-md mx-auto">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    variants={chairmanVariants}
                  >
                    <OrgMemberCard member={chairman} featured />
                  </motion.div>
                </div>

                {/* Electric Conductor Beam to Tier 2 */}
                {activeFilter === 'all' && (
                  <OrgConnectorBeam
                    label="Garis Komando & Koordinasi Eksekutif"
                    isActive={activeTier >= 2}
                  />
                )}
              </div>
            )}

            {/* ============================================================== */}
            {/* ---------------- TIER 2: SECRETARIAT & TREASURY ------------- */}
            {/* ============================================================== */}
            {(activeFilter === 'all' || activeFilter === 'pimpinan') && (
              <div id="tier-2" ref={tier2Ref} className="scroll-mt-24 pt-4">
                {/* Tier Indicator Header with Dynamic Active Glow */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-center gap-3 mb-8"
                >
                  <span className="h-px bg-gradient-to-r from-transparent via-slate-300 to-slate-400 w-12 sm:w-28" />
                  <div
                    className={cn(
                      'inline-flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-300',
                      activeTier === 2
                        ? 'bg-blue-50 text-navy border-2 border-electric ring-2 ring-electric/40 shadow-xl shadow-electric/25 scale-[1.03]'
                        : 'bg-white text-navy border border-electric/30 shadow-md shadow-electric/10'
                    )}
                  >
                    <FileSpreadsheet
                      className={cn(
                        'w-4 h-4 transition-colors duration-300',
                        activeTier === 2 ? 'text-electric' : 'text-slate-600'
                      )}
                    />
                    <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-800">
                      Tingkat II &bull; Sekretariat Jenderal & Kebendaharaan
                    </span>
                    {activeTier === 2 && (
                      <span className="w-2 h-2 rounded-full bg-electric animate-ping" />
                    )}
                  </div>
                  <span className="h-px bg-gradient-to-l from-transparent via-slate-300 to-slate-400 w-12 sm:w-28" />
                </motion.div>

                {/* Staggered Cards (Sekjen, Wasekjen, Bendahara: 120ms stagger) */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={tierContainerVariants}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
                >
                  {secretariat[0] && (
                    <motion.div variants={cardCascadeVariants} className="h-full">
                      <OrgMemberCard member={secretariat[0]} />
                    </motion.div>
                  )}
                  {secretariat[1] && (
                    <motion.div variants={cardCascadeVariants} className="h-full">
                      <OrgMemberCard member={secretariat[1]} />
                    </motion.div>
                  )}
                  {treasury && (
                    <motion.div variants={cardCascadeVariants} className="h-full">
                      <OrgMemberCard member={treasury} />
                    </motion.div>
                  )}
                </motion.div>

                {/* Electric Conductor Beam to Tier 3 */}
                {activeFilter === 'all' && (
                  <OrgConnectorBeam
                    label="Dewan Penasihat & Pertimbangan Senior"
                    isActive={activeTier >= 3}
                  />
                )}
              </div>
            )}

            {/* ============================================================== */}
            {/* ---------------- TIER 3: SENIOR ADVISORS --------------------- */}
            {/* ============================================================== */}
            {(activeFilter === 'all' || activeFilter === 'advisor') && (
              <div id="tier-3" ref={tier3Ref} className="scroll-mt-24 pt-4">
                {/* Tier Indicator Header with Dynamic Active Glow */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-center gap-3 mb-8"
                >
                  <span className="h-px bg-gradient-to-r from-transparent via-amber-200 to-amber-300 w-12 sm:w-28" />
                  <div
                    className={cn(
                      'inline-flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-300',
                      activeTier === 3
                        ? 'bg-amber-100 text-amber-950 border-2 border-amber-400 ring-2 ring-amber-400/40 shadow-xl shadow-amber-500/25 scale-[1.03]'
                        : 'bg-amber-50 text-amber-950 border border-amber-300 shadow-sm'
                    )}
                  >
                    <Award
                      className={cn(
                        'w-4 h-4 transition-colors duration-300',
                        activeTier === 3 ? 'text-amber-700' : 'text-amber-600'
                      )}
                    />
                    <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-900">
                      Tingkat III &bull; Dewan Penasihat Senior (Senior Advisors)
                    </span>
                    {activeTier === 3 && (
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                    )}
                  </div>
                  <span className="h-px bg-gradient-to-l from-transparent via-amber-200 to-amber-300 w-12 sm:w-28" />
                </motion.div>

                {/* 2 Advisors Staggered Cascade */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={tierContainerVariants}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto"
                >
                  {advisors.map((advisor) => (
                    <motion.div
                      key={advisor.id}
                      variants={cardCascadeVariants}
                      className="h-full"
                    >
                      <OrgMemberCard member={advisor} />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Electric Conductor Beam to Tier 4 */}
                {activeFilter === 'all' && (
                  <OrgConnectorBeam
                    label="Distribusi Portofolio 6 Bidang Kerja Eksekutif"
                    isActive={activeTier >= 4}
                  />
                )}
              </div>
            )}

            {/* ============================================================== */}
            {/* ---------------- TIER 4: 6 VICE CHAIRMEN (KETUA BIDANG) ------ */}
            {/* ============================================================== */}
            {(activeFilter === 'all' || activeFilter === 'bidang') && (
              <div id="tier-4" ref={tier4Ref} className="scroll-mt-24 pt-4">
                {/* Tier Indicator Header with Dynamic Active Glow */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-center gap-3 mb-8"
                >
                  <span className="h-px bg-gradient-to-r from-transparent via-blue-200 to-blue-300 w-12 sm:w-28" />
                  <div
                    className={cn(
                      'inline-flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-300',
                      activeTier === 4
                        ? 'bg-blue-100 text-blue-950 border-2 border-electric ring-2 ring-cyan-400/40 shadow-xl shadow-electric/25 scale-[1.03]'
                        : 'bg-blue-50 text-blue-950 border border-blue-300 shadow-sm'
                    )}
                  >
                    <Layers
                      className={cn(
                        'w-4 h-4 transition-colors duration-300',
                        activeTier === 4 ? 'text-electric' : 'text-slate-600'
                      )}
                    />
                    <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-blue-900">
                      Tingkat IV &bull; Jajaran 6 Ketua Bidang Eksekutif (Vice Chairmen)
                    </span>
                    {activeTier === 4 && (
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    )}
                  </div>
                  <span className="h-px bg-gradient-to-l from-transparent via-blue-200 to-blue-300 w-12 sm:w-28" />
                </motion.div>

                {/* 6 Vice Chairmen Cascade in 3 Columns */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={tierContainerVariants}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                  {viceChairmen.map((vc) => (
                    <motion.div
                      key={vc.id}
                      variants={cardCascadeVariants}
                      className="h-full"
                    >
                      <OrgMemberCard member={vc} />
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
