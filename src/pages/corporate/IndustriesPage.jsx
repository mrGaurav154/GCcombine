import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { StaggerGroup, StaggerItem } from '../../components/shared/Reveal';
import { industries } from '../../data/corporateData';

// Cycled per card so the hover state isn't the same color on every tile —
// same brand palette used across the site (primary/secondary/accent/success)
// plus a few complementary tones for variety.
const accentColors = ['#2563EB', '#7C3AED', '#06B6D4', '#10B981', '#F59E0B', '#F43F5E', '#6366F1', '#EC4899', '#14B8A6'];

export default function IndustriesPage() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="relative z-10">
        <section className="relative pt-32 pb-16 bg-gradient-radial-glow">
          <div className="container-px">
            <div className="mx-auto max-w-3xl text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-display font-extrabold text-4xl sm:text-5xl leading-tight"
              >
                Industries <span className="text-gradient">we serve.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 text-lg text-text-secondary leading-relaxed"
              >
                We've delivered software across these industries — bringing domain context along
                with the code.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-px">
            <StaggerGroup className="mx-auto max-w-5xl grid sm:grid-cols-2 gap-6" stagger={0.1}>
              {industries.map((ind, i) => {
                const Icon = ind.icon;
                const accent = accentColors[i % accentColors.length];
                return (
                  <StaggerItem key={ind.title}>
                    <div
                      className="accent-card h-full rounded-2xl border border-slate-100 bg-white p-8 flex gap-5"
                      style={{ '--accent': accent }}
                    >
                      <span className="accent-icon w-14 h-14 rounded-xl flex items-center justify-center shrink-0">
                        <Icon size={26} />
                      </span>
                      <div>
                        <h3 className="accent-title font-display font-semibold text-text-primary text-lg mb-2">{ind.title}</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">{ind.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-px">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-text-primary">
                Don't see your industry?
              </h2>
              <p className="mt-3 text-text-secondary">We work with plenty of teams outside these categories too.</p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold bg-primary hover:bg-primary-dark transition-colors">
                Get in Touch <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
