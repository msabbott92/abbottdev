import { motion } from 'motion/react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { fadeInUp, slideInRight } from '../../lib/animations';
import styles from './About.module.css';

export function About() {
  return (
    <SectionWrapper id="about" label="ABOUT_ME" background="primary">
      <motion.h2 className={styles.heading} variants={fadeInUp}>
        Straight talk. One person. Denver, CO.
      </motion.h2>

      <div className={styles.grid}>
        <motion.div className={styles.portrait} variants={fadeInUp}>
          <img
            src="/images/matthew-abbott.jpeg"
            alt="Matthew Abbott, Denver-based AI concierge and software developer"
            className={styles.portraitImage}
            loading="lazy"
          />
        </motion.div>

        <div className={styles.body}>
          <motion.p className={styles.paragraph} variants={fadeInUp}>
            I'm Matthew. I'm based in Denver and I work with teams here and everywhere
            else. Too many software and AI projects fail because someone started building
            before they understood the problem. I'd rather ask the right questions upfront
            than build the wrong thing twice.
          </motion.p>

          <motion.p className={styles.paragraph} variants={fadeInUp}>
            You get honest feedback, direct communication, and one person who'll tell you
            when something won't work — before it gets expensive. If you're in the Denver
            area, I'm always happy to meet you for coffee.
          </motion.p>
        </div>

        <motion.aside className={styles.pullQuote} variants={slideInRight}>
          <blockquote className={styles.quote}>
            "I'm the human for your AI assistants."
          </blockquote>
        </motion.aside>
      </div>
    </SectionWrapper>
  );
}
