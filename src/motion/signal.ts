// The concept driver. One variable (page scroll progress) plus a small idle/pointer drift
// publishes --signal and --run and decides which nodes are live. Everything that carries the
// idea reads those two custom properties, so the wire, the pulse and the statuses always agree.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onPage, onScroll, prefersReducedMotion } from '@/engine';
import { idle } from './idle';

gsap.registerPlugin(ScrollTrigger);

const RUN_SPAN = 0.14; // how much of the page the hero pipeline runs across
type Node = { el: HTMLElement; at: number };

let nodes: Node[] = [];
let current = 0;
let onScreen = false;
const clamp = gsap.utils.clamp(0, 1);

function measure() {
  const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
  nodes = [...document.querySelectorAll<HTMLElement>('[data-node]')].map((el) => {
    const explicit = el.dataset.at !== undefined ? parseFloat(el.dataset.at) : NaN;
    const top = el.getBoundingClientRect().top + scrollY;
    const at = Number.isFinite(explicit) ? explicit : clamp((top - innerHeight * 0.72) / max);
    return { el, at };
  });
}

function apply(p: number, drift = 0) {
  const v = clamp(p);
  const root = document.documentElement.style;
  root.setProperty('--signal', v.toFixed(4));
  root.setProperty('--run', clamp(v / RUN_SPAN).toFixed(4));
  // Drift is published for the pulse alone. It never feeds the run value, so the
  // line and the node states stay tied to real scroll progress.
  root.setProperty('--drift', drift.toFixed(4));
  // Active state comes from the real scroll value only, so a drift near a node's
  // threshold can never flicker its status.
  for (const n of nodes) {
    const active = p >= n.at - 0.002;
    const isActive = n.el.dataset.active === 'true';
    if (isActive !== active) n.el.dataset.active = active ? 'true' : 'false';
  }
}

export function startSignal() {
  if (prefersReducedMotion()) return;
  onScroll(({ progress }) => { current = progress; apply(current); });

  // Idle: the pulse keeps a small, slow motion while the reader is still.
  // The drift only feeds the pulse position and the accent line, never node state.
  gsap.ticker.add(() => {
    apply(current, Math.sin(idle.t * 0.7) * 0.035 + idle.x * 0.012);
  });

  onPage(() => {
    measure();
    apply(current);
    const pipe = document.querySelector<HTMLElement>('[data-pipeline]');
    const r = pipe?.getBoundingClientRect();
    onScreen = !!r && r.bottom > 0 && r.top < innerHeight;
    const triggers = [...document.querySelectorAll<HTMLElement>('[data-pipeline]')].map((el) =>
      ScrollTrigger.create({
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        onToggle: (s) => { onScreen = s.isActive; },
      }),
    );
    const onResize = () => { measure(); apply(current); };
    addEventListener('resize', onResize);
    requestAnimationFrame(() => { measure(); apply(current); ScrollTrigger.refresh(); });
    return () => {
      triggers.forEach((t) => t.kill());
      removeEventListener('resize', onResize);
      onScreen = false;
    };
  });
}
