import { defineStore } from 'pinia'
import FileType from '~/types/File'

type State = {
  files: FileType[],
}

const useFiles = defineStore('files', {
  state: (): State => {
    return {
      files: []
    }
  }
})

export default useFiles