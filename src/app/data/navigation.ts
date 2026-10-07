/** The header's links, in page order. Each id is a section's id. */
export const NAV = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
] as const;

export const NAV_IDS = NAV.map((item) => item.id);
