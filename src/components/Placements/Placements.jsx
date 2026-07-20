import { FaLinkedinIn } from 'react-icons/fa';
import Counter from '../shared/Counter';
import SectionHeading from '../shared/SectionHeading';
import { StaggerGroup, StaggerItem } from '../shared/Reveal';
import { testimonials, hiringPartners } from '../../data/siteData';

const placementStats = [
  { label: 'Students Placed', value: 2750, suffix: '+' },
  { label: 'Hiring Companies', value: 120, suffix: '+' },
  { label: 'Placement Rate', value: 92, suffix: '%' },
  { label: 'Avg. Time to Offer', value: 45, suffix: ' days' },
];

export default function Placements() {
  return (
    <section className="section-pad bg-white" id="placements">
      <div className="container-px">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Placements"
            title="A placement track record built over 20 years"
            sub="Our career team works alongside you from day one — resume, mock interviews, and warm introductions to hiring partners."
          />

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            {placementStats.map((s) => (
              <div key={s.label} className="text-center rounded-2xl border border-slate-100 py-8 px-4">
                <div className="font-display font-extrabold text-3xl text-gradient">
                  <Counter end={s.value} duration={2} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs sm:text-sm text-text-secondary">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="font-display font-bold text-xl mb-6 text-center">Student Success Stories</h3>
            <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
              {testimonials.map((t) => (
                <StaggerItem key={t.name}>
                  <div className="card-hover rounded-2xl border border-slate-100 p-6 text-center bg-bg">
                    <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover mx-auto mb-4 border-2 border-white shadow" />
                    <h4 className="font-semibold text-text-primary">{t.name}</h4>
                    <p className="text-xs text-text-secondary mt-1">{t.role}</p>
                    <a href="#" className="inline-flex items-center gap-1 text-xs text-primary mt-3 font-medium">
                      <FaLinkedinIn size={13} /> View Profile
                    </a>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-3">
            {hiringPartners.map((p) => (
              <span key={p} className="px-4 py-2 rounded-full bg-primary/5 text-sm font-medium text-text-secondary">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
