'use client';

import { motion, useReducedMotion } from 'motion/react';
import { Clock, Mail, MapPin, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { contactInfo } from '@/data/mock-data';

const MAP_SRC =
  'https://maps.google.com/maps?q=The%20City%20Tower%2C%20Jl.%20M.H.%20Thamrin%20No.%2081%2C%20Menteng%2C%20Jakarta%20Pusat&z=17&output=embed';

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
          title="Peta Sekretariat PERIKLINDO, The City Tower Thamrin Jakarta Pusat"
          src={MAP_SRC}
          className="absolute inset-0 w-full h-full border-0 grayscale-[20%] contrast-[1.05]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-teal mb-2">
          Kantor Sekretariat
        </p>
        <h2 className="text-xl font-extrabold text-white mb-5">
          {contactInfo.address.building}
        </h2>

        <ul className="space-y-4 text-sm">
          <li className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-electric shrink-0 mt-0.5" />
            <span className="text-slate-300">{contactInfo.address.full}</span>
          </li>
          <li className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
            <span className="text-slate-300">
              {contactInfo.officeHours.days}, {contactInfo.officeHours.hours}
              <span className="block text-slate-500">{contactInfo.officeHours.note}</span>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Mail className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-white hover:text-electric"
            >
              {contactInfo.email}
            </a>
          </li>
        </ul>

        <div className="mt-5 space-y-3">
          <a
            href={contactInfo.phone.secretariat.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 rounded-xl border border-white/10 bg-navy-light/70 px-4 py-3 hover:border-teal/40 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-teal shrink-0 mt-0.5" />
            <span>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                WhatsApp Sekretariat & Informasi
              </span>
              <span className="block text-sm font-semibold text-white">
                {contactInfo.phone.secretariat.number}
              </span>
              <span className="block text-xs text-slate-500 mt-0.5">
                Pertanyaan umum, regulasi, audiensi
              </span>
            </span>
          </a>
          <a
            href={contactInfo.phone.registration.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 rounded-xl border border-white/10 bg-navy-light/70 px-4 py-3 hover:border-electric/40 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
            <span>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                WhatsApp Pendaftaran Anggota
              </span>
              <span className="block text-sm font-semibold text-white">
                {contactInfo.phone.registration.number}
              </span>
              <span className="block text-xs text-slate-500 mt-0.5">
                Khusus pendaftaran pabrikan & anggota baru
              </span>
            </span>
          </a>
        </div>

        <a
          href={contactInfo.phone.secretariat.waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'relative mt-8 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl',
            'bg-teal text-white text-sm font-bold hover:bg-teal-hover min-h-[48px]',
            'shadow-lg shadow-teal/30'
          )}
        >
          <MessageCircle className="relative w-4 h-4" />
          <span className="relative">WhatsApp Help Desk Sekretariat</span>
        </a>
      </div>
    </motion.aside>
  );
}
