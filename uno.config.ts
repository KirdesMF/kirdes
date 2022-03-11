import { defineConfig, presetIcons, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetUno({ dark: 'class' }), presetIcons()],

  rules: [
    [
      /^flow-space-(.*)$/,
      (match) => ({ '--flow-space': `var(--size-${match[1]})` }),
    ],
    [
      /^font-(base|secondary)$/,
      (match) => ({
        'font-family': `var(--font-${match[1]})`,
      }),
    ],
    [
      /^font-wght-(.*)$/,
      (match) => ({
        'font-variation-settings': `var(--font-wght-${match[1]})`,
      }),
    ],
    [
      /^border-([ltbr]|left|top|bottom|right)-(\d+)$/,
      (match) => ({
        [`border-${match[1]}`]: `${match[2]}px solid`,
      }),
    ],
  ],
});
