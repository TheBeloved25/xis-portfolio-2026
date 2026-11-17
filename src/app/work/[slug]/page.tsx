import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Cover } from '@/components/Cover';
import { Status } from '@/components/Status';
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

export default async function CaseStudy({ params }: PageProps<'/work/[slug]'>) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  return (
    <article className="case">
      <header className="case__hero section--full">
        <div className="case__meta">
          <p className="label mono">{p.code} / {p.category}</p>
          <Status value={p.status} />
        </div>
        <h1 className="case__title display" data-split="lines" data-intro>{p.title}</h1>
        <p className="case__summary" data-reveal data-intro data-delay="0.2">{p.summary}</p>
        <div className="case__cover" data-reveal data-intro data-delay="0.3">
          <Cover cover={p.cover} priority />
        </div>
      </header>

      <section className="case__section section" aria-labelledby="overview-title">
        <div className="case__label mono">01 / Overview</div>
        <div className="case__content">
          <h2 id="overview-title" className="section__title" data-split="lines">What this system does.</h2>
          <p className="prose">{p.overview}</p>
        </div>
      </section>

      <section className="case__section section" aria-labelledby="challenge-title">
        <div className="case__label mono">02 / Problem</div>
        <div className="case__content">
          <h2 id="challenge-title" className="section__title" data-split="lines">The work it replaces.</h2>
          <p className="prose">{p.challenge}</p>
        </div>
      </section>

      <section className="case__section section" aria-labelledby="solution-title">
        <div className="case__label mono">03 / Solution</div>
        <div className="case__content">
          <h2 id="solution-title" className="section__title" data-split="lines">How it is put together.</h2>
          <p className="prose">{p.solution}</p>
          <ul className="case__caps">
            {p.capabilities.map((c) => <li key={c} data-node>{c}</li>)}
          </ul>
        </div>
      </section>

      <section className="case__section section" aria-labelledby="stack-title">
        <div className="case__label mono">04 / Stack & contribution</div>
        <div className="case__content">
          <h2 id="stack-title" className="section__title" data-split="lines">Tools and my role.</h2>
          <p className="mono case__stack">{p.stack.join(' · ')}</p>
          {p.platforms && <p className="mono case__stack">Channels: {p.platforms.join(' · ')}</p>}
          <p className="prose">{p.contribution}</p>
        </div>
      </section>

      <section className="case__section section" aria-labelledby="outcome-title">
        <div className="case__label mono">05 / Outcome</div>
        <div className="case__content">
          <h2 id="outcome-title" className="section__title" data-split="lines">Where it stands.</h2>
          <p className="prose case__outcome">{p.outcome}</p>
          {p.verify && (
            <p className="case__verify mono">Status to be confirmed with the owner before publication.</p>
          )}
        </div>
      </section>

      <section className="case__next section section--full" aria-labelledby="next-title">
        <p className="label mono">Next system</p>
        <Link href={`/work/${next.slug}`} className="case__next-link" data-cursor="Next">
          <span id="next-title" className="case__next-title">{next.title}</span>
          <span className="case__next-arrow" aria-hidden="true">↗</span>
        </Link>
      </section>
    </article>
  );
}
