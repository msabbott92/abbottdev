import { motion } from 'motion/react';
import { PixelLabel } from '../retro/PixelLabel';
import { staggerContainer, viewportOnce } from '../../lib/animations';
import styles from './SectionWrapper.module.css';

interface SectionWrapperProps {
  id: string;
  label?: string;
  children: React.ReactNode;
  background?: 'deep' | 'primary';
  className?: string;
  fullHeight?: boolean;
}

export function SectionWrapper({
  id,
  label,
  children,
  background = 'deep',
  className = '',
  fullHeight = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${styles.section} ${styles[background]} ${fullHeight ? styles.fullHeight : ''} ${className}`}
    >
      <motion.div
        className={styles.container}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {label && <PixelLabel text={label} />}
        {children}
      </motion.div>
    </section>
  );
}
