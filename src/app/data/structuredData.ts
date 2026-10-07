import { SITE_TITLE, SITE_URL } from './site';

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
      jobTitle: 'Frontend Developer',
      description:
        'Frontend developer in Islamabad, Pakistan, building CRMs, dashboards and admin panels with React, Next.js and TypeScript.',
      url: SITE_URL,
      image: `${SITE_URL}my-profile.webp`,
      email: 'mailto:dev.zeeshanahmed@gmail.com',
      address: { '@type': 'PostalAddress', addressLocality: 'Islamabad', addressCountry: 'PK' },
      alumniOf: [
        { '@type': 'EducationalOrganization', name: 'Saylani Mass IT Training' },
        { '@type': 'EducationalOrganization', name: 'Govt. Dehli Science College' },
      ],
      knowsAbout: ['Frontend development', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
      sameAs: ['https://github.com/zeeshanahme-d', 'https://www.linkedin.com/in/zeeshanahme-d', 'https://x.com/Zeeshanahme_d'],
    },
  ],
};
