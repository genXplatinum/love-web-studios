import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { founder, founderGallery, site } from '../data/site';
import './About.css';

const timeline = [
  ['Age 6', 'Wrote his first lines of code.'],
  ['Age 10', 'Designed and shipped his first website.'],
  ['Age 15', 'Founded Five River Solutions.'],
  ['Today', 'Leads Lovelace across London, Dubai, and India.'],
];

export default function About() {
  return (
    <>
      <PageHeader
        index="01"
        label="The studio"
        title={<>Beautiful has to<br /><em>hold up.</em></>}
        intro={site.manifesto}
        meta={[
          { k: 'Founded', v: site.est },
          { k: 'Studios', v: site.locations.join(' / ') },
          { k: 'Principle', v: 'Creative instinct, technical rigour' },
        ]}
      />

      <section className="about-principle section" data-theme="dark">
        <div className="container about-principle__grid">
          <p className="eyebrow">The premise</p>
          <h2>Most websites are either impressive or dependable. They should be both.</h2>
          <p>
            Lovelace brings design and engineering into the same room, so each decision is
            beautiful on the surface and resilient beneath it.
          </p>
        </div>
      </section>

      <section className="about-founder section">
        <div className="container about-founder__grid">
          <div className="about-founder__image-wrap">
            <img src={founder.photo} alt={founder.name} />
            <span className="mono">{founder.role}</span>
          </div>
          <div className="about-founder__copy">
            <p className="eyebrow">Founder</p>
            <h2>{founder.name}</h2>
            <p className="about-founder__headline">{founder.headline}</p>
            {founder.bio.slice(0, 2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <blockquote>{founder.quote}</blockquote>
          </div>
        </div>
      </section>

      <section className="about-gallery section">
        <div className="container">
          <div className="section-mark">
            <span className="mono"><span className="mono--signal">02</span> / In the room</span>
            <span className="mono">The work behind the work</span>
          </div>
          <div className="about-gallery__intro">
            <h2>Trusted in the conversations where decisions get made.</h2>
            <p className="lead">The same directness and technical rigour carry from the room into every client build.</p>
          </div>
          <div className="about-gallery__grid">
            {founderGallery.map((image, index) => (
              <figure className={`about-gallery__item about-gallery__item--${index + 1}`} key={image.src}>
                <img src={image.src} alt={image.caption} loading="lazy" />
                <figcaption className="mono">{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="about-trajectory section">
        <div className="container about-trajectory__grid">
          <div>
            <p className="eyebrow">The trajectory</p>
            <h2>A builder's instinct, shaped over time.</h2>
          </div>
          <ol>
            {timeline.map(([key, value]) => (
              <li key={key}>
                <span className="mono">{key}</span>
                <p>{value}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-recognition section">
        <div className="container">
          <p className="eyebrow">Recognition</p>
          <div className="about-recognition__grid">
            {founder.awards.map((award) => <span key={award}>{award}</span>)}
          </div>
          <Link to="/contact" className="btn">Work with Lovelace <span className="btn__dot" /></Link>
        </div>
      </section>
    </>
  );
}
