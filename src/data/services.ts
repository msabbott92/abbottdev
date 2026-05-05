export interface Service {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string; // emoji or icon identifier
}

export const services: Service[] = [
  {
    id: 'ai-concierge',
    title: 'AI Concierge',
    description:
      'Your human for AI. I interview your team to learn how work actually gets done, pick and configure the right AI tools for that workflow, train the people using them, and stay on as your point of contact. You don\'t have to learn anything new — I run it for you and tweak it as your needs change.',
    tags: [
      'Workflow Interviews',
      'AI Tool Setup',
      'Prompt Engineering',
      'Ongoing Management',
      'Team Training',
      'Integrations',
      'Fractional AI Manager',
    ],
    icon: '>_',
  },
  {
    id: 'software',
    title: 'Custom Software Development',
    description:
      'When off-the-shelf tools won\'t cut it, I build custom web applications end-to-end — from responsive frontends to APIs you can count on. Tools shaped around your workflow, not around a framework\'s defaults.',
    tags: ['React', 'TypeScript', 'Python', 'Django', 'Shopify', 'MySQL', 'PostgreSQL', '.NET'],
    icon: '{}',
  },
];
