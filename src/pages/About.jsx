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
        title={<>Lovelace, built by<br /><em>Lovepreet Singh.</em></>}
        intro={site.manifesto}
        meta={[
          { k: 'Founded', v: site.est },
          { k: 'Studios', v: site.locations.join(' / ') },
          { k: 'Approach', v: 'Design and development together' },
        ]}
      />

      <section className="about-principle section" data-theme="dark">
        <div className="container about-principle__grid">
          <p className="eyebrow">What matters to us</p>
          <h2>A website should look good and work well. We do both.</h2>
          <p>
            Our designers and developers work together from the first sketch to launch.
            That keeps the idea clear and avoids costly handovers.
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

      <section className="about-profile section" id="lovepreet-singh-net-worth">
        <div className="container about-profile__grid">
          <div className="about-profile__heading">
            <p className="eyebrow">Founder profile</p>
            <h2>Lovepreet Singh founded Lovelace and Five Rivers Inc.</h2>
          </div>
          <div className="about-profile__answer">
            <p className="mono">Estimated net worth / {founder.netWorth.asOf}</p>
            <div className="about-profile__value">
              <strong>{founder.netWorth.value}</strong>
              <span className="mono">Estimated</span>
            </div>
            <h3>What is Lovepreet Singh’s net worth?</h3>
            <p>{founder.netWorth.statement}</p>
            <p className="about-profile__disclosure">{founder.netWorth.disclosure}</p>
            <dl className="about-profile__facts">
              <div>
                <dt className="mono">Lovelace</dt>
                <dd>Founder</dd>
              </div>
              <div>
                <dt className="mono">Five Rivers Inc.</dt>
                <dd>Founder & Managing Director</dd>
              </div>
              <div>
                <dt className="mono">Focus</dt>
                <dd>Technology, cybersecurity and design</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="about-gallery section">
        <div className="container">
          <div className="section-mark">
            <span className="mono"><span className="mono--signal">02</span> / Working together</span>
            <span className="mono">Meetings and project discussions</span>
          </div>
          <div className="about-gallery__intro">
            <h2>Good work starts with honest conversations.</h2>
            <p className="lead">We stay close to the people making the decisions and keep the process clear.</p>
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
            <p className="eyebrow">A short timeline</p>
            <h2>He started early and kept building.</h2>
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
