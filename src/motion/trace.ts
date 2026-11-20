// The concept driver. One scroll value plus a small idle term feeds a single oxide trace.
// Everything that carries the idea reads --trace / --drift, so the line and the callouts agree.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onPage, onScroll, prefersReducedMotion } from '@/engine';
import { idle } from './idle';

gsap.registerPlugin(ScrollTrigger);

const RUN_SPAN = 0.16;
const CALLOUT_AT = [0.18, 0.45, 0.72];
const clamp = gsap.utils.clamp(0, 1);

let callouts: HTMLElement[] = [];
let current = 0;
let onScreen = false;
let frame = 0;
const last = { trace: -1, drift: -1 };

function apply(p: number, drift = 0) {
  const v = clamp(p);
  const trace = clamp(v / RUN_SPAN);
  if (Math.abs(trace - last.trace) < 0.0015 && Math.abs(drift - last.drift) < 0.0015) return;
  last.trace = trace;
  last.drift = drift;
  const root = document.documentElement.style;
  root.setProperty('--trace', trace.toFixed(4));
  root.setProperty('--drift', drift.toFixed(4));
  callouts.forEach((el, i) => {
    const active = v >= CALLOUT_AT[i] - 0.002;
    if ((el.dataset.active === 'true') !== active) el.dataset.active = active ? 'true' : 'false';
  });
}

export function startTrace() {
  if (prefersReducedMotion()) return;
  onScroll(({ progress }) => { current = progress; apply(current); });

  // Idle breathing on the trace only, never on the callout states. Throttled to
  // every other frame and paused when the figure is off screen.
  gsap.ticker.add(() => {
    frame++;
    if (!onScreen || frame % 2) return;
    apply(current, Math.sin(idle.t * 0.6) * 0.018 + idle.x * 0.008);
  });

  onPage(() => {
    callouts = [...document.querySelectorAll<HTMLElement>('[data-callout]')];
    last.trace = -1;
    last.drift = -1;
    apply(current);
    const figure = document.querySelector<HTMLElement>('[data-figure]');
    const r = figure?.getBoundingClientRect();
    onScreen = !!r && r.bottom > 0 && r.top < innerHeight;
    const trigger = figure ? ScrollTrigger.create({
      trigger: figure,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: (s) => { onScreen = s.isActive; },
    }) : null;
    const onResize = () => { apply(current); };
    addEventListener('resize', onResize);
    requestAnimationFrame(() => { apply(current); ScrollTrigger.refresh(); });
    return () => { trigger?.kill(); removeEventListener('resize', onResize); callouts = []; onScreen = false; };
  });
}
