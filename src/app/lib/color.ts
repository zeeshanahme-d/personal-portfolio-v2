/** Rough perceived brightness of a hex colour ('61DAFB'), 0–255. */
export const brightness = (hex: string) => {
  const n = parseInt(hex, 16);
  return 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255);
};
