<template>
  <div class="product-card-container">
    <a-card>
      <div class="d-flex fd-col justify-center align-center">
        <a-image class="product-card-image" :src="product.image" />
        <span class="product-card-name mt-3">{{ product.name }}</span>
      </div>
      <div class="d-flex fd-row align-center justify-sbetween mt-7 width-100">
        <span class="product-card-price"
          >{{ product.price }} {{ product.currency }}</span
        >
        <a-button class="product-card-button" @click="addToBasket" size="large">
          SEPETE EKLE
        </a-button>
      </div>
    </a-card>
  </div>
</template>
<script setup>
import { ref, reactive, inject, computed, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.product-card-container {
  .product-card-name {
    font-size: 0.9rem;
    color: var(--color-light-primary);
  }
  .product-card-price {
    font-size: 1rem;
    font-weight: bold;
    color: var(--color-dark-text);
  }
  .product-card-button {
    color: var(--color-white);
    background-color: var(--color-orange);
    border-color: var(--color-orange);
    font-weight: 500;
    padding: 0rem 1.5rem;
  }
}
</style>
