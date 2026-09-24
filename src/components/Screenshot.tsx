import type { Screenshot as ScreenshotData } from '../content';

type Props = {
  image: ScreenshotData;
  /** Rendered width, passed to `sizes` so the browser picks the 800w or 1600w file. */
  sizes: string;
  className?: string;
};

export function Screenshot({ image, sizes, className }: Props) {
  // A full path ('/work/x.png') is one file; a base name has 800w and 1600w WebP versions.
  const single = image.src.startsWith('/');
  const base = `/work/${image.src}`;
  return (
    <img
      src={single ? image.src : `${base}-1600.webp`}
      srcSet={single ? undefined : `${base}-800.webp 800w, ${base}-1600.webp 1600w`}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={image.alt}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}
