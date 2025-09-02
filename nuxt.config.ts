// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  srcDir: '.',
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/tailwind.css'],
  build: {
    transpile: ['shadcn-vue'],
  },
  modules: ['@pinia/nuxt'],
});
