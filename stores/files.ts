import { defineStore } from 'pinia'
import FileType from '~/types/File'

interface State {
  files: FileType[],
}

export const useFiles = defineStore('files', {
  state: (): State => {
    return {
      files: []
    }
  }
})