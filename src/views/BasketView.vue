<template>
  <div class="basket-view-container">
    <a-row>
      <a-col class="xs-order-1" :xs="24" :md="15" :lg="16" :xl="17" :xxl="18">
        <a-card class="basket-view-card-style">
          <template #title>
            <p class="basket-view-title">
              Sepetim ({{ basketCount }})
            </p></template
          >
          <basket-product-card />
        </a-card>
      </a-col>
      <a-col
        class="basket-view-order-menu xs-order-2"
        :xs="24"
        :md="9"
        :lg="8"
        :xl="7"
        :xxl="6"
      >
        <a-card class="basket-view-card-style">
          <basket-order-menu />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { ref, reactive, inject, computed, onMounted } from "vue";
import BasketProductCard from "@/components/basket/BasketProductCard.vue";
import BasketOrderMenu from "@/components/basket/BasketOrderMenu.vue";
import { useBasketStore } from "@/stores/basket/basket.store";

const basketStore = useBasketStore();

const basketCount = computed(() => basketStore.getBasketCount);
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
}
</style>

<style lang="scss">
@import "@/assets/styles/global.scss";

////// Container and order menu media query //////

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
    padding-left: 1.7rem;
  }
}
@media only screen and (min-width: $md) and (max-width: $lg) {
  .basket-view-container {
    padding: 2rem 5rem 0 5rem !important;
  }
  .basket-view-order-menu {
    padding-left: 2rem;
  }
}
@media only screen and (min-width: $lg) and (max-width: $xl) {
  .basket-view-container {
    padding: 2rem 8rem 0 8rem !important;
  }
  .basket-view-order-menu {
    padding-left: 2.2rem;
  }
}
@media only screen and (min-width: $xl) and (max-width: $xxl) {
  .basket-view-container {
    padding: 2rem 11rem 0 11rem !important;
  }
  .basket-view-order-menu {
    padding-left: 2.5rem;
  }
}
@media only screen and (min-width: $xxl) and (max-width: $xxxl) {
  .basket-view-container {
    padding: 2rem 15rem 0 15rem !important;
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
