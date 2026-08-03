import { unstable_setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import HowWeWork from '@/components/HowWeWork';
import TrustedEcosystem from '@/components/TrustedEcosystem';
import ClientPortal from '@/components/ClientPortal';
import ServicesSection from '@/components/ServicesSection';
import IndustriesGrid from '@/components/IndustriesGrid';
import WhyNexo from '@/components/WhyNexo';
import FAQ from '@/components/FAQ';
import ContactSection from '@/components/ContactSection';

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Hero />
      <HowWeWork />
      <TrustedEcosystem />
      <ClientPortal />
      <ServicesSection />
      <IndustriesGrid />
      <WhyNexo />
      <FAQ />
      <ContactSection />
    </>
  );
}
