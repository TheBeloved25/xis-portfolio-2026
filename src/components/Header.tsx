'use client';
import Link from '@/components/Link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { site } from '@/data/site';
import { startScroll, stopScroll } from '@/engine';

const links = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    if (!open) { startScroll(); return; }
    stopScroll();
    const focusables = () => [...(panel.current?.querySelectorAll<HTMLElement>('a, button') || [])];
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); button.current?.focus(); return; }
      if (e.key !== 'Tab') return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); startScroll(); };
  }, [open]);

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <>
      <header className="site-header">
        <Link href="/" className="brand" aria-label={`${site.brand}, ${site.brandFull}, home`}>
          <span className="brand__mark" aria-hidden="true" />
          {site.brand}
        </Link>
        <nav className="nav" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav__link" aria-current={isActive(l.href) ? 'page' : undefined}>{l.label}</Link>
          ))}
        </nav>
        <button ref={button} type="button" className="menu-button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((v) => !v)}>
          {open ? 'Close' : 'Menu'}
        </button>
      </header>
      <div id="mobile-menu" ref={panel} className="menu" hidden={!open}>
        <nav aria-label="Mobile">
          <Link href="/" className="menu__link"><span className="menu__num">00</span>Home</Link>
          {links.map((l, i) => (
            <Link key={l.href} href={l.href} className="menu__link"><span className="menu__num">0{i + 1}</span>{l.label}</Link>
          ))}
        </nav>
        <p className="menu__meta mono">{site.brandFull} / {site.role}</p>
      </div>
    </>
  );
}
