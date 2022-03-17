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

//------------------------------------------------------------------//

export type ResumeData = {
  title: string;
  start: string | number;
  end: string | number;
  description: Array<string>;
  tag: 'school' | 'freelance';
};

export type Langs = {
  lang: string;
  level: string;
};

export type Certificate = {
  title: string;
  year: number;
};

export function getResumeDatas() {
  return {
    certificates,
    languages,
    experiences,
    bonus,
  };
}

export const bonus = [
  'Available now',
  'Remote or hybrid',
  'Freelance or contract',
  'Can adapt to time zone (UTC+1)',
];

export const certificates: Array<Certificate> = [
  { title: 'Web developer OpenClassrooms', year: 2021 },
  { title: 'Self learning web development', year: 2015 },
  { title: 'High school diploma in Electrical engineering', year: 2005 },
];

export const languages: Array<Langs> = [
  { lang: 'French', level: 'native' },
  { lang: 'English', level: 'fluent' },
];

export const experiences: ResumeData[] = [
  {
    title: 'Reservia',
    start: 'may 2021',
    end: 'june 2021',
    tag: 'school',
    description: [
      'Use a version control system for project tracking and hosting',
      'Set up Front-End environment',
      'Integrate content according to a template',
      'Implement a responsive interface',
    ],
  },
  {
    title: 'Oh my food',
    start: 'june 2021',
    end: 'june 2021',
    tag: 'school',
    description: [
      'Implement graphic CSS effects',
      'Setting up structure for a website',
      'Ensure the graphic consistency of a website',
    ],
  },
  {
    title: 'La chouette agence',
    start: 'june 2021',
    end: 'july 2021',
    tag: 'school',
    description: [
      'Ensuring the accessibility of a website - a11y',
      'Write maintainable HTML and CSS code',
      'Optimize the size and speed of the website - performance',
      'Optimize the referencing of a website - SEO',
    ],
  },
  {
    title: 'Orinoco',
    start: 'july 2021',
    end: 'august 2021',
    tag: 'school',
    description: [
      'Interacting with a web service with JavaScript',
      'e-commerce',
      'Validate data from external sources',
      'Create a test plan for an application',
      'Managing JavaScript events',
      'Vanilla js routing',
      'Design',
      'Deployment',
    ],
  },
  {
    title: 'Piiquante',
    start: 'august 2021',
    end: 'august 2021',
    tag: 'school',
    description: [
      'Implement CRUD operations in a secure manner',
      'Store data securely',
      'Implement a logical data model in accordance with regulations (OSWAP)',
    ],
  },
  {
    title: 'Groupomania',
    start: 'september 2021',
    end: 'december 2021',
    tag: 'school',
    description: [
      'Implement CRUD operations in a secure manner',
      'Store data securely',
      'Implement a logical data model in accordance with regulations (OSWAP)',
      'fullstack web app',
    ],
  },
  {
    title: 'hocusbookus',
    start: '2021',
    end: 'now',
    tag: 'freelance',
    description: [
      'create design for landing page',
      'Notion api as CMS',
      'Dashboard',
    ],
  },
  {
    title: 'obprod',
    start: '2021',
    end: 'now',
    tag: 'freelance',
    description: [
      'create design for landing page',
      'e-commerce services',
      'booking service',
    ],
  },
];
