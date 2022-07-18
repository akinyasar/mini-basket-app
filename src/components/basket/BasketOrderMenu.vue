<template>
  <div class="basket-order-menu-container">
    <a-row>
      <a-col class="basket-order-menu-title" :span="24"
        >Seçilen Ürünler ({{ basketCount }})</a-col
      >
      <a-col class="basket-order-menu-price mt-2" :span="24">
        <div>
          <span>1500</span>
          <span class="currency"> TRY</span>
        </div>
      </a-col>
    </a-row>
    <a-row class="mt-4">
      <a-col class="basket-back-button" :span="12">
        <a-button
          @click="() => router.push('/')"
          size="large"
          :loading="loading"
          block
        >
          <i class="bx bx-chevron-left bx-xs pr-1"></i>
          Alişverişe Dön
        </a-button></a-col
      >
      <a-col class="basket-order-button" :span="12">
        <a-button
          @click="addToBasket(product)"
          size="large"
          :loading="loading"
          block
        >
          Şiparişi Tamamla
        </a-button></a-col
      >
    </a-row>
  </div>
</template>

<script setup>
import { ref, reactive, inject, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useBasketStore } from "@/stores/basket/basket.store";

const router = useRouter();
const basketStore = useBasketStore();

const basketCount = computed(() => basketStore.getBasketCount);
</script>

<style scoped lang="scss">
.basket-order-menu-container {
  .basket-order-menu-title {
    font-size: 1.2rem;
    color: var(--color-light-primary);
  }
  .basket-order-menu-price {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--color-dark-text);
    .currency {
      font-size: 0.8rem;
      color: var(--color-light-primary);
    }
  }
  .basket-order-button {
    padding-left: 0.5rem;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-white);
      background-color: var(--color-orange);
      border-color: var(--color-orange);
      font-weight: 500;
      padding: 0rem 1.5rem;
      border-radius: 5px;
      transition: all 0.4s;
    }
    button:hover {
      background-color: var(--color-orange-darker);
    }
  }
  .basket-back-button {
    padding-right: 0.5rem;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-dark-text);
      background-color: var(--color-white);
      border-color: var(--color-light-primary);
      font-weight: 500;
      padding: 0rem 1.5rem;
      border-radius: 5px;
      transition: all 0.4s;
    }
  }
  button:hover {
    background-color: var(--color-light-secondary);
  }
}
</style>
