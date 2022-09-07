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
    '@nuxtjs/google-adsense'
  ],
  plausible: {
    domain: 'img-grid-generator.com',
  },
  'google-adsense': {
    id: 'ca-pub-6990326026895148'
  }
})
