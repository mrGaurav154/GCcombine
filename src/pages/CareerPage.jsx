import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { StaggerGroup, StaggerItem } from '../components/shared/Reveal';
import { careerHighlights } from '../data/corporateData';
import { brand } from '../data/siteData';

// Cycled per card so the hover state isn't the same color on every tile —
// same brand palette used across the site (primary/secondary/accent/success)
// plus a few complementary tones for variety.
const accentColors = ['#2563EB', '#7C3AED', '#06B6D4', '#10B981', '#F59E0B', '#F43F5E', '#6366F1', '#EC4899', '#14B8A6'];

export default function CareerPage() {
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
                Build your career <span className="text-gradient">with us.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 text-lg text-text-secondary leading-relaxed"
              >
                We're a small team doing both software delivery and technical training — if you like
                building and teaching, we'd like to hear from you.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-px">
            <StaggerGroup className="mx-auto max-w-5xl grid sm:grid-cols-3 gap-6" stagger={0.1}>
              {careerHighlights.map((c, i) => {
                const Icon = c.icon;
                const accent = accentColors[i % accentColors.length];
                return (
                  <StaggerItem key={c.title}>
                    <div
                      className="accent-card h-full rounded-2xl border border-slate-100 bg-white p-7"
                      style={{ '--accent': accent }}
                    >
                      <div className="accent-icon w-11 h-11 rounded-xl flex items-center justify-center mb-5">
                        <Icon size={20} />
                      </div>
                      <h3 className="accent-title font-display font-semibold text-text-primary text-base mb-2">{c.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{c.desc}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>

            <div className="mx-auto max-w-3xl mt-14 rounded-2xl border border-slate-100 bg-white/80 backdrop-blur-sm p-8 text-center">
              <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
                Don't see an open role that fits?
              </h3>
              <p className="text-text-secondary text-sm mb-5">
                Send us your resume anyway — we're always open to meeting good people.
              </p>
              <a
                href={`mailto:${brand.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold bg-primary hover:bg-primary-dark transition-colors"
              >
                <Mail size={16} /> {brand.email}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
