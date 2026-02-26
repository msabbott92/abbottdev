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
            Too many projects fail because someone started building before they understood the
            problem. We take a different approach — every engagement starts with understanding
            your business, your users, and the real challenge you're trying to solve.
          </motion.p>

          <motion.p className={styles.paragraph} variants={fadeInUp}>
            Clear, honest communication is the foundation of everything we do. No jargon,
            no disappearing acts, no surprises. You'll always know where things stand,
            what's next, and why.
          </motion.p>

          <motion.p className={styles.paragraph} variants={fadeInUp}>
            We don't just execute orders — we help refine ideas. The goal is to build the
            right solution, not just a solution. Our background in counseling gives us a
            unique edge when it comes to asking the right questions and truly understanding
            what clients need.
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
