import Link from '@/components/Link';

export default function NotFound() {
  return (
    <section className="notfound section--full" aria-labelledby="notfound-title">
      <div className="notfound__meta">
        <p className="label mono">Error / 404</p>
        <p className="label mono">Figure / Not found</p>
      </div>
      <div className="notfound__figure" aria-hidden="true" />
      <h1 id="notfound-title" className="notfound__title" data-split="lines" data-intro>Figure not found.</h1>
      <p className="notfound__text" data-reveal data-intro data-delay="0.2">
        This entry is not in the ledger. The rest of the work is still where you left it.
      </p>
      <div className="notfound__actions">
        <Link className="btn" href="/">
          <span className="btn__fill" aria-hidden="true" />
          <span className="btn__label">Return to the start</span>
          <span className="btn__arrow" aria-hidden="true">↗</span>
        </Link>
        <Link href="/work" className="text-link">View my work</Link>
      </div>
    </section>
  );
}
