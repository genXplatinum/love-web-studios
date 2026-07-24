import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { useLenis } from './SmoothScroll';
import { nav } from '../data/site';
import './Nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setOpen(false), [location.pathname]);

  // Lock scroll while the mobile menu is open
  useEffect(() => {
    if (!lenis) return;
    if (open) lenis.stop();
    else lenis.start();
  }, [open, lenis]);

  const isHome = location.pathname === '/';

  return (
    <header className={`nav ${isHome ? 'nav--home' : ''} ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="nav__inner container">
        <Link to="/" className="nav__logo" aria-label="Lovelace — home">
          <Logo />
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
            >
              <span className="nav__link-idx mono">{item.index}</span>
              <span className="nav__link-label">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <Link to="/contact" className="btn nav__cta">
            Start a project
            <span className="btn__dot" />
          </Link>
          <button
            className="nav__burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile / overlay menu */}
      <div className="nav__overlay" aria-hidden={!open}>
        <div className="nav__overlay-inner container">
          <ul className="nav__overlay-list">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className="nav__overlay-link">
                  <span className="mono">{item.index}</span>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/" className="nav__overlay-link">
                <span className="mono">00</span>
                <span>Home</span>
              </NavLink>
            </li>
          </ul>
          <div className="nav__overlay-foot">
            <span className="mono">Start a project</span>
            <a href="mailto:lovepreetsinghmk10@gmail.com" className="nav__overlay-mail">
              lovepreetsinghmk10@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
