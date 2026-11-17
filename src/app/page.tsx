import Link from 'next/link';
import { Pipeline } from '@/components/Pipeline';
import { WorkList } from '@/components/WorkList';
import { approach, about, contact, hero, industries, introduction, services, site, stack, testimonials } from '@/data/site';

export default function Home() {
  const core = services.filter((s) => s.core);
  const depth = services.filter((s) => !s.core);

  return (
    <>
      <section className="hero section--full" aria-labelledby="hero-title">
        <div className="hero__top">
          <p className="label">{site.pillars}</p>
          <p className="label label--right mono">SYSTEM / ONLINE</p>
        </div>
        <div className="hero__grid">
          <div className="hero__copy">
            <h1 id="hero-title" className="display" data-split="lines" data-intro>{hero.headline}</h1>
            <p className="hero__intro">{hero.intro}</p>
            <div className="hero__actions">
              <a className="btn" href="/contact">
                <span className="btn__fill" aria-hidden="true" />
                <span className="btn__label">{hero.cta}</span>
                <span className="btn__arrow" aria-hidden="true">↗</span>
              </a>
              <Link href="/work" className="text-link">{hero.secondary}</Link>
            </div>
          </div>
          <div className="hero__aside">
            <Pipeline />
          </div>
        </div>
        <div className="hero__bottom">
          <p className="label mono">Scroll to run the system</p>
          <p className="label mono">01 / 08</p>
        </div>
      </section>

      <section className="statement section" aria-labelledby="intro-title">
        <p className="label mono">01 / Introduction</p>
        <h2 id="intro-title" className="statement__title" data-split="lines">{introduction.heading}</h2>
        <p className="statement__text" data-reveal>{introduction.text}</p>
        <p className="statement__note mono">{introduction.note}</p>
      </section>

      <section className="services section" aria-labelledby="services-title">
        <div className="section__head">
          <p className="label mono">02 / What I do</p>
          <h2 id="services-title" className="section__title" data-split="lines">Four core specialisations, one connected practice.</h2>
        </div>
        <ol className="services__grid">
          {core.map((s) => (
            <li className="service service--core" key={s.code} data-node>
              <div className="service__top mono">
                <span className="service__code">Node {s.code}</span>
                <span className="service__mark" aria-hidden="true" />
              </div>
              <h3 className="service__title">{s.title}</h3>
              <p className="service__tagline">{s.tagline}</p>
              <p className="service__text">{s.text}</p>
              <ul className="service__capabilities">
                {s.capabilities.slice(0, 4).map((c) => <li key={c}>{c}</li>)}
              </ul>
              <p className="service__tools mono">{s.technologies.join(' · ')}</p>
            </li>
          ))}
        </ol>
        <div className="depth" data-reveal>
          <p className="depth__label mono">Technical depth</p>
          <ul className="depth__grid">
            {depth.map((s) => (
              <li className="depth__item" key={s.code} data-node>
                <span className="depth__code mono">{s.code}</span>
                <span className="depth__title">{s.title}</span>
                <span className="depth__note">{s.application}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="work section" id="work" aria-labelledby="work-title">
        <div className="section__head">
          <p className="label mono">03 / Selected work</p>
          <h2 id="work-title" className="section__title" data-split="lines">Systems described by structure, not by client.</h2>
          <p className="section__note">Completed, demonstrable work. In progress and scoped projects are listed separately in the full index.</p>
        </div>
        <WorkList statuses={['delivered']} limit={3} />
        <Link href="/work" className="text-link work__all">Open the full index</Link>
      </section>

      <section className="proof section" aria-labelledby="proof-title">
        <div className="section__head">
          <p className="label mono">04 / Client proof</p>
          <h2 id="proof-title" className="section__title" data-split="lines">Reviews from real clients.</h2>
          <p className="section__note">Quoted exactly as written on Fiverr. Names are the reviewers’ own.</p>
        </div>
        <div className="proof__grid">
          {testimonials.map((t) => (
            <figure className="quote" key={t.author} data-node>
              <p className="quote__stars" aria-label="Five out of five stars">★★★★★</p>
              <blockquote className="quote__text">{t.quote}</blockquote>
              <figcaption className="quote__by mono">
                <span>{t.author}</span>
                <span>{t.location}</span>
                <span>{t.context}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="stack section" aria-labelledby="stack-title">
        <div className="section__head">
          <p className="label mono">05 / Technology stack</p>
          <h2 id="stack-title" className="section__title" data-split="lines">The tools, grouped by the job they do.</h2>
          <p className="section__note">The stack for each project depends on the functionality, environment, and integrations it needs.</p>
        </div>
        <div className="stack__grid">
          {stack.map((group) => (
            <div className="stack__group" key={group.name} data-node>
              <h3 className="stack__name mono">{group.name}</h3>
              <ul className="stack__items">{group.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="approach section" aria-labelledby="approach-title">
        <div className="section__head">
          <p className="label mono">06 / How I work</p>
          <h2 id="approach-title" className="section__title" data-split="lines">Understand, analyse, design, build, test, handover.</h2>
        </div>
        <ol className="approach__steps">
          {approach.map((step) => (
            <li className="step" key={step.code} data-node>
              <span className="step__dot" aria-hidden="true" />
              <span className="step__code mono">{step.code}</span>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__text">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="preview section" aria-labelledby="preview-title">
        <div className="preview__head">
          <p className="label mono">07 / About</p>
          <h2 id="preview-title" className="section__title" data-split="lines">An engineer’s approach to intelligent systems.</h2>
        </div>
        <div className="preview__body">
          <p className="preview__lead">{about.background}</p>
          <p className="preview__note">{about.interests}</p>
          <Link href="/about" className="text-link">Read the full profile</Link>
        </div>
      </section>

      <section className="industries section" aria-labelledby="industries-title">
        <div className="section__head">
          <p className="label mono">08 / Where it applies</p>
          <h2 id="industries-title" className="section__title" data-split="lines">Industries I am focused on.</h2>
          <p className="section__note">Target applications of the services, not claims of completed projects in every industry.</p>
        </div>
        <ul className="industries__list">
          {industries.map((ind, i) => (
            <li className="industries__item" key={ind.name} data-node>
              <span className="industries__num mono">{String(i + 1).padStart(2, '0')}</span>
              <span className="industries__name">{ind.name}</span>
              <span className="industries__note">{ind.note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="closing section section--full" aria-labelledby="closing-title">
        <p className="label mono">End of run / start of yours</p>
        <h2 id="closing-title" className="closing__title display" data-split="lines">{contact.headline}</h2>
        <p className="closing__note">{contact.text}</p>
        <div className="closing__actions">
          <a className="btn" href="/contact">
            <span className="btn__fill" aria-hidden="true" />
            <span className="btn__label">{hero.cta}</span>
            <span className="btn__arrow" aria-hidden="true">↗</span>
          </a>
          <Link href="/work" className="text-link">{hero.secondary}</Link>
        </div>
      </section>
    </>
  );
}
