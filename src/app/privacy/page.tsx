import type { Metadata } from 'next';
import Link from '@/components/Link';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How this website handles information. Plain and specific: no analytics, no cookies, no form data stored by this site.',
};

export default function Privacy() {
  return (
    <>
      <section className="page-hero" aria-labelledby="privacy-title">
        <div className="page-hero__meta">
          <p className="label mono">Legal / Privacy</p>
          <p className="label mono">Last updated / 20 Nov 2026</p>
        </div>
        <h1 id="privacy-title" className="page-hero__title" data-split="lines" data-intro>Privacy, plainly.</h1>
        <p className="page-hero__lead" data-reveal data-intro data-delay="0.2">What this site collects, and what it does not.</p>
      </section>
      <section className="section legal">
        <h2>What this site does not do</h2>
        <p>This site has no analytics, no advertising trackers, no cookies and no account system. It does not store messages you send through the contact form on its own server. There is no application database behind this website.</p>
        <h2>The contact form</h2>
        <p>The form on the contact page validates your input in the browser and then opens your own email application with the details filled in. Nothing is transmitted by the site itself. The message is only sent if you choose to send it from your mail client. Your email provider handles that message under its own privacy terms.</p>
        <h2>Host and request data</h2>
        <p>The site is served by Cloudflare Pages. Like any web host, Cloudflare may process basic technical request data, such as IP address, browser type and timestamps, as part of delivering the pages and protecting the service. That handling is governed by Cloudflare’s own privacy policy.</p>
        <h2>Links to other services</h2>
        <p>Links to Fiverr, LinkedIn and email open third-party services. Once you leave this site, those services apply their own privacy policies and terms.</p>
        <h2>Questions</h2>
        <p>If you have a question about how your information is handled here, email <a className="link" href={`mailto:${site.email}`}>{site.email}</a>. For the terms that apply to project work, see <Link className="link" href="/terms">Terms</Link>.</p>
      </section>
    </>
  );
}
