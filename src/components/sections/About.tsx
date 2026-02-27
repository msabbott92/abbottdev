import { motion } from 'motion/react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { fadeInUp, slideInRight } from '../../lib/animations';
import styles from './About.module.css';

export function About() {
  return (
    <SectionWrapper id="about" label="ABOUT_US" background="primary">
      <motion.h2 className={styles.heading} variants={fadeInUp}>
        Built Around Your Needs
      </motion.h2>

      <div className={styles.grid}>
        <div className={styles.body}>
          <motion.p className={styles.paragraph} variants={fadeInUp}>
            Based in Denver, CO and available for work everywhere — we build custom software
            and AI solutions that solve real business problems. Too many projects fail because
            someone started coding before they understood the challenge. We take a different
            approach.
          </motion.p>

          <motion.p className={styles.paragraph} variants={fadeInUp}>
            Every engagement starts with listening. We dig into your business, your users,
            and the outcomes that actually matter — then build toward those. Clear, honest
            communication drives everything we do. 
          </motion.p>

          <motion.p className={styles.paragraph} variants={fadeInUp}>
            We treat every project like a partnership, not a transaction. That means honest
            feedback, tough conversations when they matter, and a shared commitment to getting
            it right.
          </motion.p>
        </div>

        <motion.aside className={styles.pullQuote} variants={slideInRight}>
          <blockquote className={styles.quote}>
            "We don't just build what you ask for — we help you figure out what you actually need."
          </blockquote>
        </motion.aside>
      </div>
    </SectionWrapper>
  );
}
