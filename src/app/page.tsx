import type { Metadata } from 'next';
import { StructuredData } from '@/app/components/StructuredData';
import { SITE_URL } from '@/app/data/site';
import { About } from '@/app/sections/about/About';
import { Contact } from '@/app/sections/contact/Contact';
import { Experience } from '@/app/sections/experience/Experience';
import { Hero } from '@/app/sections/hero/Hero';
import { HeroContour } from '@/app/sections/hero/HeroContour';
import { HeroFacts } from '@/app/sections/hero/HeroFacts';
import { Skills } from '@/app/sections/skills/Skills';
import { Work } from '@/app/sections/work/Work';

// The one indexable page: its canonical URL and its share cards. Title and description come from the layout.
export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'profile',
    siteName: 'Zeeshan Ahmed',
    locale: 'en_US',
    url: SITE_URL,
    title: 'Zeeshan Ahmed | Frontend Developer',
    description:
      'CRMs, dashboards and admin panels built with React, Next.js and TypeScript. Based in Islamabad, open to frontend roles.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Zeeshan Ahmed, Frontend Developer' }],
    firstName: 'Zeeshan',
    lastName: 'Ahmed',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Zeeshanahme_d',
    creator: '@Zeeshanahme_d',
  },
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <main id="main">
        <Hero contour={<HeroContour />} facts={<HeroFacts />} />
        <Work />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
    </>
  );
}
