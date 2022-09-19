<template>
  <div class="w-full flex flex-col gap-2">
    <div class="flex justify-between">
      <h2>Files</h2>
      <button v-if="!showInput" @click="input.click()" class="text-sm font-bold flex bg-violet-50 rounded-3xl px-4 py-1 justify-center items-center h-30 text-violet-700">Add files</button>
    </div>
    <form class="flex flex-col justify-between gap-2">
      <div v-show="showInput" class="flex justify-center items-center w-full">
        <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span></p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG, WEBP or GIF (MAX. 2Mo)</p>
          </div>
          <input ref="input" multiple id="dropzone-file" type="file" class="hidden">
        </label>
      </div> 
      <div v-if="error" class="px-4 py-2 bg-red-200 rounded-md">
        <p class="text-xs text-red-700">{{ error }}</p>
      </div>
    </form>
    <div v-if="items.length" class="files grid grid-cols-3 gap-4 files">
      <div class="relative" v-for="(file, index) in items" :key="index">
        <img class="h-[150px] w-full object-cover	" :src="file.content" />
        <div class="flex justify-between p-4 bg-slate-100 rounded-b-md	">
          <p class="text-sm">{{ fileNameReducer(file.name) }}</p>
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
const showInput: Ref<boolean> = ref(true)
const error: Ref<string> = ref('')

const availableExtensions = ['image/png', 'image/jpeg', 'image/svg+xml', 'image/webp']

const items = useFiles().files

onMounted(() => {
  initListener()
})

const initListener = () => {
  input.value.addEventListener("change", function() {
    const imgs = Array.from(this.files)
    imgs.length > 0 && (showInput.value = false)
    imgs.forEach((file: File) => {
      if(!availableExtensions.includes(file.type)) {
        error.value = 'Only PNG, JPG, WEBP & SVG files are allowed'
        return
      }
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

const fileNameReducer = (filename: string) => {
  const fileNameParts = filename.split('.')
  const fileNameExtension = fileNameParts[fileNameParts.length - 1]
  let fileNameWithoutExtension = filename.slice(0, filename.length - (fileNameExtension.length + 1))
  fileNameWithoutExtension = fileNameWithoutExtension.length < 10 ? fileNameWithoutExtension : `${fileNameWithoutExtension.slice(0, 8)}[...]`
  const fileNameSliced = `${fileNameWithoutExtension}.${fileNameExtension}`
  return fileNameSliced
}

watch(items, () => {
  items.length < 1 && (showInput.value = true)
})

</script>