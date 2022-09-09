import { defineStore } from 'pinia'

type Settings = {
  radius: number,
  margin: number,
  columns: number,
  extension: string
}

const useSettings = defineStore('settings', {
  state: () => {
    return <Settings>{
      radius: 0.5,
      margin: 10,
      columns: 3,
      extension: 'png'
    }
  }
})

export default useSettings