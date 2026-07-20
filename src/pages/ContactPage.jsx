import { motion } from 'framer-motion';
import Contact from '../components/Contact/Contact';
import FAQ from '../components/FAQ/FAQ';

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-6 bg-gradient-radial-glow">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display font-extrabold text-4xl sm:text-5xl leading-tight">
              Let's build your <span className="text-gradient">career story</span>
            </motion.h1>
          </div>
        </div>
      </section>
      <Contact />
      <FAQ />
    </>
  );
}
