'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Building2,
  Mail,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Headphones,
  FileSpreadsheet,
} from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function CtaSection() {
  const b2bBenefits = [
    'Advokasi regulasi fiskal (PPN DTP) & harmonisasi uji kelaikan jalan',
    'Kepesertaan prioritas ajang pameran akbar tahunan PEVS di JIExpo',
    'Sinergi rantai pasok sel baterai lokal dan jaringan SPKLU nasional',
  ];

  const publicBenefits = [
    'Permohonan audiensi resmi bersama kementerian dan BUMN',
    'Pusat rujukan data industri, siaran pers, dan narasumber media',
    'Layanan informasi publik seputar standar keselamatan ekosistem EV',
  ];

  return (
    <section className="bg-navy py-16 md:py-24 text-white relative overflow-hidden border-t border-navy-light">
      {/* Background Radial Glow & Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-electric/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 text-emerald-400 border border-white/15 mb-4 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Gerbang Kemitraan Strategis Terpadu
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-4 leading-tight font-[family-name:var(--font-heading)]">
              Mari Bersama Membangun Kedaulatan Mobilitas Bersih Indonesia
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Pilihlah jalur komunikasi sesuai kebutuhan institusi Anda: bergabung sebagai
              mitra produsen/industri anggota atau berkoordinasi langsung dengan sekretariat jenderal.
            </p>
          </div>
        </ScrollReveal>

        {/* Dual-Track Corporate Gateway: B2B vs Secretariat/Public */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* ================= TRACK 1: B2B MEMBERSHIP FOR MANUFACTURERS ================= */}
          <ScrollReveal delay={100} className="h-full">
            <div className="group relative h-full bg-gradient-to-b from-navy-light to-slate-900 border border-electric/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-electric/5 hover:border-electric hover:shadow-2xl hover:shadow-electric/20 transition-all duration-300">
              {/* Top Accent Ribbon */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-electric to-cyan-400 rounded-t-3xl" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-electric/20 border border-electric/40 flex items-center justify-center text-cyan-300 shadow-md">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-cyan-300 bg-electric/20 px-3 py-1 rounded-full border border-electric/30">
                    Jalur Produsen & Korporasi (B2B)
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                  Pendaftaran Keanggotaan Asosiasi
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Dikhususkan bagi perusahaan manufaktur kendaraan listrik (Roda 4, Roda 2,
                  Bus), pabrikan sel baterai, dan penyedia stasiun pengisian daya (SPKLU).
                </p>

                {/* Benefits List */}
                <div className="space-y-3 mb-8 pt-4 border-t border-white/10">
                  {b2bBenefits.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Link
                href="/kontak?kategori=keanggotaan"
                className="group/btn inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-electric text-white font-bold text-sm sm:text-base hover:bg-electric-hover active:scale-[0.98] shadow-lg shadow-electric/30 transition-all duration-150 min-h-[48px]"
              >
                <span>Ajukan Permohonan Anggota B2B</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          {/* ================= TRACK 2: SECRETARIAT & PUBLIC LIAISON ================= */}
          <ScrollReveal delay={200} className="h-full">
            <div className="group relative h-full bg-gradient-to-b from-navy-light to-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:border-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300">
              {/* Top Accent Ribbon */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-teal to-cyan-400 rounded-t-3xl" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-md">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
                    Jalur Sekretariat & Media
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                  Sekretariat & Hubungan Kelembagaan
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Dikhususkan bagi kementerian/lembaga pemerintah, institusi akademisi riset,
                  jurnalis pers otomotif, serta permohonan kemitraan pameran PEVS.
                </p>

                {/* Benefits List */}
                <div className="space-y-3 mb-8 pt-4 border-t border-white/10">
                  {publicBenefits.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dual Action Buttons for Secretariat */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center gap-2 w-full sm:flex-1 px-5 py-4 rounded-xl border border-white/20 text-white font-bold text-xs sm:text-sm hover:bg-white/10 active:scale-[0.98] transition-all min-h-[48px]"
                >
                  <Mail className="w-4 h-4 text-slate-300" />
                  <span>Kontak Formal</span>
                </Link>

                <a
                  href="https://wa.me/6287789703728"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:flex-1 px-5 py-4 rounded-xl bg-teal text-white font-bold text-xs sm:text-sm hover:bg-teal-hover active:scale-[0.98] shadow-md shadow-teal/30 transition-all min-h-[48px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Resmi</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
