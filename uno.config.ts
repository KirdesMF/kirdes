import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetUno()],
  rules: [],
  theme: {
    colors: {
      primary: 'hsl(250, 100%, 50%)',
      secondary: 'cyan',
      black: 'var(--background)',
      wesh: 'var(--background)',
    },
  },
  shortcuts: {
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md text-red',
  },
});
