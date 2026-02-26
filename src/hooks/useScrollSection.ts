import { useState, useEffect } from 'react';
import { SECTIONS, type SectionId } from '../lib/constants';

/**
 * Detects which section is currently in the viewport
 * and returns the active section ID for nav highlighting.
 */
export function useScrollSection(): SectionId | null {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  useEffect(() => {
    const sectionIds = Object.values(SECTIONS);
    const observers: IntersectionObserver[] = [];

    const visibleSections = new Map<string, number>();

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(id, entry.intersectionRatio);
            } else {
              visibleSections.delete(id);
            }

            // Find the section with the highest visibility ratio
            let maxRatio = 0;
            let maxSection: SectionId | null = null;
            visibleSections.forEach((ratio, sectionId) => {
              if (ratio > maxRatio) {
                maxRatio = ratio;
                maxSection = sectionId as SectionId;
              }
            });

            setActiveSection(maxSection);
          });
        },
        {
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin: `-${64}px 0px 0px 0px`, // Account for nav height
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return activeSection;
}
