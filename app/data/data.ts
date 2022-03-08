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
