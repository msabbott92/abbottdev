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
        'FTN provides fantasy sports players with data tools and analytics. The challenge was transforming large, complex datasets into user-friendly interfaces that help players make faster, smarter decisions.',
      approach:
        'Built interactive data grids, scoring calculators, and comparison tools with a React frontend and Django API backend. Emphasis on performance with large datasets and intuitive filtering and sorting.',
      outcome:
        'Delivered a suite of analytics tools that make complex sports data accessible and actionable for fantasy players.',
    },
  },
  {
    slug: 'small-business',
    title: 'Small Business Web',
    subtitle: 'Custom websites for local businesses',
    description:
      'Thoughtfully designed web presences for small businesses that need more than a template.',
    thumbnail: '/images/portfolio/smb-thumb.jpg',
    images: ['/images/portfolio/smb-1.jpg'],
    tags: ['React', 'Responsive Design', 'SEO', 'Custom CMS'],
    category: 'web',
    details: {
      overview:
        'Small businesses deserve websites that reflect their unique identity — not cookie-cutter templates. These projects focused on crafting custom web presences tailored to each business.',
      approach:
        'Collaborated closely with business owners to understand their brand, audience, and goals. Built custom, responsive sites optimized for performance and search visibility.',
      outcome:
        'Delivered distinctive, fast-loading websites that help small businesses stand out and connect with their customers online.',
    },
  },
  {
    slug: 'shopify',
    title: 'Shopify Solutions',
    subtitle: 'Custom e-commerce experiences',
    description:
      'Bespoke Shopify customizations and integrations beyond what off-the-shelf themes offer.',
    thumbnail: '/images/portfolio/shopify-thumb.jpg',
    images: ['/images/portfolio/shopify-1.jpg'],
    tags: ['Shopify', 'Liquid', 'JavaScript', 'Custom Themes', 'E-commerce'],
    category: 'web',
    details: {
      overview:
        'When standard Shopify themes fall short, businesses need custom solutions. These projects extended Shopify with custom functionality, integrations, and design work.',
      approach:
        'Built custom theme modifications, bespoke features, and third-party integrations using Shopify\'s Liquid templating and JavaScript. Focused on maintaining store performance while adding functionality.',
      outcome:
        'Delivered tailored e-commerce experiences that give businesses the functionality they need without sacrificing the Shopify ecosystem.',
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
