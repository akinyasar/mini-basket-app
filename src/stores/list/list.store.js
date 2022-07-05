import { defineStore } from "pinia";

export const useListStore = defineStore({
  id: "list",
  state: () => ({
    list: 0,
  }),
  getters: {
    doubleCount: (state) => state.list * 2,
  },
  actions: {
    increment() {
      this.list++;
    },
  },
});
