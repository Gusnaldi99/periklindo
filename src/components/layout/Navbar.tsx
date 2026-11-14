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
          'sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter,border-color] duration-300 ease-out border-b',
          isSolidNav
            ? 'bg-[#06152F]/90 backdrop-blur-md shadow-[0_8px_30px_rgba(6,21,47,0.35)] border-white/10'
            : // Soft navy scrim so light hero patches never wash out white logo/links
              'bg-gradient-to-b from-[#06152F]/75 via-[#06152F]/45 to-transparent backdrop-blur-sm border-transparent'
        )}
      >
        <nav
          className="container-main relative flex items-center justify-between h-16 lg:h-[72px] gap-4"
          aria-label="Navigasi utama"
        >
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded-md py-1 shrink-0"
            aria-label="Beranda PERIKLINDO"
          >
            <Image
              src="/assets/logo/logo-periklindo-putih.png"
              alt="PERIKLINDO"
              width={116}
              height={72}
              className={cn(
                'h-10 lg:h-12 w-auto object-contain transition-opacity duration-150 group-hover:opacity-90',
                // Extra legibility when transparent over bright hero regions
                !isSolidNav && 'drop-shadow-[0_1px_10px_rgba(6,21,47,0.9)]'
              )}
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-2 xl:gap-3 min-w-0">
            <ul className="flex items-center gap-0.5 xl:gap-1">
              {navLinks.map((link) => {
                const isActive = isActivePath(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'relative z-0 inline-flex items-center px-2.5 xl:px-3 py-1.5 text-[13px] xl:text-sm font-medium rounded-full transition-colors duration-150',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2',
                        isSolidNav
                          ? // Navy glass: light text on dark surface
                            isActive
                            ? 'text-white font-semibold'
                            : 'text-slate-300 hover:text-white hover:bg-white/10 focus-visible:text-white focus-visible:ring-offset-[#06152F]'
                          : // Homepage top: never raw white-on-light — hover sits on navy/electric pill
                            isActive
                            ? 'text-white font-semibold'
                            : 'text-white/90 hover:text-white hover:bg-[#06152F]/70 focus-visible:text-white focus-visible:bg-[#06152F]/70 focus-visible:ring-offset-transparent'
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {isActive && (
                        <motion.span
                          layoutId={shouldReduceMotion ? undefined : 'nav-active'}
                          className={cn(
                            'absolute inset-0 rounded-full shadow-sm',
                            isSolidNav ? 'bg-white/12' : 'bg-[#06152F]/55'
                          )}
                          transition={springTransition}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div
              className={cn(
                'flex items-center gap-2 pl-3 ml-1 border-l',
                isSolidNav ? 'border-white/10' : 'border-white/25'
              )}
            >
              <Link
                href="/kontak"
                className={cn(
                  'inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold text-white border transition-colors duration-150 min-h-[44px]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric',
                  isSolidNav
                    ? 'border-white/20 hover:bg-white/10 hover:border-white/40'
                    : 'border-white/35 bg-[#06152F]/35 hover:bg-[#06152F]/65 hover:border-white/50'
                )}
              >
                <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                <span className="hidden xl:inline">Hubungi Sekretariat</span>
                <span className="xl:hidden">Kontak</span>
              </Link>
              <Link
                href="/kontak?kategori=keanggotaan"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-white bg-electric hover:bg-electric-hover shadow-md shadow-electric/30 transition-colors duration-150 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <UserPlus className="w-3.5 h-3.5" aria-hidden="true" />
                Gabung Anggota
              </Link>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className={cn(
              'lg:hidden flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150',
              'min-h-[44px] min-w-[44px] justify-center',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric',
              isSolidNav
                ? 'text-slate-300 hover:text-white hover:bg-white/10'
                : 'text-white hover:text-white hover:bg-[#06152F]/70'
            )}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </nav>

        <div
          className={cn(
            'pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-navy-light/80 to-transparent transition-opacity duration-300',
            isSolidNav ? 'opacity-100' : 'opacity-0'
          )}
          aria-hidden="true"
        />
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
              className="fixed top-0 right-0 z-[70] flex h-full w-[min(100%,22rem)] flex-col bg-navy border-l border-white/10 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
                <p className="text-sm font-semibold text-white">Menu Utama</p>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 px-3 py-2 text-sm font-medium text-white hover:bg-white/10 min-h-[44px] min-w-[44px] transition-colors duration-150"
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
                          'block px-4 py-3 text-sm font-medium rounded-xl transition-colors duration-150 min-h-[44px] flex items-center',
                          isActive
                            ? 'text-white bg-white/12 font-semibold'
                            : 'text-slate-300 hover:text-white hover:bg-white/10'
                        )}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="px-4 pb-6 pt-3 border-t border-white/10 space-y-2">
                <Link
                  href="/kontak"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-white border border-white/20 hover:bg-white/10 min-h-[44px] transition-colors duration-150"
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
