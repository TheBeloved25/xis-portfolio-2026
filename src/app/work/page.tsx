import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { WorkList } from '@/components/WorkList';
import { hero, labs, statusLabels, type ProjectStatus } from '@/data/site';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected AI automation, AI agent, voice AI and backend projects by Emmanuel. Each case study shows the problem, the architecture and the status.',
};

const groups: { status: ProjectStatus; label: string; note: string }[] = [
  { status: 'delivered', label: 'Delivered', note: 'Completed work with a clear scope and outcome.' },
  { status: 'in-progress', label: 'In progress', note: 'Builds under way or awaiting final delivery confirmation.' },
  { status: 'scoped', label: 'Scoped', note: 'Designed and specified. Not built, no outcome claimed.' },
];

export default function Work() {
  return (
    <>
      <section className="page-hero section--full" aria-labelledby="work-title">
        <div className="page-hero__meta">
          <p className="label mono">Work / Index</p>
          <p className="label mono">{statusLabels.delivered} · {statusLabels['in-progress']} · {statusLabels.scoped}</p>
        </div>
        <h1 id="work-title" className="page-hero__title display" data-split="lines" data-intro>Every system has a status.</h1>
        <p className="page-hero__lead" data-reveal data-intro data-delay="0.2">
          Projects are described by the problem, the architecture and the role of each component. Delivery status is shown honestly, including work still in progress and work only scoped.
        </p>
      </section>

      {groups.map((group) => (
        <section className="work-group section" key={group.status} aria-labelledby={`group-${group.status}`}>
          <div className="section__head">
            <p className="label mono">{group.label}</p>
            <h2 id={`group-${group.status}`} className="section__title" data-split="lines">{group.label} work.</h2>
            <p className="section__note">{group.note}</p>
          </div>
          <WorkList statuses={[group.status]} showDiagram />
        </section>
      ))}

      <section className="labs section" aria-labelledby="labs-title">
        <div className="section__head">
          <p className="label mono">Labs / From the workbench</p>
          <h2 id="labs-title" className="section__title" data-split="lines">Builds, experiments and things I am testing.</h2>
          <p className="section__note">Shown as builds, not as finished client work. Captions describe what is on screen; no result is claimed.</p>
        </div>
        <div className="labs__grid">
          {labs.map((lab) => (
            <figure className="lab" key={lab.title} data-node>
              <div className="lab__image">
                <Image src={lab.src} alt={lab.alt} fill sizes="(max-width: 767px) 100vw, 33vw" style={{ objectFit: 'cover' }} loading="lazy" />
              </div>
              <figcaption className="lab__caption">
                <span className="lab__title">{lab.title}</span>
                <span className="lab__note">{lab.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="closing section section--full" aria-labelledby="work-closing-title">
        <p className="label mono">End of index</p>
        <h2 id="work-closing-title" className="closing__title display" data-split="lines">Have a process worth improving?</h2>
        <div className="closing__actions">
          <Link className="btn" href="/contact">
            <span className="btn__fill" aria-hidden="true" />
            <span className="btn__label">{hero.cta}</span>
            <span className="btn__arrow" aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
