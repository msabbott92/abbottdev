import { motion, useScroll, useTransform } from 'motion/react';
import { TerminalText } from '../retro/TerminalText';
import { Button } from '../ui/Button';
import styles from './Hero.module.css';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const { scrollY } = useScroll();

  // Parallax for the background gradient orb
  const orbY = useTransform(scrollY, [0, 800], [0, 200]);
  const orbOpacity = useTransform(scrollY, [0, 600], [0.6, 0]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Background gradient orb */}
      <motion.div
        className={styles.orb}
        style={{ y: orbY, opacity: orbOpacity }}
        aria-hidden="true"
      />
      <motion.div className={styles.orbSecondary} style={{ y: orbY }} aria-hidden="true" />

      <div className={styles.content}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          <span className={styles.eyebrowName}>Matthew Abbott</span>
          <span className={styles.eyebrowSep} aria-hidden="true">
            {' · '}
          </span>
          Contract AI Engineer <span aria-hidden="true">·</span> Denver, CO
        </motion.p>

        {/* Main headline */}
        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.1 }}
        >
          I build AI agents and chatbots{' '}
          <span className={styles.headlineAccent}>that run in production.</span>
        </motion.h1>

        <motion.p
          className={styles.lead}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.25 }}
        >
          I design, build, and deploy LLM-powered agents and chatbots, along with the web
          apps and APIs they connect to. Hire me for a project, or bring me onto your team
          as a contractor.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.4 }}
        >
          <Button variant="primary" size="lg" onClick={() => scrollTo('contact')}>
            Get in Touch
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollTo('work')}>
            See My Work
          </Button>
        </motion.div>

        <div className={styles.status}>
          <TerminalText
            text="> available for contract work"
            speed={30}
            delay={900}
            className={styles.statusText}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          className={styles.scrollDot}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
