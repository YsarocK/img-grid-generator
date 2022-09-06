<template>
  <div class="m-h-screen flex flex-col gap-20 items-center px-6 py-[10rem] min-h-screen max-w-[800px] mx-auto">
    <Files/>
    <Settings/>
    <ClientOnly>
      <Preview/>
      <ExportOpen/>
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'Grid from Imgs Generator',
  meta: [
    { name: 'robots', content: 'noindex' }
  ],
})
</script>