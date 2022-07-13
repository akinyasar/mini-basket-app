<template>
  <a-row>
    <a-col
      v-for="(item, index) in state.productList"
      :xs="12"
      :sm="8"
      :md="6"
      :lg="4"
    >
      <product-card :product="item" />
    </a-col>
  </a-row>
</template>
<script setup>
import { ref, reactive, inject, computed, onMounted } from "vue";
import { getProductListService } from "@/services/list/list.services";
import ProductCard from "@/components/list/ProductCard.vue";

const showMessage = inject("showMessage");
const state = reactive({
  productList: [],
  loading: false,
});

const getProductList = async () => {
  state.loading = true;
  const { response, success } = await getProductListService();
  if (success) {
    state.loading = false;
    state.productList = response;
  } else {
    state.loading = false;
    showMessage({
      title: "Hata",
      type: "error",
      message: "Ürün listesi getirilirken bir hata oluştu.",
    });
  }
};

const testSwal = () => {
  //router.push("/basket");
  showMessage({
    title: "test title",
    type: "error",
    message: "deneme",
    showCancelButton: true,
  });
};
onMounted(() => {
  getProductList();
});
</script>
