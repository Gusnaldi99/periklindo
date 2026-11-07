'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // milliseconds
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  threshold?: number;
}

/**
 * Progressive reveal: content is visible by default (Floor 62).
 * Only below-fold nodes hide briefly for motion when JS + motion are available.
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.15,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const rect = element.getBoundingClientRect();
    const viewportBottom = window.innerHeight * (1 - threshold);
    const alreadyInView = rect.top < viewportBottom && rect.bottom > 0;

    if (!alreadyInView) {
      setIsVisible(false);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getDirectionClasses = () => {
    if (isVisible) return 'opacity-100 translate-x-0 translate-y-0';

    switch (direction) {
      case 'up':
        return 'opacity-0 translate-y-6';
      case 'down':
        return 'opacity-0 -translate-y-6';
      case 'left':
        return 'opacity-0 translate-x-6';
      case 'right':
        return 'opacity-0 -translate-x-6';
      case 'none':
        return 'opacity-0';
      default:
        return 'opacity-0 translate-y-6';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: '700ms',
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`${getDirectionClasses()} ${className}`}
    >
      {children}
    </div>
  );
}
