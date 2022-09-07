<template>
  <div class="m-h-screen flex flex-col gap-20 items-center p-10 min-h-screen max-w-[800px] mx-auto">
    <Files/>
    <Settings/>
    <ClientOnly>
      <Preview/>
      <Export/>
    </ClientOnly>
    <!-- <Support/> -->
    <Footer/>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Grid from Img Generator',
  meta: [
    { name: 'robots', content: 'noindex' },
    { name: 'description', content: 'Generate PNG grids online for free. Select your images, margin, radius & more.' }
  ],
})
</script>