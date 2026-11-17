// Static version of the 3D shape. Used when WebGL is unavailable,
// while the 3D bundle loads, and when motion is reduced.
const outer = [[100, 14], [172, 57], [172, 143], [100, 186], [28, 143], [28, 57]]
const inner = [[100, 62], [141, 86], [141, 134], [100, 158], [59, 134], [59, 86]]
const accentDots = [outer[0], outer[3], inner[2], inner[4]]

const pts = (arr) => arr.map((p) => p.join(',')).join(' ')

export default function HeroFallback() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="mx-auto h-full w-full max-w-md"
      fill="none"
      stroke="#fafafa"
      strokeOpacity="0.45"
      strokeWidth="0.8"
      strokeLinejoin="round"
    >
      <polygon points={pts(outer)} />
      <polygon points={pts(inner)} />
      {outer.map((p, i) => (
        <line key={i} x1={p[0]} y1={p[1]} x2={inner[i][0]} y2={inner[i][1]} />
      ))}
      {accentDots.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="2.6" fill="#c6f432" stroke="none" />
      ))}
    </svg>
  )
}
