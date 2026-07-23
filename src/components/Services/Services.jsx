import { Code2, Smartphone, BrainCircuit, Cloud, Database, PenTool, Megaphone, Headset, GraduationCap } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { StaggerGroup, StaggerItem } from '../shared/Reveal';
import { services } from '../../data/siteData';

const icons = [Code2, Smartphone, BrainCircuit, Cloud, Database, PenTool, Megaphone, Headset, GraduationCap];

export default function Services() {
  return (
    <section
  id="services"
  className="relative section-pad overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50"
> 
<div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>

<div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"></div>
<div className="relative z-10 container-px">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Software Development"
            title="Beyond training — we build software too"
            sub="Globe Creater is also a software development studio, so our trainers teach from real client work, not textbooks."
          />

          <StaggerGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.08}>
            {services.map((s, i) => {
              const Icon = icons[i] || Code2;
              return (
                <StaggerItem key={s.title}>
                  <div className="card-hover h-full rounded-2xl border border-slate-100 bg-white p-6">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display font-semibold text-base mb-2 text-text-primary">{s.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
