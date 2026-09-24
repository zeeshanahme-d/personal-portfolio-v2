// Technology marks for the About stack. The paths live in public/marks.svg, a sprite that is cached like
// an image and kept out of the JS bundle; here is only each mark's sprite id and brand colour.
// Source: simple-icons (CC0-1.0). Brand names and logos belong to their owners.

export const marks: Record<string, { id: string; hex: string }> = {
  "React": { id: 'react', hex: '61DAFB' },
  "Next.js": { id: 'next-js', hex: '000000' },
  "TypeScript": { id: 'typescript', hex: '3178C6' },
  "JavaScript": { id: 'javascript', hex: 'F7DF1E' },
  "TanStack Query": { id: 'tanstack-query', hex: 'FF4154' },
  "Redux Toolkit": { id: 'redux-toolkit', hex: '764ABC' },
  "React Hook Form": { id: 'react-hook-form', hex: 'EC5990' },
  "Socket.io": { id: 'socket-io', hex: '010101' },
  "Tailwind CSS": { id: 'tailwind-css', hex: '06B6D4' },
  "Ant Design": { id: 'ant-design', hex: '0170FE' },
  "MUI": { id: 'mui', hex: '007FFF' },
  "shadcn/ui": { id: 'shadcn-ui', hex: '000000' },
  "Jest": { id: 'jest', hex: 'C21325' },
  "Testing Library": { id: 'testing-library', hex: 'E33332' },
  "ESLint": { id: 'eslint', hex: '4B32C3' },
  "Vite": { id: 'vite', hex: '9135FF' },
  "Git": { id: 'git', hex: 'F03C2E' },
  "Vercel": { id: 'vercel', hex: '000000' },
};
