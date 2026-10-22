export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  category: 'software' | 'ai' | 'web';
  liveUrl?: string;
  details: {
    overview: string;
    approach: string;
    outcome: string;
  };
}

export const projects: Project[] = [
  {
    slug: 'geosure',
    title: 'GeoSure',
    subtitle: 'Geospatial safety mapping platform',
    description:
      'Interactive map application that shows safety scores and risk data for locations worldwide.',
    thumbnail: '/images/portfolio/geosure-thumb.jpg',
    images: ['/images/portfolio/geosure-1.jpg', '/images/portfolio/geosure-2.jpg'],
    tags: ['React', 'TypeScript', 'Mapbox', 'Geospatial', 'Data Visualization', 'Firebase'],
    category: 'software',
    details: {
      overview:
        'GeoSure gives travelers and organizations safety information for specific locations. They needed a responsive map interface that could show a lot of risk data without overwhelming users.',
      approach:
        'I built an interactive map with layered data views, real-time filtering, and a responsive layout that works on phones and desktops. Most of the work went into making dense geospatial data easy to read.',
      outcome:
        'A fast map interface where users can check how safe a location is at a glance, using visual layers and scores.',
    },
  },
  {
    slug: 'ftn',
    title: 'FTN',
    subtitle: 'Fantasy sports data & analytics tools',
    description:
      'Data grids, calculators, and comparison tools that turn sports statistics into fantasy picks.',
    thumbnail: '/images/portfolio/ftn-thumb.jpg',
    images: ['/images/portfolio/ftn-1.jpg', '/images/portfolio/ftn-2.jpg'],
    tags: ['React', 'TypeScript', 'Django', 'Python', 'Data Grids', 'Analytics', 'AWS'],
    category: 'software',
    details: {
      overview:
        'FTN sells data tools and analytics to fantasy sports players. The challenge was turning large, complex datasets into interfaces that both casual players and professionals could use.',
      approach:
        'I built interactive data grids, scoring calculators, and comparison tools with a React frontend and a Django API. The focus was on staying fast with large datasets and making filtering and sorting easy.',
      outcome:
        'A set of analytics tools that fantasy players, sports analysts, and professionals use to work with complex sports data.',
    },
  },
  {
    slug: 'happy-egg',
    title: 'Happy Egg',
    subtitle: 'Custom WordPress development for a national egg brand',
    description:
      'Contract work on a large part of Happy Egg\'s WordPress site: custom PHP templates and JavaScript interactions for one of the largest free-range egg brands in the U.S.',
    thumbnail: '/images/portfolio/happy-egg-thumb.jpg',
    images: ['/images/portfolio/happy-egg-1.jpg', '/images/portfolio/happy-egg-2.jpg'],
    tags: ['PHP', 'WordPress', 'JavaScript', 'Custom Theme', 'Responsive Design', 'UI/UX'],
    category: 'web',
    liveUrl: 'https://happyegg.com',
    details: {
      overview:
        'Happy Egg brought me on as a contract developer to build a large part of their website. They wanted a custom site that told their farm-to-table story, loaded fast on every device, and let their own team update content.',
      approach:
        'I wrote custom PHP templates in WordPress and hand-written JavaScript for the interactive pieces: parallax scrolling, card-flip profiles for hen breeds, curved section transitions, and an Instagram feed of customer posts. Every component was built so the Happy Egg team could edit products, farm details, and promotions without touching code.',
      outcome:
        'Happy Egg got a fast, custom brand site, and their team manages day-to-day content on their own.',
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
