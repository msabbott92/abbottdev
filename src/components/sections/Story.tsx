import { motion } from 'motion/react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { fadeInUp } from '../../lib/animations';
import styles from './Story.module.css';

export function Story() {
  return (
    <SectionWrapper id="story" label="WHAT_THIS_LOOKS_LIKE" background="primary">
      <motion.h2 className={styles.heading} variants={fadeInUp}>
        What this looks like in practice
      </motion.h2>

      <div className={styles.body}>
        <motion.p className={styles.paragraph} variants={fadeInUp}>
          Here's a real example. A salesperson I'm working with this month needs AI to help
          manage their pipeline, draft follow-ups, and prep for calls — but their company
          doesn't have the budget, the time, or an IT team to set it up. They also don't
          have time to learn it themselves.
        </motion.p>

        <motion.p className={styles.paragraph} variants={fadeInUp}>
          So I'm doing it for them. I interview them about how they actually work, set up
          the right AI assistants for their flow, train them on the few buttons they do
          need to touch, and then I stay on as their point of contact. When something needs
          to change, they call me — not a help desk.
        </motion.p>

        <motion.p className={styles.paragraph} variants={fadeInUp}>
          That's the whole idea. You get the results of having AI woven through your work,
          without having to become an AI expert. Think of me as a fractional AI manager on
          call for your team.
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
