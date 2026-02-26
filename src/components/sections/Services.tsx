import { motion } from 'motion/react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';
import { fadeInUp, staggerContainerFast } from '../../lib/animations';
import { services } from '../../data/services';
import styles from './Services.module.css';

export function Services() {
  return (
    <SectionWrapper id="services" label="SERVICES" background="deep">
      <motion.h2 className={styles.heading} variants={fadeInUp}>
        What We Build
      </motion.h2>

      <div className={styles.grid}>
        {services.map((service) => (
          <Card key={service.id} hoverable className={styles.serviceCard}>
            <div className={styles.icon} aria-hidden="true">
              {service.icon}
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDesc}>{service.description}</p>
            <motion.div
              className={styles.tags}
              variants={staggerContainerFast}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {service.tags.map((tag) => (
                <motion.span key={tag} variants={fadeInUp}>
                  <Tag>{tag}</Tag>
                </motion.span>
              ))}
            </motion.div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
