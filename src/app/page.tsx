import Link from '@/components/Link';
import { HeroFigure } from '@/components/HeroFigure';
import { WorkList } from '@/components/WorkList';
import { approach, contact, hero, industries, introduction, services, site, stack, testimonials } from '@/data/site';

export default function Home() {
  const core = services.filter((s) => s.core);
  const depth = services.filter((s) => !s.core);

  return (
    <>
      <section className="hero section--full" aria-labelledby="hero-title">
        <div className="hero__top">
          <p className="label">{site.pillars}</p>
          <p className="label label--right mono">XIS / System 001</p>
        </div>
        <div className="hero__grid">
          <div className="hero__copy">
            <h1 id="hero-title" className="display" data-split="lines" data-intro>{hero.headline}</h1>
            <p className="hero__intro">{hero.intro}</p>
            <div className="hero__actions" data-reveal data-intro data-delay="0.25">
              <Link className="btn" href="/contact">
                <span className="btn__fill" aria-hidden="true" />
                <span className="btn__label">Let’s work together</span>
                <span className="btn__arrow" aria-hidden="true">↗</span>
              </Link>
              <Link href="/work" className="text-link">View my work</Link>
            </div>
          </div>
          <div className="hero__aside">
            <HeroFigure />
          </div>
        </div>
        <div className="hero__bottom">
          <p className="label mono">Scroll to run the trace</p>
          <p className="label mono">01 / 08</p>
        </div>
      </section>

      <section className="intro section" aria-labelledby="intro-title">
        <p className="label mono">01 / Approach</p>
        <h2 id="intro-title" className="intro__title" data-reveal>{introduction.heading}</h2>
        <p className="intro__margin">{introduction.note}<br /><br />Work is scoped, built in milestones, tested against real scenarios and handed over with documentation.</p>
      </section>

      <section className="section" aria-labelledby="services-title">
        <div className="section__head">
          <p className="label mono">02 / Specialisations</p>
          <h2 id="services-title" className="section__title" data-reveal>Four disciplines, one connected practice.</h2>
          <p className="section__note">Each engagement starts with the process, not the tool. The stack follows the problem.</p>
        </div>
        <ol className="specs">
          {core.map((s) => (
            <li className="spec" key={s.code} data-node>
              <span className="spec__num mono">{s.code}</span>
              <h3 className="spec__title">{s.title}</h3>
              <p className="spec__tagline">{s.tagline}</p>
              <div className="spec__body">
                <p className="spec__text">{s.text}</p>
                <ul className="spec__caps">{s.capabilities.slice(0, 4).map((c) => <li key={c}>{c}</li>)}</ul>
              </div>
              <p className="spec__tools">{s.technologies.join(' · ')}</p>
            </li>
          ))}
        </ol>
        <div className="capabilities">
          <p className="capabilities__label">Additional capabilities</p>
          <ul className="capabilities__grid">
            {depth.map((s) => (
              <li key={s.code} data-node>
                <b>{s.code}</b>
                <span>{s.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="work" aria-labelledby="work-title">
        <div className="section__head">
          <p className="label mono">03 / Selected work</p>
          <h2 id="work-title" className="section__title" data-reveal>Systems, shown as they were built.</h2>
          <p className="section__note">Real workflows and implementation notes. Delivery status is stated on every entry.</p>
        </div>
        <WorkList statuses={['delivered']} limit={4} />
        <div style={{ marginTop: 'clamp(2rem, 4vw, 3.5rem)' }}>
          <Link href="/work" className="text-link">View the full index</Link>
        </div>
      </section>

      <section className="section" aria-labelledby="proof-title">
        <div className="section__head">
          <p className="label mono">04 / Client proof</p>
          <h2 id="proof-title" className="section__title" data-reveal>Words from the people who hired me.</h2>
          <p className="section__note">Fiverr reviews quoted exactly as written, with the reviewer’s own name.</p>
        </div>
        <div className="quotes">
          {testimonials.map((t) => (
            <figure className="quote" key={t.author} data-node>
              <span className="quote__mark" aria-hidden="true">“</span>
              <p className="quote__stars" aria-label="Five out of five stars">★★★★★</p>
              <blockquote className="quote__text">{t.quote}</blockquote>
              <figcaption className="quote__by">
                <b>{t.author}</b>
                <span>{t.location}</span>
                <span>{t.context}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="stack-title">
        <div className="section__head">
          <p className="label mono">05 / Technology</p>
          <h2 id="stack-title" className="section__title" data-reveal>The stack, organised by the job it does.</h2>
          <p className="section__note">The tools for each project depend on the environment, integrations and constraints.</p>
        </div>
        <ul className="stack-index">
          {stack.map((group) => (
            <li className="stack-index__group" key={group.name} data-node>
              <h3 className="stack-index__name">{group.name}</h3>
              <ul className="stack-index__items">{group.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="process-title">
        <div className="section__head">
          <p className="label mono">06 / How I work</p>
          <h2 id="process-title" className="section__title" data-reveal>A delivery process, not a guessing game.</h2>
          <p className="section__note">Six stages, each with a defined outcome before the next one starts.</p>
        </div>
        <ol className="ledger">
          {approach.map((step) => (
            <li className="ledger__row" key={step.code} data-node>
              <span className="ledger__num">{step.code}</span>
              <h3 className="ledger__title">{step.title}</h3>
              <p className="ledger__text">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section" aria-labelledby="industries-title">
        <div className="section__head">
          <p className="label mono">07 / Industries</p>
          <h2 id="industries-title" className="section__title" data-reveal>Where these systems apply.</h2>
          <p className="section__note">Target applications of the services, not claims of completed projects in every industry.</p>
        </div>
        <ul className="ledger">
          {industries.map((ind, i) => (
            <li className="ledger__row" key={ind.name} data-node>
              <span className="ledger__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="ledger__title" style={{ fontSize: 'var(--t-m)' }}>{ind.name}</h3>
              <p className="ledger__text">{ind.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="closing section section--full" aria-labelledby="closing-title">
        <p className="label mono">End of ledger / your entry</p>
        <h2 id="closing-title" className="closing__title display" data-reveal>{contact.headline}</h2>
        <p className="closing__note">{contact.text}</p>
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
