import type { Metadata } from 'next';
import { Suspense } from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import SecretariatMapCard from '@/components/contact/SecretariatMapCard';

export const metadata: Metadata = {
  title: 'Kontak Kami',
  description:
    'Hubungi Sekretariat PERIKLINDO di The City Tower Jakarta. Formulir keanggotaan, audiensi, media, dan sponsorship PEVS, lengkap dengan peta dan jam operasional.',
  keywords: [
    'Kontak PERIKLINDO',
    'Sekretariat PERIKLINDO',
    'The City Tower Thamrin',
    'Pendaftaran anggota PERIKLINDO',
    'Audiensi kendaraan listrik',
  ],
  openGraph: {
    title: 'Kontak Kami | PERIKLINDO',
    description:
      'Saluran resmi sekretariat PERIKLINDO untuk keanggotaan, audiensi, media, dan kemitraan PEVS.',
    type: 'website',
    locale: 'id_ID',
    url: '/kontak',
  },
};

function ContactFormFallback() {
  return (
    <div
      className="h-[32rem] border border-slate-200 bg-white p-6 sm:p-8 motion-safe:animate-pulse"
      aria-hidden="true"
    >
      <div className="mb-4 h-4 w-28 bg-slate-200" />
      <div className="mb-8 h-8 w-64 bg-slate-200" />
      <div className="mb-6 grid grid-cols-2 gap-3">
        <div className="h-20 bg-slate-100" />
        <div className="h-20 bg-slate-100" />
        <div className="h-20 bg-slate-100" />
        <div className="h-20 bg-slate-100" />
      </div>
      <div className="h-24 bg-slate-100" />
    </div>
  );
}

export default function KontakPage() {
  return (
    <>
      {/* Hallmark room 09: ContactHero → form+map; Suspense preserved */}
      <ContactHero />
      <section className="overflow-x-clip border-t border-slate-200 bg-slate-50 py-16 md:py-20">
        <div className="container-main grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          <Suspense fallback={<ContactFormFallback />}>
            <ContactForm />
          </Suspense>
          <SecretariatMapCard />
        </div>
      </section>
    </>
  );
}
