import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { StaggerGroup, StaggerItem } from '../shared/Reveal';
import { roadmapStages } from '../../data/siteData';

export default function Roadmap() {
  return (
    <section className="section-pad bg-bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-glow opacity-40" />
      <div className="container-px relative">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Career Roadmap"
            title={<span className="text-white">From first line of code to your first offer letter</span>}
            sub={<span className="text-slate-400">A structured, mentor-guided path — not a self-paced maze.</span>}
          />

          <div className="mt-16 relative">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-primary via-secondary to-accent" />
            <StaggerGroup className="grid md:grid-cols-5 gap-10 md:gap-4" stagger={0.15}>
              {roadmapStages.map((stage, i) => (
                <StaggerItem key={stage.title} className="relative flex md:flex-col items-start md:items-center gap-4 md:text-center">
                  <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-display font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-base mb-1">{stage.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{stage.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {['Live Mentor Sessions', 'Real Capstone Projects', 'Mock Interviews', 'Resume Building', 'Direct Referrals'].map((f) => (
              <span key={f} className="inline-flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-success" /> {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
