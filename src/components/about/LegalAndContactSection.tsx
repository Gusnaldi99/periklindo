'use client';

import { motion, useReducedMotion } from 'motion/react';
import {
  FileText,
  ShieldCheck,
  Scale,
  Handshake,
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageCircle,
  Building2,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import { cn } from '@/lib/utils';

export default function LegalAndContactSection() {
  const shouldReduceMotion = useReducedMotion();

  const legalDocs = [
    {
      code: 'REG-01',
      icon: FileText,
      iconBg: 'bg-blue-50 text-electric border-blue-200',
      title: 'Perpres No. 55 Tahun 2019',
      subtitle: 'Landasan Hukum Utama KBLBB',
      desc: 'Peraturan Presiden tentang Percepatan Program Kendaraan Bermotor Listrik Berbasis Baterai untuk Transportasi Jalan — payung hukum fundamental elektrifikasi otomotif nasional.',
    },
    {
      code: 'REG-02',
      icon: FileText,
      iconBg: 'bg-purple-50 text-purple-600 border-purple-200',
      title: 'Perpres No. 79 Tahun 2023',
      subtitle: 'Perubahan & Penguatan Regulasi',
      desc: 'Perubahan atas Perpres 55/2019 yang memperluas cakupan insentif, memperbaharui target TKDN, dan mempertegas mandat kementerian dalam percepatan ekosistem KBLBB nasional.',
    },
    {
      code: 'REG-03',
      icon: Scale,
      iconBg: 'bg-amber-50 text-amber-600 border-amber-200',
      title: 'SK Kemenkumham RI',
      subtitle: 'Pengesahan Badan Hukum Resmi',
      desc: 'Surat Keputusan Kementerian Hukum & HAM Republik Indonesia yang mengesahkan PERIKLINDO sebagai perkumpulan berbadan hukum yang sah, transparan, dan akuntabel.',
    },
    {
      code: 'REG-04',
      icon: ShieldCheck,
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      title: 'AD/ART Notaris Resmi',
      subtitle: 'Anggaran Dasar & Rumah Tangga',
      desc: 'Dibuat di hadapan Notaris resmi dengan tata kelola organisasi nirlaba yang berorientasi pada kepentingan industri dan advokasi kebijakan publik secara terstruktur.',
    },
    {
      code: 'REG-05',
      icon: Handshake,
      iconBg: 'bg-slate-100 text-slate-600 border-slate-200',
      title: 'Mitra Kerja Lintas Kementerian',
      subtitle: 'Audiensi & Perumusan Kebijakan',
      desc: 'Diakui sebagai mitra audiensi resmi Kemenko Marves/Perekonomian, Kementerian Perindustrian, Kementerian Perhubungan, dan Kementerian ESDM dalam harmonisasi regulasi EV.',
    },
  ];

  return (
    <section id="legalitas" className="py-16 md:py-20 lg:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-100 text-teal mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Legalitas & Sekretariat Resmi
          </div>
          <SectionHeader
            title="Landasan Hukum & Kantor Asosiasi"
            subtitle="Transparansi kelembagaan, dokumen perizinan sah negara, serta informasi sekretariat resmi PERIKLINDO sebagai titik koordinasi industri kendaraan listrik Indonesia."
          />
        </motion.div>

        {/* 2-Column Layout: Legal Docs (left) + Secretariat Card (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* ── LEFT: Legal Documents List ── */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col"
          >
            {/* Card Header */}
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-electric flex items-center justify-center border border-blue-100">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-heading)]">
                  Dokumen Legalitas Negara
                </h3>
                <p className="text-xs text-slate-500">
                  Basis hukum & pengakuan kelembagaan resmi
                </p>
              </div>
            </div>

            {/* Legal Documents Stack */}
            <div className="space-y-3 flex-1">
              {legalDocs.map((doc) => {
                const Icon = doc.icon;
                return (
                  <motion.div
                    key={doc.code}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 0.4 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:bg-white transition-colors duration-150 group"
                  >
                    <div className={cn('w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border mt-0.5', doc.iconBg)}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h4 className="text-sm font-bold text-navy group-hover:text-electric transition-colors leading-tight font-[family-name:var(--font-heading)]">
                          {doc.title}
                        </h4>
                        <span className="text-[10px] font-mono text-slate-400 shrink-0">{doc.code}</span>
                      </div>
                      <p className="text-[11px] font-semibold text-slate-500 mb-1">{doc.subtitle}</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{doc.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Verification Status Footer */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-medium">Seluruh dokumen legalitas terverifikasi dan sah secara hukum sejak 2021</span>
            </div>
          </motion.div>

          {/* ── RIGHT: Secretariat Card ── */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-navy text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-navy-light flex flex-col relative overflow-hidden"
          >
            {/* Background ambient light */}
            <div
              className="absolute -right-24 -top-24 w-72 h-72 bg-electric/20 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -left-20 -bottom-20 w-64 h-64 bg-teal/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 flex-1 flex flex-col">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-lg bg-white/10 text-emerald-400 flex items-center justify-center border border-white/15">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-[family-name:var(--font-heading)]">
                    Sekretariat Resmi PERIKLINDO
                  </h3>
                  <p className="text-xs text-slate-400">
                    Pusat administrasi & audiensi publik
                  </p>
                </div>
              </div>

              {/* Address Block */}
              <div className="p-4 rounded-xl bg-navy-light/70 border border-slate-800 mb-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Alamat Kantor:
                    </p>
                    <p className="text-sm font-semibold text-white leading-relaxed">
                      The City Tower Lt. 12-1N
                    </p>
                    <p className="text-sm text-slate-300">
                      Jl. M.H. Thamrin No. 81
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Dukuh Atas, Menteng, Jakarta Pusat 10310
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="p-4 rounded-xl bg-navy-light/70 border border-slate-800 mb-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Jam Operasional:
                    </p>
                    <div className="space-y-0.5 text-sm">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-slate-300">Senin – Jumat</span>
                        <span className="font-semibold text-white font-mono">08.00 – 17.00 WIB</span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-slate-400">Sabtu – Minggu</span>
                        <span className="text-slate-500 font-mono">Tutup</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 rounded-xl bg-navy-light/70 border border-slate-800 mb-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Email Resmi:
                    </p>
                    <a
                      href="mailto:sekretariat@periklindo.com"
                      className="text-sm font-semibold text-electric hover:underline underline-offset-2"
                    >
                      sekretariat@periklindo.com
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp / Phone Contacts */}
              <div className="p-4 rounded-xl bg-navy-light/70 border border-slate-800 mb-6">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Kontak WhatsApp:
                    </p>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-slate-400 text-xs">Sekretariat:</span>
                        <a
                          href="https://wa.me/6287789703728"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-white hover:text-teal transition-colors"
                        >
                          +62 877-8970-3728
                        </a>
                      </div>
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-slate-400 text-xs">Pendaftaran Anggota:</span>
                        <a
                          href="https://wa.me/6281299787588"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-white hover:text-teal transition-colors"
                        >
                          +62 812-9978-7588
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="mt-auto pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/6287789703728"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-teal text-white text-xs font-bold hover:bg-teal-hover hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-150 min-h-[44px] shadow-md shadow-teal/30"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Sekretariat
                </a>
                <a
                  href="mailto:sekretariat@periklindo.com"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 text-white text-xs font-bold hover:bg-white/20 hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-150 min-h-[44px] border border-white/15"
                >
                  <Mail className="w-4 h-4" />
                  Kirim Email Resmi
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
