// Global motion, registered once on the client before the first page initialises.
import { gsap } from 'gsap';
import { ease, setLoaderExit, setLoaderFormat, setTransition } from '@/engine';
import { startIdle } from './idle';
import { startSignal } from './signal';
import { buttonFill } from './buttons';

export function setupMotion() {
  setLoaderFormat((p) => `${String(Math.round(p)).padStart(3, '0')}%`);

  // The run log resolves, then the curtain lifts into the first frame of the pipeline.
  setLoaderExit((root) => gsap.timeline()
    .to(root.querySelector('[data-loader-bar]'), { scaleX: 1, duration: 0.18, ease: 'none' }, 0)
    .to(root.querySelector('[data-loader-count]'), { yPercent: -110, autoAlpha: 0, duration: 0.32, ease: ease.inOut }, 0.02)
    .to(root.querySelector('.loader__name'), { yPercent: -110, autoAlpha: 0, duration: 0.32, ease: ease.inOut }, 0.06)
    .to(root, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.5, ease: ease.inOut }, 0.2));

  // A signal sweeps across the screen; the next pipeline is already loaded behind it.
  setTransition({
    leave: (c) => {
      const panel = c.querySelector<HTMLElement>('.curtain__panel')!;
      return gsap.timeline()
        .set(c, { autoAlpha: 1 })
        .set(panel, { clipPath: 'inset(0% 100% 0% 0%)' })
        .to(panel, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.85, ease: ease.inOut });
    },
    enter: (c) => {
      const panel = c.querySelector<HTMLElement>('.curtain__panel')!;
      return gsap.timeline()
        .to(panel, { clipPath: 'inset(0% 0% 0% 100%)', duration: 0.9, ease: ease.inOut })
        .set(c, { autoAlpha: 0 })
        .set(panel, { clipPath: 'inset(0% 100% 0% 0%)' });
    },
  });

  buttonFill();
  startIdle();
  startSignal();
}
