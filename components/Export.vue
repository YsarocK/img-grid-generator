<template>
  <div class="w-full">
    <button @click="exportBlob" class="flex gap-2 bg-violet-50 rounded-3xl px-8 py-2 justify-center h-30 text-violet-700 font-bold">Export</button>
    <div class="fixed right-0 bottom-0 m-auto left-0 top-0 pointer-events-none">
      <div class="generator relative w-[1000px]"></div>
    </div>
  </div>
</template>

<script setup>
import Macy from 'macy'
import { toBlob } from 'html-to-image'
import { saveAs } from 'file-saver';
import { useSettings } from '~~/stores/settings';

const settings = useSettings()

let grid = ref()
let config = reactive({})

const exportSettings = {
  preview: '.preview',
  generator: '.generator',
  bgColor: 'white'
}

const exportBlob = () => {
  config = {
    container: '.generator',
    trueOrder: false,
    margin: settings.margin,
    columns: settings.columns,
    breakAt: {
        520: 2,
        400: 1
    }
  }
  generateNewCanvas()
  setTimeout(() => saveFile(), 100)
}

const saveFile = () => {
  const gen = document.querySelector(exportSettings.generator)
  toBlob(gen)
  .then(function (blob) {
    if (window.saveAs) {
      window.saveAs(blob, 'my-grid.png');
    } else {
     saveAs(blob, 'my-grid.png');
    }
    gen.innerHTML = ""
  })
  .catch((err) => console.log(err))
}

const generateNewCanvas = () => {
  const gridElement = document.querySelector(exportSettings.preview)
  const generatorElement = document.querySelector(exportSettings.generator)
  generatorElement.innerHTML = gridElement.innerHTML

  grid = Macy(config);

  grid.on(grid.constants.EVENT_IMAGE_COMPLETE, (ctx) => {
    gridElement.style.height = `${parseInt(gridElement.style.height.slice(0, -2)) - settings.margin}px`
  });
}

watch(
  () => settings.margin,
  (margin, prevMargin) => {
    config.margin = parseInt(margin)
  }
)

watch(
  () => settings.columns,
  (columns, prevColumns) => {
    config.columns = parseInt(columns)
  }
)
</script>