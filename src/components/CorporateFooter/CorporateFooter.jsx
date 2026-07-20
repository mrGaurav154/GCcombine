import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { brand } from '../../data/siteData';
import { industries } from '../../data/corporateData';

export default function CorporateFooter() {
  return (
    <footer className="bg-bg-dark text-slate-400 pt-20 pb-8">
      <div className="container-px">
        <div className="mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-white/10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-display font-extrabold text-xl text-white">
              <span className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center text-white text-sm">GC</span>
              Globe Creater
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              A software development studio and IT training institute, founded by {brand.founders}.
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
            <h4 className="font-display font-semibold text-white mb-4 text-sm">Industries</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {industries.map((ind) => (
                <li key={ind.title}><Link to="/industries" className="hover:text-white transition-colors">{ind.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm">Company</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about/career" className="hover:text-white transition-colors">Career</Link></li>
              <li><Link to="/industrial-training" className="hover:text-white transition-colors">Industrial Training</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
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
