'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import type { MemberBrand } from '@/types';
import { memberBrands as defaultMembers } from '@/data/mock-data';
import MemberLogoCard from '@/components/shared/MemberLogoCard';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';

interface MemberShowcaseProps {
  members?: MemberBrand[];
}

const categories = [
  'Semua',
  'Roda 4',
  'Roda 2',
  'Komponen & Baterai',
  'Infrastruktur',
] as const;

type Category = (typeof categories)[number];

export default function MemberShowcase({ members = defaultMembers }: MemberShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Semua');

  // Compute category counts dynamically
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      Semua: members.length,
      'Roda 4': 0,
      'Roda 2': 0,
      'Komponen & Baterai': 0,
      Infrastruktur: 0,
    };
    members.forEach((m) => {
      if (counts[m.category] !== undefined) {
        counts[m.category]++;
      }
    });
    return counts;
  }, [members]);

  const filteredMembers = useMemo(() => {
    return selectedCategory === 'Semua'
      ? members
      : members.filter((member) => member.category === selectedCategory);
  }, [members, selectedCategory]);

  return (
    <section id="anggota" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="container-main">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-bold bg-blue-100 text-electric border border-blue-200 mb-3">
                <Building2 className="w-3.5 h-3.5 text-electric" />
                Konsorsium Industri Terakreditasi
              </div>
              <SectionHeader
                title="Anggota & Ekosistem Industri EV Nasional"
                subtitle="Jajaran pabrikan otomotif terkemuka, inisiator bus listrik, manufaktur roda dua, pengembang baterai berstandar global, dan operator SPKLU yang bersinergi dalam PERIKLINDO."
              />
            </div>

            <div className="hidden lg:flex items-center gap-2 p-3 bg-white rounded-2xl border border-slate-200 shadow-xs shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <div className="text-xs">
                <p className="font-extrabold text-navy leading-none">25+ Anggota Resmi</p>
                <p className="text-[11px] text-slate-500 font-medium">Terverifikasi Anggaran Dasar</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 1. Seamless Double-Track Marquee Carousel */}
        <ScrollReveal delay={120} className="mb-14">
          <div className="group relative w-full overflow-hidden py-3">
            {/* Soft fade gradients on left & right edges for seamless illusion */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10" />

            {/* Double-Track Marquee */}
            <div className="flex w-max select-none">
              <div className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6 animate-marquee-track hover:[animation-play-state:paused] group-hover:[animation-play-state:paused]">
                {members.map((member) => (
                  <MemberLogoCard
                    key={`m1-${member.id}`}
                    member={member}
                    compact
                  />
                ))}
              </div>
              <div
                className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6 animate-marquee-track hover:[animation-play-state:paused] group-hover:[animation-play-state:paused]"
                aria-hidden="true"
              >
                {members.map((member) => (
                  <MemberLogoCard
                    key={`m2-${member.id}`}
                    member={member}
                    compact
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 2. Capsule Pills Category Filter with Dynamic Counts */}
        <ScrollReveal delay={180}>
          <div
            className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none"
            role="tablist"
            aria-label="Filter kategori anggota industri"
          >
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              const count = categoryCounts[category] ?? 0;

              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 min-h-[44px] flex items-center gap-2 ${
                    isActive
                      ? 'text-white shadow-md shadow-navy/20 -translate-y-0.5'
                      : 'bg-white text-slate-600 hover:text-navy hover:bg-slate-100 border border-slate-200 shadow-2xs'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-member-filter"
                      className="absolute inset-0 bg-navy rounded-xl -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span>{category}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-extrabold ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* 3. Filtered Grid of Member Logos with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {filteredMembers.map((member) => (
              <MemberLogoCard key={member.id} member={member} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Membership Application Gateway Banner */}
        <ScrollReveal delay={250}>
          <div className="mt-14 p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-electric mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                Registrasi Keanggotaan Terbuka
              </div>
              <h4 className="text-base sm:text-lg font-bold text-navy">
                Perusahaan Anda bergerak di rantai pasok industri kendaraan listrik?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Bergabunglah bersama asosiasi resmi untuk memperoleh advokasi regulasi,
                jejaring B2B, dan kepesertaan pameran PEVS.
              </p>
            </div>
            <Link
              href="/kontak"
              className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy text-white text-xs sm:text-sm font-bold hover:bg-navy-light active:scale-[0.98] transition-all min-h-[44px] whitespace-nowrap shadow-sm"
            >
              <span>Ajukan Keanggotaan</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
