'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ArrowUp,
  Landmark,
  Scale,
} from 'lucide-react';
import { cn } from '@/lib/utils';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
    </svg>
  );
}

const navGroups = [
  {
    title: 'Organisasi',
    links: [
      { href: '/tentang-kami', label: 'Tentang Kami' },
      { href: '/struktur-organisasi', label: 'Struktur Organisasi' },
      { href: '/faq', label: 'FAQ' },
    ],
  },
  {
    title: 'Publikasi',
    links: [
      { href: '/berita', label: 'Berita' },
      { href: '/galeri', label: 'Galeri' },
      { href: '/kontak', label: 'Kontak' },
    ],
  },
];

const ministries = [
  { abbr: 'Kemenperin', name: 'Kementerian Perindustrian' },
  { abbr: 'Kemenhub', name: 'Kementerian Perhubungan' },
  { abbr: 'Kemenko Marves', name: 'Kemenko Maritim & Investasi' },
  { abbr: 'ESDM', name: 'Kementerian ESDM' },
];

const socialLinks = [
  {
    href: 'https://instagram.com/periklindo',
    label: 'Instagram PERIKLINDO',
    icon: InstagramIcon,
  },
  {
    href: 'https://youtube.com/@periklindo',
    label: 'YouTube PERIKLINDO',
    icon: YouTubeIcon,
  },
  {
    href: 'https://linkedin.com/company/periklindo',
    label: 'LinkedIn PERIKLINDO',
    icon: LinkedInIcon,
  },
];

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <footer className="relative bg-navy text-slate-400 mt-auto overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="container-main relative py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr] gap-10 lg:gap-12">
          <div>
            <Link href="/" className="inline-block mb-4 group" aria-label="Beranda PERIKLINDO">
              <Image
                src="/assets/logo/logo-periklindo-putih.png"
                alt="PERIKLINDO"
                width={130}
                height={80}
                className="h-12 w-auto object-contain transition-opacity duration-150 group-hover:opacity-90"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mb-5">
              Perkumpulan Industri Kendaraan Listrik Indonesia. Mewadahi pabrikan, rantai pasok baterai, dan infrastruktur SPKLU guna akselerasi ekosistem KBLBB nasional.
            </p>
            <blockquote className="max-w-sm rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-start gap-2.5">
                <Scale className="w-4 h-4 text-electric shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-xs leading-relaxed text-slate-300">
                  Berdiri sejak 2021 berdasarkan SK Kemenkumham RI &amp; Pengawal Perpres No. 55/2019. AD/ART disahkan sebagai perkumpulan berbadan hukum resmi.
                </p>
              </div>
            </blockquote>
          </div>

          {navGroups.map((group) => (
            <div key={group.title}>
              <p className="text-white font-medium text-sm mb-4">{group.title}</p>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <motion.div
                      whileHover={shouldReduceMotion ? undefined : { y: -2, color: '#0066FF' }}
                      transition={{ duration: 0.15 }}
                      className="inline-block"
                    >
                      <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors duration-150">
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-white font-medium text-sm mb-4">Kontak Resmi</p>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-electric shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  The City Tower Lt. 12-1N, Jl. M.H. Thamrin No. 81
                  <br />
                  Dukuh Atas, Menteng, Jakarta Pusat 10310
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-electric shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href="mailto:sekretariat@periklindo.com"
                  className="hover:text-white transition-colors duration-150"
                >
                  sekretariat@periklindo.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-teal shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-1">
                  <a
                    href="https://wa.me/6287789703728"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors duration-150"
                  >
                    Sekretariat: +62 877-8970-3728
                  </a>
                  <a
                    href="https://wa.me/6281299787588"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors duration-150"
                  >
                    Pendaftaran: +62 812-9978-7588
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  Senin–Jumat, 08.00–17.00 WIB
                  <br />
                  <span className="text-slate-500">Sabtu–Minggu tutup</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 mb-4">
            Mitra Pendukung Kementerian
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ministries.map((ministry) => (
              <div
                key={ministry.abbr}
                className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3 py-3"
              >
                <Landmark className="w-4 h-4 text-electric shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-white leading-tight">{ministry.abbr}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{ministry.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-700/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; 2026 PERIKLINDO. Seluruh hak cipta dilindungi.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={shouldReduceMotion ? undefined : { y: -2, color: '#0066FF' }}
                  transition={{ duration: 0.15 }}
                  className={cn(
                    'inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-slate-400',
                    'hover:border-electric/40 hover:bg-white/5 min-w-[40px] min-h-[40px]'
                  )}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </motion.a>
              );
            })}

            <motion.button
              type="button"
              onClick={scrollToTop}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              aria-label="Kembali ke atas"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-electric text-white shadow-md shadow-electric/30 hover:bg-electric-hover min-w-[40px] min-h-[40px] transition-colors duration-150"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
