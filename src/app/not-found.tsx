import Link from 'next/link';
import { hero } from '@/data/site';

export default function NotFound() {
  return (
    <section className="notfound section--full" aria-labelledby="notfound-title">
      <div className="notfound__meta">
        <p className="label mono">Error / 404</p>
        <p className="label mono">NODE / UNREACHABLE</p>
      </div>
      <div className="notfound__node" aria-hidden="true"><span /></div>
      <h1 id="notfound-title" className="notfound__title display" data-split="lines" data-intro>Signal lost.</h1>
      <p className="notfound__text" data-reveal data-intro data-delay="0.2">
        This route has no connection. The pipeline is still running everywhere else.
      </p>
      <div className="notfound__actions">
        <Link className="btn" href="/">
          <span className="btn__fill" aria-hidden="true" />
          <span className="btn__label">Return to the start</span>
          <span className="btn__arrow" aria-hidden="true">↗</span>
        </Link>
        <Link href="/work" className="text-link">{hero.secondary}</Link>
      </div>
    </section>
  );
}
