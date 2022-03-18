import { defineConfig, presetIcons, presetUno } from 'unocss';

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
        'line-height': 1.15,
      }),
    ],
    [
      /^border-(left|top|bottom|right)-(\d+)$/,
      (match) => ({
        [`border-${match[1]}-width`]: `${match[2]}px`,
        [`border-${match[1]}-style`]: 'solid',
      }),
    ],
    [
      /^border-shadow-(\d+)$/,
      (match) => ({
        'box-shadow': `0 0 0 ${match[1]}px var(--dark-black)`,
      }),
    ],
    [
      /^bg-grid-(10|15|25|50)$/,
      (match) => {
        const size = Number(match[1]);
        const half = Math.floor(size / 2);
        return {
          'background-size': `${size}px ${size}px`,
          'background-position': `-${half}px ${half}px, ${half}px -${half}px`,
          'background-image': `
            linear-gradient(var(--line) 0.5px, transparent 1px),
            linear-gradient(90deg, var(--line) 0.5px, transparent 1px);
          `,
        };
      },
    ],
    [
      /gradient-(about|works|contact)/,
      (match) => ({
        'background-image': `var(--gradient-${match[1]})`,
      }),
    ],
  ],
});
