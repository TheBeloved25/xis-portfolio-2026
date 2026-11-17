import Link from 'next/link';
import { projects, type ProjectStatus } from '@/data/site';
import { Status } from './Status';
import { Cover } from './Cover';

export function WorkList({
  limit,
  statuses,
  showDiagram = false,
}: {
  limit?: number;
  statuses?: ProjectStatus[];
  showDiagram?: boolean;
}) {
  let list = projects;
  if (statuses) list = list.filter((p) => statuses.includes(p.status));
  if (limit) list = list.slice(0, limit);

  return (
    <ol className="work-list">
      {list.map((p) => (
        <li key={p.slug} className="work-row" data-node>
          <Link href={`/work/${p.slug}`} className="work-row__link" data-cursor="Open">
            <span className="work-row__code mono">{p.code}</span>
            {showDiagram && (
              <span className="work-row__preview" aria-hidden="true">
                <Cover cover={p.cover} />
              </span>
            )}
            <span className="work-row__main">
              <span className="work-row__title">{p.title}</span>
              <span className="work-row__summary">{p.summary}</span>
              <span className="work-row__category mono">{p.category}</span>
            </span>
            <span className="work-row__stack mono">{p.stack.slice(0, 3).join(' / ')}</span>
            <Status value={p.status} />
            <span className="work-row__arrow" aria-hidden="true">↗</span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
