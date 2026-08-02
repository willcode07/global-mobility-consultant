import { unstable_setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import HowWeWork from '@/components/HowWeWork';
import ServicesSection from '@/components/ServicesSection';
import IndustriesGrid from '@/components/IndustriesGrid';
import CaseStudies from '@/components/CaseStudies';
import AboutSection from '@/components/AboutSection';
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
      <WhatWeDo />
      <HowWeWork />
      <ServicesSection />
      <IndustriesGrid />
      <CaseStudies />
      <AboutSection />
      <WhyNexo />
      <FAQ />
      <ContactSection />
    </>
  );
}
