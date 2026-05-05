import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';
import { fadeInUp } from '../../lib/animations';
import styles from './Contact.module.css';

// TODO: replace with real booking link (Cal.com / Calendly) once confirmed
const BOOKING_URL = 'https://calendly.com/matthew-abbottendeavors/30min';

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
        Tell me about what you're working on. I'll get back to you within 24 hours — or
        book a free 20-minute intro call below.
      </motion.p>

      <motion.div className={styles.bookingCta} variants={fadeInUp}>
        <div className={styles.bookingCopy}>
          <p className={styles.bookingTitle}>Want to talk it through first?</p>
          <p className={styles.bookingDesc}>
            Grab a free 20-minute intro call — no obligation, no sales pitch.
          </p>
        </div>
        <Button as="a" href={BOOKING_URL} target="_blank" variant="primary" size="lg">
          Book a 20-min intro call
        </Button>
      </motion.div>

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
              Thanks for reaching out. I'll get back to you within 24 hours.
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
                <option value="ai-concierge">AI Concierge</option>
                <option value="software">Custom Software</option>
                <option value="other">Not sure yet</option>
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
                placeholder="Tell me about your project..."
              />
            </div>

            {status === 'error' && (
              <p className={styles.errorMessage}>
                Something went wrong. Please try again or email me directly.
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
                <a href="mailto:hello@abbottdev.ai">hello@abbottdev.ai</a>
              </p>
            </div>
          </form>
        )}
      </motion.div>
    </SectionWrapper>
  );
}
