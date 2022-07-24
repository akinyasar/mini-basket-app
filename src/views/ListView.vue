<template>
  <a-row v-if="!state.loading">
    <a-col
      v-for="(item, index) in searchedList"
      :key="index"
      :xs="24"
      :sm="12"
      :md="8"
      :lg="6"
      :xxl="4"
      :xxxl="3"
    >
      <list-product-card :product="item" />
    </a-col>
  </a-row>
  <a-row v-else>
    <a-col v-for="n in 6" :xs="24" :sm="12" :md="8" :lg="6" :xxl="4" :xxxl="3">
      <skeleton-list-product-card />
    </a-col>
  </a-row>
</template>
<script setup>
import { reactive, inject, computed, onMounted } from "vue";
import { getProductListService } from "@/services/list/list.services";
import ListProductCard from "@/components/list/ListProductCard.vue";
import SkeletonListProductCard from "@/components/list/SkeletonListProductCard.vue";
import { useSearchStore } from "@/stores/search/search.store.js";

const searchStore = useSearchStore();
const searchKey = computed(() => searchStore.searchKey);

const showMessage = inject("showMessage");
const state = reactive({
  productList: [],
  loading: false,
});

const searchedList = computed(() => {
  if (!searchKey.value) {
    return state.productList;
  }
  return state.productList.filter((item) => {
    return item.name.toLowerCase().includes(searchKey.value.toLowerCase());
  });
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
