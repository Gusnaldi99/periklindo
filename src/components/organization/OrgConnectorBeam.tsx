'use client';

import { motion, useReducedMotion } from 'motion/react';
import { Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OrgConnectorBeamProps {
  label?: string;
  isActive?: boolean;
}

export default function OrgConnectorBeam({
  label,
  isActive = false,
}: OrgConnectorBeamProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="flex flex-col items-center justify-center my-6 md:my-10 relative select-none"
      aria-hidden="true"
    >
      {/* Top Conductor Line */}
      <div className="relative w-[3px] h-9 overflow-hidden flex justify-center">
        <motion.div
          initial={shouldReduceMotion ? { height: 36, opacity: 1 } : { height: 0, opacity: 0 }}
          whileInView={{ height: 36, opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            'w-full transition-all duration-300 rounded-full',
            isActive
              ? 'bg-gradient-to-b from-blue-400 via-electric to-cyan-400 shadow-[0_0_12px_rgba(0,102,255,0.8)]'
              : 'bg-gradient-to-b from-slate-300 via-blue-300 to-electric/60 shadow-[0_0_6px_rgba(0,102,255,0.3)]'
          )}
        />

        {/* Downward Energy Flow Spark */}
        {isActive && (
          <motion.span
            className="absolute w-full h-4 bg-gradient-to-b from-transparent via-white to-transparent motion-reduce:hidden"
            animate={shouldReduceMotion ? undefined : { top: ['-20%', '120%'] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
          />
        )}
      </div>

      {/* Electric Pulse Node */}
      <motion.div
        initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
        className="relative flex items-center justify-center my-1.5"
      >
        {/* Glow halo */}
        <span
          className={cn(
            'absolute w-10 h-10 rounded-full transition-all duration-300',
            isActive
              ? 'bg-electric/25 animate-ping opacity-75'
              : 'bg-electric/15 opacity-40'
          )}
        />
        <span
          className={cn(
            'absolute w-7 h-7 rounded-full blur-xs transition-colors duration-300',
            isActive ? 'bg-cyan-400/40' : 'bg-blue-400/20'
          )}
        />

        {/* Node core */}
        <div
          className={cn(
            'relative z-10 w-7 h-7 rounded-full bg-navy border-2 flex items-center justify-center transition-all duration-300',
            isActive
              ? 'border-cyan-400 shadow-[0_0_16px_rgba(0,210,255,0.7)] scale-105 ring-2 ring-cyan-400/30'
              : 'border-electric shadow-md shadow-electric/40'
          )}
        >
          <Zap
            className={cn(
              'w-3.5 h-3.5 transition-colors duration-300',
              isActive
                ? 'text-cyan-300 fill-cyan-300 drop-shadow-[0_0_6px_rgba(0,210,255,0.9)]'
                : 'text-emerald-400 fill-emerald-400'
            )}
          />
        </div>
      </motion.div>

      {/* Optional micro label */}
      {label && (
        <span
          className={cn(
            'text-[10px] font-extrabold uppercase tracking-widest my-1.5 px-3 py-0.5 rounded-full border transition-all duration-300',
            isActive
              ? 'bg-blue-50 text-electric border-electric/40 shadow-xs ring-1 ring-electric/20 font-bold'
              : 'bg-white text-slate-500 border-slate-200 shadow-2xs'
          )}
        >
          {label}
        </span>
      )}

      {/* Bottom Conductor Line */}
      <div className="relative w-[3px] h-9 overflow-hidden flex justify-center">
        <motion.div
          initial={shouldReduceMotion ? { height: 36, opacity: 1 } : { height: 0, opacity: 0 }}
          whileInView={{ height: 36, opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            'w-full transition-all duration-300 rounded-full',
            isActive
              ? 'bg-gradient-to-b from-cyan-400 via-electric to-blue-500 shadow-[0_0_12px_rgba(0,102,255,0.8)]'
              : 'bg-gradient-to-b from-electric/60 via-sky-300 to-slate-300 shadow-[0_0_6px_rgba(0,102,255,0.3)]'
          )}
        />

        {/* Downward Energy Flow Spark */}
        {isActive && (
          <motion.span
            className="absolute w-full h-4 bg-gradient-to-b from-transparent via-cyan-200 to-transparent motion-reduce:hidden"
            animate={shouldReduceMotion ? undefined : { top: ['-20%', '120%'] }}
            transition={{ repeat: Infinity, duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
          />
        )}
      </div>
    </div>
  );
}
