'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
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
    <section id="anggota" className="overflow-x-clip border-b border-slate-200 bg-slate-50 py-16 md:py-24">
      <div className="container-main">
        <ScrollReveal>
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl min-w-0">
              <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-medium text-slate-500">
                Konsorsium Industri Terakreditasi
              </p>
              <SectionHeader
                title="Anggota & Ekosistem Industri EV Nasional"
                subtitle="Jajaran pabrikan otomotif terkemuka, inisiator bus listrik, manufaktur roda dua, pengembang baterai berstandar global, dan operator SPKLU yang bersinergi dalam PERIKLINDO."
              />
            </div>

            <div className="hidden shrink-0 border border-slate-200 bg-white px-4 py-3 lg:block">
              <p className="font-[family-name:var(--font-heading)] text-sm font-semibold text-navy">
                25+ Anggota Resmi
              </p>
              <p className="mt-0.5 font-[family-name:var(--font-body)] text-xs text-slate-500">
                Terverifikasi Anggaran Dasar
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100} className="mb-12">
          <div className="group relative w-full overflow-hidden py-3">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-slate-50 to-transparent sm:w-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-50 to-transparent sm:w-20" />

            <div className="flex w-max select-none">
              <div className="flex shrink-0 items-center gap-4 pr-4 sm:gap-6 sm:pr-6 animate-marquee-track motion-reduce:animate-none group-hover:[animation-play-state:paused] hover:[animation-play-state:paused]">
                {members.map((member) => (
                  <MemberLogoCard key={`m1-${member.id}`} member={member} compact />
                ))}
              </div>
              <div
                className="flex shrink-0 items-center gap-4 pr-4 sm:gap-6 sm:pr-6 animate-marquee-track motion-reduce:animate-none group-hover:[animation-play-state:paused] hover:[animation-play-state:paused]"
                aria-hidden="true"
              >
                {members.map((member) => (
                  <MemberLogoCard key={`m2-${member.id}`} member={member} compact />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={140}>
          <div
            className="mb-8 flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none"
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
                  className={`relative flex min-h-[44px] items-center gap-2 whitespace-nowrap border px-4 py-2.5 font-[family-name:var(--font-body)] text-sm font-semibold transition-[background-color,border-color,color] duration-150 ${
                    isActive
                      ? 'border-navy bg-navy text-white'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-navy'
                  }`}
                >
                  {isActive ? (
                    <span className="pointer-events-none absolute inset-0 -z-10 bg-navy" aria-hidden="true" />
                  ) : null}
                  <span>{category}</span>
                  <span
                    className={`text-xs font-medium ${
                      isActive ? 'text-white/80' : 'text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="grid grid-cols-2 gap-4 motion-reduce:transition-none sm:grid-cols-3 md:gap-6 lg:grid-cols-4"
          >
            {filteredMembers.map((member) => (
              <div key={member.id} className="min-w-0">
                <MemberLogoCard member={member} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <ScrollReveal delay={200}>
          <div className="mt-14 flex flex-col gap-6 border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="min-w-0">
              <p className="mb-1 font-[family-name:var(--font-body)] text-sm font-medium text-slate-500">
                Registrasi Keanggotaan Terbuka
              </p>
              <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-navy">
                Perusahaan Anda bergerak di rantai pasok industri kendaraan listrik?
              </h4>
              <p className="mt-1 font-[family-name:var(--font-body)] text-sm text-slate-500">
                Bergabunglah bersama asosiasi resmi untuk memperoleh advokasi regulasi,
                jejaring B2B, dan kepesertaan pameran PEVS.
              </p>
            </div>
            <Link
              href="/kontak"
              className="inline-flex min-h-[44px] shrink-0 items-center justify-center whitespace-nowrap bg-navy px-5 py-3 font-[family-name:var(--font-body)] text-sm font-semibold text-white transition-[background-color,opacity] duration-150 hover:bg-navy-light active:opacity-90"
            >
              Ajukan Keanggotaan
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
