export interface Service {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string; // emoji or icon identifier
}

export const services: Service[] = [
  {
    id: 'ai-agents',
    title: 'AI Agents & Chatbots',
    description:
      'I build AI agents and chatbots for real users: customer-facing assistants, internal tools, and automated workflows like email triage and response. That covers prompt and tool design, connecting the model to your data and systems, and testing it against the cases that matter to your business.',
    tags: ['AI Agents', 'Chatbots', 'LLM APIs', 'Prompt Engineering', 'Tool Calling', 'Workflow Automation'],
    icon: '>_',
  },
  {
    id: 'ai-deployment',
    title: 'AI Deployment & Integration',
    description:
      'I take AI features from prototype to production. I wire models into your existing apps and data, deploy them behind reliable APIs, and keep an eye on cost, latency, and quality after launch. When the contract ends, your team gets code and documentation they can maintain.',
    tags: ['Deployment', 'API Integration', 'AWS', 'Monitoring', 'Documentation', 'Ongoing Support'],
    icon: '=>',
  },
  {
    id: 'software',
    title: 'Full-Stack Development',
    description:
      'AI features still need a product around them. I build web applications end to end, from React frontends to Python and .NET backends, and I\'ve shipped production apps for clients in travel safety, sports analytics, and consumer brands.',
    tags: ['React', 'TypeScript', 'Python', 'Django', 'PostgreSQL', 'MySQL', '.NET', 'Shopify'],
    icon: '{}',
  },
];
