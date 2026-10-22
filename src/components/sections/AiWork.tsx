import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';
import { fadeInUp } from '../../lib/animations';
import styles from './AiWork.module.css';

const items = [
  {
    client: 'FTN',
    title: 'Ask Iverson chatbot',
    description:
      "I worked on and deployed the LLM feature stack behind Ask Iverson, FTN's AI chatbot, on a sports analytics platform with 40,000+ active users.",
    tags: ['LLM', 'Chatbot', 'Production Deployment'],
    slug: 'ftn',
  },
  {
    client: 'GeoSure',
    title: 'Risk intelligence chatbot',
    description:
      "I integrated an AI chatbot into GeoSure's Global Risk Observatory, so users can ask questions about global safety and risk data in plain language.",
    tags: ['AI Chatbot', 'Next.js', 'TypeScript'],
    slug: 'geosure',
  },
  {
    client: 'Private client',
    title: 'Sales bid automation',
    description:
      "I built an AI workflow on the Anthropic API for a sales executive's bid creation process. It significantly cut the time spent on repetitive documentation.",
    tags: ['Anthropic API', 'AI Agent', 'Automation'],
  },
  {
    client: 'Developer tooling',
    title: 'AI code review agents',
    description:
      "I build code review agents with Claude Code and custom skills that check pull requests against a team's coding standards, cutting review time and catching issues manual review missed.",
    tags: ['Claude Code', 'Claude Skills', 'Code Review'],
  },
];

export function AiWork() {
  return (
    <SectionWrapper id="ai" label="AI_IN_PRODUCTION" background="primary">
      <motion.h2 className={styles.heading} variants={fadeInUp}>
        AI I've Shipped
      </motion.h2>
      <motion.p className={styles.subheading} variants={fadeInUp}>
        Some of this runs inside paid products, so there's no public demo. I'm happy to walk
        through any of it on a call.
      </motion.p>

      <div className={styles.grid}>
        {items.map((item) => (
          <Card key={item.title} hoverable className={styles.card}>
            <p className={styles.client}>{item.client}</p>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.description}</p>
            <div className={styles.tags}>
              {item.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            {item.slug && (
              <Link to={`/work/${item.slug}`} className={styles.link}>
                Full project &rarr;
              </Link>
            )}
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
