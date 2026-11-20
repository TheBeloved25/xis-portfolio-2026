import Link from '@/components/Link';
import { projects, statusLabels, type ProjectStatus } from '@/data/site';
import { Cover } from './Cover';

// Editorial figure wall. The first entry is full width, the rest alternate half / offset.
export function WorkList({ limit, statuses }: { limit?: number; statuses?: ProjectStatus[] }) {
  let list = projects;
  if (statuses) list = list.filter((p) => statuses.includes(p.status));
  if (limit) list = list.slice(0, limit);

  return (
    <ol className="figures">
      {list.map((p, i) => (
        <li
          key={p.slug}
          className={`workfig ${i === 0 ? '' : i % 3 === 1 ? 'workfig--half' : 'workfig--offset'}`}
          data-node
        >
          <div className="workfig__head">
            <span className="figure__id">Fig. {String(i + 1).padStart(2, '0')} / {p.category}</span>
            <span className={`status status--${p.status}`}>
              <span className="status__dot" aria-hidden="true" />{statusLabels[p.status]}
            </span>
          </div>
          <Link href={`/work/${p.slug}`} className="workfig__link" data-cursor="Open">
            <div className="workfig__media"><Cover cover={p.cover} /></div>
            <h3 className="workfig__title">{p.title}</h3>
            <p className="workfig__summary">{p.summary}</p>
            <div className="workfig__foot">
              <span>{p.stack.slice(0, 4).join(' / ')}</span>
              <span className="workfig__arrow" aria-hidden="true">↗</span>
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}
