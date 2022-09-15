<template>
  <div class="m-h-screen flex flex-col items-center p-10 min-h-screen max-w-[800px] mx-auto">
    <div class="w-full mb-10">
      <h1>Grid from Imgs Generator</h1>
      <p class="font-light text-sm">Upload your images, choose your settings and export your PNG/JPG/WEBP file. 
        <br/>This tool is completely <strong class="text-violet-700">free to use</strong>, no ads. If you like using it, feel free to <strong><a href="https://www.buymeacoffee.com/etiennemoureton" target="_blank" class="text-violet-700 font-bold">support my work</a></strong>.
        <br/>It uses <strong><a href="http://macyjs.com/" target="_blank">Macy.js</a></strong> under the hood to generate the grid.
      </p>
    </div>
    <div class="flex flex-col gap-20 w-full h-full my-5">
      <Upload/>
      <Settings/>
      <ClientOnly>
        <Preview/>
        <Export/>
      </ClientOnly>
    </div>
    <Footer/>
    <Support/>
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: 'Grid from Imgs Generator | Free tool',
  meta: [
    { name: 'name', content: 'Grid from Imgs Generator | Free tool' },
    { name: 'og:title', content: 'Grid from Imgs Generator | Free tool' },
    { name: 'twitter:title', content: 'Grid from Imgs Generator | Free tool' },
    { name: 'description', content: 'Upload your images, choose your settings (spacing, radius and more) and export your PNG/JPG/WEBP grid file. Completely free to use.' },
    { name: 'og:description', content: 'Upload your images, choose your settings (spacing, radius and more) and export your PNG/JPG/WEBP grid file. Completely free to use.' },
    { name: 'image', content: '/meta-image.jpg' },
    { name: 'og:image', content: '/meta-image.jpg' },
    { name: 'twitter:description', content: 'Upload your images, choose your settings (spacing, radius and more) and export your PNG/JPG/WEBP grid file. Completely free to use.' },
    { name: 'og:url', content: 'https://img-grid-generator.com' },
    { name: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'app' },
  ]
})
</script>

<style src="./assets/styles/main.scss"></style>