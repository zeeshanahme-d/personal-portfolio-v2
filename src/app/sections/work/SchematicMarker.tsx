/** A numbered marker in the Stampy schematic, matched by the key in its caption. */
export function SchematicMarker({ n, x, y }: { n: number; x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r="14" className="fill-night stroke-snow" strokeWidth="1.25" />
      <text x={x} y={y + 5} textAnchor="middle" className="fill-snow text-[14px] font-medium">
        {n}
      </text>
    </g>
  );
}
