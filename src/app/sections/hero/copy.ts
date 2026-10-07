import { profile } from '@/app/data/content';

/** The hero's words in both languages; the language switch flips between them. */
export const heroCopy = {
  en: {
    status: profile.status,
    role: 'Frontend Developer',
    title: 'I build the interfaces businesses actually run on.',
    lede: 'CRMs, dashboards, admin systems and product interfaces, built with React, Next.js and TypeScript.',
    cta: 'Selected work',
  },
  ar: {
    status: 'متاح الآن لوظائف الواجهات الأمامية، عن بُعد أو في المكتب',
    role: 'مطوّر واجهات أمامية',
    title: 'أبني واجهات الويب التي تُدار بها الأعمال.',
    lede: 'أنظمة CRM ولوحات معلومات وأنظمة إدارة وواجهات منتجات، باستخدام React وNext.js وTypeScript.',
    cta: 'أعمال مختارة',
  },
};

export type Lang = keyof typeof heroCopy;

/**
 * One kind of product per letter, each from a real project: the work hangs off the name.
 * (Partner Portal, Scalezy, Stampy, Organics by Appa and Saudi Taxi, plus the dashboards and Socket.io work.)
 */
export const LETTERS = [
  ['Z', 'CRM'],
  ['e', 'Dashboards'],
  ['e', 'Admin systems'],
  ['s', 'Real-time'],
  ['h', 'Loyalty'],
  ['a', 'E‑commerce'],
  ['n', 'RTL UI'],
] as const;
