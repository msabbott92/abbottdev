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
      'Interactive map application providing safety intelligence and risk scoring for locations worldwide.',
    thumbnail: '/images/portfolio/geosure-thumb.jpg',
    images: ['/images/portfolio/geosure-1.jpg', '/images/portfolio/geosure-2.jpg'],
    tags: ['React', 'TypeScript', 'Mapbox', 'Geospatial', 'Data Visualization', 'Firebase'],
    category: 'software',
    details: {
      overview:
        'GeoSure provides travelers and organizations with location-based safety intelligence. The platform needed an intuitive, responsive map interface that could display complex risk data without overwhelming users.',
      approach:
        'Built an interactive mapping application with layered data visualization, real-time filtering, and responsive design that works across devices. Focused on making dense geospatial data accessible and actionable.',
      outcome:
        'Delivered a performant map-based interface that lets users quickly assess location safety through intuitive visual layers and scoring.',
    },
  },
  {
    slug: 'ftn',
    title: 'FTN',
    subtitle: 'Fantasy sports data & analytics tools',
    description:
      'Suite of data-driven tools turning complex sports statistics into actionable fantasy insights.',
    thumbnail: '/images/portfolio/ftn-thumb.jpg',
    images: ['/images/portfolio/ftn-1.jpg', '/images/portfolio/ftn-2.jpg'],
    tags: ['React', 'TypeScript', 'Django', 'Python', 'Data Grids', 'Analytics', 'AWS'],
    category: 'software',
    details: {
      overview:
        'FTN provides fantasy sports players with data tools and analytics. The challenge was transforming large, complex datasets into user-friendly interfaces that help users and professionals interact with quality data insights.',
      approach:
        'Built interactive data grids, scoring calculators, and comparison tools with a React frontend and Django API backend. Emphasis on performance with large datasets and intuitive filtering and sorting.',
      outcome:
        'Delivered a suite of analytics tools that make complex sports data accessible and actionable for fantasy sports, sport analysts, and professionals alike.',
    },
  },
  {
    slug: 'happy-egg',
    title: 'Happy Egg',
    subtitle: 'Custom frontend development for a national egg brand',
    description:
      'Contracted to build a significant portion of Happy Egg\'s WordPress site — crafting bespoke PHP templates and tailored JavaScript interactions that power a polished, story-driven digital presence for one of the largest free-range egg brands in the U.S.',
    thumbnail: '/images/portfolio/happy-egg-thumb.png',
    images: ['/images/portfolio/happy-egg-1.jpg', '/images/portfolio/happy-egg-2.jpg'],
    tags: ['PHP', 'WordPress', 'JavaScript', 'Custom Theme', 'Responsive Design', 'UI/UX'],
    category: 'web',
    liveUrl: 'https://happyegg.com',
    details: {
      overview:
        'As a contract developer, I was brought on to build a large portion of the Happy Egg website — a brand that needed more than a cookie-cutter template. The site required a tailored experience that could tell their farm-to-table story while giving their team full control over content updates. It had to feel premium, load fast, and work flawlessly across every device.',
      approach:
        'Developed custom PHP templates within WordPress, pairing hand-written JavaScript with purpose-built interactive elements — including parallax scroll effects, card-flip animations for hen breed profiles, curved section transitions, and dynamic Instagram UGC feeds. Layered in smooth motion and depth throughout the pages to create an engaging, immersive browsing experience. Components were engineered for visual polish and client-side editability, giving the Happy Egg team the ability to update products, farm details, and promotional content without touching code.',
      outcome:
        'The work I contributed helped shape a refined, high-performance brand site that elevated Happy Egg\'s digital identity. The custom WordPress integration empowered their team with autonomy over day-to-day content while maintaining the pixel-level craftsmanship of a fully bespoke frontend.',
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
