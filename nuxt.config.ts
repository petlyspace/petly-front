// https://nuxt.com/docs/api/configuration/nuxt-config
import { createHash } from 'node:crypto';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  build: {
    transpile: ['shadcn-vue'],
  },
  modules: ['@pinia/nuxt'],
  vite: {
    define: {
      'crypto.createHash': createHash,
    },
  },
});
