import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { services } from '../data/site';
import './Services.css';

export default function Services() {
  return (
    <>
      <PageHeader
        index="03"
        label="Capabilities"
        title={<>The whole<br /><em>signal.</em></>}
        intro="Four complementary disciplines. One experienced team, moving from the initial thought to the live result without a handoff gap."
        meta={[
          { k: 'Disciplines', v: 'Strategy, identity, product, growth' },
          { k: 'Engagements', v: 'Projects and retained partnerships' },
          { k: 'Approach', v: 'Collaborative and in-house' },
        ]}
      />

      <section className="services-page section">
        <div className="container">
          <div className="services-page__intro">
            <p className="eyebrow">What is included</p>
            <h2>Use the parts you need. Keep the entire experience coherent.</h2>
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
            <h2>Tell us the problem. We will define the right build.</h2>
            <Link to="/contact" className="btn">Start a project <span className="btn__dot" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
