import { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { TerminalText } from '../retro/TerminalText';
import { Button } from '../ui/Button';
import styles from './Hero.module.css';

export function Hero() {
  const [headlineReady, setHeadlineReady] = useState(false);
  const [subtitleReady, setSubtitleReady] = useState(false);
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
        {/* Main headline */}
        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          onAnimationComplete={() => setHeadlineReady(true)}
        >
          We listen first.
          <br />
          <span className={styles.headlineAccent}>Then we build.</span>
        </motion.h1>

        {/* Terminal-style subtitle */}
        <div className={styles.subtitle}>
          {headlineReady && (
            <TerminalText
              text="> building custom software & AI solutions for businesses that need more than a template"
              speed={30}
              cursor={true}
              tag="p"
              className={styles.subtitleText}
              onComplete={() => setSubtitleReady(true)}
            />
          )}
        </div>

        {/* CTA buttons */}
        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={subtitleReady ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button variant="outline" size="lg" onClick={() => scrollTo('work')}>
            See Our Work
          </Button>
          <Button variant="primary" size="lg" onClick={() => scrollTo('contact')}>
            Let's Talk
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={subtitleReady ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.6 }}
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
