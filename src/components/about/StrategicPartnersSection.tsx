'use client';

import { motion, useReducedMotion } from 'motion/react';
import { Building2, Handshake } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const PARTNERS = [
  {
    name: 'Kementerian Perindustrian',
    short: 'Kemenperin',
    focus: 'Manufaktur, TKDN, dan hilirisasi industri EV',
  },
  {
    name: 'Kementerian Perhubungan',
    short: 'Kemenhub',
    focus: 'Sertifikasi uji tipe dan keselamatan transportasi',
  },
  {
    name: 'Kementerian ESDM',
    short: 'ESDM',
    focus: 'Infrastruktur energi dan ekosistem pengisian daya',
  },
  {
    name: 'PT PLN (Persero)',
    short: 'PLN',
    focus: 'SPKLU dan kesiapan jaringan kelistrikan',
  },
  {
    name: 'Badan Riset dan Inovasi Nasional',
    short: 'BRIN',
    focus: 'Riset baterai, standardisasi, dan inovasi teknologi',
  },
];

export default function StrategicPartnersSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="mitra-strategis"
      className="py-16 md:py-20 lg:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20"
    >
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-10 lg:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-blue-100 text-electric mb-3">
            <Handshake className="w-3.5 h-3.5" />
            Mitra Strategis & Legalitas
          </div>
          <SectionHeader
            title="Mitra Kementerian & Lembaga"
            subtitle="PERIKLINDO bersinergi dengan kementerian dan lembaga mitra untuk mengawal kebijakan KBLBB, infrastruktur, serta riset industri kendaraan listrik nasional."
          />
          <p className="mt-3 text-xs text-slate-500 leading-relaxed max-w-2xl">
            Nama lembaga memakai nomenklatur terkini. Logo resmi mitra belum dipasang
            sampai aset dan izin penggunaan diterima — daftar ini tidak mengklaim
            endorsement visual.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.short}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.45,
                delay: shouldReduceMotion ? 0 : index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-electric/40 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-navy/5 text-navy flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-electric mb-1">
                {partner.short}
              </p>
              <h3 className="text-sm font-bold text-navy mb-2 leading-snug">
                {partner.name}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">{partner.focus}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
