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
            <p className="text-sm leading-relaxed max-w-sm mb-4">
              Perkumpulan Industri Kendaraan Listrik Indonesia. Berdiri sejak 2021 mendukung Perpres No. 55 Tahun 2019 guna akselerasi ekosistem KBLBB nasional.
            </p>
            <div className="text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300">Sekretariat:</p>
              <p>The City Tower Lt. 12-1N, Jl. M.H. Thamrin No. 81</p>
              <p>Dukuh Atas, Menteng, Jakarta Pusat</p>
            </div>
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
            <p className="text-white font-medium text-sm mb-4">Kontak Resmi</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:sekretariat@periklindo.com"
                  className="hover:text-white transition-colors duration-150 flex items-center gap-1.5"
                >
                  <span>✉</span> sekretariat@periklindo.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6287789703728"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-150 flex items-center gap-1.5"
                >
                  <span>💬</span> WhatsApp: +62 877-8970-3728
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281299787588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-150 flex items-center gap-1.5"
                >
                  <span>📋</span> Pendaftaran: +62 812-9978-7588
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
