import type { Metadata } from 'next';
import Image from 'next/image';
import Link from '@/components/Link';
import { WorkIndexList } from '@/components/WorkIndexList';
import { contact, labs, statusLabels, type ProjectStatus } from '@/data/site';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected AI automation, AI agent, voice AI and backend projects by Emmanuel Akinfesola. Each entry shows the problem, the system and its delivery status.',
};

const groups: { status: ProjectStatus; note: string }[] = [
  { status: 'delivered', note: 'Completed work with a defined scope and outcome.' },
  { status: 'in-progress', note: 'Builds under way or awaiting final delivery confirmation.' },
  { status: 'scoped', note: 'Designed and specified. Not built, no outcome claimed.' },
];

export default function Work() {
  return (
    <>
      <section className="page-hero section--full" aria-labelledby="work-title">
        <div className="page-hero__meta">
          <p className="label mono">Work / Index 002</p>
          <p className="label mono">Delivered · In progress · Scoped</p>
        </div>
        <h1 id="work-title" className="page-hero__title" data-split="lines" data-intro>Every system has a status.</h1>
        <p className="page-hero__lead" data-reveal data-intro data-delay="0.2">
          Projects are described by the problem, the architecture and the role of each component. Work still in progress and work only scoped is labelled as such.
        </p>
      </section>

      {groups.map((group) => (
        <section className="section" key={group.status} aria-labelledby={`group-${group.status}`}>
          <div className="section__head">
            <p className="label mono">{statusLabels[group.status]}</p>
            <h2 id={`group-${group.status}`} className="section__title" data-reveal>{statusLabels[group.status]} work.</h2>
            <p className="section__note">{group.note}</p>
          </div>
          <WorkIndexList statuses={[group.status]} />
        </section>
      ))}

      <section className="section" aria-labelledby="labs-title">
        <div className="section__head">
          <p className="label mono">Labs / From the workbench</p>
          <h2 id="labs-title" className="section__title" data-reveal>Builds and experiments.</h2>
          <p className="section__note">Shown as builds, not as finished client work. Captions describe what is on screen; no result is claimed.</p>
        </div>
        <ul className="labs">
          {labs.map((lab) => (
            <li className="lab" key={lab.title} data-node>
              <div className="lab__media">
                <Image src={lab.src} alt={lab.alt} fill sizes="(max-width: 767px) 100vw, 33vw" style={{ objectFit: 'cover' }} loading="lazy" />
              </div>
              <h3>{lab.title}</h3>
              <p>{lab.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="closing section section--full" aria-labelledby="work-closing-title">
        <p className="label mono">End of index</p>
        <h2 id="work-closing-title" className="closing__title display" data-reveal>Have a process worth improving?</h2>
        <div className="closing__actions">
          <Link className="btn" href="/contact">
            <span className="btn__fill" aria-hidden="true" />
            <span className="btn__label">Let’s work together</span>
            <span className="btn__arrow" aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
