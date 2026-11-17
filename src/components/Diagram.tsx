// Honest schematic cover: a seeded workflow diagram, not a fake screenshot.
type Props = { seed: number; alt: string };

function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a += 0x6d2b79f5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function Diagram({ seed, alt }: Props) {
  const next = rng(seed);
  const cols = 4;
  const rows = 3;
  const points = Array.from({ length: cols * rows }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    return {
      x: 48 + col * 101 + (next() - 0.5) * 26,
      y: 46 + row * 84 + (next() - 0.5) * 22,
      r: 4 + next() * 3,
    };
  });
  const edges: [number, number][] = [];
  for (let i = 0; i < points.length - 1; i++) {
    if (i % cols !== cols - 1 || next() > 0.4) edges.push([i, i + 1]);
    if (next() > 0.55 && i + cols < points.length) edges.push([i, i + cols]);
  }
  edges.push([0, 5], [6, 11]);

  return (
    <svg className="diagram" viewBox="0 0 400 264" role="img" aria-label={alt} preserveAspectRatio="xMidYMid meet">
      <g className="diagram__edges">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={points[a].x}
            y1={points[a].y}
            x2={points[b].x}
            y2={points[b].y}
            className={i % 4 === 0 ? 'is-live' : undefined}
          />
        ))}
      </g>
      <g className="diagram__nodes">
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={p.r} className={i === 0 ? 'is-entry' : i === points.length - 1 ? 'is-exit' : undefined} />
        ))}
      </g>
      <text x="20" y="252" className="diagram__label">IN</text>
      <text x="352" y="252" className="diagram__label">OUT</text>
    </svg>
  );
}
