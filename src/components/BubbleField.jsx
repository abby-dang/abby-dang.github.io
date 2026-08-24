const bubbles = [
  { size: 90, top: '8%', left: '6%', color: 'var(--pink)', delay: '0s', duration: '14s' },
  { size: 40, top: '18%', left: '85%', color: 'var(--mint)', delay: '2s', duration: '11s' },
  { size: 60, top: '65%', left: '90%', color: 'var(--yellow)', delay: '1s', duration: '16s' },
  { size: 30, top: '80%', left: '10%', color: 'var(--mint)', delay: '3s', duration: '12s' },
  { size: 50, top: '40%', left: '3%', color: 'var(--yellow)', delay: '4s', duration: '18s' },
  { size: 24, top: '30%', left: '92%', color: 'var(--pink)', delay: '0.5s', duration: '10s' },
];

export default function BubbleField() {
  return (
    <div className="bubble-field" aria-hidden="true">
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            background: b.color,
            animationDelay: b.delay,
            animationDuration: b.duration,
          }}
        />
      ))}
      <style>{`
        .bubble-field {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }
        .bubble {
          position: absolute;
          border-radius: 50%;
          opacity: 0.35;
          filter: blur(0.5px);
          animation-name: drift;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @keyframes drift {
          0%   { transform: translate(0, 0) scale(1); }
          50%  { transform: translate(14px, -18px) scale(1.06); }
          100% { transform: translate(0, 0) scale(1); }
        }
      `}</style>
    </div>
  );
}
