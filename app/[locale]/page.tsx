import { useTranslations } from 'next-intl';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ValueProposition from '@/components/ValueProposition';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ValueProposition />
      <CTA />
    </>
  );
}

