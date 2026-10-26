import { cases, skills } from './content';
import { SITE_TITLE, SITE_URL } from './site';

// What the person knows: the page's practices, then every skill listed and every tool shipped in a project. Built
// from the content, so the structured data never claims more than the page shows.
const knowsAbout = [
  ...new Set([
    'Full-stack development',
    'Frontend development',
    'Backend development',
    'Web accessibility',
    'Web performance',
    'Responsive web design',
    'Internationalization and RTL localisation',
    'SEO',
    'AI-assisted development',
    ...skills.flatMap((g) => g.items),
    ...cases.flatMap((c) => c.stack),
  ]),
];

/*
 * One linked graph: the site (Google's site name), this page as a profile, and the person it is about.
 * sameAs ties the profiles below to this person, so Google can treat them as one entity.
 */
export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`,
      url: SITE_URL,
      name: 'Zeeshan Ahmed',
      alternateName: 'zeeshanahmed.dev',
      inLanguage: 'en',
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}#profile`,
      url: SITE_URL,
      name: SITE_TITLE,
      isPartOf: { '@id': `${SITE_URL}#website` },
      mainEntity: { '@id': `${SITE_URL}#person` },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}#person`,
      name: 'Zeeshan Ahmed',
      givenName: 'Zeeshan',
      familyName: 'Ahmed',
      alternateName: 'ذیشان احمد',
      jobTitle: 'Full-Stack Developer',
      description:
        'Full-stack developer in Islamabad, Pakistan, building CRMs, dashboards, admin panels and AI products with React, Next.js, TypeScript and Node.js.',
      url: SITE_URL,
      image: `${SITE_URL}my-profile.webp`,
      email: 'mailto:dev.zeeshanahmed@gmail.com',
      address: { '@type': 'PostalAddress', addressLocality: 'Islamabad', addressCountry: 'PK' },
      alumniOf: [
        { '@type': 'EducationalOrganization', name: 'Saylani Mass IT Training' },
        { '@type': 'EducationalOrganization', name: 'Govt. Dehli Science College' },
      ],
      knowsAbout,
      sameAs: ['https://github.com/zeeshanahme-d', 'https://www.linkedin.com/in/zeeshanahme-d', 'https://x.com/Zeeshanahme_d'],
    },
  ],
};
