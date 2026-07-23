import Reveal from '../shared/Reveal';
import { hiringPartners } from '../../data/siteData';
import { brandColors, googleLetterColors } from '../../data/brandColors';

function CompanyWordmark({ name }) {
  if (name === 'Google') {
    return (
      <span className="font-display font-bold text-lg">
        {name.split('').map((ch, i) => (
          <span key={i} style={{ color: googleLetterColors[i % googleLetterColors.length] }}>
            {ch}
          </span>
        ))}
      </span>
    );
  }

  if (name === 'Microsoft') {
    return (
      <span className="flex items-center gap-2.5">
        <span className="grid grid-cols-2 gap-[2px] w-4 h-4 shrink-0">
          <span style={{ background: '#F25022' }} />
          <span style={{ background: '#7FBA00' }} />
          <span style={{ background: '#00A4EF' }} />
          <span style={{ background: '#FFB900' }} />
        </span>
        <span className="font-display font-bold text-lg" style={{ color: brandColors.Microsoft.text }}>
          {name}
        </span>
      </span>
    );
  }

  const brand = brandColors[name];
  if (brand?.dot) {
    return (
      <span className="font-display font-bold text-lg" style={{ color: brand.text }}>
        {name}
        <span className="inline-block w-2 h-2 rounded-full ml-1 align-middle" style={{ background: brand.dot }} />
      </span>
    );
  }

  return (
    <span className="font-display font-bold text-lg" style={{ color: brand?.text ?? '#475569' }}>
      {name}
    </span>
  );
}

function MarqueeTrack({ list, extraClassName = '', ariaHidden = false }) {
  return (
    <div
      className={`flex w-max marquee-track gap-4 ${extraClassName}`}
      aria-hidden={ariaHidden || undefined}
    >
      {list.map((name, i) => (
        <div
          key={`${name}-${i}`}
          className="flex items-center justify-center px-8 py-5 rounded-2xl border border-slate-100 bg-white min-w-[160px]"
        >
          <CompanyWordmark name={name} />
        </div>
      ))}
    </div>
  );
}

export default function Companies({ title = "Our Hiring Partners" }) {
  const list = [...hiringPartners, ...hiringPartners];
  return (
    <section className="section-pad !pt-10 sm:!pt-16">
      <div className="container-px">
        <Reveal>
          <div className="text-center mb-10">
            <p className="text-2xl sm:text-3xl font-display font-bold text-text-primary tracking-tight">
              {title}
            </p>
            <span className="mt-3 inline-flex items-center gap-3 justify-center">
              <span className="h-px w-8 bg-accent/30" />
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="h-px w-8 bg-accent/30" />
            </span>
          </div>
        </Reveal>
        <div className="relative overflow-hidden mx-auto max-w-6xl">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-bg to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-bg to-transparent z-10" />
          {/* Base layer: always visible, grayscale */}
          <MarqueeTrack list={list} extraClassName="clients-gray-layer" />
          {/* Overlay layer: full color, only visible through the center mask band,
              so each logo appears to gain color as it reaches the middle. */}
          <div className="absolute inset-0 clients-color-layer pointer-events-none">
            <MarqueeTrack list={list} ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
