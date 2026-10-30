import Link from 'next/link';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function OrgCta() {
  return (
    <section className="bg-navy py-16 md:py-24 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, #0066FF 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-4">
              Kemitraan & Hubungan Kelembagaan
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Kemitraan Strategis Bersama Pengurus PERIKLINDO
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Perusahaan, lembaga kementerian, asosiasi industri mitra, dan media dapat mengajukan audiensi resmi, kerja sama riset, atau permohonan narasumber kepada sekretariat dewan pengurus.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-electric text-white font-semibold text-sm sm:text-base hover:bg-electric-hover hover:shadow-lg hover:shadow-electric/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-150 min-h-[44px]"
              >
                Kirim Permohonan Audiensi
              </Link>

              <a
                href="https://wa.me/6287789703728?text=Halo%20Sekretariat%20PERIKLINDO,%20kami%20ingin%20mengajukan%20komunikasi%20dengan%20pengurus."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-teal text-white font-semibold text-sm sm:text-base hover:bg-teal-hover hover:shadow-lg hover:shadow-teal/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-150 min-h-[44px]"
              >
                Kontak Sekretariat via WhatsApp
              </a>

              <Link
                href="/tentang-kami"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-slate-700 text-slate-300 hover:text-white hover:bg-white/10 active:scale-[0.98] transition-all duration-150 min-h-[44px] text-sm sm:text-base font-semibold"
              >
                Tentang Asosiasi
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
