import type { Metadata } from 'next';
import Link from 'next/link';
import { about, contact, dontDo, hero, philosophy, site, stack } from '@/data/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Emmanuel is an AI Automation Specialist with a mechanical engineering background, building AI agents, voice systems and connected business workflows.',
};

export default function About() {
  return (
    <>
      <section className="page-hero section--full" aria-labelledby="about-title">
        <div className="page-hero__meta">
          <p className="label mono">About / Profile</p>
          <p className="label mono">{site.role}</p>
        </div>
        <h1 id="about-title" className="page-hero__title display" data-split="lines" data-intro>How I think about systems.</h1>
        <p className="page-hero__lead" data-reveal data-intro data-delay="0.2">{about.intro}</p>
      </section>

      <section className="about-block section" aria-labelledby="background-title">
        <div className="about-block__side">
          <p className="label mono">01 / Background</p>
          <p className="about-block__tag">Mechanical Engineering</p>
        </div>
        <div className="about-block__main">
          <h2 id="background-title" className="section__title" data-split="lines">Engineering the way I see a problem.</h2>
          <p className="prose">{about.background}</p>
          <p className="prose">{about.thinking}</p>
        </div>
      </section>

      <section className="about-block section" aria-labelledby="interests-title">
        <div className="about-block__side">
          <p className="label mono">02 / Interests</p>
          <p className="about-block__tag">Connected systems</p>
        </div>
        <div className="about-block__main">
          <h2 id="interests-title" className="section__title" data-split="lines">Where the technologies meet.</h2>
          <p className="prose">{about.interests}</p>
          <p className="prose">{about.direction}</p>
        </div>
      </section>

      <section className="philosophy section" aria-labelledby="philosophy-title">
        <div className="section__head">
          <p className="label mono">03 / Philosophy</p>
          <h2 id="philosophy-title" className="section__title" data-split="lines">{about.philosophyLead}</h2>
        </div>
        <ol className="philosophy__grid">
          {philosophy.map((p, i) => (
            <li className="philosophy__item" key={p.title} data-node>
              <span className="philosophy__num mono">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="philosophy__title">{p.title}</h3>
              <p className="philosophy__text">{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-block section" aria-labelledby="stack-title">
        <div className="about-block__side">
          <p className="label mono">04 / Capabilities</p>
          <p className="about-block__tag">Technical stack</p>
        </div>
        <div className="about-block__main">
          <h2 id="stack-title" className="section__title" data-split="lines">What I build with.</h2>
          <div className="stack__grid">
            {stack.map((group) => (
              <div className="stack__group" key={group.name} data-node>
                <h3 className="stack__name mono">{group.name}</h3>
                <ul className="stack__items">{group.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-block section" aria-labelledby="who-title">
        <div className="about-block__side">
          <p className="label mono">05 / Collaboration</p>
          <p className="about-block__tag">Who I work with</p>
        </div>
        <div className="about-block__main">
          <h2 id="who-title" className="section__title" data-split="lines">Good projects start with a clear problem.</h2>
          <ul className="who__list">
            {about.who.map((w) => <li key={w} data-node><span className="node-dot" aria-hidden="true" />{w}</li>)}
          </ul>
          <h3 className="about-block__sub">Outside my scope</h3>
          <ul className="who__list who__list--muted">
            {dontDo.map((d) => <li key={d}>{d}</li>)}
          </ul>
        </div>
      </section>

      <section className="closing section section--full" aria-labelledby="about-closing-title">
        <p className="label mono">Next / Contact</p>
        <h2 id="about-closing-title" className="closing__title display" data-split="lines">{contact.signoff}</h2>
        <div className="closing__actions">
          <Link className="btn" href="/contact">
            <span className="btn__fill" aria-hidden="true" />
            <span className="btn__label">{hero.cta}</span>
            <span className="btn__arrow" aria-hidden="true">↗</span>
          </Link>
          <Link href="/work" className="text-link">{hero.secondary}</Link>
        </div>
      </section>
    </>
  );
}
