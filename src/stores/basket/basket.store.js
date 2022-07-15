import { defineStore } from "pinia";

const initialBasket = [];
export const useBasketStore = defineStore({
  id: "basket",
  state: () => ({
    basket: JSON.parse(
      localStorage.getItem("basket") || JSON.stringify(initialBasket)
    ),
  }),
  getters: {
    getBasket: () => this.basket,
    getBasketCount() {
      return this.basket.length;
    },
    getBasketTotal: () => {
      return this.basket.reduce((total, item) => {
        return total + item.price;
      }, 0);
    },
  },
  actions: {
    addToBasket(product) {
      this.basket.push(product);
      localStorage.setItem("basket", JSON.stringify(this.basket));
    },
    removeFromBasket(product) {
      this.basket = this.basket.filter((item) => item.id !== product.id);
    },
  },
});
