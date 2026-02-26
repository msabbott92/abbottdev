import { motion } from 'motion/react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { fadeInUp } from '../../lib/animations';
import styles from './Process.module.css';

const steps = [
  {
    number: '01',
    title: 'Listen',
    description:
      'Every project starts with a real conversation. We dig into your business, your users, and the actual problem you need solved — no assumptions, no jargon.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'We translate your vision into a clear technical roadmap. You\'ll know exactly what we\'re building, why, and in what order.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We develop in focused sprints with regular check-ins. You see progress early and often — no disappearing for months.',
  },
  {
    number: '04',
    title: 'Refine',
    description:
      'Launch isn\'t the end. We test, gather feedback, and iterate until it\'s right. Your project evolves with your needs.',
  },
];

export function Process() {
  return (
    <SectionWrapper id="process" label="PROCESS" background="deep">
      <motion.h2 className={styles.heading} variants={fadeInUp}>
        How We Work
      </motion.h2>

      <div className={styles.steps}>
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className={styles.step}
            variants={fadeInUp}
            custom={index}
          >
            <div className={styles.stepNumber}>{step.number}</div>
            <div className={styles.stepConnector} aria-hidden="true">
              <div className={styles.connectorLine} />
            </div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
