import type { PropsWithChildren } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type ScrollRevealProps = PropsWithChildren<{
  className?: string;
}>;

const ScrollReveal = ({ children, className }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 60, mass: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
