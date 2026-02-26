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
    tags: ['React', 'TypeScript', 'Mapbox', 'Geospatial', 'Data Visualization'],
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
    tags: ['React', 'TypeScript', 'Django', 'Python', 'Data Grids', 'Analytics'],
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
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
