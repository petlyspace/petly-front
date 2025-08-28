// https://nuxt.com/docs/api/configuration/nuxt-config

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
      'global.crypto': 'crypto', // shim
    },
  },
});
