<template>
  <a-card class="d-flex justify-center align-center">
    <a-image :src="product.image" />
    <span>{{ product.name }}</span>
  </a-card>
</template>
<script setup>
import { ref, reactive, inject, computed, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  product: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped lang="scss"></style>
