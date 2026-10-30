'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/tentang-kami', label: 'Tentang Kami' },
  { href: '/struktur-organisasi', label: 'Struktur Organisasi' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/berita', label: 'Berita' },
  { href: '/faq', label: 'FAQ' },
  { href: '/kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-navy border-b border-navy-light">
      <nav
        className="container-main flex items-center justify-between h-16 lg:h-[72px]"
        aria-label="Navigasi utama"
      >
        {/* Official PERIKLINDO Brand Mark */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-electric rounded-md py-1"
          aria-label="Beranda PERIKLINDO"
        >
          <Image
            src="/assets/logo/logo-periklindo-putih.png"
            alt="PERIKLINDO"
            width={116}
            height={72}
            className="h-10 lg:h-12 w-auto object-contain transition-opacity duration-150 group-hover:opacity-90"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                    isActive
                      ? 'text-white bg-white/10 font-semibold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu button with label for discoverability */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-300 rounded-md
            hover:text-white hover:bg-white/10 transition-colors duration-150
            min-h-[44px] min-w-[44px] justify-center"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
          <span className="sr-only lg:not-sr-only">Menu</span>
        </button>
      </nav>

      {/* Mobile dropdown menu with smooth entrance */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-navy border-t border-navy-light transition-all duration-200 ease-out"
        >
          <ul className="container-main py-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-3 text-sm font-medium rounded-md transition-colors duration-150 min-h-[44px] flex items-center ${
                      isActive
                        ? 'text-white bg-white/15 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
