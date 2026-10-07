import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
    // The CSS (Tailwind, about 11 KB gzipped) arrives in the HTML instead of as a render-blocking request. Right
    // for a one-page site seen mostly by first-time visitors; returning visitors re-download it with the page.
    inlineCss: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    // Pinned to this folder, so a lockfile in a parent folder (like the old Vite app's) can't become the root.
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [
      {
        // Fonts are preloaded. With the default max-age=0, a repeat visit revalidates them and Chrome fetches each
        // twice (preload, then CSS). Cached for a year instead, so a changed font needs a new file name.
        source: "/fonts/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
