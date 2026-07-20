import { BadgeCheck } from 'lucide-react';
import Reveal from '../shared/Reveal';
import { certificationHighlights, brand } from '../../data/siteData';

export default function Certification() {
  return (
    <section className="section-pad bg-white">
      <div className="container-px">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-14 items-center">
          <Reveal direction="right">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full">
              Certification
            </span>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl leading-tight tracking-tight text-text-primary">
              Launch a new career in as little as 6 months.
            </h2>
            <p className="mt-4 text-text-secondary text-base leading-relaxed max-w-lg">
              Stand out to employers with an industry-recognised certificate — including
              IBM-backed credentials — plus the practical, job-ready skills recruiters look for.
            </p>

            <ul className="mt-7 flex flex-col gap-3">
              {certificationHighlights.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-text-primary">
                  <span className="w-5 h-5 mt-0.5 rounded-full bg-success text-white flex items-center justify-center shrink-0">
                    <BadgeCheck size={13} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex gap-5">
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-primary/40 flex items-center justify-center text-center px-2">
                <span className="font-display font-semibold text-xs text-primary leading-tight">
                  {brand.name}
                  <br />
                  Certified
                </span>
              </div>
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-secondary/40 flex items-center justify-center text-center px-2">
                <span className="font-display font-semibold text-xs text-secondary leading-tight">
                  IBM
                  <br />
                  Partnered
                  <br />
                  Credential
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <img
              src="https://globecreater.com/wp-content/uploads/2024/07/5946.jpg"
              alt="Certification"
              loading="lazy"
              className="rounded-3xl shadow-2xl shadow-primary/10 w-full object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
