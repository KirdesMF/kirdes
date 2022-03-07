import { defineConfig, presetIcons, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  rules: [
    [
      /^border-([ltbr]|left|top|bottom|right)-(\d+)$/,
      (match) => ({
        [`border-${match[1]}`]: `${match[2]}px solid`,
      }),
    ],
  ],
});
