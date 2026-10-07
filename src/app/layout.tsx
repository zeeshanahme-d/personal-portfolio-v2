import type { Metadata, Viewport } from 'next';
import { SiteFooter } from '@/app/components/footer/SiteFooter';
import { SiteHeader } from '@/app/components/header/SiteHeader';
import { SkipLink } from '@/app/components/SkipLink';
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL, THEME_COLOR } from '@/app/data/site';
import { themeScript } from '@/app/lib/theme';
import './styles/globals.css';

// Site-wide only. The home page adds its canonical URL and share cards (page.tsx), so the 404 page doesn't inherit them.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: { icon: { url: '/favicon.svg', type: 'image/svg+xml' } },
};

export const viewport: Viewport = {
  // The light page colour; themeScript and setTheme (lib/theme.ts) switch it for the dark theme.
  themeColor: THEME_COLOR.light,
  colorScheme: 'light dark',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    // suppressHydrationWarning: themeScript sets data-theme on <html> before React hydrates.
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Applies the saved theme (or the system one) before first paint, so a reload never flashes. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* The text and headline fonts (styles/fonts.css), preloaded so neither paints in a fallback face first.
            Plain links: ReactDOM.preload in a Server Component only reaches the browser after hydration. */}
        <link rel="preload" href="/fonts/mona-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/besley.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      {/* A full-height column, so a short page (the 404) still ends on the footer, not on a band of page colour. */}
      <body className="flex min-h-svh flex-col">
        <SkipLink />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
