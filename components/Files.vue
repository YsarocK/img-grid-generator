<template>
  <div class="w-full flex flex-col gap-2">
    <h2 class="align-left text-3xl font-bold">Files</h2>
    <input ref="input" type="file" name="files" id="" multiple class="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100">
    <div class="grid grid-cols-4 gap-4">
      <div class="relative" v-for="(file, index) in items" :key="index">
        <img :src="file.content" />
        <div class="flex justify-between p-4 bg-slate-100 rounded-b-md	">
          <p>{{ file.name }}</p>
          <DeleteIcon class="cursor-pointer" @click="deleteImg(index)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FileType from '~/types/File'
import { useFiles } from '~/stores/files'
import DeleteIcon from '~/assets/svg/delete.svg'

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