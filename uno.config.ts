import { defineConfig, presetIcons, presetUno } from 'unocss';

const weights = {
  thin: 100,
  regular: 400,
  bold: 900,
};

export default defineConfig({
  presets: [presetUno({ dark: 'class' }), presetIcons()],
  rules: [
    [
      /^border-([ltbr]|left|top|bottom|right)-(\d+)$/,
      (match) => ({
        [`border-${match[1]}`]: `${match[2]}px solid`,
      }),
    ],
    [
      /^font-(base|secondary)$/,
      (match) => ({
        'font-family': `var(--font-${match[1]})`,
      }),
    ],
    [
      /^font-(thin|regular|bold)$/,
      (match) => {
        const weight = weights[match[1] as keyof typeof weights];
        return {
          'font-variation-settings': ` "wght" ${weight}`,
        };
      },
    ],
  ],
  shortcuts: {
    wrapper: 'w-[min(65rem,100%)] mx-auto px-10',
  },
});
