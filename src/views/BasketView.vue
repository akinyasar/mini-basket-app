<template>
  <div class="basket-view-container">
    <a-row>
      <a-col class="xs-order-1" :xs="24" :md="14" :lg="15" :xl="16" :xxl="17">
        <a-card class="basket-view-card-style">
          <template #title>
            <span class="basket-view-title">
              Sepetim ({{ basketCount }} ürün)
            </span>
          </template>
          <template #extra>
            <a style="" @click="clearBasket">Sepeti boşalt</a>
          </template>
          <div
            v-if="basketCount"
            v-for="(item, index) in productsCounts"
            :key="index"
          >
            <basket-product-card
              :product="getProductById(index)"
              :productCount="item"
            />
          </div>
          <div v-else class="empty-basket">
            Sepetinizde ürün bulunmamaktadır.
          </div>
        </a-card>
      </a-col>
      <a-col
        class="basket-view-order-menu xs-order-2"
        :xs="24"
        :md="10"
        :lg="9"
        :xl="8"
        :xxl="7"
      >
        <a-card class="basket-view-card-style">
          <basket-order-menu />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { computed } from "vue";
import BasketProductCard from "@/components/basket/BasketProductCard.vue";
import BasketOrderMenu from "@/components/basket/BasketOrderMenu.vue";
import { useBasketStore } from "@/stores/basket/basket.store";

const basketStore = useBasketStore();

const basketCount = computed(() => basketStore.getBasketCount);
const basketProducts = computed(() => basketStore.getBasket);
const productsCounts = computed(() => basketStore.getProductsCounts);

const getProductById = (id) => {
  return basketProducts.value.find((item) => item.id == id);
};
const clearBasket = () => {
  basketStore.clearBasket();
};
</script>

<style scoped lang="scss">
.basket-view-container {
  .basket-view-title {
    font-size: 1.2rem;
    color: var(--color-black);
  }
  .basket-view-card-style {
    width: 100%;
    border-radius: 15px;
  }
  .empty-basket {
    text-align: center;
    font-size: 1.2rem;
    color: var(--color-light-primary);
  }
}
</style>

<style lang="scss">
@import "@/assets/styles/global.scss";

////// Container and order menu media queries //////

@media only screen and (max-width: $sm) {
  .basket-view-container {
    padding: 1.5rem 0 0 0 !important;
  }
  .basket-view-order-menu {
    padding-top: 1rem;
  }
}
@media only screen and (min-width: $sm) and (max-width: $md) {
  .basket-view-container {
    padding: 2rem 0 0 0 !important;
  }
  .basket-view-order-menu {
    padding-left: 1rem;
  }
}
@media only screen and (min-width: $md) and (max-width: $lg) {
  .basket-view-container {
    padding: 2rem 2rem 0 2rem !important;
  }
  .basket-view-order-menu {
    padding-left: 1.2rem;
  }
}
@media only screen and (min-width: $lg) and (max-width: $xl) {
  .basket-view-container {
    padding: 2rem 5rem 0 5rem !important;
  }
  .basket-view-order-menu {
    padding-left: 1.8rem;
  }
}
@media only screen and (min-width: $xl) and (max-width: $xxl) {
  .basket-view-container {
    padding: 2rem 9rem 0 9rem !important;
  }
  .basket-view-order-menu {
    padding-left: 2.5rem;
  }
}
@media only screen and (min-width: $xxl) and (max-width: $xxxl) {
  .basket-view-container {
    padding: 2rem 13rem 0 13rem !important;
  }
  .basket-view-order-menu {
    padding-left: 3rem;
  }
}
@media only screen and (min-width: $xxxl) {
  .basket-view-container {
    padding: 2rem 17rem 0 5rem !important;
  }
  .basket-view-order-menu {
    padding-left: 2.5rem;
  }
}
</style>
