import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    'nuxt-svgo',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    'vue-plausible',
    '@pinia/nuxt',
  ],
  // plausible: {
  //   domain: 'links.etiennemoureton.fr',
  //   enableAutoOutboundTracking: true
  // }
})
