import { defineStore } from "pinia";

export const useSearchStore = defineStore({
  id: "search",
  state: () => ({
    searchKey: "",
  }),
  getters: {
    getSearchKey() {
      return this.searchKey;
    },
  },
  actions: {
    setSearchKey(key) {
      this.searchKey = key;
    },
  },
});
