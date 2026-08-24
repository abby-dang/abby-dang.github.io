const skillGroups = [
  { label: 'Languages', items: ['JavaScript', 'Python', 'HTML/CSS', 'Kotlin', 'Java', 'C#'] },
  { label: 'Frameworks', items: ['React', 'React Native', 'Django', 'Android Studio'] },
  { label: 'Tools', items: ['Git', 'Supabase', 'PostgreSQL', 'MySQL', 'Postman'] },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-card">
        <div className="about-top">
          <div className="about-side">
            <div className="about-photo-wrap">
              <img
                className="about-photo"
                src="/about-photo.jpg"
                alt="Abbygail Dang"
              />
            </div>
            <div className="about-skills">
              {skillGroups.map((g) => (
                <div className="skill-group" key={g.label}>
                  <p className="skill-label">{g.label}</p>
                  <div className="skill-pills">
                    {g.items.map((s) => (
                      <span className="pill" key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-text">
            <p className="eyebrow">About</p>
            <h2>A little more about me</h2>
            <p>
              I'm a full-stack and mobile developer who likes building things
              end to end, and enjoys them being genuinely useful, not just
              functional. Most of my work centers on React and React Native,
              paired with Python and Django on the backend, but I move across
              whichever layer a project actually needs. I like picking up new
              tools quickly when something calls for it: I learned Kotlin
              from scratch to build an Android app, and I'm currently
              deepening my TypeScript as I take on more frontend work.
            </p>
            <p>
              I studied Computer Science at the University of Utah with an
              emphasis in Data Science, and served as President of Women in
              Computing during my final year. My interest in full-stack work
              grew out of wanting to build complete, practical tools rather
              than isolated pieces, which pushed me to get comfortable owning
              a project from database schema to user interface.
            </p>
            <p>
              I care about writing clean, well-organized code and turning a
              messy, underspecified problem into something structured and
              reliable. My current project is a salon management platform,
              inspired directly by tools I wished existed during my own time
              working as a nail technician, and I'm building it solo:
              architecting the database, the API, and eventually the
              frontend, all from scratch.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .about {
          position: relative;
          z-index: 1;
          max-width: 980px;
          margin: 0 auto;
          padding: 3rem 1.5rem 5rem;
        }
        .about-card {
          background: var(--bg-alt);
          border-radius: var(--card-radius);
          padding: 2.75rem;
          box-shadow: 0 2px 0 rgba(31,42,68,0.06), 0 20px 40px -24px rgba(31,42,68,0.2);
        }
        .about-top {
          display: grid;
          grid-template-columns: 0.85fr 1.4fr;
          gap: 2.5rem;
        }
        .about-side {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .about-photo-wrap {
          width: 100%;
          max-width: 220px;
        }
        .about-photo {
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 22px;
          border: 4px solid var(--bg);
          box-shadow: 0 10px 0 var(--yellow);
        }
        .eyebrow {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--pink-deep);
          margin: 0 0 0.4rem;
        }
        h2 {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 3vw, 2rem);
          margin: 0 0 1rem;
        }
        .about-text p {
          font-size: 1rem;
          line-height: 1.65;
          color: var(--ink-soft);
        }
        .about-skills {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .skill-group { margin: 0; }
        .skill-label {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--ink-soft);
          margin: 0 0 0.6rem;
        }
        .skill-pills { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .pill {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          padding: 0.35rem 0.7rem;
          border-radius: 999px;
          background: var(--bg);
          border: 1.5px solid rgba(31,42,68,0.12);
        }
        @media (max-width: 780px) {
          .about-card { padding: 2rem; }
          .about-top { grid-template-columns: 1fr; }
          .about-photo-wrap { max-width: 180px; margin: 0 auto; }
          .about-side { align-items: center; text-align: left; }
        }
      `}</style>
    </section>
  );
}