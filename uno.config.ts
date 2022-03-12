import { defineConfig, presetIcons, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetUno({ dark: 'class' }), presetIcons()],

  rules: [
    [
      /^font-(base|secondary)$/,
      (match) => ({
        'font-family': `var(--font-${match[1]})`,
      }),
    ],
    [
      /^font-size-(.*)$/,
      (match) => ({
        'font-size': `var(--size-${match[1]})`,
      }),
    ],
    [
      /^font-wght-(.*)$/,
      (match) => ({
        'font-variation-settings': `var(--font-wght-${match[1]})`,
      }),
    ],
    [
      /^font-clamp-(.*)$/,
      (match) => ({
        'font-size': `var(--clamp-size-${match[1]})`,
      }),
    ],
    [
      /^border-(left|top|bottom|right)-(\d+)$/,
      (match) => ({
        [`border-${match[1]}`]: `${match[2]}px solid`,
      }),
    ],
  ],
});
