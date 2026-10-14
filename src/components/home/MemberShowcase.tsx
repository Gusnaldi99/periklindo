'use client';

import { useState } from 'react';
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

  const filteredMembers =
    selectedCategory === 'Semua'
      ? members
      : members.filter((member) => member.category === selectedCategory);

  return (
    <section id="anggota" className="py-16 md:py-20 lg:py-24 bg-slate-50 overflow-hidden">
      <div className="container-main">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <SectionHeader
              title="Anggota & Ekosistem Industri"
              subtitle="Jajaran perusahaan produsen kendaraan, komponen, baterai, dan infrastruktur pengisian resmi anggota PERIKLINDO."
            />
          </div>
        </ScrollReveal>

        {/* 1. Auto-Scroll Infinite Marquee Carousel */}
        <ScrollReveal delay={150} className="mb-14">
          <div className="group relative w-full overflow-hidden py-3">
            {/* Soft fade gradients on left & right edges for seamless illusion */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10" />

            {/* Seamless Double-Track Marquee */}
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

            <style
              dangerouslySetInnerHTML={{
                __html: `
                  @keyframes marquee-scroll {
                    0% {
                      transform: translate3d(0, 0, 0);
                    }
                    100% {
                      transform: translate3d(-100%, 0, 0);
                    }
                  }
                  .animate-marquee-track {
                    animation: marquee-scroll 32s linear infinite;
                    will-change: transform;
                  }
                  .group:hover .animate-marquee-track,
                  .animate-marquee-track:hover,
                  .animate-marquee-track:focus-within {
                    animation-play-state: paused !important;
                  }
                `,
              }}
            />
          </div>
        </ScrollReveal>

        {/* 2. Category Filter Tabs */}
        <ScrollReveal delay={200}>
          <div
            className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none"
            role="tablist"
            aria-label="Filter kategori anggota"
          >
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 min-h-[44px] active:scale-[0.97] ${
                    isActive
                      ? 'bg-navy text-white shadow-sm -translate-y-0.5'
                      : 'bg-white text-slate-600 hover:text-navy hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* 3. Filtered Grid of Member Logos with Staggered Entrance */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredMembers.map((member, index) => (
            <ScrollReveal
              key={`${selectedCategory}-${member.id}`}
              delay={index * 60}
              className="h-full"
            >
              <MemberLogoCard member={member} />
            </ScrollReveal>
          ))}
        </div>

        {/* Note regarding official membership */}
        <ScrollReveal delay={250}>
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500">
              Perusahaan Anda bergerak di industri kendaraan listrik dan ingin bergabung?{' '}
              <a
                href="/kontak"
                className="text-electric font-semibold hover:underline"
              >
                Ajukan Keanggotaan Resmi
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
