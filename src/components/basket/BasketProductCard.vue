<template>
  <a-card class="basket-card-container">
    <a-row>
      <a-col :xs="10" :sm="8" :md="10" :xl="7" :xxl="6" :xxxl="4">
        <a-image
          :src="product.image"
          style="min-width: 100px; max-width: 150px"
        />
      </a-col>
      <a-col
        class="d-flex fd-col xs-pl-1 sm-pl-1 md-pl-1"
        :xs="14"
        :sm="16"
        :md="14"
        :xl="17"
        :xxl="18"
        :xxxl="20"
      >
        <span class="basket-card-name mt-3">{{ product.name }}</span>
        <span class="basket-card-price mt-5"
          >{{ product.price }} {{ product.currency }}</span
        >
      </a-col>
    </a-row>
    <a-row>
      <a-col :xs="10" :sm="8" :md="10" :xl="7" :xxl="6" :xxxl="4"
        >+ - butonları</a-col
      >
      <a-col
        class="d-flex fd-col xs-pl-1 sm-pl-1 md-pl-1"
        :xs="14"
        :sm="16"
        :md="14"
        :xl="17"
        :xxl="18"
        :xxxl="20"
      >
        <a-button size="large">Ürünü Sil</a-button>
      </a-col>
    </a-row>
    <!-- <div class="mt-5"><hr /></div> -->
  </a-card>
</template>

<script setup>
import { ref, reactive, inject, computed, onMounted } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  productCount: {
    required: true,
  },
});
onMounted(() => {
  console.log(props.product);
  console.log(props.productCount);
});
</script>

<style scoped lang="scss">
.basket-card-container {
  padding: 0.2rem;
  .basket-card-name {
    font-size: 1.2rem;
  }
  .basket-card-price {
    font-size: 1rem;
    font-weight: bold;
    color: var(--color-dark-text);
  }
}
</style>
