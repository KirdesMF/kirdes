const colors = {
  none: 'var(--body-bg)',
  about: 'var(--about-base)',
  works: 'var(--works-base)',
  contact: 'var(--contact-base)',
};

export function PatternDivider({
  end = 'none',
}: {
  end?: keyof typeof colors;
}) {
  return (
    <div className="pattern-divider">
      <svg role="img" width="100%" height="100%">
        <defs>
          <linearGradient id={`gradient-${end}`}>
            <stop offset="15%" stopColor={colors.none} />
            <stop offset="100%" stopColor={colors[end]} />
          </linearGradient>
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="10"
            height="10"
          >
            <circle cx="5" cy="5" r="1.5" fill="white" />
          </pattern>
          <mask id="mask">
            <rect width="100%" height="100%" fill="url(#pattern)" />
          </mask>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={`url(#gradient-${end})`}
          mask="url(#mask)"
        />
      </svg>
    </div>
  );
}
