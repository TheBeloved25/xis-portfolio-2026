import type { Metadata } from 'next';
import Link from '@/components/Link';
import { notFound } from 'next/navigation';
import { Cover } from '@/components/Cover';
import { projects, statusLabels } from '@/data/site';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: PageProps<'/work/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  const summary = p.summary.length > 110 ? `${p.summary.slice(0, 107).trimEnd()}…` : p.summary;
  return { title: p.title, description: `${p.title}: ${summary} Status: ${statusLabels[p.status]}.` };
}

const rows = [
  { key: 'Context', get: (p: (typeof projects)[number]) => p.overview },
  { key: 'Problem', get: (p: (typeof projects)[number]) => p.challenge },
  { key: 'Solution', get: (p: (typeof projects)[number]) => p.solution },
  { key: 'Contribution', get: (p: (typeof projects)[number]) => p.contribution },
  { key: 'Outcome', get: (p: (typeof projects)[number]) => p.outcome },
];

export default async function CaseStudy({ params }: PageProps<'/work/[slug]'>) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  return (
    <article className="case">
      <header className="case__hero">
        <div className="case__meta">
          <p className="label mono">{p.code} / {p.category}</p>
          <span className={`status status--${p.status}`}><span className="status__dot" aria-hidden="true" />{statusLabels[p.status]}</span>
        </div>
        <h1 className="case__title" data-split="lines" data-intro>{p.title}</h1>
        <p className="case__summary" data-reveal data-intro data-delay="0.2">{p.summary}</p>
        <div className="case__cover" data-reveal data-intro data-delay="0.3">
          <Cover cover={p.cover} priority />
        </div>
      </header>

      {rows.map((row, n) => (
        <section className="section case__row" key={row.key} aria-label={row.key}>
          <div className="case__key">{String(n + 1).padStart(2, '0')} / {row.key}</div>
          <div className="case__value">
            <h2 className="section__title" data-reveal>{row.key === 'Context' ? 'What this system does.' : row.key === 'Problem' ? 'The work it replaces.' : row.key === 'Solution' ? 'How it is put together.' : row.key === 'Contribution' ? 'My role in the build.' : 'Where it stands.'}</h2>
            <p className="prose">{row.get(p)}</p>
            {row.key === 'Solution' && (
              <ul className="case__caps">{p.capabilities.map((c) => <li key={c} data-node>{c}</li>)}</ul>
            )}
            {row.key === 'Contribution' && (
              <p className="mono" style={{ marginTop: '1.5rem', color: 'var(--c-muted)', lineHeight: 1.9 }}>
                {p.stack.join(' · ')}{p.platforms?.length ? ` / ${p.platforms.join(' · ')}` : ''}
              </p>
            )}
            {p.verify && row.key === 'Outcome' && (
              <p className="mono" style={{ marginTop: '1.5rem', color: 'var(--c-accent)' }}>Status to be confirmed with the owner before publication.</p>
            )}
          </div>
        </section>
      ))}

      <section className="case__next section section--full" aria-label="Next project">
        <p className="label mono">Next entry</p>
        <Link href={`/work/${next.slug}`} className="case__next-link" data-cursor="Next">
          <span className="case__next-title">{next.title}</span>
          <span className="case__next-arrow" aria-hidden="true">↗</span>
        </Link>
      </section>
    </article>
  );
}
