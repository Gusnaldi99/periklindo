'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

const PRECISION_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function AnimatedCounter({
  end,
  duration = 1600,
  suffix = '',
  prefix = '',
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (shouldReduceMotion) {
      const frame = requestAnimationFrame(() => setCount(end));
      return () => cancelAnimationFrame(frame);
    }

    let controls: ReturnType<typeof animate> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          controls = animate(0, end, {
            duration: duration / 1000,
            ease: PRECISION_EASE,
            onUpdate: (latest) => {
              setCount(Math.round(latest));
            },
          });
          observer.unobserve(element);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      controls?.stop();
    };
  }, [end, duration, shouldReduceMotion]);

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
