import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants = {
  up: { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -40 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0 } },
  zoom: { hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
};

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
  as: Component = motion.div,
}) {
  const [ref, inView] = useInView({ triggerOnce: once, threshold: 0.15 });
  const chosen = variants[direction] || variants.up;

  return (
    <Component
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={chosen}
      transition={{ duration, delay, ease: [0.2, 0.65, 0.3, 0.9] }}
    >
      {children}
    </Component>
  );
}

export function StaggerGroup({ children, className = '', stagger = 0.12, once = true }) {
  const [ref, inView] = useInView({ triggerOnce: once, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={{ show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '', direction = 'up' }) {
  const chosen = variants[direction] || variants.up;
  return (
    <motion.div className={className} variants={chosen} transition={{ duration: 0.55, ease: [0.2, 0.65, 0.3, 0.9] }}>
      {children}
    </motion.div>
  );
}
