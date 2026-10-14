import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-400 mt-auto">
      <div className="container-main py-12 lg:py-16">
        {/*
         * Footer layout: two sections instead of the generic 4-column template (R-05).
         * Left: brand identity and brief description.
         * Right: actual navigation links the site has.
         */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10 lg:gap-16">
          {/* Brand column */}
          <div>
            <p className="font-[family-name:var(--font-heading)] text-white font-bold text-lg mb-3">
              PERIKLINDO
            </p>
            <p className="text-sm leading-relaxed max-w-sm">
              Perkumpulan Industri Kendaraan Listrik Indonesia. Berdiri sejak 2021,
              mewadahi pelaku industri kendaraan listrik nasional.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <p className="text-white font-medium text-sm mb-4">Navigasi</p>
            <ul className="space-y-2.5">
              {[
                { href: '/tentang-kami', label: 'Tentang Kami' },
                { href: '/berita', label: 'Berita' },
                { href: '/galeri', label: 'Galeri' },
                { href: '/faq', label: 'FAQ' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p className="text-white font-medium text-sm mb-4">Kontak</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/kontak"
                  className="hover:text-white transition-colors duration-150"
                >
                  Formulir Kontak
                </Link>
              </li>
              <li>
                <a
                  href="mailto:sekretariat@periklindo.com"
                  className="hover:text-white transition-colors duration-150"
                >
                  sekretariat@periklindo.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/628001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-150"
                >
                  WhatsApp Sekretariat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-slate-700/50 text-xs text-slate-500">
          <p>&copy; 2026 PERIKLINDO. Seluruh hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
