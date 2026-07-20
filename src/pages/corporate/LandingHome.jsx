import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import SectionHeading from '../../components/shared/SectionHeading';
import { StaggerGroup, StaggerItem } from '../../components/shared/Reveal';
import Companies from '../../components/Companies/Companies';
import { brand, services } from '../../data/siteData';
import { industries } from '../../data/corporateData';

export default function LandingHome() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-radial-glow">
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute top-28 left-[8%] w-14 h-14 rounded-2xl bg-primary/10 animate-float hidden md:block" />
          <span className="absolute top-24 right-[10%] w-16 h-16 rounded-3xl bg-secondary/10 animate-float-slow hidden md:block" />
          <span className="absolute bottom-16 right-[6%] w-10 h-10 rounded-full bg-success/15 animate-float hidden md:block" />
        </div>

        <div className="container-px relative">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6"
            >
              <Sparkles size={14} /> Software Studio &middot; IT Training Institute
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl xl:text-6xl leading-[1.08] tracking-tight text-text-primary"
            >
              We build software, <span className="text-gradient">and the engineers behind it.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
            >
              Globe Creater partners with businesses across High Tech, Healthcare, Manufacturing,
              Financial Services and the Public Sector to deliver custom software — and trains the
              next generation of developers through our Industrial Training programs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center justify-center gap-4"
            >
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold bg-primary hover:bg-primary-dark transition-colors">
                Talk to Us <ArrowRight size={18} />
              </Link>
              <Link to="/industrial-training" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-text-primary border border-slate-200 hover:border-primary/40 hover:text-primary transition-colors bg-white/70">
                Explore Industrial Training
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="section-pad bg-white">
        <div className="container-px">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="What We Do"
              title="End-to-end software services."
              sub="From product engineering to cloud and AI, we work as an extension of your team."
            />
            <StaggerGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.08}>
              {services.slice(0, 8).map((s) => (
                <StaggerItem key={s.title}>
                  <div className="card-hover h-full rounded-2xl border border-slate-100 bg-bg p-6">
                    <h3 className="font-display font-semibold text-text-primary text-base mb-2">{s.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <div className="mt-10 text-center">
              <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-primary">
                View all services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries teaser */}
      <section className="section-pad bg-bg">
        <div className="container-px">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Industries"
              title="Domain experience that matters."
              sub="We've delivered software across these industries — and know the workflows that come with them."
            />
            <StaggerGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <StaggerItem key={ind.title}>
                    <Link to="/industries" className="card-hover h-full block rounded-2xl border border-slate-100 bg-white p-7">
                      <span className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                        <Icon size={22} className="text-primary" />
                      </span>
                      <h3 className="font-display font-semibold text-text-primary text-base mb-2">{ind.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{ind.desc}</p>
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* Rotating hiring-partner marquee */}
      <Companies />

      {/* Industrial Training CTA */}
      <section className="section-pad bg-white">
        <div className="container-px">
          <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-primary p-10 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-xl">
              <h2 className="font-display font-bold text-2xl sm:text-3xl">
                Looking to build your tech career instead?
              </h2>
              <p className="mt-3 text-white/85 text-sm sm:text-base leading-relaxed">
                Our Industrial Training programs — Full Stack, Data Science, DevOps & Digital
                Marketing — come with live projects and placement support.
              </p>
            </div>
            <Link
              to="/industrial-training"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-primary bg-white shrink-0"
            >
              Explore Industrial Training <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="section-pad bg-bg">
        <div className="container-px">
          <div className="mx-auto max-w-4xl text-center">
            <SectionHeading
              eyebrow="About Us"
              title={`Founded by ${brand.founders}.`}
              sub={`Over ${brand.experienceYears} years of combined experience building software and training the people who build it.`}
            />
            <div className="mt-8">
              <Link to="/about" className="inline-flex items-center gap-2 font-semibold text-primary">
                Learn more about Globe Creater <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
