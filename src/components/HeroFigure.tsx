import Image from 'next/image';

// A real workflow screenshot from a delivered project, mounted as a numbered drawing.
export function HeroFigure() {
  return (
    <figure className="figure" data-figure>
      <div className="figure__head">
        <span className="figure__id">Fig. 01 / System topology</span>
        <span className="figure__label">n8n · Flowdit</span>
      </div>
      <div className="figure__mount">
        <Image
          src="/assets/work/flowdit-chatbot-01.webp"
          alt="The n8n workflow behind the Flowdit support agent, routing a visitor chat through an AI agent to booking, ticket and transcript tools"
          fill
          sizes="(max-width: 767px) 100vw, 33vw"
          style={{ objectFit: 'cover' }}
          loading="eager"
          fetchPriority="high"
        />
        <div className="callouts" aria-hidden="true">
          <span className="callout" data-index="0" data-callout>Receive</span>
          <span className="callout" data-index="1" data-callout>Interpret</span>
          <span className="callout" data-index="2" data-callout>Act</span>
        </div>
        <span className="figure__trace" aria-hidden="true" />
        <span className="figure__pulse" aria-hidden="true" />
      </div>
      <figcaption className="figure__caption">
        <span><strong>Support agent, live.</strong> One chat enters, three tools answer.</span>
        <span>Fig. 01 / 03</span>
      </figcaption>
    </figure>
  );
}
