import { motion } from 'motion/react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { fadeInUp } from '../../lib/animations';
import styles from './Process.module.css';

const steps = [
  {
    number: '01',
    title: 'Listen',
    description:
      'Every engagement starts with a real conversation. I dig into your business, your team, and the actual problem — no assumptions, no jargon.',
  },
  {
    number: '02',
    title: 'Set Up',
    description:
      'I pick the right tools, build what needs building, and wire it into the way you already work. If it\'s AI, I configure it. If it\'s custom software, I develop it.',
  },
  {
    number: '03',
    title: 'Manage',
    description:
      'You get one person to call. I tune prompts, adjust workflows, fix what breaks, and improve what isn\'t working yet.',
  },
  {
    number: '04',
    title: 'Report',
    description:
      'Regular check-ins on what\'s saving time, what isn\'t, and what\'s next. No black boxes, no surprise invoices.',
  },
];

export function Process() {
  return (
    <SectionWrapper id="process" label="PROCESS" background="deep">
      <motion.h2 className={styles.heading} variants={fadeInUp}>
        How I Work
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
