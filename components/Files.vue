<template>
  <div class="w-full flex flex-col gap-2">
    <h2>Files</h2>
    <form class="flex justify-between items-center">
      <input ref="input" type="file" name="files" id="" multiple class="file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100">
      <div v-if="error" class="px-4 py-2 bg-red-200 rounded-md">
        <p class="text-xs text-red-700">{{ error }}</p>
      </div>
    </form>
    <div v-if="items.length" class="grid grid-cols-3 gap-4 files">
      <div class="relative" v-for="(file, index) in items" :key="index">
        <img class="h-full w-full object-cover	" :src="file.content" />
        <div class="flex justify-between p-4 bg-slate-100 rounded-b-md	">
          <p class="text-sm">{{ file.name }}</p>
          <DeleteIcon class="cursor-pointer" @click="deleteImg(index)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FileType from '~/types/File'
import useFiles from '~/stores/files'
import DeleteIcon from '~/assets/svg/delete.svg'
import type { Ref } from 'vue'

const input = ref()
const error: Ref<string> = ref('')

const items = useFiles().files

onMounted(() => {
  initListener()
})

const initListener = () => {
  input.value.addEventListener("change", function() {
    Array.from(this.files).forEach((file: File) => {
      if(file.size > 5000000) {
        error.value = 'Maximum file size is 2MB'
        return
      }
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

const deleteImg = (index: number) => {
  items.splice(index, 1)
}
</script>

<style lang="scss">
.files {
  grid-template-rows: repeat(auto-fill, 150px);
}
</style>