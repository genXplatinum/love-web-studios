import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { services } from '../data/site';
import './Services.css';

export default function Services() {
  return (
    <>
      <PageHeader
        index="03"
        label="Services"
        title={<>What we do.<br /><em>How we help.</em></>}
        intro="We can handle one part of a project or take it from the first conversation through to launch."
        meta={[
          { k: 'Services', v: 'Web, brand, 3D, SEO and online stores' },
          { k: 'Work', v: 'Projects and ongoing support' },
          { k: 'Team', v: 'Handled by our own designers and developers' },
        ]}
      />

      <section className="services-page section">
        <div className="container">
          <div className="services-page__intro">
            <p className="eyebrow">What is included</p>
            <h2>Choose one service or ask us to handle the full project.</h2>
          </div>

          <div className="services-page__list">
            {services.map((service) => (
              <article className="service-detail" key={service.id}>
                <div className="service-detail__number mono">{service.index}</div>
                <div className="service-detail__main">
                  <span className="mono">{service.short}</span>
                  <h2>{service.title}</h2>
                  <p className="lead">{service.summary}</p>
                </div>
                <div className="service-detail__scope">
                  <div>
                    <span className="mono">Included</span>
                    <ul>
                      {service.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                  </div>
                  <div>
                    <span className="mono">Typical outcomes</span>
                    <div className="service-detail__tags">
                      {service.deliverables.map((deliverable) => <span key={deliverable}>{deliverable}</span>)}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="services-page__close" data-theme="dark">
            <p className="eyebrow">Not sure where to begin?</p>
            <h2>Tell us what you need. We will help you plan it.</h2>
            <Link to="/contact" className="btn">Start a project <span className="btn__dot" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
