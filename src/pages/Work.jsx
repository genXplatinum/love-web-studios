import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { projects } from '../data/site';
import './Work.css';

function ProjectVisual({ project }) {
  if (project.id === 'petvet') {
    return (
      <div className="work-art work-art--petvet" aria-hidden="true">
        <span>Care</span>
        <span>comes home.</span>
        <i />
      </div>
    );
  }

  if (project.id === 'digithrive') {
    return (
      <div className="work-art work-art--digithrive" aria-hidden="true">
        <span className="mono">One business view</span>
        <div className="work-art__metrics">
          <b>72%</b>
          <b>28%</b>
          <b>15 / 20</b>
        </div>
      </div>
    );
  }

  return (
    <div className="work-art work-art--abstract" style={{ '--accent': project.accent }} aria-hidden="true">
      <strong>{project.index}</strong>
      <span>{project.category}</span>
    </div>
  );
}

export default function Work() {
  return (
    <>
      <PageHeader
        index="02"
        label="Selected work"
        title={<>Work that<br /><em>gets chosen.</em></>}
        intro="A selection of digital experiences built to be useful, memorable, and technically sound after the launch moment passes."
        meta={[
          { k: 'Projects', v: 'Web, identity, product, and growth' },
          { k: 'Method', v: 'Strategy through launch, in-house' },
          { k: 'Focus', v: 'Clear business outcomes' },
        ]}
      />

      <section className="work-page section">
        <div className="container">
          <div className="work-page__intro">
            <p className="eyebrow">The work</p>
            <h2>Every project starts with a decision to make the next move clearer.</h2>
          </div>

          <div className="work-page__list">
            {projects.map((project) => (
              <article className="work-case" key={project.id}>
                <ProjectVisual project={project} />
                <div className="work-case__info">
                  <div className="work-case__top mono">
                    <span>{project.index} / Project</span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.blurb}</p>
                  <div className="work-case__tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <span className="work-case__category">{project.category}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="work-page__close">
            <p className="eyebrow">Your turn</p>
            <h2>Your project could be the one people remember.</h2>
            <Link to="/contact" className="btn">Start a project <span className="btn__dot" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
