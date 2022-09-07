import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    'vue-plausible',
    '@pinia/nuxt',
    'nuxt-svgo',
    '@nuxtjs/sitemap'
  ],
  plausible: {
    domain: 'img-grid-generator.com',
  },
})
