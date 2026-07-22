const LONGITUDE_STEPS = [0, 30, 60, 90, 120, 150];
const LATITUDE_RINGS = [
  { translateZ: 0, scale: 1 },
  { translateZ: -36, scale: 0.7 },
  { translateZ: 36, scale: 0.7 },
];

export default function Globe3D({ className = '' }) {
  return (
    <div className={`globe-3d ${className}`}>
      {LONGITUDE_STEPS.map((deg) => (
        <div
          key={`lon-${deg}`}
          className="globe-ring lon"
          style={{ transform: `rotateY(${deg}deg)` }}
        />
      ))}
      {LATITUDE_RINGS.map((r, i) => (
        <div
          key={`lat-${i}`}
          className="globe-ring lat"
          style={{
            transform: `rotateX(90deg) translateZ(${r.translateZ}px) scale(${r.scale})`,
          }}
        />
      ))}
      <div className="globe-core" />
      <div className="globe-logo-badge">
        <span className="mark">GC</span>
      </div>
      <div className="orbit-ring">
        <span className="orbit-dot" />
      </div>
    </div>
  );
}
