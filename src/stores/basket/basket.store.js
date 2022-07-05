import { defineStore } from 'pinia'

export const useBasketStore = defineStore({
  id: 'basket',
  state: () => ({
    basket: 0
  }),
  getters: {
    doubleCount: (state) => state.basket * 2
  },
  actions: {
    increment() {
      this.basket++
    }
  }
})
