'use client';

import { motion, useReducedMotion } from 'motion/react';
import { Crown, FileSpreadsheet, Award, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OrgTierStepperProps {
  activeTier: number;
  onSelectTier?: (tier: number) => void;
}

const tiers = [
  {
    tier: 1,
    id: 'tier-1',
    roman: 'I',
    label: 'Pimpinan Tertinggi',
    role: 'Chairman',
    icon: Crown,
    count: 1,
  },
  {
    tier: 2,
    id: 'tier-2',
    roman: 'II',
    label: 'Sekretariat & Bendahara',
    role: 'SecGen & Treasury',
    icon: FileSpreadsheet,
    count: 3,
  },
  {
    tier: 3,
    id: 'tier-3',
    roman: 'III',
    label: 'Dewan Penasihat',
    role: 'Senior Advisors',
    icon: Award,
    count: 2,
  },
  {
    tier: 4,
    id: 'tier-4',
    roman: 'IV',
    label: 'Jajaran Ketua Bidang',
    role: 'Vice Chairmen',
    icon: Layers,
    count: 6,
  },
];

export default function OrgTierStepper({ activeTier, onSelectTier }: OrgTierStepperProps) {
  const shouldReduceMotion = useReducedMotion();

  const scrollToTier = (tierNum: number, tierId: string) => {
    if (onSelectTier) {
      onSelectTier(tierNum);
    }
    const element = document.getElementById(tierId);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: shouldReduceMotion ? 'auto' : 'smooth',
      });
    }
  };

  return (
    <>
      <aside
        aria-label="Navigasi Tingkat Hierarki Organisasi"
        className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 select-none flex-col items-end gap-3 xl:flex"
      >
        <div className="flex flex-col items-center gap-2 border border-white/15 bg-navy/95 p-2.5 backdrop-blur-md">
          <div className="mb-1 border-b border-white/10 px-2 py-1 font-[family-name:var(--font-body)] text-[11px] font-medium text-slate-300">
            Hierarki
          </div>

          {tiers.map((item) => {
            const isActive = activeTier === item.tier;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToTier(item.tier, item.id)}
                className={cn(
                  'group relative flex h-11 w-11 items-center justify-center transition-[color,background-color] duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric',
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:bg-white/10 hover:text-white'
                )}
                aria-label={`Lompat ke ${item.label}`}
                aria-current={isActive ? 'step' : undefined}
              >
                {isActive && (
                  <motion.div
                    layoutId="stepper-active-pill"
                    className="-z-10 absolute inset-0 bg-electric"
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <Icon className="z-10 h-4 w-4" aria-hidden="true" />

                <span className="absolute -right-1 -bottom-1 z-20 border border-white/20 bg-navy px-1 font-[family-name:var(--font-body)] text-[11px] font-semibold text-white">
                  {item.roman}
                </span>

                <div className="pointer-events-none absolute top-1/2 right-full z-50 mr-3.5 -translate-y-1/2 translate-x-1 whitespace-nowrap opacity-0 transition-[opacity,transform] duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
                  <div className="flex items-center gap-2.5 border border-white/15 bg-navy/95 px-3.5 py-2 text-white backdrop-blur-md">
                    <span className="flex h-5 w-5 items-center justify-center border border-electric/40 bg-electric/25 font-[family-name:var(--font-body)] text-[11px] font-semibold text-slate-200">
                      {item.roman}
                    </span>
                    <div>
                      <p className="font-[family-name:var(--font-body)] text-xs font-semibold leading-tight text-white">
                        {item.label}
                      </p>
                      <p className="font-[family-name:var(--font-body)] text-[11px] font-medium text-slate-300">
                        {item.role} &bull; {item.count} Pengurus
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </aside>

      <div className="sticky bottom-4 z-40 flex justify-center px-4 pointer-events-none select-none xl:hidden">
        <div className="pointer-events-auto flex items-center gap-1 border border-white/15 bg-navy/95 p-1.5 backdrop-blur-md">
          {tiers.map((item) => {
            const isActive = activeTier === item.tier;
            return (
              <button
                key={`mobile-${item.id}`}
                type="button"
                onClick={() => scrollToTier(item.tier, item.id)}
                className={cn(
                  'relative flex items-center gap-1.5 px-3 py-1.5 font-[family-name:var(--font-body)] text-xs font-semibold transition-[color,background-color] duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric',
                  isActive
                    ? 'text-white'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                )}
                aria-label={`Lompat ke ${item.label}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-stepper-active-pill"
                    className="-z-10 absolute inset-0 bg-electric"
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
                <span className="z-10 text-[10px] font-medium opacity-80">Tingkat</span>
                <span className="z-10 font-semibold">{item.roman}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
