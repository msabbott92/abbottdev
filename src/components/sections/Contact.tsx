import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';
import { fadeInUp } from '../../lib/animations';
import styles from './Contact.module.css';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // TODO: Connect to serverless function
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send');
      setStatus('success');
      setFormData({ name: '', email: '', projectType: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <SectionWrapper id="contact" label="GET_IN_TOUCH" background="deep">
      <motion.h2 className={styles.heading} variants={fadeInUp}>
        Let's Build Something Together
      </motion.h2>
      <motion.p className={styles.subheading} variants={fadeInUp}>
        Tell us about your project. We'll get back to you within 24 hours.
      </motion.p>

      <motion.div className={styles.formWindow} variants={fadeInUp}>
        {/* Terminal window chrome */}
        <div className={styles.windowBar}>
          <span className={`${styles.dot} ${styles.dotRed}`} />
          <span className={`${styles.dot} ${styles.dotYellow}`} />
          <span className={`${styles.dot} ${styles.dotGreen}`} />
          <span className={styles.windowTitle}>contact.sh</span>
        </div>

        {status === 'success' ? (
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>&#10003;</div>
            <h3 className={styles.successTitle}>Message sent!</h3>
            <p className={styles.successDesc}>
              Thanks for reaching out. We'll get back to you within 24 hours.
            </p>
            <Button variant="outline" onClick={() => setStatus('idle')}>
              Send another
            </Button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Your name"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="projectType" className={styles.label}>
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className={styles.select}
              >
                <option value="" disabled>
                  What are you looking for?
                </option>
                <option value="software">Custom Software</option>
                <option value="ai">AI Solution</option>
                <option value="consulting">Consulting</option>
                <option value="other">Something Else</option>
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.textarea}
                rows={5}
                placeholder="Tell us about your project..."
              />
            </div>

            {status === 'error' && (
              <p className={styles.errorMessage}>
                Something went wrong. Please try again or email us directly.
              </p>
            )}

            <div className={styles.formActions}>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
              <p className={styles.altContact}>
                Prefer email?{' '}
                <a href="mailto:matthew@abbottendeavors.com">matthew@abbottendeavors.com</a>
              </p>
            </div>
          </form>
        )}
      </motion.div>
    </SectionWrapper>
  );
}
