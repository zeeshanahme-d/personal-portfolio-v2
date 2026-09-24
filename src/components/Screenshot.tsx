import type { Screenshot as ScreenshotData } from '../content';

type Props = {
  image: ScreenshotData;
  /** Rendered width, passed to `sizes` so the browser picks the 800w or 1600w file. */
  sizes: string;
  className?: string;
};

export function Screenshot({ image, sizes, className }: Props) {
  const base = `/work/${image.src}`;
  return (
    <img
      src={`${base}-1600.webp`}
      srcSet={`${base}-800.webp 800w, ${base}-1600.webp 1600w`}
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
