<template>
  <div class="flex flex-col gap-2 justify-center w-full">
    <h2 class="align-left text-3xl font-bold	">Preview</h2>
    <div v-show="filesLength" class="preview w-full" ref="gridElement">
      <img v-for="(file, index) in files" :key="index" :style="{ borderRadius: settings.radius + 'rem' }" :src="file.content" >
    </div>
    <div v-show="!filesLength">
      <p class="text-slate-400 text-sm italic">Import your images to preview your grid.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Macy from 'macy'
import useSettings from '~~/stores/settings';
import useFiles from '~~/stores/files';

const files = useFiles().files

const filesLength = computed(() => {
  return files.length ? true : false
})

const settings = useSettings()

const gridElement = ref(null)
let grid = ref(undefined)
let config = reactive({
  container: '.preview',
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
  });

  setRadius()
}

onMounted(() => {
  Init()
})

watch(
  () => files,
  (files, oldFiles) => {
    Init()
  },
  { deep: true }
)

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