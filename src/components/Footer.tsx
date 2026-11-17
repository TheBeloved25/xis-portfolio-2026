import Link from 'next/link';
import { site } from '@/data/site';

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__top">
        <p className="label mono">End of run / 2026</p>
        <a className="footer__reply link" href={`mailto:${site.email}`}>Reply to this signal</a>
      </div>
      <div className="footer__word" aria-hidden="true">{site.brand}</div>
      <div className="footer__bottom">
        <nav aria-label="Footer">
          <Link href="/work" className="link">Work</Link>
          <Link href="/about" className="link">About</Link>
          <Link href="/contact" className="link">Contact</Link>
          <a href={`mailto:${site.email}`} className="link">Email</a>
          {site.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="link">{s.label}</a>
          ))}
        </nav>
        <p className="mono footer__colophon">{site.brandFull} / Switzer + Azeret Mono</p>
      </div>
    </footer>
  );
}
