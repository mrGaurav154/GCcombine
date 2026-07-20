import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { StaggerGroup, StaggerItem } from '../../components/shared/Reveal';
import { industries } from '../../data/corporateData';

export default function IndustriesPage() {
  return (
    <>
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
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <StaggerItem key={ind.title}>
                  <div className="card-hover h-full rounded-2xl border border-slate-100 bg-white p-8 flex gap-5">
                    <span className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon size={26} className="text-primary" />
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-text-primary text-lg mb-2">{ind.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{ind.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-pad bg-bg">
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
    </>
  );
}
