'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { LayoutGroup, motion, AnimatePresence } from 'motion/react';
import { Building2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import type { MemberBrand } from '@/types';
import { memberBrands as defaultMembers } from '@/data/mock-data';
import MemberLogoCard from '@/components/shared/MemberLogoCard';
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
    <section
      id="anggota"
      className="relative py-16 md:py-24 bg-[#06152F] border-b border-white/10 overflow-hidden"
    >
      {/* Soft glass atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(8,123,235,0.12),transparent_55%)]"
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/5 text-[#DCEBFA] border border-white/10 backdrop-blur-md mb-4">
                <Building2 className="w-3.5 h-3.5 text-[#087BEB]" />
                Konsorsium Industri Terakreditasi
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Anggota & Ekosistem Industri EV Nasional
              </h2>
              <span
                className="block h-0.5 w-12 rounded-full bg-gradient-to-r from-[#087BEB] to-[#00C8F5] mb-3"
                aria-hidden="true"
              />
              <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">
                Jajaran pabrikan otomotif terkemuka, inisiator bus listrik, manufaktur
                roda dua, pengembang baterai berstandar global, dan operator SPKLU yang
                bersinergi dalam PERIKLINDO.
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <div className="text-xs">
                <p className="font-extrabold text-white leading-none">25+ Anggota Resmi</p>
                <p className="text-[11px] text-slate-400 font-medium mt-1">
                  Terverifikasi Anggaran Dasar
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Infinite LTR marquee — pause on hover */}
        <ScrollReveal delay={120} className="mb-12">
          <div className="group relative w-full overflow-hidden py-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm touch-pan-y">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#06152F] via-[#06152F]/80 to-transparent z-10"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#06152F] via-[#06152F]/80 to-transparent z-10"
              aria-hidden="true"
            />

            <div className="flex w-max select-none">
              <div className="flex shrink-0 items-center gap-3 sm:gap-5 pr-3 sm:pr-5 animate-marquee-track group-hover:[animation-play-state:paused]">
                {members.map((member) => (
                  <MemberLogoCard
                    key={`m1-${member.id}`}
                    member={member}
                    compact
                  />
                ))}
              </div>
              <div
                className="flex shrink-0 items-center gap-3 sm:gap-5 pr-3 sm:pr-5 animate-marquee-track group-hover:[animation-play-state:paused]"
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

        {/* Glass category filters */}
        <ScrollReveal delay={180}>
          <LayoutGroup>
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
                    className={`relative whitespace-nowrap px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-colors duration-300 min-h-[44px] flex items-center gap-2 ${
                      isActive
                        ? 'text-white'
                        : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-member-filter"
                        className="absolute inset-0 -z-10 rounded-full bg-[#087BEB] shadow-lg shadow-[#087BEB]/25"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span>{category}</span>
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded-full font-extrabold ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-white/10 text-slate-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </ScrollReveal>

        {/* Filtered member grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
          >
            {filteredMembers.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <MemberLogoCard member={member} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Membership CTA */}
        <ScrollReveal delay={250}>
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#087BEB] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                Registrasi Keanggotaan Terbuka
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Perusahaan Anda bergerak di rantai pasok industri kendaraan listrik?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Bergabunglah bersama asosiasi resmi untuk memperoleh advokasi regulasi,
                jejaring B2B, dan kepesertaan pameran PEVS.
              </p>
            </div>
            <Link
              href="/kontak"
              className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#087BEB] text-white text-xs sm:text-sm font-bold hover:bg-[#0669c9] active:scale-[0.98] transition-all duration-300 min-h-[44px] whitespace-nowrap shadow-lg shadow-[#087BEB]/25"
            >
              <span>Ajukan Keanggotaan</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
