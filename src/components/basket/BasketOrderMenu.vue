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
          @click="submitOrder"
        >
          Şiparişi Tamamla
        </a-button></a-col
      >
    </a-row>
  </div>
</template>

<script setup>
import { inject, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { useBasketStore } from "@/stores/basket/basket.store";
import { submitOrderService } from "@/services/basket/basket.services.js";

const router = useRouter();
const basketStore = useBasketStore();
const showMessage = inject("showMessage");

const basketCount = computed(() => basketStore.getBasketCount);
const totalAmount = computed(() => basketStore.getTotalAmount);
const currency = computed(() => basketStore.getCurrency);

const state = reactive({
  loading: false,
});

const submitOrder = async () => {
  let orderList = basketStore.getBasket.map((product) => {
    return {
      id: product.id,
      amount: product.count,
    };
  });
  state.loading = true;
  const { success, status } = await submitOrderService(orderList);
  if (success) {
    basketStore.clearBasket();
    showMessage({
      title: "Başarılı",
      type: "success",
      message: "Siparişiniz başarıyla alındı.",
      callback: ({ isConfirmed }) => {
        if (isConfirmed) {
          router.push("/");
        }
      },
    });
  } else if (status === 404) {
    showMessage({
      title: "Stok Hatası",
      type: "error",
      message:
        "Diş Fırçası isimli üründe stok yetersiz. Lütfen sepetinizi kontrol ediniz.",
    });
  } else {
    showMessage({
      title: "Hata",
      type: "error",
      message: "Siparişiniz alınırken bir hata oluştu.",
    });
  }
  state.loading = false;
};
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
