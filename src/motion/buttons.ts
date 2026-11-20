// Primary CTA fill from the pointer's side. CSS covers touch, focus and reduced motion.
import { gsap } from 'gsap';
import { onPage, isTouch, prefersReducedMotion, ease } from '@/engine';

export const buttonFill = () => onPage(() => {
  if (isTouch() || prefersReducedMotion()) return;
  const off: (() => void)[] = [];
  document.querySelectorAll<HTMLElement>('.btn').forEach((btn) => {
    const fill = btn.querySelector<HTMLElement>('.btn__fill');
    if (!fill) return;
    const from = (e: PointerEvent) => {
      const r = btn.getBoundingClientRect();
      return `${e.clientX - r.left}px ${e.clientY - r.top}px`;
    };
    let closed = true;
    const open = (at: string) => {
      if (closed) gsap.set(fill, { clipPath: 'inset(0 100% 0 0)' });
      closed = false;
      btn.classList.add('is-filled');
      gsap.to(fill, { clipPath: 'inset(0 0% 0 0)', duration: 0.55, ease: ease.soft, overwrite: true });
    };
    const close = (at: string) => {
      btn.classList.remove('is-filled');
      gsap.to(fill, { clipPath: 'inset(0 100% 0 0)', duration: 0.45, ease: ease.soft, overwrite: true, onComplete: () => { closed = true; } });
    };
    const enter = (e: PointerEvent) => open(from(e));
    const leave = (e: PointerEvent) => close(from(e));
    const focus = () => { if (btn.matches(':focus-visible')) open('50% 50%'); };
    const blur = () => close('50% 50%');
    btn.addEventListener('pointerenter', enter);
    btn.addEventListener('pointerleave', leave);
    btn.addEventListener('focus', focus);
    btn.addEventListener('blur', blur);
    off.push(() => {
      btn.removeEventListener('pointerenter', enter);
      btn.removeEventListener('pointerleave', leave);
      btn.removeEventListener('focus', focus);
      btn.removeEventListener('blur', blur);
    });
  });
  return () => off.forEach((f) => f());
});
