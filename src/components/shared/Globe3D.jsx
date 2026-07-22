import companyLogo from '../../assets/logo.png';

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
      
      {/* Double-sided 3D logo disc inside the globe structure */}
      <div className="globe-logo-disc">
        <div 
          className="globe-logo-face front"
          style={{ backgroundImage: `url(${companyLogo})` }}
        >
          <div className="globe-logo-shine" />
        </div>
        <div 
          className="globe-logo-face back"
          style={{ backgroundImage: `url(${companyLogo})` }}
        >
          <div className="globe-logo-shine" />
        </div>
      </div>

      <div className="orbit-ring">
        <span className="orbit-dot" />
      </div>
    </div>
  );
}

