import Link from 'next/link';
import { Newspaper } from 'lucide-react';

export default function NewsNotFound() {
  return (
    <section className="flex min-h-svh items-center overflow-x-clip bg-slate-50">
      <div className="container-main mx-auto max-w-xl py-20 text-center">
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center border border-slate-200 bg-white text-electric">
          <Newspaper className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-medium text-electric">
          404 • Arsip Tidak Ditemukan
        </p>
        <h1 className="mb-3 font-[family-name:var(--font-heading)] text-3xl font-semibold text-navy">
          Artikel ini tidak tersedia
        </h1>
        <p className="mb-8 font-[family-name:var(--font-body)] leading-relaxed text-slate-500">
          Tautan mungkin kedaluwarsa atau slug artikel tidak ada dalam arsip
          resmi PERIKLINDO. Silakan kembali ke indeks berita.
        </p>
        <Link
          href="/berita"
          className="inline-flex min-h-[44px] items-center justify-center bg-navy px-5 py-3 font-[family-name:var(--font-body)] text-sm font-semibold text-white transition-[background-color,opacity] duration-150 hover:bg-navy-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90"
        >
          Kembali ke Berita
        </Link>
      </div>
    </section>
  );
}
