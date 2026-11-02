import Link from 'next/link';
import { ArrowLeft, Newspaper } from 'lucide-react';

export default function NewsNotFound() {
  return (
    <section className="bg-slate-50 min-h-[70vh] flex items-center">
      <div className="container-main py-20 text-center max-w-xl mx-auto">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-electric/10 text-electric mb-5">
          <Newspaper className="w-6 h-6" />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-electric mb-3">
          404 • Arsip Tidak Ditemukan
        </p>
        <h1 className="text-3xl font-extrabold text-navy mb-3">
          Artikel ini tidak tersedia
        </h1>
        <p className="text-slate-500 leading-relaxed mb-8">
          Tautan mungkin kedaluwarsa atau slug artikel tidak ada dalam arsip
          resmi PERIKLINDO. Silakan kembali ke indeks berita.
        </p>
        <Link
          href="/berita"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy text-white text-sm font-bold hover:bg-navy-light min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Berita
        </Link>
      </div>
    </section>
  );
}
