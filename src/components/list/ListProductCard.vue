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
        <a-button
          class="primary-button"
          @click="addToBasket(product)"
          size="large"
          :loading="loading"
        >
          SEPETE EKLE
        </a-button>
      </div>
    </a-card>
  </div>
</template>
<script setup>
import { ref, reactive, inject, computed, onMounted } from "vue";
import { useBasketStore } from "@/stores/basket/basket.store";
import { notification } from "ant-design-vue";

const loading = ref(false);
const basketStore = useBasketStore();

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const addToBasket = (product) => {
  loading.value = true;
  setTimeout(() => {
    try {
      basketStore.addToBasket(product);
      notification["success"]({
        message: "Sepete Eklendi",
        description: `${product.name} isimli ürününüz başarıyla sepete eklendi.`,
      });
    } catch (err) {
      console.log(err);
      notification["error"]({
        message: "Hata",
        description: "Ooops bir hata oluştu! Ürün sepete eklenemedi.",
      });
    } finally {
      loading.value = false;
    }
  }, 500);
};
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
}
</style>
