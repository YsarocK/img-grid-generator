<template>
  <div class="flex flex-col gap-4 justify-center items-center w-full">
    <div class="grid w-full max-w-[500px]" ref="gridElement">
      <img :style="{ borderRadius: settings.radius + 'rem' }" src="https://www.etiennemoureton.fr/_vercel/image?url=/img/projects/inceptionexperience/home.webp&w=1536&q=60" >
      <img :style="{ borderRadius: settings.radius + 'rem' }" src="https://www.etiennemoureton.fr/_vercel/image?url=/img/portrait.webp&w=1536&q=80" >
      <img :style="{ borderRadius: settings.radius + 'rem' }" src="https://www.etiennemoureton.fr/_vercel/image?url=/img/projects/inceptionexperience/home.webp&w=1536&q=60" >
      <img :style="{ borderRadius: settings.radius + 'rem' }" src="https://www.etiennemoureton.fr/_vercel/image?url=/img/portrait.webp&w=1536&q=80" >
    </div>
  </div>
</template>

<script setup lang="ts">
import Macy from 'macy'
import { useSettings } from '~~/stores/settings';

const settings = useSettings()

const gridElement = ref(null)
let grid = ref(undefined)
let config = reactive({
  container: '.grid',
  trueOrder: false,
  margin: settings.margin,
  columns: settings.columns,
  breakAt: {
    520: 2,
    400: 1
  }
})

// handle radius
const setRadius = () => {
  gridElement.value.querySelectorAll('img').forEach(el => { 
    el.style.borderRadius = settings.radius + 'rem'
  })
}

const Init = () => {
  grid.value && grid.remove()

  grid = Macy(config)

  // handle empty space at bottom
  grid.on(grid.constants.EVENT_IMAGE_COMPLETE, (ctx) => {
    gridElement.value.style.height = `${parseInt(gridElement.value.style.height.slice(0, -2)) - settings.margin}px`
    console.log("njdsq")
  });

  setRadius()
}

onMounted(() => {
  Init()
})

watch(
  () => settings.margin,
  (margin, prevMargin) => {
   config.margin = margin
   Init()
  }
)

watch(
  () => settings.columns,
  (columns, prevColumns) => {
    config.columns = columns
    Init()
  }
)

watch(
  () => settings.radius,
  (radius, prevRadius) => {
    setRadius()
  }
)
</script>