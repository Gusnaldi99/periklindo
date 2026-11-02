'use client';

import { motion, useReducedMotion } from 'motion/react';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const MAP_SRC =
  'https://maps.google.com/maps?q=The%20City%20Tower%20Jl.%20M.H.%20Thamrin%20No.%2081%20Jakarta%20Pusat&z=16&output=embed';

export default function SecretariatMapCard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.aside
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="bg-navy text-white rounded-2xl overflow-hidden border border-navy-light shadow-xl h-full flex flex-col"
    >
      <div className="relative aspect-[16/10] bg-navy-light">
        <iframe
          title="Peta Sekretariat PERIKLINDO, The City Tower Jakarta"
          src={MAP_SRC}
          className="absolute inset-0 w-full h-full border-0 grayscale-[20%] contrast-[1.05]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-teal mb-2">
          Kantor Sekretariat
        </p>
        <h2 className="text-xl font-extrabold text-white mb-5">The City Tower Lt. 12-1N</h2>

        <ul className="space-y-4 text-sm">
          <li className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-electric shrink-0 mt-0.5" />
            <span className="text-slate-300">
              Jl. M.H. Thamrin No. 81, Dukuh Atas, Menteng, Jakarta Pusat 10310
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
            <span className="text-slate-300">
              Senin–Jumat, 08.00–17.00 WIB
              <span className="block text-slate-500">Sabtu–Minggu tutup</span>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Mail className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
            <a
              href="mailto:sekretariat@periklindo.com"
              className="text-white hover:text-electric"
            >
              sekretariat@periklindo.com
            </a>
          </li>
          <li className="flex items-start gap-3">
            <Phone className="w-4 h-4 text-teal shrink-0 mt-0.5" />
            <div>
              <a href="https://wa.me/6287789703728" className="block text-white hover:text-teal">
                Sekretariat: +62 877-8970-3728
              </a>
              <a href="https://wa.me/6281299787588" className="block text-white hover:text-teal">
                Pendaftaran: +62 812-9978-7588
              </a>
            </div>
          </li>
        </ul>

        <a
          href="https://wa.me/6287789703728"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'relative mt-8 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl',
            'bg-teal text-white text-sm font-bold hover:bg-teal-hover min-h-[48px]',
            'shadow-lg shadow-teal/30'
          )}
        >
          {!shouldReduceMotion ? (
            <span className="absolute inset-0 rounded-xl bg-teal animate-pulse-ring pointer-events-none" />
          ) : null}
          <MessageCircle className="relative w-4 h-4" />
          <span className="relative">WhatsApp Help Desk Sekretariat</span>
        </a>
      </div>
    </motion.aside>
  );
}
