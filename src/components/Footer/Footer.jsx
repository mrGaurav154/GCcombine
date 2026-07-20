import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { brand, courses, services } from '../../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-slate-400 pt-20 pb-8">
      <div className="container-px">
        <div className="mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          <div className="lg:col-span-2">
            <Link to="/industrial-training" className="flex items-center gap-2 font-display font-extrabold text-xl text-white">
              <span className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center text-white text-sm">GC</span>
              Globe Creater
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Industry-leading training programs to enhance your skills and career prospects. Founded by {brand.founders}.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                [FaFacebookF, brand.social.facebook],
                [FaTwitter, brand.social.twitter],
                [FaInstagram, brand.social.instagram],
                [FaLinkedinIn, brand.social.linkedin],
              ].map(([Icon, href], i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm">Courses</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {courses.slice(0, 5).map((c) => (
                <li key={c.slug}><Link to={`/industrial-training/courses/${c.slug}`} className="hover:text-white transition-colors">{c.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm">Services</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.title}><span className="hover:text-white transition-colors cursor-default">{s.title}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm">Company</h4>
            <ul className="flex flex-col gap-2.5 text-sm mb-6">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/industrial-training/placements" className="hover:text-white transition-colors">Placements</Link></li>
              <li><Link to="/industrial-training/student-projects" className="hover:text-white transition-colors">Student Projects</Link></li>
              <li><Link to="/industrial-training#faculty" className="hover:text-white transition-colors">Faculty</Link></li>
              <li><Link to="/industrial-training#resources" className="hover:text-white transition-colors">Free Resources</Link></li>
              <li><Link to="/industrial-training/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/industrial-training/courses" className="hover:text-white transition-colors">All Courses</Link></li>
            </ul>
            <h4 className="font-display font-semibold text-white mb-3 text-sm">Newsletter</h4>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" className="flex-1 min-w-0 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <button className="w-10 h-10 shrink-0 rounded-lg bg-gradient-primary flex items-center justify-center"><Send size={15} className="text-white" /></button>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>Copyright &copy; {new Date().getFullYear()} Globe Creater. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-default">Privacy Policy</span>
            <span className="hover:text-white cursor-default">Terms of Service</span>
            <span className="hover:text-white cursor-default">Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
