import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { getProjectBySlug } from '../data/projects';
import { Tag } from '../components/ui/Tag';
import { Button } from '../components/ui/Button';
import { pageTransition } from '../lib/animations';
import styles from './ProjectDetail.module.css';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <motion.div
        className={styles.notFound}
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h1>Project not found</h1>
        <p>The project you're looking for doesn't exist.</p>
        <Button variant="outline" onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={styles.page}
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Back link */}
      <div className={styles.backBar}>
        <Link to="/#work" className={styles.backLink}>
          &larr; Back to all work
        </Link>
      </div>

      {/* Hero area */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.category}>{project.category}</span>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.subtitle}>{project.subtitle}</p>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </header>

      {/* Project details */}
      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.sectionText}>{project.details.overview}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Approach</h2>
          <p className={styles.sectionText}>{project.details.approach}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Outcome</h2>
          <p className={styles.sectionText}>{project.details.outcome}</p>
        </section>

        {project.liveUrl && (
          <div className={styles.liveLink}>
            <Button
              as="a"
              href={project.liveUrl}
              variant="outline"
            >
              Visit Live Site &rarr;
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
