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
    getBasket() {
      return this.basket;
    },
    getBasketCount() {
      //return this.basket.length;
      const nonRepeatBasket = this.getProductsCounts;
      return Object.keys(nonRepeatBasket).length;
    },
    getCurrency() {
      if (this.basket.length > 0) return this.basket[0].currency;
    },
    getTotalAmount() {
      let total = 0;
      this.basket.forEach((item) => {
        total += parseFloat(item.price);
      });
      return total.toFixed(2);
    },
    getProductsCounts() {
      const count = {};
      this.basket.forEach((item) => {
        if (count[item.id]) {
          count[item.id] += 1;
        } else {
          count[item.id] = 1;
        }
      });
      return count;
    },
  },
  actions: {
    addToBasket(product) {
      this.basket.push(product);
      localStorage.setItem("basket", JSON.stringify(this.basket));
    },
    removeFromBasket(product) {
      this.basket = this.basket.filter((item) => item.id !== product.id);
      localStorage.setItem("basket", JSON.stringify(this.basket));
    },
    clearBasket() {
      this.basket = [];
      localStorage.setItem("basket", JSON.stringify(this.basket));
    },
    increaseProductCount(product) {
      this.basket.push(product);
      localStorage.setItem("basket", JSON.stringify(this.basket));
    },
    decreaseProductCount(product) {
      let isDeleted = false;
      this.basket.forEach((item, index) => {
        if (item.id === product.id) {
          if (!isDeleted) {
            this.basket.splice(index, 1);
            isDeleted = true;
          }
        }
      });
      localStorage.setItem("basket", JSON.stringify(this.basket));
    },
  },
});
