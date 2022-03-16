export type Data = {
  icon: `${string}:${string}`;
  href: string;
  name: string;
};

export const data: Array<Data> = [
  {
    icon: 'simple-icons:github',
    href: 'https://github.com/KirdesMF',
    name: 'Github',
  },
  {
    icon: 'simple-icons:linkedin',
    href: 'https://www.linkedin.com/in/cedric-gourville/',
    name: 'LinkedIn',
  },
  {
    icon: 'simple-icons:twitter',
    href: 'https://twitter.com/CedricGourville',
    name: 'Twitter',
  },
  { icon: 'bi:phone-vibrate-fill', href: 'tel:+1-816-831-9076', name: 'Phone' },
  {
    icon: 'mdi:email-send-outline',
    href: 'mailto:cedgourville@gmail.com',
    name: 'Email',
  },
];

export type ResumeData = {
  job: string;
  start: string | number;
  end: string | number;
  description: Array<string>;
};

export const resume: Array<ResumeData> = [
  {
    job: 'machiniste',
    start: 2006,
    end: 2011,
    description: ['maintenance', 'travaux', 'dépannage'],
  },
  {
    job: 'Bac ELEEC',
    start: '',
    end: 2005,
    description: ['baccalauréat electro technique'],
  },
  {
    job: 'technicien électrique',
    start: 2006,
    end: 2011,
    description: ['maintenance', 'travaux', 'dépannage'],
  },
  {
    job: 'responsable technique',
    start: 2011,
    end: 2013,
    description: [
      "gestion d'équipe",
      'gestion budget',
      'coordination travaux',
      'relationnel client',
    ],
  },
  {
    job: 'SSIAP 1',
    start: '',
    end: 2014,
    description: ['diplôme de service de sécurité incendie'],
  },
  {
    job: 'agent sécurité incendie',
    start: 2014,
    end: 2019,
    description: [
      "gestion d'urgence",
      'assistance à personne',
      'sécurité des biens et personnes',
    ],
  },
  {
    job: 'autodidacte web dev',
    start: 2014,
    end: 'today',
    description: [
      'FreeCodeCamp',
      '30 days of CSS',
      '30 days of JS',
      'help/moderation on Discord server javascript based',
    ],
  },
  {
    job: 'certification web dev',
    start: 'may 2021',
    end: 'december 2021',
    description: [
      'web fundamentals',
      'validation HTML',
      'integration HTML CSS',
      'CSS animation',
      'SEO - a11y - performance',
      'e-commerce frontend',
      'rating website backend',
      'social media full stack',
    ],
  },
  {
    job: 'Available',
    start: 'january 2022',
    end: '...',
    description: [
      'currently working on some side projects',
      'hocusbookus - organisme formation',
      'obprod - studio music',
      'but available now',
    ],
  },
];
