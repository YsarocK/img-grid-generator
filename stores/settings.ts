import { defineStore } from 'pinia'

export const useSettings = defineStore('settings', {
  state: () => {
    return {
      radius: 0.5,
      margin: 10,
      columns: 3
    }
  }
})