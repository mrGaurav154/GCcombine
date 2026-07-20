import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Laptop, Award, CheckCircle2, Download, PlayCircle, Star, ArrowRight } from 'lucide-react';
import Reveal, { StaggerGroup, StaggerItem } from '../components/shared/Reveal';
import CTA from '../components/CTA/CTA';
import { courses, testimonials } from '../data/siteData';

const genericCurriculum = [
  { title: 'Foundations & Environment Setup', points: ['Programming fundamentals', 'Version control with Git', 'Dev environment & tooling'] },
  { title: 'Core Technology Deep-Dive', points: ['Language / framework internals', 'Hands-on labs each session', 'Weekly graded assignments'] },
  { title: 'Applied Projects', points: ['Two guided mini-projects', 'One mentor-reviewed capstone', 'Code review & best practices'] },
  { title: 'Interview & Placement Prep', points: ['Mock technical interviews', 'Resume & LinkedIn optimization', 'Aptitude & HR round coaching'] },
];

const faculty = [
  { name: 'Sagar Umalkar', role: 'Co-Founder & Lead Trainer', exp: '20+ years industry experience' },
  { name: 'Deepak Patil', role: 'Co-Founder & Technical Mentor', exp: '20+ years industry experience' },
];

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="section-pad pt-40 text-center">
        <h1 className="font-display font-bold text-2xl">Course not found</h1>
        <Link to="/industrial-training/courses" className="text-primary font-semibold mt-4 inline-block">← Back to all courses</Link>
      </div>
    );
  }

  return (
    <>
      <section className="relative pt-32 pb-16 bg-gradient-radial-glow overflow-hidden">
        <div className="container-px">
          <div className="mx-auto max-w-6xl grid lg:grid-cols-5 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-3">
              <span className="inline-block text-xs font-semibold tracking-wide uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-5">
                {course.certification}
              </span>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-text-primary">{course.title}</h1>
              <p className="mt-5 text-text-secondary text-lg leading-relaxed max-w-xl">{course.short}</p>

              <div className="mt-8 flex flex-wrap gap-6 text-sm">
                <span className="inline-flex items-center gap-2"><Clock size={16} className="text-primary" /> {course.duration}</span>
                <span className="inline-flex items-center gap-2"><Laptop size={16} className="text-primary" /> {course.mode}</span>
                <span className="inline-flex items-center gap-2"><Award size={16} className="text-primary" /> {course.fees}</span>
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link to="/industrial-training/contact" className="btn-glow inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold bg-gradient-primary">
                  Enroll Now <ArrowRight size={18} />
                </Link>
                <Link to="/industrial-training/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-text-primary border border-slate-200 bg-white/70">
                  <PlayCircle size={18} className="text-primary" /> Book Demo Class
                </Link>
                <a href={course.externalUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-primary">
                  <Download size={18} /> Download Syllabus
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="lg:col-span-2">
              <img src={course.image} alt={course.title} className="w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl shadow-primary/20 border border-white/40" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-px">
          <div className="mx-auto max-w-6xl grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 flex flex-col gap-16">
              <Reveal>
                <h2 className="font-display font-bold text-2xl mb-4">Overview</h2>
                <p className="text-text-secondary leading-relaxed">
                  {course.title} at Globe Creater is designed for job-readiness from day one. You'll learn directly from
                  founders and mentors with 20+ years of combined industry experience, work on real project briefs, and get
                  guided placement support once you graduate.
                </p>
              </Reveal>

              <Reveal>
                <h2 className="font-display font-bold text-2xl mb-6">Curriculum & Modules</h2>
                <StaggerGroup className="flex flex-col gap-4" stagger={0.1}>
                  {genericCurriculum.map((mod, i) => (
                    <StaggerItem key={mod.title}>
                      <div className="rounded-2xl border border-slate-100 p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-8 h-8 rounded-lg bg-gradient-primary text-white flex items-center justify-center text-sm font-bold">{i + 1}</span>
                          <h3 className="font-display font-semibold">{mod.title}</h3>
                        </div>
                        <ul className="grid sm:grid-cols-3 gap-2 pl-11">
                          {mod.points.map((p) => (
                            <li key={p} className="flex items-center gap-2 text-sm text-text-secondary">
                              <CheckCircle2 size={14} className="text-success shrink-0" /> {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </Reveal>

              <Reveal>
                <h2 className="font-display font-bold text-2xl mb-6">Tools Covered</h2>
                <div className="flex flex-wrap gap-3">
                  {course.tools.map((t) => (
                    <span key={t} className="px-4 py-2 rounded-full bg-primary/5 text-sm font-medium text-primary">{t}</span>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <h2 className="font-display font-bold text-2xl mb-6">Faculty</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {faculty.map((f) => (
                    <div key={f.name} className="rounded-2xl border border-slate-100 p-6 flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-white font-display font-bold">
                        {f.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-text-primary">{f.name}</p>
                        <p className="text-xs text-text-secondary">{f.role}</p>
                        <p className="text-xs text-text-secondary">{f.exp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <h2 className="font-display font-bold text-2xl mb-6">Student Reviews</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {testimonials.slice(0, 2).map((t) => (
                    <div key={t.name} className="rounded-2xl border border-slate-100 p-6">
                      <div className="flex gap-1 mb-3">
                        {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={13} className="fill-accent text-accent" />)}
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed">{t.quote}</p>
                      <p className="mt-4 text-sm font-semibold text-text-primary">{t.name}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 rounded-3xl border border-slate-100 p-6 shadow-sm flex flex-col gap-5">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Duration</span><span className="font-semibold">{course.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Mode</span><span className="font-semibold text-right">{course.mode}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Fees</span><span className="font-semibold">{course.fees}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Certification</span><span className="font-semibold text-right">{course.certification}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Placement</span><span className="font-semibold text-right">{course.placement}</span>
                </div>
                <hr className="border-slate-100" />
                <Link to="/industrial-training/contact" className="btn-glow text-center py-3.5 rounded-xl text-white font-semibold bg-gradient-primary">Enroll Now</Link>
                <a href={course.externalUrl} target="_blank" rel="noreferrer" className="text-center py-3.5 rounded-xl font-semibold text-primary border border-primary/30 inline-flex items-center justify-center gap-2">
                  <Download size={16} /> Download Syllabus
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
