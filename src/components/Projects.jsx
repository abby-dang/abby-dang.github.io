import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-head">
        <p className="eyebrow">Projects</p>
        <h2>What I've been building</h2>
      </div>
      <div className="project-list">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} reverse={i % 2 === 1} />
        ))}
      </div>

      <style>{`
        .projects {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
          padding: 4rem 1.5rem 5rem;
        }
        .section-head {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .eyebrow {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--mint-deep);
          letter-spacing: 0.05em;
          margin: 0 0 0.4rem;
        }
        h2 {
          font-family: var(--font-display);
          font-size: clamp(1.9rem, 4vw, 2.6rem);
          margin: 0;
        }
        .project-list {
          display: grid;
          gap: 2rem;
        }
      `}</style>
    </section>
  );
}
