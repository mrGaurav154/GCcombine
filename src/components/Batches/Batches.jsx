import { CalendarDays, Laptop, User } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { StaggerGroup, StaggerItem } from '../shared/Reveal';
import { upcomingBatches } from '../../data/siteData';

export default function Batches() {
  return (
    <section className="section-pad bg-bg" id="batches">
      <div className="container-px">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Upcoming Batches"
            title="Seats are limited — reserve yours early."
            sub="New batches start every few weeks across our most in-demand tracks."
          />

          <StaggerGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
            {upcomingBatches.map((b) => (
              <StaggerItem key={b.title}>
                <div className="card-hover h-full rounded-2xl border border-slate-100 bg-white p-6">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="font-display font-semibold text-text-primary">{b.title}</h3>
                    <span className="text-[11px] font-bold text-white bg-accent px-3 py-1 rounded-full">
                      {b.seatsLeft}
                    </span>
                  </div>

                  <div className="flex gap-2 mb-5">
                    {[
                      [b.countdown.d, 'Days'],
                      [b.countdown.h, 'Hrs'],
                      [b.countdown.m, 'Min'],
                    ].map(([val, label]) => (
                      <div key={label} className="flex-1 rounded-xl bg-bg-dark text-white text-center py-2.5">
                        <div className="font-display font-bold text-lg">{String(val).padStart(2, '0')}</div>
                        <div className="text-[10px] uppercase tracking-wide text-white/60">{label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2 text-sm text-text-secondary mb-6">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays size={14} /> Starts {b.startDate}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Laptop size={14} /> {b.mode}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <User size={14} /> Trainer: {b.trainer}
                    </span>
                  </div>

                  <a
                    href="#contact"
                    className="block text-center w-full py-2.5 rounded-xl font-semibold text-sm text-primary border border-primary/30 hover:bg-primary/5 transition-colors"
                  >
                    Reserve Seat
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
