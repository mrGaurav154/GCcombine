import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import LogoBadge from '../shared/LogoBadge';
import { courses } from '../../data/siteData';

// This is the navbar for the Industrial Training sub-site, mounted at
// /industrial-training/*. The corporate/parent site (Home, Services,
// Industries, About Us, Contact) uses CorporateNavbar instead — see
// src/components/CorporateNavbar/CorporateNavbar.jsx.
const BASE = '/industrial-training';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive ? 'text-primary' : 'text-text-primary hover:text-primary'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container-px">
        <div
          className={`mx-auto w-full max-w-7xl lg:w-fit flex items-center justify-between lg:justify-start gap-4 lg:gap-8 rounded-2xl transition-all duration-500 ${
            scrolled
              ? 'glass shadow-lg shadow-black/5 px-5 py-2'
              : 'bg-white/70 backdrop-blur-sm border border-white/40 px-4 py-1.5 shadow-sm shadow-black/5'
          }`}
        >
          <Link to={BASE} className="flex items-center gap-2 font-display font-extrabold text-xl shrink-0">
            <LogoBadge />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <NavLink to={BASE} end className={navLinkClass}>Home</NavLink>

            <div className="relative" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-text-primary hover:text-primary flex items-center gap-1">
                Courses <ChevronDown size={14} className={`transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] glass rounded-2xl shadow-2xl p-4 grid grid-cols-2 gap-2"
                  >
                    {courses.slice(0, 6).map((c) => (
                      <Link
                        key={c.slug}
                        to={`${BASE}/courses/${c.slug}`}
                        className="flex flex-col gap-1 p-3 rounded-xl hover:bg-primary/5 transition-colors"
                      >
                        <span className="text-sm font-semibold text-text-primary">{c.title}</span>
                        <span className="text-xs text-text-secondary">{c.duration} &middot; {c.mode.split(' / ')[0]}</span>
                      </Link>
                    ))}
                    <Link to={`${BASE}/courses`} className="col-span-2 text-center text-sm font-semibold text-primary py-2 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                      View All Courses →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to={`${BASE}/placements`} className={navLinkClass}>Placements</NavLink>
            <NavLink to={`${BASE}/student-projects`} className={navLinkClass}>Student Project</NavLink>
          </nav>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Link to={`${BASE}/contact`} className="px-4 py-2 rounded-lg text-sm font-semibold text-primary border border-primary/30 hover:bg-primary/5 transition-colors">
              Book Demo
            </Link>
            <Link to={`${BASE}/courses`} className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition-colors">
              Apply Now
            </Link>
          </div>

          <button className="lg:hidden w-10 h-10 flex items-center justify-center text-text-primary" onClick={() => setMobileOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-bg-dark/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35 }}
              className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-white p-6 flex flex-col gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <LogoBadge />
                <button onClick={() => setMobileOpen(false)}><X size={22} /></button>
              </div>
              {[
                ['Home', BASE],
                ['Courses', `${BASE}/courses`],
                ['Placements', `${BASE}/placements`],
                ['Student Project', `${BASE}/student-projects`],
              ].map(([label, href]) => (
                <Link key={href} to={href} onClick={() => setMobileOpen(false)} className="px-3 py-3 rounded-lg text-base font-medium text-text-primary hover:bg-primary/5">
                  {label}
                </Link>
              ))}
              <Link to={`${BASE}/contact`} onClick={() => setMobileOpen(false)} className="mt-4 text-center px-4 py-3 rounded-lg text-sm font-semibold text-primary border border-primary/30">
                Book Demo
              </Link>
              <Link to={`${BASE}/courses`} onClick={() => setMobileOpen(false)} className="text-center px-4 py-3 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition-colors">
                Apply Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}