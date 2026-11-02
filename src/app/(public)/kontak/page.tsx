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
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 h-[32rem] animate-pulse">
      <div className="h-4 w-28 bg-slate-200 rounded mb-4" />
      <div className="h-8 w-64 bg-slate-200 rounded mb-8" />
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="h-20 bg-slate-100 rounded-xl" />
        <div className="h-20 bg-slate-100 rounded-xl" />
        <div className="h-20 bg-slate-100 rounded-xl" />
        <div className="h-20 bg-slate-100 rounded-xl" />
      </div>
      <div className="h-24 bg-slate-100 rounded-xl" />
    </div>
  );
}

export default function KontakPage() {
  return (
    <>
      <ContactHero />
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <Suspense fallback={<ContactFormFallback />}>
            <ContactForm />
          </Suspense>
          <SecretariatMapCard />
        </div>
      </section>
    </>
  );
}
