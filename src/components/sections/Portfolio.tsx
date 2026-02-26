import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Tag } from '../ui/Tag';
import { fadeInUp } from '../../lib/animations';
import { projects } from '../../data/projects';
import styles from './Portfolio.module.css';

export function Portfolio() {
  const navigate = useNavigate();

  return (
    <SectionWrapper id="work" label="SELECTED_WORK" background="primary">
      <motion.h2 className={styles.heading} variants={fadeInUp}>
        Selected Work
      </motion.h2>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.article
            key={project.slug}
            className={`${styles.card} ${index % 3 === 0 ? styles.cardTall : ''}`}
            variants={fadeInUp}
            onClick={() => navigate(`/work/${project.slug}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navigate(`/work/${project.slug}`);
              }
            }}
          >
            {/* Thumbnail with CRT scanline effect */}
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.placeholderIcon}>{project.tags[0]?.[0] || '?'}</span>
              </div>
              <div className={styles.scanlines} aria-hidden="true" />
            </div>

            {/* Card content */}
            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectSubtitle}>{project.subtitle}</p>
              <div className={styles.tags}>
                {project.tags.slice(0, 3).map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
