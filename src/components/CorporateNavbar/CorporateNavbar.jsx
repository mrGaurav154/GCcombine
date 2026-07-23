import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';
import LogoBadge from '../shared/LogoBadge';
import { industries } from '../../data/corporateData';

// Navbar for the corporate / parent site — Home, Services, Industries, About Us,
// Contact — modeled structurally on enterprise IT-consulting nav patterns
// (e.g. jadeglobal.com's Industries / Innovation mega-menus).
// The Industrial Training sub-site (Home/Courses/Placements/Student Project)
// has its own separate navbar: see src/components/Navbar/Navbar.jsx.

function Dropdown({ label, open, setOpen, width = 'w-72', children }) {
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="px-4 py-2 rounded-lg text-sm font-medium text-text-primary hover:text-primary flex items-center gap-1">
        {label} <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 ${width} bg-white rounded-2xl shadow-2xl border border-slate-200 p-3`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CorporateNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

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
          className={`mx-auto max-w-7xl flex items-center justify-between rounded-2xl transition-all duration-500 ${
            scrolled
              ? 'glass shadow-lg shadow-black/5 px-5 py-2.5'
              : 'bg-white/70 backdrop-blur-sm border border-white/40 px-4 py-2 shadow-sm shadow-black/5'
          }`}
        >
         
         <div className="flex items-center gap-12">
         <Link to="/" className="shrink-0 flex items-center">
          <img
          src="/logo-01.png"
          alt="Globe Creater"
          className="h-16 w-auto object-contain transition-all duration-300"
          />
         </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <NavLink to="/" end className={navLinkClass}>Home</NavLink>
            <NavLink to="/services" className={navLinkClass}>Services</NavLink>

            <Dropdown label="Industries" open={industriesOpen} setOpen={setIndustriesOpen} width="w-80">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <Link
                    key={ind.title}
                    to="/industries"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors"
                  >
                    <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-primary" />
                    </span>
                    <span className="text-sm font-semibold text-text-primary">{ind.title}</span>
                  </Link>
                );
              })}
            </Dropdown>

            <NavLink to="/about/career" className={navLinkClass}>Career</NavLink>

            <Dropdown label="About Us" open={aboutOpen} setOpen={setAboutOpen} width="w-64">
              <Link to="/industrial-training" className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors">
                <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap size={16} className="text-primary" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-text-primary">Industrial Training</span>
                  <span className="block text-xs text-text-secondary">Courses & placements</span>
                </span>
              </Link>
              <Link to="/about" className="block text-center text-sm font-semibold text-primary py-2.5 mt-1 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                About Globe Creater →
              </Link>
            </Dropdown>

            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {/* <Link to="/contact" className="px-4 py-2 rounded-lg text-sm font-semibold text-primary border border-primary/30 hover:bg-primary/5 transition-colors">
              Get in Touch
            </Link> */}
            <Link to="/industrial-training" className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition-colors shadow-sm shadow-primary/30">
              Industrial Training
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
              className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-white p-6 flex flex-col gap-1 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <LogoBadge />
                <button onClick={() => setMobileOpen(false)}><X size={22} /></button>
              </div>

              {[
                ['Home', '/'],
                ['Services', '/services'],
                ['Industries', '/industries'],
                ['Career', '/about/career'],
                ['About Us', '/about'],
                ['Industrial Training', '/industrial-training'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
                <Link key={href} to={href} onClick={() => setMobileOpen(false)} className="px-3 py-3 rounded-lg text-base font-medium text-text-primary hover:bg-primary/5">
                  {label}
                </Link>
              ))}

              {/* <Link to="/contact" onClick={() => setMobileOpen(false)} className="mt-4 text-center px-4 py-3 rounded-lg text-sm font-semibold text-primary border border-primary/30">
                Get in Touch
              </Link> */}
              <Link to="/industrial-training" onClick={() => setMobileOpen(false)} className="text-center px-4 py-3 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition-colors">
                Industrial Training
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}