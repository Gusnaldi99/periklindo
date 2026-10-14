import Link from 'next/link';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function CtaSection() {
  return (
    <section className="bg-navy py-16 md:py-24 text-white relative overflow-hidden">
      {/* Subtle radial gradient background decoration */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, #0066FF 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Mari Bersama Membangun Masa Depan Elektrifikasi Indonesia
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Bergabunglah bersama puluhan produsen kendaraan, pengembang baterai, dan penyedia
              infrastruktur pengisian daya dalam asosiasi resmi PERIKLINDO.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-electric text-white font-semibold text-sm sm:text-base hover:bg-electric-hover hover:shadow-lg hover:shadow-electric/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-150 min-h-[44px]"
              >
                Hubungi Sekretariat Asosiasi
              </Link>

              <a
                href="https://wa.me/6287789703728"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-teal text-white font-semibold text-sm sm:text-base hover:bg-teal-hover hover:shadow-lg hover:shadow-teal/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-150 min-h-[44px]"
              >
                Konsultasi WhatsApp Sekretariat
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
