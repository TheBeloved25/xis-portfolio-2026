import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { contact, site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell Emmanuel about the business process you want to improve. Discuss an AI agent, voice system, automation workflow or connected business system.',
};

export default function Contact() {
  return (
    <>
      <section className="page-hero section--full" aria-labelledby="contact-title">
        <div className="page-hero__meta">
          <p className="label mono">Contact / New run</p>
          <p className="label mono">SYSTEM / READY</p>
        </div>
        <h1 id="contact-title" className="page-hero__title display" data-split="lines" data-intro>{contact.headline}</h1>
        <p className="page-hero__lead" data-reveal data-intro data-delay="0.2">{contact.text}</p>
      </section>

      <section className="contact-body section" aria-label="Contact details and form">
        <div className="contact-body__side">
          <p className="label mono">Direct routes</p>
          <a className="contact-route" href={`mailto:${site.email}`}>
            <span className="contact-route__label mono">Email</span>
            <span className="contact-route__value">{site.email}</span>
          </a>
          {site.socials.map((s) => (
            <a className="contact-route" key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
              <span className="contact-route__label mono">{s.label}</span>
              <span className="contact-route__value">Open profile ↗</span>
            </a>
          ))}
          <p className="contact-body__note">{contact.closing}</p>
        </div>
        <div className="contact-body__main">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
