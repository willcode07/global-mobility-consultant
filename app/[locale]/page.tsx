import { unstable_setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ValueProposition from '@/components/ValueProposition';
import CTA from '@/components/CTA';

export default function Home({
  params: { locale }
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Services />
      <ValueProposition />
      <CTA />
    </>
  );
}
