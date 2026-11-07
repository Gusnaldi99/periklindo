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
 * Section title via type scale + spacing.
 * Optional parent-passed label kept as body-face caption (no tracked caps / gradient rule).
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
      initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(isCenter ? 'text-center' : '', className)}
    >
      {eyebrow ? (
        <p
          className={cn(
            'mb-3 font-[family-name:var(--font-body)] text-sm font-medium text-slate-500',
            isCenter && 'mx-auto'
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={cn(
          'min-w-0 break-words text-balance font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-tight text-navy md:text-4xl',
          subtitle ? 'mb-3' : 'mb-0'
        )}
      >
        {title}
      </h2>

      {subtitle ? (
        <p
          className={cn(
            'max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-600 md:text-lg',
            isCenter && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
