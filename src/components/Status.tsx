import { statusLabels, type ProjectStatus } from '@/data/site';

export function Status({ value }: { value: ProjectStatus }) {
  return (
    <span className={`status status--${value} mono`} data-node>
      <span className="status__dot" aria-hidden="true" />
      {statusLabels[value]}
    </span>
  );
}
