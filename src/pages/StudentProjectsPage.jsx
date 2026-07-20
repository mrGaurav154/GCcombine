import { motion } from 'framer-motion';
import Projects from '../components/Projects/Projects';
import Faculty from '../components/Faculty/Faculty';

export default function StudentProjectsPage() {
  return (
    <>
      <section className="relative pt-32 pb-6 bg-gradient-radial-glow">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display font-extrabold text-4xl sm:text-5xl leading-tight"
            >
              Built by students, <span className="text-gradient">shipped like real software.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg text-text-secondary leading-relaxed"
            >
              Every course is built around live projects — here's a sample of what our students
              have designed, coded and deployed.
            </motion.p>
          </div>
        </div>
      </section>

      <Projects />
      <Faculty />
    </>
  );
}
