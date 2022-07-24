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
      return this.basket.length;
    },
    getCurrency() {
      if (this.basket.length > 0) return this.basket[0].currency;
    },
    getTotalAmount() {
      let total = 0;
      this.basket.forEach((item) => {
        total += parseFloat(item.price) * item.count;
      });
      return total.toFixed(2);
    },
  },
  actions: {
    addToBasket(product) {
      product.count = 1;
      let alreadyInBasket = this.basket.find((item) => item.id === product.id);
      if (!!alreadyInBasket) {
        alreadyInBasket.count += 1;
      } else {
        this.basket.push(product);
      }
      this.updateCache();
    },
    removeFromBasket(product) {
      this.basket = this.basket.filter((item) => item.id !== product.id);
      this.updateCache();
    },
    clearBasket() {
      this.basket = [];
      this.updateCache();
    },
    increaseProductCount(product) {
      const alreadyInBasket = this.basket.find(
        (item) => item.id === product.id
      );
      alreadyInBasket.count += 1;
      this.updateCache();
    },
    decreaseProductCount(product) {
      const alreadyInBasket = this.basket.find(
        (item) => item.id === product.id
      );
      alreadyInBasket.count -= 1;
      if (alreadyInBasket.count === 0) {
        this.removeFromBasket(product);
      }
      this.updateCache();
    },
    updateCache() {
      localStorage.setItem("basket", JSON.stringify(this.basket));
    },
  },
});
