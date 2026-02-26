export interface Service {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string; // emoji or icon identifier
}

export const services: Service[] = [
  {
    id: 'software',
    title: 'Custom Software Development',
    description:
      'Full-stack web applications tailored to your business. From interactive, performant frontends to robust backend APIs — we build tools that solve real problems, not just check boxes.',
    tags: ['React', 'TypeScript', 'Python', 'Django', 'Shopify', 'PostgreSQL'],
    icon: '{}',
  },
  {
    id: 'ai',
    title: 'AI Solutions',
    description:
      'Custom chatbots, email and response automation, AI tool integration, and hands-on consulting. We help you figure out where AI actually makes sense for your business — and where it doesn\'t.',
    tags: ['Custom Chatbots', 'Email Automation', 'AI Integration', 'LLMs', 'Consulting'],
    icon: '>_',
  },
  {
    id: 'consulting',
    title: 'Consulting & Strategy',
    description:
      'Not ready to build yet? We help with architecture reviews, technology selection, project scoping, and roadmapping — so when you are ready, you start with a clear plan.',
    tags: ['Architecture Review', 'Tech Selection', 'Roadmapping', 'Project Scoping'],
    icon: '//',
  },
];
