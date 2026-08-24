export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-heading">Let's talk</p>
      <a className="footer-email" href="mailto:abbygail_dang@outlook.com">
        abbygail_dang@outlook.com
      </a>
      <div className="footer-links">
        <a href="https://github.com/abby-dang" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/abbygaildang8499" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      <p className="footer-note">Built with React · Oakland, CA</p>

      <style>{`
        .footer {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 4rem 1.5rem 3rem;
        }
        .footer-heading {
          font-family: var(--font-display);
          font-size: 1.6rem;
          margin: 0 0 0.75rem;
        }
        .footer-email {
          font-family: var(--font-mono);
          font-size: 1.05rem;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .footer-links {
          display: flex;
          gap: 1.2rem;
          justify-content: center;
          margin: 1.3rem 0 1.5rem;
          font-size: 0.9rem;
        }
        .footer-links a { text-decoration: underline; text-underline-offset: 3px; }
        .footer-note {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--ink-soft);
        }
      `}</style>
    </footer>
  );
}
