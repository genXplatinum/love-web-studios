import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';
import './Interstitial.css';

/**
 * Fills the space between sections with a giant, faded outline word that
 * drifts on scroll and fills with the accent colour on hover. A short
 * useful statement. Turns dead whitespace into a quiet brand beat.
 */
export default function Interstitial({ word, note, align = 'left' }) {
  const root = useRef(null);
  const wordRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const dir = align === 'right' ? -1 : 1;
    const tween = gsap.fromTo(
      wordRef.current,
      { xPercent: -7 * dir },
      {
        xPercent: 7 * dir,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [align]);

  return (
    <div className={`interstitial interstitial--${align}`} ref={root} data-cursor>
      {note && <span className="interstitial__note mono">{note}</span>}
      <span className="interstitial__word" ref={wordRef} aria-hidden="true">
        {word}
      </span>
    </div>
  );
}
