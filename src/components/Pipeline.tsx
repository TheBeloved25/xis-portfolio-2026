import type { CSSProperties } from 'react';
import { hero } from '@/data/site';

const thresholds = [0.18, 0.42, 0.68, 0.92];

export function Pipeline() {
  return (
    <div className="pipeline" data-pipeline>
      <div className="pipeline__head mono">
        <span><span className="live-dot" aria-hidden="true" /> Pipeline / live</span>
        <span>Run 001</span>
      </div>
      <div className="pipeline__body">
        <div className="pipeline__track" aria-hidden="true">
          <span className="pipeline__rail" />
          <span className="pipeline__flow" />
          <span className="pipeline__pulse" />
        </div>
        <ol className="pipeline__nodes">
          {hero.nodes.map((node, i) => (
            <li
              key={node.id}
              className="pnode"
              data-node
              data-at={thresholds[i]}
              style={{ '--i': i } as CSSProperties}
            >
              <span className="pnode__dot" aria-hidden="true" />
              <span className="pnode__id mono">{node.id}</span>
              <span className="pnode__label">{node.label}</span>
            </li>
          ))}
        </ol>
      </div>
      <p className="pipeline__foot mono">One run, from first trigger to last follow up.</p>
    </div>
  );
}
