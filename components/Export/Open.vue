<template>
  <div>
    <button @click="exportBlob">Export</button>
    <div class="fixed left-0 top-0">
      <div class="generator relative w-[1000px]"></div>
    </div>
  </div>
</template>

<script setup>
import { toBlob } from 'html-to-image'
import { saveAs } from 'file-saver';
import Macy from 'macy'
import { useSettings } from '~~/stores/settings';

const settings = useSettings()

let grid = ref()
let config = reactive({})

const exportSettings = {
  preview: '.grid',
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