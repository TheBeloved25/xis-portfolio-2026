'use client';
import { useState } from 'react';
import { contact, site } from '@/data/site';

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) || '').trim();
    const name = get('name');
    const email = get('email');
    const company = get('company');
    const goal = get('goal');
    const challenge = get('challenge');
    const tools = get('tools');
    const subject = `Automation enquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || 'Not provided'}`,
      '',
      `${contact.fields.goal}:`,
      goal,
      '',
      `${contact.fields.challenge}:`,
      challenge,
      '',
      `${contact.fields.tools}:`,
      tools || 'Not provided',
    ].join('\n');
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="cform" onSubmit={onSubmit}>
      <div className="cform__row">
        <label className="field">
          <span className="field__label mono">{contact.fields.name}</span>
          <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
        </label>
        <label className="field">
          <span className="field__label mono">{contact.fields.email}</span>
          <input name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
        </label>
      </div>
      <label className="field">
        <span className="field__label mono">{contact.fields.company}</span>
        <input name="company" type="text" autoComplete="organization" placeholder="Company (optional)" />
      </label>
      <label className="field">
        <span className="field__label mono">{contact.fields.goal}</span>
        <input name="goal" type="text" required placeholder="An AI voice agent, a workflow, a CRM integration…" />
      </label>
      <label className="field">
        <span className="field__label mono">{contact.fields.challenge}</span>
        <textarea name="challenge" rows={5} required placeholder="What is happening now, and what should happen instead?" />
      </label>
      <label className="field">
        <span className="field__label mono">{contact.fields.tools}</span>
        <textarea name="tools" rows={2} placeholder="GoHighLevel, Airtable, n8n, Twilio…" />
      </label>
      <div className="cform__actions">
        <button className="btn" type="submit">
          <span className="btn__fill" aria-hidden="true" />
          <span className="btn__label">Send enquiry</span>
          <span className="btn__arrow" aria-hidden="true">↗</span>
        </button>
        <p className="cform__hint mono" role="status">{sent ? 'Your email app should open with the message ready to send.' : 'Opens your email app with the details filled in.'}</p>
      </div>
    </form>
  );
}
