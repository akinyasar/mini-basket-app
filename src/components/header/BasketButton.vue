<template>
  <div class="basket-button-container">
    <a-button @click="() => router.push('/basket')">
      <div class="basket-count-badge">{{ basketCount }}</div>
      <i class="bx bx-basket bx-sm"></i>
      <span>Sepetim</span>
    </a-button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useBasketStore } from "@/stores/basket/basket.store";

const router = useRouter();
const basketStore = useBasketStore();

const basketCount = computed(() => basketStore.getBasketCount);
</script>

<style scoped lang="scss">
.basket-button-container {
  position: relative;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid var(--color-light-primary);
    border-radius: 5px;
    background-color: var(--color-white);
    color: var(--color-light-primary);
    font-weight: 700;
    font-size: 1rem;
    padding: 1.3rem 1.5rem;
    cursor: pointer;
    transition: all 0.3s;
    span {
      margin-left: 0.5rem;
    }
  }
  button:hover {
    background-color: var(--color-orange);
    color: var(--color-white);
    .basket-count-badge {
      background-color: var(--color-white);
      color: var(--color-orange);
    }
  }
  .basket-count-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 1.1rem;
    height: 1.1rem;
    text-align: center;
    top: 0.3rem;
    left: 0.7rem;
    background-color: var(--color-orange);
    color: var(--color-white);
    border-radius: 50%;
    font-size: 0.7rem;
    font-weight: 700;
  }
}
</style>
