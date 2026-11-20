import Link from '@/components/Link';
import { projects, statusLabels, type ProjectStatus } from '@/data/site';
import { Cover } from './Cover';

export function WorkIndexList({ statuses }: { statuses?: ProjectStatus[] }) {
  const list = statuses ? projects.filter((p) => statuses.includes(p.status)) : projects;
  return (
    <ol className="work-index">
      {list.map((p) => (
        <li className="work-index__row" key={p.slug} data-node>
          <Link href={`/work/${p.slug}`} className="work-index__link" data-cursor="Open">
            <span className="work-index__code">{p.code}</span>
            <span className="work-index__thumb"><Cover cover={p.cover} /></span>
            <span className="work-index__title">{p.title}<br /><small className="mono">{p.category}</small></span>
            <span className={`status work-index__status status--${p.status}`}>
              <span className="status__dot" aria-hidden="true" />{statusLabels[p.status]}
            </span>
            <span className="work-index__arrow" aria-hidden="true">↗</span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
