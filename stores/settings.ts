import { defineStore } from 'pinia'

const useSettings = defineStore('settings', {
  state: () => {
    return {
      radius: 0.5,
      margin: 10,
      columns: 3
    }
  }
})

export default useSettings