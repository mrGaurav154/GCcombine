import { FileText, BrainCircuit, NotebookPen, ListChecks, ArrowRight } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { StaggerGroup, StaggerItem } from '../shared/Reveal';
import { freeResources, blogPosts } from '../../data/siteData';

const icons = [FileText, BrainCircuit, NotebookPen, ListChecks];

export default function Resources() {
  return (
    <section className="section-pad bg-white" id="resources">
      <div className="container-px">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Free Resources"
            title="Start before you enroll."
            sub="Free downloads and reads to help you get a head start on your track."
          />

          <StaggerGroup className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.08}>
            {freeResources.map((r, i) => {
              const Icon = icons[i];
              return (
                <StaggerItem key={r.title}>
                  <div className="card-hover h-full rounded-2xl bg-bg-dark text-white p-6 flex flex-col gap-3">
                    <Icon size={22} className="text-accent" />
                    <h4 className="font-display font-semibold text-sm">{r.title}</h4>
                    <span className="text-xs text-white/60">{r.sub}</span>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>

          <StaggerGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
            {blogPosts.map((b) => (
              <StaggerItem key={b.title}>
                <div className="card-hover h-full rounded-2xl border border-slate-100 overflow-hidden bg-white">
                  <div className="h-32 bg-gradient-primary" />
                  <div className="p-6">
                    <span className="text-[11px] font-bold uppercase tracking-wide text-secondary">
                      {b.category}
                    </span>
                    <h4 className="font-display font-semibold text-base mt-2 mb-2 text-text-primary">
                      {b.title}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">{b.desc}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
