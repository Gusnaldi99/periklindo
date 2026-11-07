'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Crown, FileSpreadsheet, Award, Layers } from 'lucide-react';
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

  const tier1Ref = useRef<HTMLDivElement>(null);
  const tier2Ref = useRef<HTMLDivElement>(null);
  const tier3Ref = useRef<HTMLDivElement>(null);
  const tier4Ref = useRef<HTMLDivElement>(null);

  const tierContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            staggerChildren: 0.1,
            delayChildren: 0.05,
          },
    },
  };

  const cardCascadeVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0.1 }
        : {
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1] as const,
          },
    },
  };

  const chairmanVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0.1 }
        : {
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1] as const,
          },
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

  const handleSelectTierFromStepper = (tierNum: number) => {
    setActiveTier(tierNum);
    if (activeFilter !== 'all') {
      if (tierNum === 1 && activeFilter !== 'pimpinan') setActiveFilter('all');
      if (tierNum === 2 && activeFilter !== 'pimpinan') setActiveFilter('all');
      if (tierNum === 3 && activeFilter !== 'advisor') setActiveFilter('all');
      if (tierNum === 4 && activeFilter !== 'bidang') setActiveFilter('all');
    }
  };

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

  const tierMarker = (
    active: boolean,
    Icon: typeof Crown,
    label: string,
    tone: 'navy' | 'slate' | 'muted' | 'blue'
  ) => (
    <div className="mb-8 flex items-center justify-center gap-3">
      <span className="h-px w-12 bg-slate-300 sm:w-28" aria-hidden="true" />
      <div
        className={cn(
          'inline-flex items-center gap-2 border px-4 py-2 transition-[background-color,border-color,color] duration-200',
          tone === 'navy' &&
            (active
              ? 'border-electric bg-navy text-white'
              : 'border-navy/40 bg-navy text-white'),
          tone === 'slate' &&
            (active
              ? 'border-electric bg-white text-navy'
              : 'border-slate-300 bg-white text-navy'),
          tone === 'muted' &&
            (active
              ? 'border-slate-500 bg-slate-100 text-slate-900'
              : 'border-slate-300 bg-slate-50 text-slate-800'),
          tone === 'blue' &&
            (active
              ? 'border-electric bg-slate-100 text-navy'
              : 'border-slate-300 bg-slate-50 text-navy')
        )}
      >
        <Icon
          className={cn(
            'h-4 w-4 shrink-0',
            active ? 'text-electric' : 'text-slate-500',
            tone === 'navy' && 'text-slate-300'
          )}
          aria-hidden="true"
        />
        <span className="font-[family-name:var(--font-body)] text-xs font-semibold sm:text-sm">
          {label}
        </span>
      </div>
      <span className="h-px w-12 bg-slate-300 sm:w-28" aria-hidden="true" />
    </div>
  );

  return (
    <section
      id="struktur-hirarki"
      className="relative overflow-x-clip border-b border-slate-200 bg-slate-50 py-16 md:py-20 lg:py-24"
    >
      <OrgTierStepper
        activeTier={activeTier}
        onSelectTier={handleSelectTierFromStepper}
      />

      <div className="container-main">
        <ScrollReveal>
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-medium text-slate-500">
              Hierarki Kepengurusan Terstruktur &amp; Dinamis
            </p>
            <SectionHeader
              title="Bagan Struktur Organisasi Resmi"
              subtitle="Struktur komando dan koordinasi PERIKLINDO dirancang untuk memastikan kelincahan advokasi, kedalaman riset, dan soliditas sinergi ekosistem dari pucuk pimpinan tertinggi hingga bidang eksekutif operasional."
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div
            className="mb-14 flex max-w-max flex-wrap items-center gap-1 border border-slate-300/70 bg-slate-200/80 p-1.5"
            role="tablist"
            aria-label="Filter hierarki organisasi"
          >
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={cn(
                  'flex min-h-[40px] items-center gap-2 px-4 py-2 font-[family-name:var(--font-body)] text-xs font-semibold transition-[background-color,color] duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric sm:text-sm',
                  activeFilter === tab.id
                    ? 'bg-navy text-white'
                    : 'text-slate-600 hover:bg-white/50 hover:text-navy'
                )}
              >
                <span>{tab.label}</span>
                <span
                  className={cn(
                    'text-[11px]',
                    activeFilter === tab.id ? 'text-slate-300' : 'text-slate-500'
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
            {(activeFilter === 'all' || activeFilter === 'pimpinan') && chairman && (
              <div id="tier-1" ref={tier1Ref} className="scroll-mt-24 pt-4">
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35 }}
                >
                  {tierMarker(
                    activeTier === 1,
                    Crown,
                    'Tingkat I \u2022 Pimpinan Tertinggi',
                    'navy'
                  )}
                </motion.div>

                <div className="mx-auto max-w-md">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    variants={chairmanVariants}
                  >
                    <OrgMemberCard member={chairman} featured />
                  </motion.div>
                </div>

                {activeFilter === 'all' && (
                  <OrgConnectorBeam
                    label="Garis Komando & Koordinasi Eksekutif"
                    isActive={activeTier >= 2}
                  />
                )}
              </div>
            )}

            {(activeFilter === 'all' || activeFilter === 'pimpinan') && (
              <div id="tier-2" ref={tier2Ref} className="scroll-mt-24 pt-4">
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35 }}
                >
                  {tierMarker(
                    activeTier === 2,
                    FileSpreadsheet,
                    'Tingkat II \u2022 Sekretariat Jenderal & Kebendaharaan',
                    'slate'
                  )}
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={tierContainerVariants}
                  className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8"
                >
                  {secretariat[0] && (
                    <motion.div variants={cardCascadeVariants} className="h-full min-w-0">
                      <OrgMemberCard member={secretariat[0]} />
                    </motion.div>
                  )}
                  {secretariat[1] && (
                    <motion.div variants={cardCascadeVariants} className="h-full min-w-0">
                      <OrgMemberCard member={secretariat[1]} />
                    </motion.div>
                  )}
                  {treasury && (
                    <motion.div variants={cardCascadeVariants} className="h-full min-w-0">
                      <OrgMemberCard member={treasury} />
                    </motion.div>
                  )}
                </motion.div>

                {activeFilter === 'all' && (
                  <OrgConnectorBeam
                    label="Dewan Penasihat & Pertimbangan Senior"
                    isActive={activeTier >= 3}
                  />
                )}
              </div>
            )}

            {(activeFilter === 'all' || activeFilter === 'advisor') && (
              <div id="tier-3" ref={tier3Ref} className="scroll-mt-24 pt-4">
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35 }}
                >
                  {tierMarker(
                    activeTier === 3,
                    Award,
                    'Tingkat III \u2022 Dewan Penasihat Senior (Senior Advisors)',
                    'muted'
                  )}
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={tierContainerVariants}
                  className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8"
                >
                  {advisors.map((advisor) => (
                    <motion.div
                      key={advisor.id}
                      variants={cardCascadeVariants}
                      className="h-full min-w-0"
                    >
                      <OrgMemberCard member={advisor} />
                    </motion.div>
                  ))}
                </motion.div>

                {activeFilter === 'all' && (
                  <OrgConnectorBeam
                    label="Distribusi Portofolio 6 Bidang Kerja Eksekutif"
                    isActive={activeTier >= 4}
                  />
                )}
              </div>
            )}

            {(activeFilter === 'all' || activeFilter === 'bidang') && (
              <div id="tier-4" ref={tier4Ref} className="scroll-mt-24 pt-4">
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35 }}
                >
                  {tierMarker(
                    activeTier === 4,
                    Layers,
                    'Tingkat IV \u2022 Jajaran 6 Ketua Bidang Eksekutif (Vice Chairmen)',
                    'blue'
                  )}
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={tierContainerVariants}
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
                >
                  {viceChairmen.map((vc) => (
                    <motion.div
                      key={vc.id}
                      variants={cardCascadeVariants}
                      className="h-full min-w-0"
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
