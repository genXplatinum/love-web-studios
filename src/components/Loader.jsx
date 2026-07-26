import { useEffect, useRef, useState } from 'react';
import { gsap } from '../lib/gsap';
import { Mark } from './Logo';
import './Loader.css';

/**
 * Loading intro with a count and progress bar.
 */
export default function Loader({ onComplete }) {
  const root = useRef(null);
  const num = useRef(null);
  const cb = useRef(onComplete);
  cb.current = onComplete;
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const counter = { v: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        setHidden(true);
        cb.current?.();
      },
    });

    if (reduced) {
      if (num.current) num.current.textContent = '100';
      tl.to(root.current, { autoAlpha: 0, duration: 0.4 }, 0.3);
      return () => tl.kill();
    }

    tl.to(counter, {
      v: 100,
      duration: 1.1,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (num.current) num.current.textContent = String(Math.round(counter.v)).padStart(3, '0');
      },
    });
    tl.fromTo('.loader__bar-fill', { scaleX: 0 }, { scaleX: 1, duration: 1.1, ease: 'power2.inOut' }, 0);
    tl.to('.loader__inner', { autoAlpha: 0, duration: 0.3, ease: 'power2.in' }, '+=0.1');
    tl.to(root.current, { yPercent: -100, duration: 0.65, ease: 'expo.inOut' }, '-=0.05');

    return () => tl.kill();
  }, []);

  if (hidden) return null;

  return (
    <div ref={root} className="loader" role="presentation">
      <div className="loader__inner">
        <Mark size={42} />
        <div className="loader__meta">
          <span className="mono">Lovelace</span>
          <span ref={num} className="loader__num mono">000</span>
        </div>
        <div className="loader__bar"><span className="loader__bar-fill" /></div>
        <span className="mono loader__sub">Loading the Lovelace studio</span>
      </div>
    </div>
  );
}
