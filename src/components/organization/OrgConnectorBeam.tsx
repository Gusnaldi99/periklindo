'use client';

import { motion, useReducedMotion } from 'motion/react';
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
      className="relative my-6 flex select-none flex-col items-center justify-center md:my-10"
      aria-hidden="true"
    >
      <div className="relative flex h-8 w-px justify-center overflow-hidden">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            'w-full',
            isActive ? 'bg-electric' : 'bg-slate-300'
          )}
        />
      </div>

      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.3, delay: 0.05, ease: 'easeOut' }}
        className="my-1.5 flex items-center justify-center"
      >
        <span
          className={cn(
            'block h-2 w-2 rounded-full',
            isActive ? 'bg-electric' : 'bg-slate-400'
          )}
        />
      </motion.div>

      {label && (
        <span
          className={cn(
            'my-1.5 max-w-xs px-2 text-center font-[family-name:var(--font-body)] text-[11px] font-medium',
            isActive ? 'text-navy' : 'text-slate-500'
          )}
        >
          {label}
        </span>
      )}

      <div className="relative flex h-8 w-px justify-center overflow-hidden">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            'w-full',
            isActive ? 'bg-electric' : 'bg-slate-300'
          )}
        />
      </div>
    </div>
  );
}
