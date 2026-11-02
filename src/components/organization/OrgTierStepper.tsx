'use client';

import { motion, useReducedMotion } from 'motion/react';
import { Crown, FileSpreadsheet, Award, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OrgTierStepperProps {
  activeTier: number; // 1, 2, 3, 4
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
      const yOffset = -90; // Header offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: shouldReduceMotion ? 'auto' : 'smooth',
      });
    }
  };

  return (
    <>
      {/* ================= DESKTOP FLOATING HUD (Right side) ================= */}
      <aside
        aria-label="Navigasi Tingkat Hierarki Organisasi"
        className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3 select-none"
      >
        <div className="bg-navy/95 backdrop-blur-md p-2.5 rounded-2xl border border-white/15 shadow-2xl shadow-navy/60 flex flex-col items-center gap-2">
          {/* HUD Header Tag */}
          <div className="px-2 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-400 border-b border-white/10 mb-1">
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
                  'group relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric',
                  isActive
                    ? 'text-white shadow-lg shadow-electric/40 scale-105'
                    : 'text-slate-400 hover:text-white hover:bg-white/10'
                )}
                aria-label={`Lompat ke ${item.label}`}
                aria-current={isActive ? 'step' : undefined}
              >
                {/* Sliding active background indicator */}
                {isActive && (
                  <motion.div
                    layoutId="stepper-active-pill"
                    className="absolute inset-0 bg-electric rounded-xl -z-10 shadow-md shadow-electric/50 ring-2 ring-emerald-400/80"
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <Icon
                  className={cn(
                    'w-4 h-4 z-10 transition-transform duration-200',
                    isActive ? 'scale-110 text-white' : 'group-hover:scale-110'
                  )}
                />

                {/* Roman Numeral Badge */}
                <span className="absolute -bottom-1 -right-1 text-[9px] font-black px-1 rounded-sm bg-navy border border-white/20 text-white z-20">
                  {item.roman}
                </span>

                {/* Tooltip on Hover (appears to the left) */}
                <div className="pointer-events-none absolute right-full mr-3.5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0 z-50 whitespace-nowrap">
                  <div className="bg-navy/95 backdrop-blur-md border border-white/15 text-white px-3.5 py-2 rounded-xl shadow-2xl flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-electric/25 text-cyan-300 text-[10px] font-black flex items-center justify-center border border-electric/40">
                      {item.roman}
                    </span>
                    <div>
                      <p className="text-xs font-bold leading-tight text-white">
                        {item.label}
                      </p>
                      <p className="text-[10px] text-slate-400 font-medium">
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

      {/* ================= MOBILE / TABLET FLOATING DOCK (Bottom center) ================= */}
      <div className="xl:hidden sticky bottom-4 z-40 flex justify-center px-4 pointer-events-none select-none">
        <div className="pointer-events-auto bg-navy/95 backdrop-blur-md border border-white/15 shadow-2xl rounded-full p-1.5 flex items-center gap-1">
          {tiers.map((item) => {
            const isActive = activeTier === item.tier;
            return (
              <button
                key={`mobile-${item.id}`}
                type="button"
                onClick={() => scrollToTier(item.tier, item.id)}
                className={cn(
                  'relative px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric',
                  isActive
                    ? 'text-white shadow-md shadow-electric/40 scale-105'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                )}
                aria-label={`Lompat ke ${item.label}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-stepper-active-pill"
                    className="absolute inset-0 bg-electric rounded-full -z-10 shadow-sm shadow-electric/50 ring-1 ring-emerald-400/80"
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
                <span className="text-[10px] font-bold opacity-80 z-10">Tingkat</span>
                <span className="font-extrabold z-10">{item.roman}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping ml-0.5 z-10" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
