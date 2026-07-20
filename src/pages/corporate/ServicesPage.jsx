import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { StaggerGroup, StaggerItem } from '../../components/shared/Reveal';
import { services } from '../../data/siteData';

export default function ServicesPage() {
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
              Software services, <span className="text-gradient">built around your team.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg text-text-secondary leading-relaxed"
            >
              From product engineering to cloud, AI and ongoing support — we work as an extension
              of your engineering team.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-px">
          <StaggerGroup className="mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <div className="card-hover h-full rounded-2xl border border-slate-100 bg-white p-7">
                  <h3 className="font-display font-semibold text-text-primary text-lg mb-3">{s.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-pad bg-bg">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-text-primary">
              Have a project in mind?
            </h2>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold bg-primary hover:bg-primary-dark transition-colors">
              Get in Touch <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
