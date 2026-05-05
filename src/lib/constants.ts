// Section IDs used for navigation and scroll detection
export const SECTIONS = {
  hero: 'hero',
  about: 'about',
  services: 'services',
  story: 'story',
  work: 'work',
  process: 'process',
  clients: 'clients',
  contact: 'contact',
} as const;

export type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS];

// Navigation items
export const NAV_ITEMS: { label: string; sectionId: SectionId }[] = [
  { label: 'About', sectionId: SECTIONS.about },
  { label: 'Services', sectionId: SECTIONS.services },
  { label: 'Story', sectionId: SECTIONS.story },
  { label: 'Work', sectionId: SECTIONS.work },
  { label: 'Process', sectionId: SECTIONS.process },
  { label: 'Contact', sectionId: SECTIONS.contact },
];

// Breakpoints (match CSS)
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 1024,
  desktop: 1280,
  large: 1400,
} as const;

// Animation timing
export const TIMING = {
  bootSequenceDuration: 4000,
  typewriterSpeed: 50,
  sectionRevealThreshold: 0.2,
} as const;
