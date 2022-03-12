import { defineConfig, presetIcons, presetUno } from 'unocss';

const fonts = [
  'thin',
  'extra-light',
  'light',
  'regular',
  'medium',
  'semi-bold',
  'bold',
  'black',
].join('|');

const ranges = ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].join(
  '|'
);

export default defineConfig({
  presets: [presetUno({ dark: 'class' }), presetIcons()],
  theme: {
    breakpoints: {
      xs: '320px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
  },
  rules: [
    [
      /^font-(base|secondary)$/,
      (match) => ({
        'font-family': `var(--font-${match[1]})`,
      }),
    ],
    [
      new RegExp(`^text-clamp-(${ranges})$`),
      (match) => ({
        'font-size': `var(--clamp-size-${match[1]})`,
        'line-height': 1,
      }),
    ],
    [
      new RegExp(`^text-wght-(${fonts})$`),
      (match) => ({
        'font-variation-settings': `var(--font-wght-${match[1]})`,
      }),
    ],
    [
      /^border-(left|top|bottom|right)-(\d+)$/,
      (match) => ({
        [`border-${match[1]}-width`]: `${match[2]}px`,
        [`border-${match[1]}-style`]: 'solid',
      }),
    ],
  ],
});
