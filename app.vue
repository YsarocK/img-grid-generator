<template>
  <div class="m-h-screen flex flex-col gap-20 items-center p-10 min-h-screen max-w-[800px] mx-auto">
    <div class="bg-violet-200 w-full py-4 px-6 rounded-sm">
      <p class="text-violet-700 font-bold">&#x26a0; This tool is currently in beta.</p>
    </div>
    <Files/>
    <Settings/>
    <ClientOnly>
      <Preview/>
      <Export/>
    </ClientOnly>
    <Support/>
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