/** The survey contour behind the name: one of the hero's four planes, drawn in on load. Decorative. */
export function HeroContour() {
  return (
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="hero-contour absolute top-[calc(var(--callouts)+var(--name-h)*0.1)] left-0 h-[calc(var(--name-h)*0.45)] w-full overflow-visible"
    >
      <path
        pathLength={1}
        vectorEffect="non-scaling-stroke"
        strokeWidth={1}
        className="fill-none stroke-ink-3 opacity-60"
        d="M0 80L23 77L45 76L68 73L90 70L113 70L135 69L158 65L180 64L203 64L225 62L248 62L270 63L293 65L315 65L338 67L360 66L383 66L405 66L428 68L450 67L473 65L495 62L518 63L540 62L563 58L585 56L608 54L630 54L653 53L675 54L698 52L720 52L743 54L765 54L788 54L810 54L833 54L855 53L878 53L900 53L923 52L945 52L968 49L990 47L1013 44L1035 40L1058 37L1080 34L1103 32L1125 29L1148 30L1170 30L1193 27L1215 27L1238 27L1260 27L1283 27L1305 28L1328 28L1350 28L1373 27L1395 26L1418 23L1440 22"
      />
    </svg>
  );
}
