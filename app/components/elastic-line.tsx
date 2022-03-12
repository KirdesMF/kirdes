type ElasticProps = {
  width?: string;
  height?: string;
};
export function ElasticLine(props: ElasticProps) {
  const { width = '30%', height = '2px' } = props;
  return (
    <div style={{ width, height: height }}>
      <svg
        role="img"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
      >
        <line
          x1="0"
          y1="50"
          x2="100"
          y2="50"
          stroke="var(--text)"
          strokeWidth={height}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
