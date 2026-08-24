export default function ProjectCard({ project, reverse }) {
  return (
    <article className={`project-card ${reverse ? 'reverse' : ''}`}>
      <div className="project-main">
        <div className="project-tag" style={{ background: project.tagColor }}>
          {project.tag}
        </div>
        <h3>{project.name}</h3>
        <p className="project-role">{project.role} · {project.timeframe}</p>
        <p className="project-blurb">{project.blurb}</p>


        <div className="project-stack">
          {project.stack.map((s) => (
            <span className="pill" key={s}>{s}</span>
          ))}
        </div>

        <a className="project-link" href={project.links.repo} target="_blank" rel="noreferrer">
          {project.linkLabel || 'View repo ↗'}
        </a>
      </div>

      <div className="project-orb" style={{ background: project.accent }} aria-hidden="true" />

      <style>{`
        .project-card {
          position: relative;
          background: var(--bg-alt);
          border-radius: var(--card-radius);
          padding: 2.5rem;
          overflow: hidden;
          box-shadow: 0 2px 0 rgba(31,42,68,0.06), 0 20px 40px -24px rgba(31,42,68,0.25);
        }
        .project-main { position: relative; z-index: 1; max-width: 620px; }
        .project-tag {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.3rem 0.75rem;
          border-radius: 999px;
          color: var(--ink);
          margin-bottom: 1rem;
        }
        h3 {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 3vw, 2.1rem);
          margin: 0 0 0.25rem;
        }
        .project-role {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--ink-soft);
          margin: 0 0 1.1rem;
        }
        .project-blurb {
          font-size: 1.02rem;
          line-height: 1.6;
          color: var(--ink-soft);
          margin: 0 0 1.3rem;
        }
        .project-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.4rem;
        }
        .pill {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          padding: 0.35rem 0.7rem;
          border-radius: 999px;
          background: var(--bg);
          border: 1.5px solid rgba(31,42,68,0.12);
        }
        .project-link {
          font-family: var(--font-display);
          font-weight: 600;
          text-decoration: none;
          border-bottom: 2px solid var(--ink);
        }
        .project-orb {
          position: absolute;
          width: 340px;
          height: 340px;
          border-radius: 50%;
          opacity: 0.18;
          right: -120px;
          top: -100px;
          z-index: 0;
        }
        .reverse .project-orb {
          right: auto;
          left: -120px;
        }
        @media (max-width: 640px) {
          .project-card { padding: 1.75rem; border-radius: 20px; }
        }
      `}</style>
    </article>
  );
}
