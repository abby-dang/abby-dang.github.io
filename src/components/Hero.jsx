import BubbleField from './BubbleField';

export default function Hero() {
  return (
    <section className="hero">
      <BubbleField />
      <div className="hero-content">
        <p className="eyebrow">Hi, I'm</p>
        <h1>Abbygail Dang</h1>
  
        <p className="tagline">
          Full-Stack &amp; Mobile Developer
        </p>
        <div className="hero-links">
          <a className="btn btn-primary" href="#projects">See my projects</a>
          <a className="btn btn-ghost" href="mailto:abbygail_dang@outlook.com">Say hi</a>
        </div>
        <div className="hero-meta">
          <a href="https://github.com/abby-dang" target="_blank" rel="noreferrer">GitHub</a>
          <span className="dot">•</span>
          <a href="https://linkedin.com/in/abbygaildang8499" target="_blank" rel="noreferrer">LinkedIn</a>
          <span className="dot">•</span>
          <span>Oakland, CA</span>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 1.5rem;
        }
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 640px;
          text-align: center;
        }
        .eyebrow {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          letter-spacing: 0.06em;
          color: var(--pink-deep);
          margin: 0 0 0.5rem;
          text-transform: lowercase;
        }
        h1 {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(2.8rem, 8vw, 4.5rem);
          margin: 0 0 1rem;
          line-height: 1.05;
        }
        .tagline {
          font-size: 1.15rem;
          color: var(--ink-soft);
          line-height: 1.6;
          max-width: 480px;
          margin: 0 auto 2rem;
        }
        .hero-links {
          display: flex;
          gap: 0.9rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        .btn {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 1rem;
          padding: 0.85rem 1.8rem;
          border-radius: 999px;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .btn:hover { transform: translateY(-2px); }
        .btn-primary {
          background: var(--ink);
          color: var(--bg-alt);
          box-shadow: 0 6px 0 var(--pink-deep);
        }
        .btn-primary:hover { box-shadow: 0 8px 0 var(--pink-deep); }
        .btn-ghost {
          background: transparent;
          color: var(--ink);
          border: 2px solid var(--ink);
        }
        .hero-meta {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--ink-soft);
        }
        .hero-meta a { text-decoration: underline; text-underline-offset: 3px; }
        .dot { margin: 0 0.5rem; opacity: 0.5; }
      `}</style>
    </section>
  );
}
