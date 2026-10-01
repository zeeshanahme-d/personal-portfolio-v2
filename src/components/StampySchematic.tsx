/**
 * Stampy's portals are private and there are no screenshots, so its sheet carries a schematic instead: a line
 * drawing of the Business Owner Portal, built only from what the project notes describe. Numbered markers in the
 * drawing match the key in the caption, which stays readable on a phone where the drawing is small.
 */
const KEY = [
  'Stamp card: nine stamps, the tenth free',
  'Campaign analytics (Recharts)',
  'Branches on a map, each with its QR code',
  'Subscription billing (Stripe Elements)',
];

// Five stamps a row, two rows; the last is the free one.
const STAMPS = Array.from({ length: 10 }, (_, i) => ({ x: 340 + (i % 5) * 80, y: 238 + Math.floor(i / 5) * 76 }));
const BARS = [96, 132, 84, 160, 120, 176, 148];

function Marker({ n, x, y }: { n: number; x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r="14" className="fill-night stroke-snow" strokeWidth="1.25" />
      <text x={x} y={y + 5} textAnchor="middle" className="fill-snow text-[14px] font-medium">
        {n}
      </text>
    </g>
  );
}

export function StampySchematic() {
  const line = 'fill-none stroke-snow/45';
  const faint = 'fill-snow/10';
  return (
    <figure>
      <div className="border border-night-line bg-night-2">
        <svg viewBox="0 0 1200 600" role="img" aria-labelledby="stampy-schematic-title" className="block h-auto w-full">
          <title id="stampy-schematic-title">Schematic of the Stampy Business Owner Portal</title>

          {/* The window: header, sidebar with the portal's sections. */}
          <rect x="40" y="40" width="1120" height="520" rx="10" className={line} strokeWidth="1.5" />
          <line x1="40" y1="96" x2="1160" y2="96" className="stroke-snow/30" />
          <line x1="240" y1="96" x2="240" y2="560" className="stroke-snow/30" />
          <rect x="64" y="58" width="96" height="20" rx="4" className="fill-snow/70" />
          <circle cx="1124" cy="68" r="12" className={line} />
          <rect x="1032" y="62" width="70" height="12" rx="3" className={faint} />
          {Array.from({ length: 7 }, (_, i) => (
            <rect key={i} x="64" y={124 + i * 44} width="152" height="24" rx="5" className={i === 0 ? 'fill-snow/25' : faint} />
          ))}

          {/* 1: the stamp card. */}
          <rect x="288" y="128" width="420" height="236" rx="14" className={line} strokeWidth="1.5" />
          <rect x="316" y="152" width="150" height="14" rx="3" className="fill-snow/60" />
          <rect x="316" y="176" width="210" height="10" rx="3" className={faint} />
          {STAMPS.map(({ x, y }, i) =>
            i < 9 ? (
              <circle key={i} cx={x} cy={y} r="22" className="fill-snow/85" />
            ) : (
              <g key={i}>
                <circle cx={x} cy={y} r="22" className="fill-none stroke-accent-bright" strokeWidth="1.5" strokeDasharray="4 4" />
                <text x={x} y={y + 4} textAnchor="middle" className="fill-accent-bright text-[11px] font-semibold tracking-wider">
                  FREE
                </text>
              </g>
            ),
          )}

          {/* 2: campaign analytics. */}
          <rect x="740" y="128" width="396" height="236" rx="10" className={line} />
          <rect x="764" y="152" width="120" height="12" rx="3" className={faint} />
          <line x1="764" y1="340" x2="1112" y2="340" className="stroke-snow/30" />
          {BARS.map((h, i) => (
            <rect key={i} x={776 + i * 48} y={340 - h} width="26" height={h} rx="3" className={i === 5 ? 'fill-snow/80' : 'fill-snow/30'} />
          ))}

          {/* 3: branches on a map, with the branch's QR code. */}
          <rect x="288" y="388" width="420" height="148" rx="10" className={line} />
          {[420, 460, 500].map((y) => (
            <line key={y} x1="300" y1={y} x2="580" y2={y} className="stroke-snow/12" />
          ))}
          {[340, 400, 460, 520].map((x) => (
            <line key={x} x1={x} y1="400" x2={x} y2="524" className="stroke-snow/12" />
          ))}
          <path d="M430 476c-14-16-22-28-22-40a22 22 0 0 1 44 0c0 12-8 24-22 40z" className="fill-snow/80" />
          <circle cx="430" cy="436" r="7" className="fill-night-2" />
          <rect x="604" y="408" width="84" height="84" className={line} />
          {[
            [612, 416],
            [662, 416],
            [612, 466],
          ].map(([x, y]) => (
            <rect key={`${x}${y}`} x={x} y={y} width="18" height="18" className="fill-snow/80" />
          ))}
          {[
            [642, 420],
            [652, 440],
            [640, 452],
            [664, 448],
            [656, 470],
            [672, 478],
            [644, 480],
          ].map(([x, y]) => (
            <rect key={`${x}${y}`} x={x} y={y} width="8" height="8" className="fill-snow/60" />
          ))}

          {/* 4: subscription billing. */}
          <rect x="740" y="388" width="396" height="148" rx="10" className={line} />
          <rect x="768" y="414" width="150" height="94" rx="10" className={line} />
          <rect x="784" y="436" width="28" height="20" rx="3" className="fill-snow/40" />
          <rect x="784" y="478" width="100" height="8" rx="2" className={faint} />
          <rect x="944" y="420" width="160" height="12" rx="3" className="fill-snow/60" />
          <rect x="944" y="444" width="120" height="10" rx="3" className={faint} />
          <rect x="944" y="476" width="160" height="34" rx="6" className="fill-snow/25" />

          <Marker n={1} x={288} y={128} />
          <Marker n={2} x={740} y={128} />
          <Marker n={3} x={288} y={388} />
          <Marker n={4} x={740} y={388} />
        </svg>
      </div>
      <figcaption className="mt-3 text-(length:--text-xs) text-snow-3">
        <span className="tracking-[0.08em] uppercase">Fig. W-02.1 / Schematic of the Business Owner Portal</span>, drawn
        because the portals are private.
        <ol className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-snow-2">
          {KEY.map((k, i) => (
            <li key={k}>
              <span className="text-snow-3 tabular-nums">{i + 1}</span> {k}
            </li>
          ))}
        </ol>
      </figcaption>
    </figure>
  );
}
