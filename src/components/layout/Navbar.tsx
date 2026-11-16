'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Menu, X, Mail, UserPlus } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/tentang-kami', label: 'Tentang Kami' },
  { href: '/struktur-organisasi', label: 'Struktur Organisasi' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/berita', label: 'Berita' },
  { href: '/faq', label: 'FAQ' },
  { href: '/kontak', label: 'Kontak' },
];

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

const springTransition = { type: 'spring' as const, stiffness: 400, damping: 30 };

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState(pathname);
  const shouldReduceMotion = useReducedMotion();

  // Only use hero-transparent mode on the homepage
  const isHomepage = pathname === '/';
  // Solid navy glass on scrolled homepage + all other routes
  const isSolidNav = scrolled || !isHomepage;

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    if (mobileOpen) setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300 ease-out border-b border-sky-950/60',
          'bg-[#06152F] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-2.5 lg:py-3'
        )}
      >
        <div className="container-main relative flex items-center justify-between">
          {/* Logo on Left */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg py-1 shrink-0 z-20"
            aria-label="Beranda PERIKLINDO"
          >
            <Image
              src="/assets/logo/logo-periklindo-putih.png"
              alt="PERIKLINDO"
              width={116}
              height={72}
              className="h-10 lg:h-11 w-auto object-contain transition-all duration-200 group-hover:opacity-90"
              priority
            />
          </Link>

          {/* Floating Pill Capsule Navigation (Centered & matches user reference image) */}
          <nav
            className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 z-20"
            aria-label="Navigasi utama"
          >
            <div className="relative flex items-center p-1 rounded-full bg-gradient-to-b from-[#0a2044] via-[#06152F] to-[#030d1d] border border-sky-400/35 shadow-[0_0_20px_rgba(56,189,248,0.18),0_8px_32px_rgba(0,0,0,0.6)]">
              {/* Top rim specular highlight reflection */}
              <div
                className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent"
                aria-hidden="true"
              />

              <ul className="flex items-center gap-0.5 xl:gap-1">
                {navLinks.map((link) => {
                  const isActive = isActivePath(pathname, link.href);
                  return (
                    <li key={link.href} className="relative">
                      <Link
                        href={link.href}
                        className={cn(
                          'relative inline-flex items-center justify-center px-3 xl:px-4 py-2 text-[13px] xl:text-sm font-medium transition-colors duration-200 rounded-full',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
                          isActive
                            ? 'text-white font-semibold'
                            : 'text-slate-300 hover:text-sky-300 hover:bg-sky-500/15'
                        )}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <span className="relative z-10">{link.label}</span>
                        {isActive && (
                          <motion.span
                            layoutId={shouldReduceMotion ? undefined : 'nav-active-indicator'}
                            className="absolute bottom-0 inset-x-3 h-[2.5px] bg-cyan-400 rounded-full shadow-[0_0_10px_#38bdf8,0_0_18px_#38bdf8]"
                            transition={springTransition}
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          {/* Right CTA Action */}
          <div className="hidden lg:flex items-center gap-3 shrink-0 z-20">
            <Link
              href="/kontak?kategori=keanggotaan"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 min-h-[40px]"
            >
              <UserPlus className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="hidden xl:inline">Gabung Anggota</span>
              <span className="xl:hidden">Gabung</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className={cn(
              'lg:hidden flex items-center justify-center p-2.5 rounded-full border border-sky-400/25 bg-[#06152F] text-white shadow-lg transition-colors duration-200',
              'min-h-[44px] min-w-[44px]',
              'hover:bg-sky-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400'
            )}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Tutup menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
              className="fixed inset-0 z-[60] bg-navy/55 backdrop-blur-[2px] lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.aside
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu navigasi"
              initial={shouldReduceMotion ? { opacity: 1 } : { x: '100%', opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { x: '100%', opacity: 1 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.15 }
                  : { type: 'spring', stiffness: 380, damping: 36 }
              }
              className="fixed top-0 right-0 z-[70] flex h-full w-[min(100%,22rem)] flex-col bg-[#06152F] border-l border-sky-900/40 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-sky-900/40">
                <p className="text-sm font-semibold text-white">Menu Utama</p>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-sky-500/30 px-3 py-2 text-sm font-medium text-white hover:bg-sky-500/15 min-h-[44px] min-w-[44px] transition-colors duration-150"
                  aria-label="Tutup menu"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                  <span>Tutup</span>
                </button>
              </div>

              <ul className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = isActivePath(pathname, link.href);
                  return (
                    <motion.li
                      key={link.href}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.22,
                        delay: shouldReduceMotion ? 0 : 0.04 * index,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          'relative px-4 py-3 text-sm font-medium rounded-xl transition-colors duration-150 min-h-[44px] flex items-center',
                          isActive
                            ? 'text-white bg-sky-500/15 border border-sky-400/40 font-semibold shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                            : 'text-slate-300 hover:text-white hover:bg-sky-500/10'
                        )}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {isActive && (
                          <span className="absolute left-0 inset-y-2 w-1 bg-cyan-400 rounded-r-full shadow-[0_0_8px_#38bdf8]" />
                        )}
                        <span className="relative z-10">{link.label}</span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="px-4 pb-6 pt-3 border-t border-sky-900/40 space-y-2">
                <Link
                  href="/kontak"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-white border border-sky-500/30 hover:bg-sky-500/15 min-h-[44px] transition-colors duration-150"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  Hubungi Sekretariat
                </Link>
                <Link
                  href="/kontak?kategori=keanggotaan"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-white bg-electric hover:bg-electric-hover shadow-md shadow-electric/30 min-h-[44px] transition-colors duration-150"
                >
                  <UserPlus className="w-4 h-4" aria-hidden="true" />
                  Gabung Anggota
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
