import { Link } from 'react-router-dom';
import { Mark } from './Logo';
import { useLenis } from './SmoothScroll';
import { site, nav, services } from '../data/site';
import './Footer.css';

export default function Footer() {
  const lenis = useLenis();
  const year = new Date().getFullYear();

  const toTop = () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" data-theme="dark">
      <div className="container">
        {/* CTA */}
        <div className="footer__cta">
          <span className="eyebrow">Have a project in mind?</span>
          <h2 className="footer__cta-title">
            Let’s talk <span className="italic">about it.</span>
          </h2>
          <a href={`mailto:${site.email}`} className="footer__mail" data-cursor>
            {site.email}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 19L19 5M19 5H8M19 5V16" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        </div>

        <hr className="hairline" />

        {/* Columns */}
        <div className="footer__grid">
          <div className="footer__brand">
            <Mark size={32} />
            <p className="footer__tag">
              {site.short} designs and builds websites, web apps and brand identities.
            </p>
          </div>

          <nav className="footer__col" aria-label="Pages">
            <span className="mono footer__col-head">Pages</span>
            <Link to="/" className="footer__link">Home</Link>
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="footer__link">{n.label}</Link>
            ))}
          </nav>

          <nav className="footer__col" aria-label="Services">
            <span className="mono footer__col-head">Services</span>
            {services.map((s) => (
              <Link key={s.id} to="/services" className="footer__link">{s.short}</Link>
            ))}
          </nav>

          <div className="footer__col" aria-label="Connect">
            <span className="mono footer__col-head">Connect</span>
            {site.social.map((s) => (
              <a key={s.label} href={s.href} className="footer__link" target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>

          <div className="footer__col footer__studios">
            <span className="mono footer__col-head">Studios</span>
            {site.locations.map((l) => (
              <span key={l} className="footer__link footer__link--static">{l}</span>
            ))}
          </div>
        </div>

        {/* Colophon */}
        <div className="footer__colophon">
          <span className="mono">© {year} {site.name}</span>
          <span className="mono footer__colophon-mid">Designed and built by Lovelace · 51.5074° N</span>
          <button className="link footer__top" onClick={toTop}>
            Back to top
            <span className="link__arrow">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
