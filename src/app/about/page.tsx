import type { Metadata } from 'next';
import Image from 'next/image';
import Link from '@/components/Link';
import { about, contact, dontDo, philosophy, site } from '@/data/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Emmanuel Akinfesola is an AI Automation Specialist with a mechanical engineering background, building AI agents, voice systems and connected business workflows.',
};

export default function About() {
  return (
    <>
      <section className="page-hero section--full" aria-labelledby="about-title">
        <div className="page-hero__meta">
          <p className="label mono">About / Profile 001</p>
          <p className="label mono">{site.role}</p>
        </div>
        <h1 id="about-title" className="page-hero__title" data-split="lines" data-intro>How I think about systems.</h1>
        <p className="page-hero__lead" data-reveal data-intro data-delay="0.2">{about.intro}</p>
      </section>

      <section className="section" aria-labelledby="background-title">
        <div className="dossier">
          <div className="dossier__side">
            <p className="label mono">01 / Background</p>
            <p className="dossier__tag">Mechanical Engineering</p>
          </div>
          <div className="dossier__main">
            <h2 id="background-title" className="section__title" data-reveal>Engineering the way I see a problem.</h2>
            <p className="prose">{about.background}</p>
            <p className="prose">{about.thinking}</p>
          </div>
        </div>
        <div className="dossier" style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="dossier__side">
            <p className="label mono">02 / Portrait</p>
            <p className="dossier__tag">Emmanuel Akinfesola</p>
          </div>
          <div className="dossier__main">
            <div className="portrait">
              <Image src={site.portrait} alt="Portrait of Emmanuel Akinfesola, founder of XIS" fill sizes="(max-width: 767px) 100vw, 60vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="philosophy-title">
        <div className="section__head">
          <p className="label mono">03 / Philosophy</p>
          <h2 id="philosophy-title" className="section__title" data-reveal>{about.philosophyLead}</h2>
        </div>
        <ol className="principles">
          {philosophy.map((p, i) => (
            <li key={p.title} data-node>
              <b>0{i + 1}</b>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section" aria-labelledby="direction-title">
        <div className="dossier">
          <div className="dossier__side">
            <p className="label mono">04 / Direction</p>
            <p className="dossier__tag">What comes next</p>
          </div>
          <div className="dossier__main">
            <h2 id="direction-title" className="section__title" data-reveal>Where I am taking the work.</h2>
            <p className="prose">{about.interests}</p>
            <p className="prose">{about.direction}</p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="who-title">
        <div className="dossier">
          <div className="dossier__side">
            <p className="label mono">05 / Collaboration</p>
            <p className="dossier__tag">Who I work with</p>
          </div>
          <div className="dossier__main">
            <h2 id="who-title" className="section__title" data-reveal>Good projects start with a clear problem.</h2>
            <ol className="ledger">
              {about.who.map((w, i) => (
                <li className="ledger__row" key={w} data-node>
                  <span className="ledger__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="ledger__title" style={{ fontSize: 'var(--t-s)', fontFamily: 'var(--f-body)', letterSpacing: 0 }}>{w}</span>
                  <span />
                </li>
              ))}
            </ol>
            <h3 className="dossier__sub" style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>Outside my scope</h3>
            <ul className="ledger" style={{ listStyle: 'none' }}>
              {dontDo.map((d) => <li key={d} className="ledger__text" style={{ padding: '0.5rem 0' }}>{d}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="closing section section--full" aria-labelledby="about-closing-title">
        <p className="label mono">Next / Contact</p>
        <h2 id="about-closing-title" className="closing__title display" data-reveal>{contact.signoff}</h2>
        <div className="closing__actions">
          <Link className="btn" href="/contact">
            <span className="btn__fill" aria-hidden="true" />
            <span className="btn__label">Let’s work together</span>
            <span className="btn__arrow" aria-hidden="true">↗</span>
          </Link>
          <Link href="/work" className="text-link">View my work</Link>
        </div>
      </section>
    </>
  );
}
