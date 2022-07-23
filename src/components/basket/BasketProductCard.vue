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
    <a-row class="mt-2">
      <a-col :xs="10" :sm="8" :md="10" :xl="7" :xxl="6" :xxxl="4"
        ><div class="product-button-group d-flex fd-row width-100">
          <div class="control-button mr-2" @click="decreaseProduct(product)">
            <i class="bx bx-minus"></i>
          </div>
          <a-input-number
            class="d-flex align-center justify-center"
            id="inputNumber"
            size="small"
            :value="productCount"
            :controls="false"
            :min="1"
            disabled
          />
          <div class="control-button ml-2" @click="increaseProduct(product)">
            <i class="bx bx-plus"></i>
          </div></div
      ></a-col>
      <a-col
        class="d-flex fd-col xs-pl-1 sm-pl-1 md-pl-1"
        :xs="14"
        :sm="16"
        :md="14"
        :xl="17"
        :xxl="18"
        :xxxl="20"
      >
        <a-button
          class="secondary-button height-2r"
          size="large"
          @click="removeProduct(product)"
        >
          <i class="bx bx-trash pr-1"></i>
          Ürünü Sil</a-button
        >
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup>
import { ref, reactive, inject, computed, onMounted } from "vue";
import { useBasketStore } from "@/stores/basket/basket.store";

const basketStore = useBasketStore();

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  productCount: {
    required: true,
  },
});

const removeProduct = (product) => {
  basketStore.removeFromBasket(product);
};
const increaseProduct = (product) => {
  basketStore.increaseProductCount(product);
};
const decreaseProduct = (product) => {
  basketStore.decreaseProductCount(product);
};
</script>

<style lang="scss">
.basket-card-container {
  padding: 0.2rem;
  .basket-card-name {
    font-size: 1.2rem;
    color: var(--color-light-primary);
  }
  .basket-card-price {
    font-size: 1rem;
    font-weight: bold;
    color: var(--color-dark-text);
  }
  .product-button-group {
    padding-left: 1rem;
    .ant-input-number {
      width: 3rem;
      .ant-input-number-input {
        color: var(--color-dark-text);
        text-align: center !important;
        font-weight: 600 !important;
      }
    }
    .control-button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.7rem;
      height: 1.7rem;
      background-color: var(--color-light-secondary);
      border: 1px solid var(--color-light-primary);
      border-radius: 50%;
    }
  }
}
</style>
