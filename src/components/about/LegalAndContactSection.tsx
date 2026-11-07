'use client';

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
} from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function LegalAndContactSection() {
  const legalDocs = [
    {
      code: 'REG-01',
      icon: FileText,
      title: 'Perpres No. 55 Tahun 2019',
      subtitle: 'Landasan Hukum Utama KBLBB',
      desc: 'Peraturan Presiden tentang Percepatan Program Kendaraan Bermotor Listrik Berbasis Baterai untuk Transportasi Jalan — payung hukum fundamental elektrifikasi otomotif nasional.',
    },
    {
      code: 'REG-02',
      icon: FileText,
      title: 'Perpres No. 79 Tahun 2023',
      subtitle: 'Perubahan & Penguatan Regulasi',
      desc: 'Perubahan atas Perpres 55/2019 yang memperluas cakupan insentif, memperbaharui target TKDN, dan mempertegas mandat kementerian dalam percepatan ekosistem KBLBB nasional.',
    },
    {
      code: 'REG-03',
      icon: Scale,
      title: 'SK Kemenkumham RI',
      subtitle: 'Pengesahan Badan Hukum Resmi',
      desc: 'Surat Keputusan Kementerian Hukum & HAM Republik Indonesia yang mengesahkan PERIKLINDO sebagai perkumpulan berbadan hukum yang sah, transparan, dan akuntabel.',
    },
    {
      code: 'REG-04',
      icon: ShieldCheck,
      title: 'AD/ART Notaris Resmi',
      subtitle: 'Anggaran Dasar & Rumah Tangga',
      desc: 'Dibuat di hadapan Notaris resmi dengan tata kelola organisasi nirlaba yang berorientasi pada kepentingan industri dan advokasi kebijakan publik secara terstruktur.',
    },
    {
      code: 'REG-05',
      icon: Handshake,
      title: 'Mitra Kerja Lintas Kementerian',
      subtitle: 'Audiensi & Perumusan Kebijakan',
      desc: 'Diakui sebagai mitra audiensi resmi Kemenko Marves/Perekonomian, Kementerian Perindustrian, Kementerian Perhubungan, dan Kementerian ESDM dalam harmonisasi regulasi EV.',
    },
  ];

  return (
    <section
      id="legalitas"
      className="scroll-mt-20 border-b border-slate-200 bg-slate-50 py-16 md:py-20 lg:py-24"
    >
      <div className="container-main">
        <ScrollReveal>
          <div className="mb-12 max-w-3xl min-w-0 lg:mb-16">
            <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-medium text-slate-500">
              Legalitas & Sekretariat Resmi
            </p>
            <SectionHeader
              title="Landasan Hukum & Kantor Asosiasi"
              subtitle="Transparansi kelembagaan, dokumen perizinan sah negara, serta informasi sekretariat resmi PERIKLINDO sebagai titik koordinasi industri kendaraan listrik Indonesia."
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <ScrollReveal className="min-w-0">
            <div className="flex h-full flex-col border border-slate-200 bg-white p-6 sm:p-8">
              <div className="mb-7 flex items-center gap-3">
                <Scale className="h-5 w-5 shrink-0 text-electric" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-navy">
                    Dokumen Legalitas Negara
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-xs text-slate-500">
                    Basis hukum & pengakuan kelembagaan resmi
                  </p>
                </div>
              </div>

              <div className="flex-1 space-y-3">
                {legalDocs.map((doc) => {
                  const Icon = doc.icon;
                  return (
                    <div
                      key={doc.code}
                      className="flex items-start gap-4 border border-slate-100 bg-slate-50 p-4"
                    >
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-navy" aria-hidden="true" />
                      <div className="min-w-0">
                        <div className="mb-0.5 flex items-center gap-2">
                          <h4 className="font-[family-name:var(--font-heading)] text-sm font-semibold leading-tight text-navy">
                            {doc.title}
                          </h4>
                          <span className="shrink-0 font-[family-name:var(--font-body)] text-xs text-slate-500">
                            {doc.code}
                          </span>
                        </div>
                        <p className="mb-1 font-[family-name:var(--font-body)] text-[11px] font-semibold text-slate-500">
                          {doc.subtitle}
                        </p>
                        <p className="font-[family-name:var(--font-body)] text-xs leading-relaxed text-slate-600">
                          {doc.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 font-[family-name:var(--font-body)] text-xs text-slate-500">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                <span className="font-medium">
                  Seluruh dokumen legalitas terverifikasi dan sah secara hukum sejak 2021
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80} className="min-w-0">
            <div className="relative flex h-full flex-col overflow-x-clip border border-navy-light bg-navy p-6 text-white sm:p-8">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, var(--color-slate-100) 1px, transparent 0)',
                  backgroundSize: '32px 32px',
                }}
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-1 flex-col">
                <div className="mb-7 flex items-center gap-3">
                  <Building2 className="h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                  <div className="min-w-0">
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-white">
                      Sekretariat Resmi PERIKLINDO
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-xs text-slate-400">
                      Pusat administrasi & audiensi publik
                    </p>
                  </div>
                </div>

                <div className="mb-4 border border-white/10 bg-navy-light/70 p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
                    <div className="min-w-0">
                      <p className="mb-1 font-[family-name:var(--font-body)] text-[11px] font-medium text-slate-400">
                        Alamat Kantor:
                      </p>
                      <p className="font-[family-name:var(--font-body)] text-sm font-semibold leading-relaxed text-white">
                        The City Tower Lt. 12-1N
                      </p>
                      <p className="font-[family-name:var(--font-body)] text-sm text-slate-300">
                        Jl. M.H. Thamrin No. 81
                      </p>
                      <p className="mt-0.5 font-[family-name:var(--font-body)] text-xs text-slate-400">
                        Dukuh Atas, Menteng, Jakarta Pusat 10310
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-4 border border-white/10 bg-navy-light/70 p-4">
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" aria-hidden="true" />
                    <div className="min-w-0 flex-1">
                      <p className="mb-1.5 font-[family-name:var(--font-body)] text-[11px] font-medium text-slate-400">
                        Jam Operasional:
                      </p>
                      <div className="space-y-0.5 font-[family-name:var(--font-body)] text-sm">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-slate-300">Senin – Jumat</span>
                          <span className="font-semibold text-white">08.00 – 17.00 WIB</span>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-slate-300">Sabtu – Minggu</span>
                          <span className="text-slate-300">Tutup</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4 border border-white/10 bg-navy-light/70 p-4">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
                    <div className="min-w-0">
                      <p className="mb-1 font-[family-name:var(--font-body)] text-[11px] font-medium text-slate-400">
                        Email Resmi:
                      </p>
                      <a
                        href="mailto:sekretariat@periklindo.com"
                        className="font-[family-name:var(--font-body)] text-sm font-semibold text-white underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
                      >
                        sekretariat@periklindo.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mb-6 border border-white/10 bg-navy-light/70 p-4">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                    <div className="min-w-0 flex-1">
                      <p className="mb-2 font-[family-name:var(--font-body)] text-[11px] font-medium text-slate-400">
                        Kontak WhatsApp:
                      </p>
                      <div className="space-y-1.5 font-[family-name:var(--font-body)] text-sm">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-xs text-slate-400">Sekretariat:</span>
                          <a
                            href="https://wa.me/6287789703728"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-white transition-[color] duration-150 hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
                          >
                            +62 877-8970-3728
                          </a>
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-xs text-slate-400">Pendaftaran Anggota:</span>
                          <a
                            href="https://wa.me/6281299787588"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-white transition-[color] duration-150 hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
                          >
                            +62 812-9978-7588
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
                  <a
                    href="https://wa.me/6287789703728"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 bg-electric px-4 py-2.5 font-[family-name:var(--font-body)] text-xs font-semibold text-white transition-[background-color,opacity] duration-150 hover:bg-electric-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    WhatsApp Sekretariat
                  </a>
                  <a
                    href="mailto:sekretariat@periklindo.com"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 border border-white/15 bg-white/10 px-4 py-2.5 font-[family-name:var(--font-body)] text-xs font-semibold text-white transition-[background-color,opacity] duration-150 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Kirim Email Resmi
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
