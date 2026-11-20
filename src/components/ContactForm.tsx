'use client';
import { useState } from 'react';
import { contact, site } from '@/data/site';

type FieldName = 'name' | 'email' | 'goal' | 'challenge';
type Errors = Partial<Record<FieldName, string>>;

const validate = (data: FormData): Errors => {
  const errors: Errors = {};
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const goal = String(data.get('goal') || '').trim();
  const challenge = String(data.get('challenge') || '').trim();
  if (!name) errors.name = 'Add your name.';
  if (!email) errors.email = 'Add your email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Check the email format.';
  if (!goal) errors.goal = 'Tell me what you want to build.';
  if (challenge.length < 12) errors.challenge = 'A sentence or two about the challenge, please.';
  return errors;
};

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'opened' | 'error'>('idle');

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus('error');
      const first = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    const get = (k: string) => String(data.get(k) || '').trim();
    const subject = `Automation enquiry from ${get('name')}`;
    const body = [
      `Name: ${get('name')}`,
      `Email: ${get('email')}`,
      `Company: ${get('company') || 'Not provided'}`,
      '',
      `${contact.fields.goal}:`,
      get('goal'),
      '',
      `${contact.fields.challenge}:`,
      get('challenge'),
      '',
      `${contact.fields.tools}:`,
      get('tools') || 'Not provided',
    ].join('\n');
    const url = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setStatus('opened');
  }

  const field = (name: FieldName, label: string, placeholder: string, multi = false) => (
    <label className="field">
      <span className="field__label mono">{label}</span>
      {multi
        ? <textarea name={name} rows={5} required placeholder={placeholder} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined} />
        : <input name={name} type={name === 'email' ? 'email' : 'text'} required placeholder={placeholder} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined} />}
      {errors[name] && <span className="field__error" id={`${name}-error`}>{errors[name]}</span>}
    </label>
  );

  return (
    <form className="cform" onSubmit={onSubmit} noValidate>
      <div className="cform__row">
        {field('name', contact.fields.name, 'Your name')}
        {field('email', contact.fields.email, 'you@company.com')}
      </div>
      <label className="field">
        <span className="field__label mono">{contact.fields.company}</span>
        <input name="company" type="text" autoComplete="organization" placeholder="Company (optional)" />
      </label>
      {field('goal', contact.fields.goal, 'An AI voice agent, a workflow, a CRM integration')}
      {field('challenge', contact.fields.challenge, 'What is happening now, and what should happen instead?', true)}
      <label className="field">
        <span className="field__label mono">{contact.fields.tools}</span>
        <textarea name="tools" rows={2} placeholder="GoHighLevel, Airtable, n8n, Twilio" />
      </label>
      <div className="cform__actions">
        <button className="btn" type="submit">
          <span className="btn__fill" aria-hidden="true" />
          <span className="btn__label">Send enquiry</span>
          <span className="btn__arrow" aria-hidden="true">↗</span>
        </button>
        <p className="cform__hint" data-tone={status === 'error' ? 'error' : 'idle'} role="status">
          {status === 'opened'
            ? 'Your email app should open with the message ready to send.'
            : status === 'error'
              ? 'Please complete the highlighted fields.'
              : 'Opens your email app with the details filled in.'}
        </p>
      </div>
    </form>
  );
}
