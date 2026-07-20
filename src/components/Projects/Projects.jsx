import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SectionHeading from '../shared/SectionHeading';
import { StaggerGroup, StaggerItem } from '../shared/Reveal';
import { studentProjects } from '../../data/siteData';

const FILTERS = ['All', 'Full Stack', 'Data Science', 'DevOps'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const shown =
    active === 'All' ? studentProjects : studentProjects.filter((p) => p.category === active);

  return (
    <section className="section-pad bg-white" id="projects">
      <div className="container-px">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Student Work" title="Real projects, built by real students." />

          <div className="mt-8 flex flex-wrap gap-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  f === active
                    ? 'bg-bg-dark text-white border-bg-dark'
                    : 'text-text-secondary border-slate-200 hover:border-primary/40'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <StaggerGroup className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
            {shown.map((p) => (
              <StaggerItem key={p.title}>
                <div className="card-hover group relative h-64 rounded-2xl overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent flex flex-col justify-end p-5">
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-accent mb-1">
                      {p.category}
                    </span>
                    <h3 className="text-white font-display font-semibold text-lg mb-2">{p.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-white/80">
                      <span className="inline-flex items-center gap-1">
                        <ExternalLink size={12} /> Live Demo
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <FaGithub size={12} /> GitHub
                      </span>
                    </div>
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
