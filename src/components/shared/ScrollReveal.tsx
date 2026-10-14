'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // milliseconds
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.15,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If user prefers reduced motion, show immediately without animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
      return;
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
        transitionDuration: '700ms',
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`transition-all ${getDirectionClasses()} ${className}`}
    >
      {children}
    </div>
  );
}
