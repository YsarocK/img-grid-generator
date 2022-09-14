import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
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
