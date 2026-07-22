import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Code, GraduationCap, Users, Star, CheckCircle2, Rocket } from 'lucide-react';
import SectionHeading from '../../components/shared/SectionHeading';
import { StaggerGroup, StaggerItem } from '../../components/shared/Reveal';
import Companies from '../../components/Companies/Companies';
import { brand, services } from '../../data/siteData';
import { industries } from '../../data/corporateData';
import Globe3D from '../../components/shared/Globe3D';
import { useSplash } from '../../context/SplashContext';
import sagarUmalkarImg from '../../assets/sagar-umalkar.png';

export default function LandingHome() {
  const { splashFinished } = useSplash();
  const titlePart1 = "We build software,";
  const titlePart2 = "and the engineers behind it.";

  const sentenceVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.035,
        delayChildren: 0.2,
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.15 
      }
    }
  };

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
          <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center relative">
            <div className="relative z-20 text-center lg:text-left mx-auto lg:mx-0 max-w-2xl lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={splashFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6"
              >
                <Sparkles size={14} /> Software Studio &middot; IT Training Institute
              </motion.div>

              <motion.h1
                variants={sentenceVariants}
                initial="hidden"
                animate={splashFinished ? "visible" : "hidden"}
                className="font-display font-extrabold text-4xl sm:text-5xl xl:text-6xl leading-[1.08] tracking-tight text-text-primary"
              >
                {titlePart1.split(" ").map((word, wIdx) => (
                  <span key={`w1-${wIdx}`} className="inline-block whitespace-nowrap">
                    {word.split("").map((char, cIdx) => (
                      <motion.span key={`c1-${wIdx}-${cIdx}`} variants={letterVariants} className="inline-block">
                        {char}
                      </motion.span>
                    ))}
                    <motion.span variants={letterVariants} className="inline-block">
                      {"\u00A0"}
                    </motion.span>
                  </span>
                ))}
                <span className="text-gradient">
                  {titlePart2.split(" ").map((word, wIdx, arr) => (
                    <span key={`w2-${wIdx}`} className="inline-block whitespace-nowrap">
                      {word.split("").map((char, cIdx) => (
                        <motion.span key={`c2-${wIdx}-${cIdx}`} variants={letterVariants} className="inline-block">
                          {char}
                        </motion.span>
                      ))}
                      {wIdx < arr.length - 1 && (
                        <motion.span variants={letterVariants} className="inline-block">
                          {"\u00A0"}
                        </motion.span>
                      )}
                    </span>
                  ))}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={splashFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.6, delay: 1.7 }}
                className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Globe Creater partners with businesses across High Tech, Healthcare, Manufacturing,
                Financial Services and the Public Sector to deliver custom software — and trains the
                next generation of developers through our Industrial Training programs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={splashFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.6, delay: 1.9 }}
                className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-4"
              >
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold bg-primary hover:bg-primary-dark transition-colors">
                  Talk to Us <ArrowRight size={18} />
                </Link>
                <Link to="/industrial-training" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-text-primary border border-slate-200 hover:border-primary/40 hover:text-primary transition-colors bg-white/70">
                  Explore Industrial Training
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ x: "-120vw", opacity: 0 }}
              animate={splashFinished ? { x: 0, opacity: 1 } : { x: "-120vw", opacity: 0 }}
              transition={{ duration: 2.0, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 lg:relative lg:inset-auto flex justify-center items-center pointer-events-none lg:pointer-events-auto z-0 lg:z-10 lg:col-span-5 select-none"
            >
              <div className="opacity-15 lg:opacity-100 transition-opacity duration-300">
                <div 
                  className="w-[230px] h-[230px] md:scale-110 lg:scale-125 xl:scale-135 transition-all duration-300" 
                  style={{ perspective: '1100px' }}
                >
                  <Globe3D />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience and Team stats bar */}
      <section className="border-y border-slate-100 bg-slate-50/30 py-5 dark:border-slate-800 dark:bg-bg-dark/30">
        <div className="container-px">
          <div className="mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-medium text-text-secondary dark:text-slate-400">
            <div className="flex items-center gap-2.5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="font-display font-semibold tracking-wide text-text-primary dark:text-white uppercase text-xs">20+ Years of Experience</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="font-display font-semibold tracking-wide text-text-primary dark:text-white uppercase text-xs">Team Size: 20-25 Members</span>
            </div>
          </div>
        </div>
      </section>

      {/* Rotating client marquee */}
      <Companies title="Our Clients" />

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
      <section className="section-pad bg-bg-dark text-white relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <span className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          <span className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
        </div>

        <div className="container-px relative z-10">
          <div className="mx-auto max-w-5xl rounded-3xl bg-slate-900/60 border border-slate-800/80 p-8 md:p-12 lg:p-14 backdrop-blur-md shadow-2xl">
            {/* Header (Above both Image and Passage) */}
            <div className="text-center mb-10 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-slate-350 border border-slate-700 px-4 py-1.5 rounded-full bg-slate-800/40">
                <Sparkles size={13} className="text-primary animate-pulse" /> ABOUT GLOBE CREATER
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight">
                Founded by <span className="text-gradient">Sagar Umalkar.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Image (clean portrait, no overlay badges) */}
              <div className="md:col-span-5 flex justify-center pb-6 md:pb-0">
                <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-3xl shadow-inner">
                  {/* Glowing border outline */}
                  <div className="absolute inset-0 rounded-3xl border border-slate-700/30 pointer-events-none z-20" />
                  <img
                    src={sagarUmalkarImg}
                    alt="Sagar Umalkar"
                    className="w-full h-full object-cover rounded-3xl shadow-xl transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Right Column: Passage & Center Stats & Buttons */}
              <div className="md:col-span-7 flex flex-col justify-center h-full space-y-6 text-center">
                {/* Passage */}
                <p className="text-slate-350 text-sm sm:text-base leading-relaxed text-justify mx-auto max-w-xl">
                  Globe Creater was founded with one mission: to bridge the gap between industry and education. 
                  For over two decades, we have helped businesses build scalable software while mentoring aspiring 
                  developers into successful professionals.
                </p>

                {/* Stats and buttons section */}
                <div className="pt-6 border-t border-slate-800/60 space-y-6">
                  {/* Stats list aligned in one line in center */}
                  <div className="flex flex-wrap gap-3 text-xs text-slate-350 justify-center">
                    <div className="flex items-center gap-2 bg-slate-950/40 border border-slate-800/50 px-3 py-1.5 rounded-xl">
                      <span className="text-amber-500 shrink-0">
                        <Star size={12} fill="currentColor" />
                      </span>
                      <span className="font-semibold whitespace-nowrap">20+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-950/40 border border-slate-800/50 px-3 py-1.5 rounded-xl">
                      <span className="text-emerald-500 shrink-0">
                        <CheckCircle2 size={12} />
                      </span>
                      <span className="font-semibold whitespace-nowrap">500+ Students Trained</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-950/40 border border-slate-800/50 px-3 py-1.5 rounded-xl">
                      <span className="text-indigo-500 shrink-0">
                        <Rocket size={12} />
                      </span>
                      <span className="font-semibold whitespace-nowrap">150+ Software Projects</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold bg-gradient-primary hover:opacity-95 transition-opacity text-sm">
                      Learn More
                    </Link>
                    <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-slate-300 font-semibold border border-slate-700 hover:border-slate-500 hover:text-white transition-colors text-sm bg-slate-900/40">
                      Meet Our Team
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
