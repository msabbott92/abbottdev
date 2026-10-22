import { motion } from 'motion/react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { fadeInUp } from '../../lib/animations';
import styles from './Process.module.css';

const steps = [
  {
    number: '01',
    title: 'Scope',
    description:
      'We talk through the problem, your data, and what success looks like. If AI isn\'t the right tool for the job, I\'ll tell you.',
  },
  {
    number: '02',
    title: 'Build',
    description:
      'I work in short iterations and show working software early, so you can see progress and change direction before it gets expensive.',
  },
  {
    number: '03',
    title: 'Deploy',
    description:
      'I ship to production with logging, monitoring, and guardrails in place, and test against real inputs before your users see it.',
  },
  {
    number: '04',
    title: 'Hand Off',
    description:
      'Your team gets the code, documentation, and a walkthrough. If you want ongoing support after launch, I can stay on.',
  },
];

export function Process() {
  return (
    <SectionWrapper id="process" label="PROCESS" background="primary">
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
