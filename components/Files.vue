<template>
  <div class="w-full flex flex-col gap-2">
    <input ref="input" type="file" name="files" id="" multiple>
    <div class="flex gap-4">
      <div class="relative" v-for="(file, index) in items" :key="index">
        <img class="h-[200px]" :src="file.content" />
        <p class="absolute top-0 text-white p-4" @click="deleteImg(index)">Supprimer</p>
        <p>{{ file.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FileType from '~/types/File'
import { useFiles } from '~/stores/files'

const input = ref()

const items = useFiles().files

onMounted(() => {
  initListener()
})

const initListener = () => {
  input.value.addEventListener("change", function() {
    Array.from(this.files).forEach((file: File) => {
      const item: FileType = {
        name: file.name,
      } 
      const reader = new FileReader();
      reader.addEventListener('load', (e) => {
        item.content = typeof e.target.result === 'string' ? e.target.result : String.fromCharCode.apply(null, new Uint16Array(e.target.result));
        items.push(item)
      })
      reader.readAsDataURL(file)
    })
  })
}

const deleteImg = (index) => {
  items.splice(index, 1)
}
</script>