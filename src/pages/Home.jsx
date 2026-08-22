import { useRef } from 'react';
import { Link } from 'react-router-dom';
import RangoliCard from '../components/RangoliCard';
import { founder, process, projects, services, site } from '../data/site';
import './Home.css';

function useTilt() {
  const ref = useRef(null);

  const onPointerMove = (event) => {
    if (event.pointerType === 'touch' || !ref.current) return;
    const box = ref.current.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    ref.current.style.setProperty('--tilt-x', `${(-y * 5).toFixed(2)}deg`);
    ref.current.style.setProperty('--tilt-y', `${(x * 7).toFixed(2)}deg`);
    ref.current.style.setProperty('--lift-x', `${(x * 12).toFixed(1)}px`);
    ref.current.style.setProperty('--lift-y', `${(y * 12).toFixed(1)}px`);
  };

  const onPointerLeave = () => {
    if (!ref.current) return;
    ref.current.style.setProperty('--tilt-x', '0deg');
    ref.current.style.setProperty('--tilt-y', '0deg');
    ref.current.style.setProperty('--lift-x', '0px');
    ref.current.style.setProperty('--lift-y', '0px');
  };

  return { ref, onPointerMove, onPointerLeave };
}

function ProjectTile({ project, feature = false }) {
  const tilt = useTilt();
  const isPurani = project.id === 'purani-dhun';
  const isPetvet = project.id === 'petvet';
  const isDigithrive = project.id === 'digithrive';

  return (
    <Link
      to="/work"
      className={`project-tile project-tile--${project.id}${feature ? ' project-tile--feature' : ''}`}
      {...tilt}
      data-cursor
    >
      <div className="project-tile__surface">
        <div className="project-tile__meta mono">
          <span>{project.index} / Featured work</span>
          <span>{project.year}</span>
        </div>

        {/* a drawing, not a headline — the only project here whose
            interface is one */}
        {isPurani && <RangoliCard />}

        {isPetvet && (
          <div className="project-tile__petvet-art" aria-hidden="true">
            <span>Care</span>
            <span>comes home.</span>
            <i />
          </div>
        )}

        {isDigithrive && (
          <div className="project-tile__crm-art" aria-hidden="true">
            <div><span>Fees</span><b>72%</b></div>
            <div><span>Leads</span><b>28%</b></div>
            <div><span>Attendance</span><b>15 / 20</b></div>
          </div>
        )}

        {!isPurani && !isPetvet && !isDigithrive && (
          <div className="project-tile__number" aria-hidden="true">{project.index}</div>
        )}
      </div>
      <div className="project-tile__body">
        <div className="project-tile__copy">
          <div>
            <span className="mono">{project.category}</span>
            <h3>{project.title}</h3>
          </div>
          <span className="project-tile__arrow" aria-hidden="true">↗</span>
        </div>
        <p>{project.blurb}</p>
        {project.live && (
          <span className="project-tile__live mono">{project.live.label}</span>
        )}
      </div>
    </Link>
  );
}

export default function Home() {
  const hero = useTilt();

  return (
    <>
      <section className="hero" data-theme="dark" {...hero}>
        <div className="container hero__inner">
          <div className="hero__rail mono">
            <span>Independent web and brand studio</span>
            <span>{site.locations.join(' / ')}</span>
          </div>

          <div className="hero__content">
            <p className="hero__eyebrow">Websites people understand and remember.</p>
            <h1>Lovelace</h1>
            <p className="hero__intro">
              We design and build websites, brands and digital products for businesses
              that care about how they look and how they work.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn">
                Start a project <span className="btn__dot" />
              </Link>
              <Link to="/work" className="hero__work-link">
                Explore selected work <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="hero__notes" aria-hidden="true">
            <span>01 / Plan</span>
            <span>02 / Design</span>
            <span>03 / Build</span>
          </div>
        </div>

        <a className="hero__scroll mono" href="#positioning">
          <span>Enter the studio</span>
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <div className="home__surface">
        <section id="positioning" className="positioning section">
          <div className="container positioning__grid">
            <p className="eyebrow">What we help with</p>
            <h2>
              Show people what makes your business worth choosing.
            </h2>
            <div className="positioning__body">
              <p className="lead">
                You already know your business. We turn that knowledge into a clear story,
                a useful website and a brand people can remember.
              </p>
              <Link to="/about" className="link">Why Lovelace <span className="link__arrow">↗</span></Link>
            </div>
          </div>
        </section>

        <section className="signal-strip" aria-label="Lovelace capabilities">
          <div className="signal-strip__track">
            {[...services, ...services].map((service, index) => (
              <span key={`${service.id}-${index}`}>{service.short}</span>
            ))}
          </div>
        </section>

        <section className="capabilities section">
          <div className="container">
            <div className="section-mark">
              <span className="mono"><span className="mono--signal">01</span> / Capabilities</span>
              <span className="mono">All work handled by our team</span>
            </div>
            <div className="capabilities__intro">
              <h2>Everything your website needs, handled by the same team.</h2>
              <p className="lead">We take care of design, development, content and growth.</p>
            </div>
            <div className="capabilities__list">
              {services.map((service) => (
                <Link to="/services" className="capability" key={service.id} data-cursor>
                  <span className="mono">{service.index}</span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <span className="capability__arrow" aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="home-work section" data-theme="dark">
          <div className="container">
            <div className="home-work__top">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2>A few things we have made.</h2>
              </div>
              <Link to="/work" className="link">All projects <span className="link__arrow">↗</span></Link>
            </div>
            <div className="home-work__grid">
              {/* the newest build leads, across the full width; the two
                  before it sit under it as a pair */}
              {projects.slice(0, 3).map((project, index) => (
                <ProjectTile key={project.id} project={project} feature={index === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="method section">
          <div className="container method__grid">
            <div className="method__headline">
              <p className="eyebrow">How we work</p>
              <h2>Good design matters. So does everything behind it.</h2>
            </div>
            <div className="method__steps">
              {process.map((step) => (
                <article className="method-step" key={step.step}>
                  <span className="mono">{step.step}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="founder-band section">
          <div className="container founder-band__grid">
            <div className="founder-band__photo-wrap">
              <img src={founder.photo} alt={founder.name} className="founder-band__photo" />
              <span className="mono founder-band__photo-note">Founder / Managing Director</span>
            </div>
            <div className="founder-band__copy">
              <p className="eyebrow">Meet the founder</p>
              <h2>Lovepreet Singh</h2>
              <p className="lead">
                Lovepreet stays involved in the design and technical work, from the first
                conversation to the final review.
              </p>
              <Link to="/about" className="btn btn--ghost">
                Meet Lovepreet Singh <span className="btn__dot" />
              </Link>
            </div>
          </div>
        </section>

        <section className="home-close section" data-theme="dark">
          <div className="container home-close__inner">
            <p className="eyebrow">Have a project in mind?</p>
            <h2>Let’s talk about it.</h2>
            <p>Tell us what you are planning and where you need help.</p>
            <Link to="/contact" className="btn">
              Start the conversation <span className="btn__dot" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
