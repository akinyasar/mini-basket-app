<template>
  <div class="basket-order-menu-container">
    <a-row>
      <a-col class="basket-order-menu-title" :span="24"
        >Seçilen Ürünler ({{ basketCount }})</a-col
      >
      <a-col class="basket-order-menu-price mt-2" :span="24">
        <div>
          <span>{{ totalAmount }} </span>
          <span class="currency"> &nbsp;{{ currency }}</span>
        </div>
      </a-col>
    </a-row>
    <a-row class="mt-4">
      <a-col class="pr-2" :span="12">
        <a-button
          class="secondary-button"
          size="large"
          block
          @click="() => router.push('/')"
        >
          <i class="bx bx-chevron-left bx-xs pr-1"></i>
          Alişverişe Dön
        </a-button></a-col
      >
      <a-col class="pl-2" :span="12">
        <a-button
          class="primary-button"
          size="large"
          block
          :loading="state.loading"
          @click="confirmOrder"
        >
          Şiparişi Tamamla
        </a-button></a-col
      >
    </a-row>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useBasketStore } from "@/stores/basket/basket.store";
import { submitOrderService } from "@/services/basket/basket.services.js";

const router = useRouter();
const basketStore = useBasketStore();

const basketCount = computed(() => basketStore.getBasketCount);
const totalAmount = computed(() => basketStore.getTotalAmount);
const currency = computed(() => basketStore.getCurrency);

const state = reactive({
  loading: false,
});

const confirmOrder = async () => {
  let orderList = basketStore.getBasket.map((product) => {
    return {
      id: product.id,
      amount: product.count,
    };
  });
  state.loading = true;
  const { response, success } = await submitOrderService(orderList);
  if (success) {
    console.log(response);
  } else {
    console.log("error: ", response);
  }
  state.loading = false;
};
onMounted(() => {});
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
}
</style>
