import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PlayCircle, ArrowRight, Sparkles } from 'lucide-react';
import { SiJavascript, SiPython, SiOpenjdk, SiReact, SiSpring, SiMysql, SiDocker } from 'react-icons/si';
import Counter from '../shared/Counter';
import { brand } from '../../data/siteData';

const stages = ['Learn', 'Build', 'Interview', 'Get Hired'];

// Floating language/tech badges — scattered like butterflies around two "landing"
// zones (lower-left and upper-right corners) of the video. Each has its own
// size, rotation and z-index so the cluster reads as randomly-perched rather
// than a neat grid. Bigger + higher z-index = "closer" to the viewer (3D depth);
// smaller + lightly blurred = "farther away".
const techBadges = [
  // ── lower-left cluster ──
  {
    icon: SiJavascript, color: '#F7DF1E',
    style: { bottom: '-2.5rem', left: '-3rem', width: 64, height: 64, transform: 'rotate(-9deg)', zIndex: 30 },
  },
  {
    icon: SiSpring, color: '#6DB33F',
    style: { bottom: '5.5rem', left: '-4.2rem', width: 44, height: 44, transform: 'rotate(11deg)', zIndex: 20 },
  },
  {
    icon: SiMysql, color: '#4479A1',
    style: { bottom: '-1.25rem', left: '4.5rem', width: 36, height: 36, transform: 'rotate(-16deg)', zIndex: 10 },
    far: true,
  },
  {
    icon: SiDocker, color: '#2496ED',
    style: { bottom: '9.5rem', left: '-1.5rem', width: 52, height: 52, transform: 'rotate(6deg)', zIndex: 25 },
  },

  // ── upper-right cluster ──
  {
    icon: SiOpenjdk, color: '#5382A1',
    style: { top: '-3rem', right: '-3.2rem', width: 60, height: 60, transform: 'rotate(13deg)', zIndex: 30 },
  },
  {
    icon: SiReact, color: '#61DAFB',
    style: { top: '3.5rem', right: '-5rem', width: 40, height: 40, transform: 'rotate(-12deg)', zIndex: 15 },
    far: true,
  },
  {
    icon: SiPython, color: '#3776AB',
    style: { top: '-1.75rem', right: '5.5rem', width: 48, height: 48, transform: 'rotate(8deg)', zIndex: 22 },
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-radial-glow">
      {/* floating decorative icons */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-28 left-[8%] w-14 h-14 rounded-2xl bg-primary/10 animate-float hidden md:block" />
        <span className="absolute top-[55%] left-[4%] w-10 h-10 rounded-full bg-accent/15 animate-float-slow hidden md:block" />
        <span className="absolute top-24 right-[10%] w-16 h-16 rounded-3xl bg-secondary/10 animate-float-slow hidden md:block" />
        <span className="absolute bottom-16 right-[6%] w-10 h-10 rounded-full bg-success/15 animate-float hidden md:block" />
      </div>

      <div className="container-px relative">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6"
            >
              <Sparkles size={14} /> Trusted by 3,000+ students &middot; Pune
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl xl:text-[3.4rem] leading-[1.08] tracking-tight text-text-primary"
            >
              Job-Oriented IT Training with <span className="text-gradient">100% Placement</span> Support
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg text-text-secondary max-w-xl leading-relaxed"
            >
              {brand.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link to="/industrial-training/contact" className="btn-glow inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold bg-gradient-primary">
                Book Free Demo <ArrowRight size={18} />
              </Link>
              <Link to="/industrial-training/courses" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-text-primary border border-slate-200 hover:border-primary/40 hover:text-primary transition-colors bg-white/70">
                Explore Courses
              </Link>
              <a href="#testimonials" className="inline-flex items-center gap-2 px-2 py-3.5 font-semibold text-text-secondary hover:text-primary transition-colors">
                <PlayCircle size={22} className="text-primary" /> Success Stories
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { value: 3000, suffix: '+', label: 'Students' },
                { value: 92, suffix: '%', label: 'Placed' },
                { value: 120, suffix: '+', label: 'Hiring Partners' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display font-bold text-2xl sm:text-3xl text-text-primary">
                    <Counter end={s.value} duration={2.2} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-text-secondary mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: video + career path signature element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 aspect-[4/3] border border-white/40">
              <video
                className="w-full h-full object-cover"
                src={brand.heroVideo}
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 via-transparent to-transparent" />
            </div>

            {/* Floating language / tech badges — "butterflies" perched around the video "flower",
                clustered at the lower-left and upper-right corners with varied size/rotation/depth. */}
            {techBadges.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.4, rotate: 0 }}
                animate={{
                  opacity: b.far ? 0.85 : 1,
                  scale: 1,
                  rotate: [0, 3, 0, -3, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.5 + i * 0.09 },
                  scale: { duration: 0.5, delay: 0.5 + i * 0.09, type: 'spring', stiffness: 140 },
                  rotate: { duration: 5 + i * 0.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 },
                }}
                style={b.style}
                className={`hidden lg:flex absolute items-center justify-center rounded-2xl bg-white ${
                  b.far ? 'shadow-md blur-[0.4px]' : 'shadow-xl'
                }`}
              >
                <b.icon size={Math.round(b.style.width * 0.42)} color={b.color} />
              </motion.div>
            ))}

            {/* Signature: animated career-path card — commented out per request.
                Uncomment this block to bring it back. */}
            {/*
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute -bottom-10 -left-6 sm:-left-10 glass rounded-2xl shadow-xl p-4 sm:p-5 w-[92%] sm:w-[420px]"
            >
              <p className="text-xs font-semibold text-text-secondary mb-3 tracking-wide uppercase">Your Career Path</p>
              <svg viewBox="0 0 380 60" className="w-full h-12">
                <motion.path
                  d="M10 40 C 60 10, 110 55, 160 25 S 260 5, 320 30 S 360 15, 370 30"
                  fill="none"
                  stroke="url(#pathGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.4, ease: 'easeInOut', delay: 0.8 }}
                />
                <defs>
                  <linearGradient id="pathGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="55%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
                <motion.circle
                  r="5"
                  fill="#7C3AED"
                  initial={{ offsetDistance: '0%' }}
                  animate={{ offsetDistance: '100%' }}
                  transition={{ duration: 2.4, ease: 'easeInOut', delay: 0.8, repeat: Infinity, repeatDelay: 1 }}
                  style={{ offsetPath: "path('M10 40 C 60 10, 110 55, 160 25 S 260 5, 320 30 S 360 15, 370 30')" }}
                />
              </svg>
              <div className="mt-2 flex justify-between">
                {stages.map((s, i) => (
                  <span key={s} className="text-[10px] sm:text-xs font-medium text-text-secondary">{s}</span>
                ))}
              </div>
            </motion.div>
            */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}