export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'vue-plausible',
    '@pinia/nuxt',
    'nuxt-svgo'
  ],
  plausible: {
    domain: 'img-grid-generator.com',
  },
})
