'use client';

import { motion, useReducedMotion } from 'motion/react';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

const MAP_SRC =
  'https://maps.google.com/maps?q=The%20City%20Tower%20Jl.%20M.H.%20Thamrin%20No.%2081%20Jakarta%20Pusat&z=16&output=embed';

export default function SecretariatMapCard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.aside
      initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
      }
      className="flex h-full flex-col overflow-hidden border border-navy-light bg-navy text-white"
    >
      <div className="relative aspect-[16/10] bg-navy-light">
        <iframe
          title="Peta Sekretariat PERIKLINDO, The City Tower Jakarta"
          src={MAP_SRC}
          className="absolute inset-0 h-full w-full border-0 grayscale-[20%] contrast-[1.05]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="mb-2 font-[family-name:var(--font-body)] text-sm font-medium text-slate-300">
          Kantor Sekretariat
        </p>
        <h2 className="mb-5 font-[family-name:var(--font-heading)] text-xl font-semibold tracking-tight text-white sm:text-2xl">
          The City Tower Lt. 12-1N
        </h2>

        <ul className="space-y-4 font-[family-name:var(--font-body)] text-sm">
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
            <span className="text-slate-300">
              Jl. M.H. Thamrin No. 81, Dukuh Atas, Menteng, Jakarta Pusat 10310
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
            <span className="text-slate-200">
              Senin–Jumat, 08.00–17.00 WIB
              <span className="block text-slate-300">Sabtu–Minggu tutup</span>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
            <a
              href="mailto:sekretariat@periklindo.com"
              className="text-white transition-[color] duration-150 hover:text-electric focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
            >
              sekretariat@periklindo.com
            </a>
          </li>
          <li className="flex items-start gap-3">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
            <div>
              <a
                href="https://wa.me/6287789703728"
                className="block text-white transition-[color] duration-150 hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
              >
                Sekretariat: +62 877-8970-3728
              </a>
              <a
                href="https://wa.me/6281299787588"
                className="block text-white transition-[color] duration-150 hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
              >
                Pendaftaran: +62 812-9978-7588
              </a>
            </div>
          </li>
        </ul>

        <a
          href="https://wa.me/6287789703728"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap bg-electric px-5 py-3 font-[family-name:var(--font-body)] text-sm font-semibold text-white transition-[background-color,opacity] duration-150 hover:bg-electric-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90"
        >
          <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          WhatsApp Help Desk Sekretariat
        </a>
      </div>
    </motion.aside>
  );
}
