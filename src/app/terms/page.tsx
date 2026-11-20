import type { Metadata } from 'next';
import Link from '@/components/Link';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Terms',
  description: 'The terms that apply to information on this website and to project engagements with XIS.',
};

export default function Terms() {
  return (
    <>
      <section className="page-hero" aria-labelledby="terms-title">
        <div className="page-hero__meta">
          <p className="label mono">Legal / Terms</p>
          <p className="label mono">Last updated / 20 Nov 2026</p>
        </div>
        <h1 id="terms-title" className="page-hero__title" data-split="lines" data-intro>Terms of use.</h1>
        <p className="page-hero__lead" data-reveal data-intro data-delay="0.2">The basis on which this site and project work are offered.</p>
      </section>
      <section className="section legal">
        <h2>Information on this site</h2>
        <p>This website describes services, skills and selected work. It is informational and is not an offer or a guarantee of a particular result. Project descriptions reflect the status shown on each entry: delivered, in progress, or scoped. Conceptual work is not presented as completed client work.</p>
        <h2>Project engagements</h2>
        <p>Scope, deliverables, timelines, price, payment schedule, revisions and support are agreed in writing before work begins. Each engagement is governed by that agreement rather than by this page. Nothing on this site replaces a signed scope of work.</p>
        <h2>Third-party tools and services</h2>
        <p>Systems are built on third-party platforms such as n8n, Make.com, GoHighLevel, OpenAI and Twilio. Those services are governed by their own terms and may change independently. Availability of a hosted service is not guaranteed by XIS.</p>
        <h2>Content and materials</h2>
        <p>Workflow screenshots and written case studies on this site describe work carried out by Emmanuel Akinfesola. Client identities are withheld. Please do not copy the text, diagrams or screenshots without permission.</p>
        <h2>Questions</h2>
        <p>For a question about these terms, email <a className="link" href={`mailto:${site.email}`}>{site.email}</a>. For how this site handles information, see <Link className="link" href="/privacy">Privacy</Link>.</p>
      </section>
    </>
  );
}
