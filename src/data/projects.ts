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
    slug: 'ftn',
    title: 'FTN',
    subtitle: 'Sports analytics apps and the Ask Iverson AI chatbot',
    description:
      'Six new production apps, 15+ maintained, and the LLM feature stack behind Ask Iverson, on a platform with 40,000+ active users.',
    thumbnail: '/images/portfolio/ftn-thumb.jpg',
    images: ['/images/portfolio/ftn-1.jpg', '/images/portfolio/ftn-2.jpg'],
    tags: ['LLM Chatbot', 'React', 'Django', 'TypeScript', 'Python', 'AWS', 'Playwright', 'Pytest'],
    category: 'ai',
    details: {
      overview:
        'FTN is a sports analytics platform with 40,000+ active users across fantasy, player stats, DFS, prop, and bet-tracking tools. I work with them as a contractor through my company, Abbott Endeavors.',
      approach:
        'I designed and delivered six new production applications and maintain 15+ existing ones, built with React, Vite, TypeScript, and Django and tested with Playwright and Pytest. I also worked on and deployed the LLM feature stack behind Ask Iverson, FTN\'s AI chatbot. On the infrastructure side, I manage third-party API keys and database credentials in AWS Secrets Manager and set up least-privilege IAM roles for the GitHub Actions CI/CD workflows.',
      outcome:
        'Ask Iverson shipped to FTN\'s users, and three of the new applications led to a contract and partnership with USA Today.',
    },
  },
  {
    slug: 'geosure',
    title: 'GeoSure',
    subtitle: 'Risk map platform rebuild and AI chatbot',
    description:
      'Rebuilt GeoSure\'s Global Risk Observatory map platform in Next.js and integrated an AI chatbot for querying global safety and risk data.',
    thumbnail: '/images/portfolio/geosure-thumb.jpg',
    images: ['/images/portfolio/geosure-1.jpg', '/images/portfolio/geosure-2.jpg'],
    tags: ['AI Chatbot', 'Next.js', 'Mapbox GL', 'TypeScript', 'Redux Toolkit', 'Geospatial', 'Firebase'],
    category: 'ai',
    details: {
      overview:
        'GeoSure provides safety and risk intelligence for locations worldwide. Their Global Risk Observatory (GRO) is a paid map platform for exploring that data, and I was brought on to modernize it.',
      approach:
        'I rebuilt the GRO chart application in Next.js 15, TypeScript, Mapbox GL, and Redux Toolkit, adding hexagonal tile layers, multi-level administrative boundaries, and color-coded safety risk scoring. I also integrated an AI chatbot into the app so users can ask questions about global safety and risk data in a conversational interface.',
      outcome:
        'The rebuilt platform contributed directly to GeoSure securing a contract with Harvard University. GRO and its chatbot are part of a paid product, so there\'s no public link.',
    },
  },
  {
    slug: 'happy-egg',
    title: 'Happy Egg',
    subtitle: 'Contract web development for a national egg brand',
    description:
      'Built four full-stack pages in five weeks for Happy Egg Co. as a contract developer with Made by Prisma.',
    thumbnail: '/images/portfolio/happy-egg-thumb.jpg',
    images: ['/images/portfolio/happy-egg-1.jpg', '/images/portfolio/happy-egg-2.jpg'],
    tags: ['PHP', 'SilverStripe', 'JavaScript', 'MySQL', 'Bootstrap', 'Figma'],
    category: 'web',
    liveUrl: 'https://happyegg.com',
    details: {
      overview:
        'Happy Egg Co. is one of the largest free-range egg brands in the U.S. I joined the Made by Prisma agency team as a contract developer to build part of their website.',
      approach:
        'I worked from Figma designs with a three-person design team and built the pages in SilverStripe CMS with PHP, MySQL, Bootstrap, and JavaScript/AJAX. The interactive pieces included parallax scrolling, card-flip profiles for hen breeds, curved section transitions, and an Instagram feed of customer posts. Every component was built so Happy Egg\'s team could edit content without touching code.',
      outcome:
        'I delivered four full-stack pages in five weeks and merged them into the agency\'s main codebase through Bitbucket.',
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
