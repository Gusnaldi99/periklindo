import type { Metadata } from 'next';
import OrgHero from '@/components/organization/OrgHero';
import OrgChartInteractive from '@/components/organization/OrgChartInteractive';
import OrgOfficialDiagramModal from '@/components/organization/OrgOfficialDiagramModal';
import OrgDutiesAccordion from '@/components/organization/OrgDutiesAccordion';
import OrgCta from '@/components/organization/OrgCta';

export const metadata: Metadata = {
  title: 'Struktur Organisasi | PERIKLINDO - Perkumpulan Industri Kendaraan Listrik Indonesia',
  description:
    'Kepengurusan PERIKLINDO Periode 2026–2031: Dewan Pembina, Dewan Pengawas, Pimpinan Inti (Ketua Umum Jenderal TNI (Purn.) Dr. Moeldoko, Sekretaris Jenderal, Bendahara), serta jajaran Ketua Bidang teknis.',
  keywords: [
    'Struktur Organisasi Periklindo',
    'Pengurus Periklindo',
    'Ketua Umum Moeldoko',
    'Dewan Pembina PERIKLINDO',
    'Dewan Pengawas PERIKLINDO',
    'Tenggono Chuandra Phoa',
    'Eddy Soepadmo',
    'Cing Hok',
    'Pengurus PERIKLINDO 2026-2031',
  ],
  openGraph: {
    title: 'Kepengurusan PERIKLINDO Periode 2026–2031',
    description:
      'Bagan susunan kepengurusan resmi Perkumpulan Industri Kendaraan Listrik Indonesia Periode 2026–2031, lengkap dengan Dewan Pembina, Dewan Pengawas, dan pengurus harian.',
    type: 'website',
    locale: 'id_ID',
    images: [
      {
        url: '/assets/org/chart-official.png',
        width: 1024,
        height: 703,
        alt: 'Bagan Struktur Organisasi PERIKLINDO Periode 2026–2031',
      },
    ],
  },
};

export default function StrukturOrganisasiPage() {
  return (
    <>
      <OrgHero />
      <OrgChartInteractive />
      <OrgOfficialDiagramModal />
      <OrgDutiesAccordion />
      <OrgCta />
    </>
  );
}
