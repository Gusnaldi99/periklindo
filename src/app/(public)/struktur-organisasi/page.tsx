import type { Metadata } from 'next';
import OrgHero from '@/components/organization/OrgHero';
import OrgChartInteractive from '@/components/organization/OrgChartInteractive';
import OrgOfficialDiagramModal from '@/components/organization/OrgOfficialDiagramModal';
import OrgDutiesAccordion from '@/components/organization/OrgDutiesAccordion';
import OrgCta from '@/components/organization/OrgCta';

export const metadata: Metadata = {
  title: 'Struktur Organisasi | PERIKLINDO - Perkumpulan Industri Kendaraan Listrik Indonesia',
  description:
    'Bagan struktur organisasi resmi PERIKLINDO. Dipimpin oleh Chairman General (ret). Dr. Moeldoko, Sekretaris Jenderal Tenggono Chuandra Phoa, Dewan Penasihat Senior, dan jajaran 6 Vice Chairmen.',
  keywords: [
    'Struktur Organisasi Periklindo',
    'Pengurus Periklindo',
    'Moeldoko Periklindo Chairman',
    'Tenggono Chuandra Phoa',
    'Eddy Soepadmo',
    'Cing Hok',
    'Organization Structure Periklindo',
  ],
  openGraph: {
    title: 'Struktur Organisasi | PERIKLINDO',
    description:
      'Bagan kepengurusan resmi Perkumpulan Industri Kendaraan Listrik Indonesia.',
    type: 'website',
    locale: 'id_ID',
    images: [
      {
        url: '/assets/org/chart-official.png',
        width: 1024,
        height: 703,
        alt: 'Organization Structure PERIKLINDO',
      },
    ],
  },
};

export default function StrukturOrganisasiPage() {
  return (
    <>
      {/* 1. Header with Breadcrumbs & Summary Stats */}
      <OrgHero />

      {/* 2. Interactive Organization Hierarchy (Cards reveal 1 by 1 on scroll) */}
      <OrgChartInteractive />

      {/* 3. Official Visual Diagram Preview & Lightbox Modal */}
      <OrgOfficialDiagramModal />

      {/* 4. Functional Duties & Scope for the 6 Divisions */}
      <OrgDutiesAccordion />

      {/* 5. Institutional Partnerships CTA */}
      <OrgCta />
    </>
  );
}
