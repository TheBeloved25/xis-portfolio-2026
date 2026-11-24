// An honest schematic used only where no product screenshot exists.
// It is a labelled flow, never a decorative dot pattern.
export function Diagram({ seed: _seed, alt }: { seed: number; alt: string }) {
  const labels = ['TRIGGER', 'AI', 'APPS', 'OUT'];
  const xs = [20, 112, 204, 296];

  return (
    <svg className="diagram" viewBox="0 0 400 264" role="img" aria-label={alt} preserveAspectRatio="xMidYMid meet">
      <text x="20" y="34" className="diagram__caption">FIG / SYSTEM SCHEMATIC</text>
      <line x1="20" y1="46" x2="380" y2="46" className="diagram__rule" />
      {xs.map((x, i) => (
        <g key={i}>
          <rect x={x} y={98} width={76} height={54} className={i === 1 ? 'diagram__node is-active' : 'diagram__node'} />
          <text x={x + 38} y={131} textAnchor="middle" className="diagram__label">{labels[i]}</text>
          {i < xs.length - 1 && (
            <line x1={x + 76} y1={125} x2={xs[i + 1]} y2={125} className={i === 1 ? 'diagram__edge is-active' : 'diagram__edge'} />
          )}
        </g>
      ))}
      <line x1="20" y1="176" x2="380" y2="176" className="diagram__rule" />
      <text x="20" y="204" className="diagram__caption">TRIGGER / ROUTE / ACT / FOLLOW UP</text>
      <text x="20" y="238" className="diagram__caption diagram__caption--muted">SCHEMATIC, NOT CLIENT WORK</text>
    </svg>
  );
}
