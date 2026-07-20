import { motion } from 'framer-motion';
import Placements from '../components/Placements/Placements';
import Roadmap from '../components/Roadmap/Roadmap';
import Companies from '../components/Companies/Companies';
import CTA from '../components/CTA/CTA';

export default function PlacementsPage() {
  return (
    <>
      <section className="relative pt-32 pb-14 bg-gradient-radial-glow">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display font-extrabold text-4xl sm:text-5xl leading-tight">
              Placement Support that goes <span className="text-gradient">beyond the classroom</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-6 text-lg text-text-secondary leading-relaxed">
              From resume building to mock interviews and direct hiring partner referrals — we walk with you until you get the offer.
            </motion.p>
          </div>
        </div>
      </section>
      <Placements />
      <Roadmap />
      <Companies />
      <CTA />
    </>
  );
}
