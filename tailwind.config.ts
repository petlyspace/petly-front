import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,vue}',
    './components/**/*.{js,ts,vue}',
    './layouts/**/*.{js,ts,vue}',
    './pages/**/*.{js,ts,vue}',
    './plugins/**/*.{js,ts,vue}',
    './nuxt.config.{js,ts}',
    './node_modules/shadcn-vue/**/*.{js,ts,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
