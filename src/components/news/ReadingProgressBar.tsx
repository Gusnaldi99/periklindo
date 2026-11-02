'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const update = () => {
      const article = document.getElementById('artikel-utama');
      const target = article ?? document.documentElement;
      const rect = target.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = rect.height - viewport;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      setProgress(total > 0 ? scrolled / total : 0);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div
      className="fixed top-0 inset-x-0 z-[60] h-1 bg-navy/10"
      role="progressbar"
      aria-label="Progres membaca artikel"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
    >
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-electric to-teal"
        animate={{ scaleX: progress }}
        initial={false}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { type: 'spring', stiffness: 400, damping: 40 }
        }
      />
    </div>
  );
}
