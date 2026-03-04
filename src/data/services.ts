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
      'Full-stack web applications, from responsive frontends to APIs your team can count on. We build tools around your workflow, not around a framework\'s defaults.',
    tags: ['React', 'TypeScript', 'Python', 'Django', 'Shopify', 'MySQL', 'PostgreSQL', '.NET', ],
    icon: '{}',
  },
  {
    id: 'ai',
    title: 'AI Solutions',
    description:
      'Custom chatbots, email automation, AI tool integration, and the consulting to know what\'s worth building. We\'ll tell you where AI makes sense — and where it\'s just hype.',
    tags: ['Custom Chatbots', 'Email Automation', 'AI Integration', 'LLMs', 'Consulting'],
    icon: '>_',
  },
  {
    id: 'consulting',
    title: 'Consulting & Strategy',
    description:
      'Not ready to build yet? We do architecture reviews, technology selection, project scoping, and roadmapping — so when you are ready, you\'re not starting from scratch.',
    tags: ['Architecture Review', 'Tech Selection', 'Roadmapping', 'Project Scoping'],
    icon: '//',
  },
];
