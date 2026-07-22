import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import Reveal, { StaggerGroup, StaggerItem } from '../components/shared/Reveal';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Companies from '../components/Companies/Companies';
import CTA from '../components/CTA/CTA';
import { brand } from '../data/siteData';
import sagarUmalkarImg from '../assets/sagar-umalkar.png';

export default function About() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-gradient-radial-glow">
        <div className="container-px">
          <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display font-extrabold text-4xl sm:text-5xl leading-tight">
              Your Gateway to <span className="text-gradient">Professional Excellence</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-8 mb-4 flex justify-center"
            >
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-primary blur-md opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img
                  src={sagarUmalkarImg}
                  alt="Sagar Umalkar"
                  className="relative w-32 h-32 rounded-full object-cover shadow-xl border-4 border-white dark:border-slate-800 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-6 text-lg text-text-secondary leading-relaxed">
              Founded by {brand.founders}, Globe Creater has over {brand.experienceYears} years of experience providing
              top-notch training across various domains — empowering individuals and organizations with the skills they
              need to succeed in today's competitive world.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-px">
          <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
            <Reveal direction="left">
              <img src="https://globecreater.com/wp-content/uploads/2024/07/pexels-photo-3183174-3183174-1024x682.jpg" alt="Globe Creater training session" className="rounded-3xl shadow-xl w-full h-72 object-cover" />
            </Reveal>
            <Reveal direction="right">
              <img src="https://globecreater.com/wp-content/uploads/2024/07/pexels-photo-416405-416405-1024x640.jpg" alt="Globe Creater classroom" className="rounded-3xl shadow-xl w-full h-72 object-cover md:mt-10" />
            </Reveal>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="section-pad bg-white">
        <div className="container-px">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Leadership" title="Meet the founder" sub="Two decades of industry experience, built into every course." />
            <div className="mt-12 max-w-sm mx-auto">
              <div className="text-center rounded-3xl border border-slate-100 p-8 bg-white dark:bg-bg-dark/40 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={sagarUmalkarImg}
                  alt="Sagar Umalkar"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-primary/20 shadow-md transition-transform duration-300 hover:scale-105"
                />
                <h3 className="font-display font-bold text-lg">Sagar Umalkar</h3>
                <p className="text-text-secondary text-sm mt-1">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-px">
          <div className="mx-auto max-w-5xl">
            <SectionHeading eyebrow="Explore Further" title="Two ways to work with us" align="center" />
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              <Reveal direction="left">
                <Link to="/about/career" className="card-hover block h-full rounded-3xl border border-slate-100 bg-white p-8">
                  <span className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Briefcase size={22} className="text-primary" />
                  </span>
                  <h3 className="font-display font-bold text-xl text-text-primary mb-2">Career</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    Join our team as a trainer, engineer, or on the placements & operations side.
                  </p>
                  <span className="inline-flex items-center gap-2 font-semibold text-primary text-sm">
                    See open roles <ArrowRight size={15} />
                  </span>
                </Link>
              </Reveal>
              <Reveal direction="right">
                <Link to="/industrial-training" className="card-hover block h-full rounded-3xl border border-slate-100 bg-white p-8">
                  <span className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <GraduationCap size={22} className="text-primary" />
                  </span>
                  <h3 className="font-display font-bold text-xl text-text-primary mb-2">Industrial Training</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    Explore our job-oriented courses — Full Stack, Data Science, DevOps & more.
                  </p>
                  <span className="inline-flex items-center gap-2 font-semibold text-primary text-sm">
                    View courses & placements <ArrowRight size={15} />
                  </span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Companies />
      <CTA />
    </>
  );
}
