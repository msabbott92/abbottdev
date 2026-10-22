import { motion } from 'motion/react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { fadeInUp, slideInRight } from '../../lib/animations';
import styles from './About.module.css';

const facts = [
  { label: 'Role', value: 'Contract AI Engineer' },
  { label: 'Focus', value: 'AI agents, chatbots, LLM integration, full-stack web' },
  { label: 'AI tools', value: 'Anthropic API, Claude Code, Claude Skills' },
  { label: 'Stack', value: 'Python, TypeScript, React, Next.js, Django, .NET, AWS, GCP' },
  { label: 'Location', value: 'Denver, CO · Remote' },
  { label: 'Availability', value: 'Open to contract work' },
];

export function About() {
  return (
    <SectionWrapper id="about" label="ABOUT_ME" background="deep">
      <motion.h2 className={styles.heading} variants={fadeInUp}>
        Understanding first. Code second.
      </motion.h2>

      <div className={styles.grid}>
        <motion.div className={styles.portrait} variants={fadeInUp}>
          <img
            src="/images/matthew-abbott.jpeg"
            alt="Matthew Abbott, contract AI engineer in Denver"
            className={styles.portraitImage}
            loading="lazy"
          />
        </motion.div>

        <div className={styles.body}>
          <motion.p className={styles.paragraph} variants={fadeInUp}>
            I'm Matthew Abbott, a contract AI engineer based in Denver. I build AI agents and
            chatbots that run in production, and the web applications, APIs, and cloud
            infrastructure around them. Through my company, Abbott Endeavors, I've shipped AI
            features for FTN and GeoSure, and I maintain 15+ production apps on FTN's sports
            analytics platform.
          </motion.p>

          <motion.p className={styles.paragraph} variants={fadeInUp}>
            Plenty of AI projects fail because the team started building before anyone
            understood the problem. I'd rather ask the right questions up front than build
            the wrong thing twice.
          </motion.p>

          <motion.p className={styles.paragraph} variants={fadeInUp}>
            I work remotely with teams anywhere. If you're in Denver, I'm happy to meet in
            person.
          </motion.p>
        </div>

        <motion.aside className={styles.facts} variants={slideInRight}>
          <dl className={styles.factList}>
            {facts.map((fact) => (
              <div key={fact.label} className={styles.fact}>
                <dt className={styles.factLabel}>{fact.label}</dt>
                <dd className={styles.factValue}>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className={styles.factLinks}>
            <a
              href="https://www.linkedin.com/in/matthew-abbott-profile/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn &rarr;
            </a>
            <a href="https://github.com/msabbott92" target="_blank" rel="noopener noreferrer">
              GitHub &rarr;
            </a>
          </div>
        </motion.aside>
      </div>
    </SectionWrapper>
  );
}
