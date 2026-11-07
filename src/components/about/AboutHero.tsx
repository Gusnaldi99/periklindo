'use client';

import Link from 'next/link';
import { FileCheck } from 'lucide-react';
import AnimatedCounter from '@/components/shared/AnimatedCounter';

export default function AboutHero() {
  return (
    <section className="relative overflow-x-clip border-b border-navy-light bg-navy py-12 text-white sm:py-14 md:py-16 lg:py-18">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, var(--color-slate-100) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-navy-light/40 to-transparent"
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <div className="max-w-4xl min-w-0">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 font-[family-name:var(--font-body)] text-xs text-slate-300 sm:text-sm">
              <li>
                <Link
                  href="/"
                  className="transition-[color] duration-150 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
                >
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-500">
                /
              </li>
              <li className="font-medium text-white" aria-current="page">
                Tentang Kami
              </li>
            </ol>
          </nav>

          <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-medium text-slate-300">
            Profil Resmi & Mandat Kebijakan Industri KBLBB Nasional
          </p>

          <h1 className="mb-4 max-w-3xl font-[family-name:var(--font-heading)] text-3xl font-semibold leading-[1.15] tracking-tight text-balance text-white sm:text-4xl md:text-[2.75rem] lg:text-5xl">
            Mewujudkan Ekosistem Kendaraan Listrik Indonesia yang Mandiri, Bersih, dan Berdaya Saing Global
          </h1>

          <p className="mb-5 max-w-prose font-[family-name:var(--font-body)] text-base leading-relaxed text-slate-300 sm:text-lg">
            <strong className="font-semibold text-white">PERIKLINDO</strong> (Perkumpulan Industri Kendaraan Listrik Indonesia) adalah wadah resmi perkumpulan industri kendaraan listrik yang berdiri sejak 2021 atas inisiatif para pionir otomotif nasional guna mendukung akselerasi transisi energi bersih dan kemandirian teknologi mobilitas listrik tanah air.
          </p>

          <div className="mb-6 border border-white/15 bg-navy-light/80 p-3.5 sm:p-4">
            <div className="flex items-start gap-3">
              <FileCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
              <div className="min-w-0">
                <p className="mb-1 font-[family-name:var(--font-body)] text-xs font-medium text-teal">
                  Landasan Hukum Deklarasi Organisasi
                </p>
                <p className="font-[family-name:var(--font-body)] text-xs leading-relaxed text-slate-200 sm:text-sm">
                  &ldquo;PERIKLINDO dibentuk sebagai mitra strategis pemerintah guna mengawal mandat{' '}
                  <strong className="font-semibold text-white">Perpres No. 55 Tahun 2019</strong>{' '}
                  dan perubahannya{' '}
                  <strong className="font-semibold text-white">Perpres No. 79 Tahun 2023</strong>{' '}
                  tentang Percepatan Program Kendaraan Bermotor Listrik Berbasis Baterai (KBLBB) untuk Transportasi Jalan.&rdquo;
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-[family-name:var(--font-body)] text-xs">
            <span className="font-medium text-slate-300">Akses Cepat:</span>
            <a
              href="#inisiator-pendiri"
              className="text-slate-300 underline-offset-4 transition-[color] duration-150 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
            >
              Inisiator Pendiri
            </a>
            <a
              href="#visi-misi"
              className="text-slate-300 underline-offset-4 transition-[color] duration-150 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
            >
              Visi & Misi
            </a>
            <a
              href="#tujuan-strategis"
              className="text-slate-300 underline-offset-4 transition-[color] duration-150 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
            >
              Pilar Strategis
            </a>
            <a
              href="#garis-waktu"
              className="text-slate-300 underline-offset-4 transition-[color] duration-150 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
            >
              Timeline 2019-2026
            </a>
            <a
              href="#pimpinan"
              className="text-slate-300 underline-offset-4 transition-[color] duration-150 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
            >
              Dewan Pimpinan
            </a>
            <a
              href="#legalitas"
              className="text-slate-300 underline-offset-4 transition-[color] duration-150 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
            >
              Legalitas & Kantor
            </a>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/15 pt-6 sm:grid-cols-4">
          <div className="min-w-0">
            <dt className="mb-1 font-[family-name:var(--font-body)] text-xs font-medium text-slate-300">
              Tahun Didirikan
            </dt>
            <dd className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white sm:text-[1.75rem]">
              <AnimatedCounter end={2021} duration={1400} />
            </dd>
            <p className="mt-0.5 font-[family-name:var(--font-body)] text-xs text-slate-300">
              Deklarasi 25 April 2021
            </p>
          </div>

          <div className="min-w-0">
            <dt className="mb-1 font-[family-name:var(--font-body)] text-xs font-medium text-slate-300">
              Korporasi Anggota
            </dt>
            <dd className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white sm:text-[1.75rem]">
              <AnimatedCounter end={25} suffix="+" duration={1600} />
            </dd>
            <p className="mt-0.5 font-[family-name:var(--font-body)] text-xs text-slate-300">
              Terverifikasi & Aktif
            </p>
          </div>

          <div className="min-w-0">
            <dt className="mb-1 font-[family-name:var(--font-body)] text-xs font-medium text-slate-300">
              Ekosistem Terintegrasi
            </dt>
            <dd className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white sm:text-[1.75rem]">
              4 Sektor
            </dd>
            <p className="mt-0.5 font-[family-name:var(--font-body)] text-xs text-slate-300">
              Roda 4, Roda 2, Baterai, SPKLU
            </p>
          </div>

          <div className="min-w-0">
            <dt className="mb-1 font-[family-name:var(--font-body)] text-xs font-medium text-slate-300">
              Pameran EV Terbesar
            </dt>
            <dd className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white sm:text-[1.75rem]">
              PEVS
            </dd>
            <p className="mt-0.5 font-[family-name:var(--font-body)] text-xs text-slate-300">
              Rutin Tahunan di JIExpo
            </p>
          </div>
        </dl>
      </div>
    </section>
  );
}
