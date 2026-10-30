'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/shared/ScrollReveal';
import SectionHeader from '@/components/shared/SectionHeader';
import OrgMemberCard from './OrgMemberCard';
import { orgMembers } from '@/data/mock-data';

export default function OrgChartInteractive() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'pimpinan' | 'advisor' | 'bidang'>('all');

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
    <section id="struktur-hirarki" className="py-16 md:py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="container-main">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-blue-100 text-electric mb-3">
              Hierarki Kepengurusan
            </div>
            <SectionHeader
              title="Bagan Struktur Organisasi Resmi"
              subtitle="Struktur komando dan koordinasi PERIKLINDO dirancang untuk memastikan kelincahan advokasi, kedalaman riset, dan soliditas sinergi ekosistem."
            />
          </div>
        </ScrollReveal>

        {/* Filter Navigation Tabs */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap items-center gap-2 mb-12 p-1.5 bg-slate-200/80 rounded-xl max-w-max border border-slate-300/70">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-150 min-h-[40px] flex items-center gap-2 ${
                  activeFilter === tab.id
                    ? 'bg-navy text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy hover:bg-white/50'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                    activeFilter === tab.id
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-300 text-slate-700'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* ---------------- TIER 1: CHAIRMAN ---------------- */}
        {(activeFilter === 'all' || activeFilter === 'pimpinan') && chairman && (
          <div className="mb-14 lg:mb-16">
            <ScrollReveal delay={120}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="h-px bg-slate-300 w-16 md:w-32" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                  Tingkat I &bull; Pimpinan Tertinggi
                </span>
                <span className="h-px bg-slate-300 w-16 md:w-32" />
              </div>
            </ScrollReveal>

            <div className="max-w-md mx-auto">
              <ScrollReveal delay={180}>
                <OrgMemberCard member={chairman} featured />
              </ScrollReveal>
            </div>

            {/* Tree Branch Connector */}
            {activeFilter === 'all' && (
              <div className="hidden md:flex flex-col items-center my-6" aria-hidden="true">
                <div className="w-0.5 h-8 bg-electric/40" />
                <div className="w-4 h-4 rounded-full border-2 border-electric bg-white" />
                <div className="w-0.5 h-6 bg-electric/40" />
              </div>
            )}
          </div>
        )}

        {/* ---------------- TIER 2: SECRETARIAT & TREASURY ---------------- */}
        {(activeFilter === 'all' || activeFilter === 'pimpinan') && (
          <div className="mb-14 lg:mb-16">
            <ScrollReveal delay={100}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="h-px bg-slate-300 w-16 md:w-32" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                  Tingkat II &bull; Sekretariat Jenderal & Kebendaharaan
                </span>
                <span className="h-px bg-slate-300 w-16 md:w-32" />
              </div>
            </ScrollReveal>

            {/* Staggered Cards (One by One) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {secretariat[0] && (
                <ScrollReveal delay={120} className="h-full">
                  <OrgMemberCard member={secretariat[0]} />
                </ScrollReveal>
              )}
              {secretariat[1] && (
                <ScrollReveal delay={240} className="h-full">
                  <OrgMemberCard member={secretariat[1]} />
                </ScrollReveal>
              )}
              {treasury && (
                <ScrollReveal delay={360} className="h-full">
                  <OrgMemberCard member={treasury} />
                </ScrollReveal>
              )}
            </div>

            {/* Tree Branch Connector */}
            {activeFilter === 'all' && (
              <div className="hidden md:flex flex-col items-center my-8" aria-hidden="true">
                <div className="w-0.5 h-8 bg-slate-300" />
                <div className="w-4 h-4 rounded-full border-2 border-slate-400 bg-white" />
                <div className="w-0.5 h-6 bg-slate-300" />
              </div>
            )}
          </div>
        )}

        {/* ---------------- TIER 3: SENIOR ADVISORS ---------------- */}
        {(activeFilter === 'all' || activeFilter === 'advisor') && (
          <div className="mb-14 lg:mb-16">
            <ScrollReveal delay={100}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="h-px bg-slate-300 w-16 md:w-32" />
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  Tingkat III &bull; Dewan Penasihat Senior (Senior Advisors)
                </span>
                <span className="h-px bg-slate-300 w-16 md:w-32" />
              </div>
            </ScrollReveal>

            {/* 2 Advisors Staggered Reveal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
              {advisors.map((advisor, index) => (
                <ScrollReveal
                  key={advisor.id}
                  delay={150 + index * 150}
                  className="h-full"
                >
                  <OrgMemberCard member={advisor} />
                </ScrollReveal>
              ))}
            </div>

            {/* Tree Branch Connector */}
            {activeFilter === 'all' && (
              <div className="hidden md:flex flex-col items-center my-8" aria-hidden="true">
                <div className="w-0.5 h-8 bg-slate-300" />
                <div className="w-4 h-4 rounded-full border-2 border-slate-400 bg-white" />
                <div className="w-0.5 h-6 bg-slate-300" />
              </div>
            )}
          </div>
        )}

        {/* ---------------- TIER 4: 6 VICE CHAIRMEN (KETUA BIDANG) ---------------- */}
        {(activeFilter === 'all' || activeFilter === 'bidang') && (
          <div>
            <ScrollReveal delay={100}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="h-px bg-slate-300 w-16 md:w-32" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  Tingkat IV &bull; Jajaran Ketua Bidang Eksekutif (Vice Chairmen)
                </span>
                <span className="h-px bg-slate-300 w-16 md:w-32" />
              </div>
            </ScrollReveal>

            {/* 6 Vice Chairmen Reveal One by One */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {viceChairmen.map((vc, index) => (
                <ScrollReveal
                  key={vc.id}
                  delay={80 + index * 100}
                  className="h-full"
                >
                  <OrgMemberCard member={vc} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
