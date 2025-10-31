# Portfolio - React Vite Project

This is a React portfolio project converted from Next.js to Vite.

## Features

- ⚡ Vite for fast development and building
- ⚛️ React 18 with modern hooks
- 🎨 Framer Motion for animations
- 🎯 React Router for navigation
- 🎨 SCSS for styling
- 🎨 React Icons for icons
- 🎨 Particles.js for background effects

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx
│   ├── NavBar.jsx
│   ├── Transition.jsx
│   ├── ParticlesContainer.js
│   └── ...
├── sections/           # Page sections
│   ├── home/
│   ├── about/
│   ├── services/
│   ├── work/
│   └── contact/
├── context/            # React Context
├── hooks/              # Custom hooks
├── utils/              # Utility functions
├── App.jsx             # Main App component
├── AppWrapper.jsx      # App wrapper component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Key Changes from Next.js

1. **Routing**: Converted from Next.js App Router to React Router
2. **Images**: Replaced Next.js `Image` component with standard HTML `img` tags
3. **Links**: Updated from Next.js `Link` to React Router `Link`
4. **Fonts**: Moved Google Fonts to HTML head instead of Next.js font optimization
5. **Build System**: Switched from Next.js to Vite for faster builds

## Development

The project uses Vite for development, which provides:
- Fast Hot Module Replacement (HMR)
- Optimized builds
- Modern ES modules support
- Built-in TypeScript support

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.