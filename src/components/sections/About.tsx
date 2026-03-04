import { motion } from 'motion/react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { fadeInUp, slideInRight } from '../../lib/animations';
import styles from './About.module.css';

export function About() {
  return (
    <SectionWrapper id="about" label="ABOUT_US" background="primary">
      <motion.h2 className={styles.heading} variants={fadeInUp}>
        Small team. Straight talk.
      </motion.h2>

      <div className={styles.grid}>
        <div className={styles.body}>
          <motion.p className={styles.paragraph} variants={fadeInUp}>
            Based in Denver, CO and working with teams everywhere. Too many software projects
            fail because someone started coding before they understood the problem. We'd rather
            ask the right questions upfront than build the wrong thing twice.
          </motion.p>

          <motion.p className={styles.paragraph} variants={fadeInUp}>
            You get honest feedback, direct communication, and a team that'll tell you when
            something won't work — before it gets expensive.
          </motion.p>
        </div>

        <motion.aside className={styles.pullQuote} variants={slideInRight}>
          <blockquote className={styles.quote}>
            "We're not just here to write code. We're here to think through the problem with you."
          </blockquote>
        </motion.aside>
      </div>
    </SectionWrapper>
  );
}
