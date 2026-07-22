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

export default function Companies({ title = "Our Hiring Partners" }) {
  const list = [...hiringPartners, ...hiringPartners];
  return (
    <section className="section-pad !pt-0">
      <div className="container-px">
        <Reveal>
          <p className="text-center text-sm font-semibold tracking-widest uppercase text-text-secondary mb-8">
            {title}
          </p>
        </Reveal>
        <div className="relative overflow-hidden mx-auto max-w-6xl">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-bg to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-bg to-transparent z-10" />
          <div className="flex w-max marquee-track gap-4">
            {list.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center justify-center px-8 py-5 rounded-2xl border border-slate-100 bg-white min-w-[160px]"
              >
                <CompanyWordmark name={name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
