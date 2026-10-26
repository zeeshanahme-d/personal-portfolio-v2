import { profile } from '@/app/data/content';

/** The hero's words in both languages; the language switch flips between them. */
export const heroCopy = {
  en: {
    status: profile.status,
    role: 'Full-Stack Developer',
    title: 'I build the interfaces businesses actually run on.',
    lede: 'CRMs, dashboards, admin systems and AI products, built with React, Next.js, TypeScript and Node.js.',
    cta: 'Selected work',
  },
  ar: {
    status: 'متاح الآن لوظائف التطوير المتكامل والواجهات الأمامية، عن بُعد أو في المكتب',
    role: 'مطوّر ويب متكامل',
    title: 'أبني واجهات الويب التي تُدار بها الأعمال.',
    lede: 'أنظمة CRM ولوحات معلومات وأنظمة إدارة ومنتجات ذكاء اصطناعي، باستخدام React وNext.js وTypeScript وNode.js.',
    cta: 'أعمال مختارة',
  },
};

export type Lang = keyof typeof heroCopy;

/**
 * One kind of product per letter, each from a real project: the work hangs off the name.
 * (Partner Portal, Eyecatch AI, Scalezy, Stampy, Organics by Appa and Saudi Taxi, plus the Socket.io work.)
 */
export const LETTERS = [
  ['Z', 'CRM'],
  ['e', 'AI products'],
  ['e', 'Admin systems'],
  ['s', 'Real-time'],
  ['h', 'Loyalty'],
  ['a', 'E‑commerce'],
  ['n', 'RTL UI'],
] as const;
