// Global motion, registered once on the client before the first page initialises.
import { gsap } from 'gsap';
import { ease, setTransition } from '@/engine';
import { startIdle } from './idle';
import { startTrace } from './trace';
import { buttonFill } from './buttons';

export function setupMotion() {
  // A rule draws across the screen, then lifts off the next entry in the ledger.
  setTransition({
    leave: (c) => {
      const panel = c.querySelector<HTMLElement>('.curtain__panel')!;
      return gsap.timeline()
        .set(c, { autoAlpha: 1 })
        .set(panel, { clipPath: 'inset(0% 100% 0% 0%)' })
        .to(panel, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.75, ease: ease.inOut });
    },
    enter: (c) => {
      const panel = c.querySelector<HTMLElement>('.curtain__panel')!;
      return gsap.timeline()
        .to(panel, { clipPath: 'inset(0% 0% 0% 100%)', duration: 0.8, ease: ease.inOut })
        .set(c, { autoAlpha: 0 });
    },
  });

  buttonFill();
  startIdle();
  startTrace();
}
