import SectionHeading from '../shared/SectionHeading';
import { StaggerGroup, StaggerItem } from '../shared/Reveal';
import { faculty } from '../../data/siteData';

export default function Faculty() {
  return (
    <section className="section-pad bg-bg" id="faculty">
      <div className="container-px">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Faculty"
            title="Learn from people who've shipped real software."
          />

          <StaggerGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
            {faculty.map((f) => (
              <StaggerItem key={f.name}>
                <div className="card-hover h-full rounded-2xl border border-slate-100 bg-white p-7 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-white font-display font-bold text-lg mb-4">
                    {f.initials}
                  </div>
                  <h3 className="font-display font-semibold text-text-primary">{f.name}</h3>
                  <p className="text-xs font-semibold text-primary mt-1 mb-3">{f.role}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
