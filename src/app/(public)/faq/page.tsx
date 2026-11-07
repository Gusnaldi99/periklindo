import type { Metadata } from 'next';
import FaqHero from '@/components/faq/FaqHero';
import FaqAccordionList from '@/components/faq/FaqAccordionList';
import FaqContactPrompt from '@/components/faq/FaqContactPrompt';
import { faqItems } from '@/data/mock-data';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Pertanyaan yang sering diajukan seputar PERIKLINDO, prosedur keanggotaan, pameran PEVS, serta regulasi dan insentif kendaraan listrik Indonesia.',
  keywords: [
    'FAQ PERIKLINDO',
    'Keanggotaan PERIKLINDO',
    'PEVS',
    'Insentif kendaraan listrik',
    'Perpres 55 2019',
  ],
  openGraph: {
    title: 'FAQ | PERIKLINDO',
    description:
      'Jawaban resmi tentang asosiasi, keanggotaan, PEVS, dan kebijakan KBLBB.',
    type: 'website',
    locale: 'id_ID',
    url: '/faq',
  },
};

export default function FaqPage() {
  // Frozen section order (room 08): FaqHero → FaqAccordionList → FaqContactPrompt.
  return (
    <>
      <FaqHero />
      <FaqAccordionList items={faqItems} />
      <FaqContactPrompt />
    </>
  );
}
