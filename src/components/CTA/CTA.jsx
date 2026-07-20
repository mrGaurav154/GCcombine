import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '../shared/Reveal';

export default function CTA() {
  return (
    <section className="container-px">
      <Reveal direction="zoom">
        <div className="mx-auto max-w-6xl relative overflow-hidden rounded-[2.5rem] bg-bg-dark px-8 py-16 sm:px-16 sm:py-20 text-center">
          <div className="absolute inset-0 bg-gradient-radial-glow" />
          <span className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl animate-float-slow" />
          <span className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-secondary/20 blur-3xl animate-float-slow" />
          <div className="relative">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white max-w-2xl mx-auto leading-tight">
              Ready to transform your career? Join today.
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Enroll now and start building the skills that get you hired — with mentors, projects and placement support behind you.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link to="/industrial-training/contact" className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold bg-gradient-primary">
                Book Free Demo <ArrowRight size={18} />
              </Link>
              <Link to="/industrial-training/courses" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors">
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
