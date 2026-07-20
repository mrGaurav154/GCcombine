import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, sub, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';
  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <Reveal direction="fade">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-text-primary">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
