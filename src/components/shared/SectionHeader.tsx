'use client';

import { motion, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  eyebrow?: string;
  className?: string;
}

/**
 * Consistent section title treatment.
 * Optional eyebrow badge plus a short accent line for left-aligned headers.
 */
export default function SectionHeader({
  title,
  subtitle,
  align = 'left',
  eyebrow,
  className,
}: SectionHeaderProps) {
  const shouldReduceMotion = useReducedMotion();
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={cn(isCenter ? 'text-center' : '', className)}
    >
      {eyebrow ? (
        <p
          className={cn(
            'inline-flex items-center px-2.5 py-1 mb-3 rounded-md text-[11px] font-bold uppercase tracking-[0.16em]',
            'text-electric bg-electric/10 border border-electric/15'
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>

      {align === 'left' ? (
        <span
          className="block h-0.5 w-12 rounded-full bg-gradient-to-r from-electric to-teal mb-3"
          aria-hidden="true"
        />
      ) : null}

      {subtitle && (
        <p
          className={cn(
            'text-slate-500 text-base md:text-lg max-w-2xl leading-relaxed',
            isCenter && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
