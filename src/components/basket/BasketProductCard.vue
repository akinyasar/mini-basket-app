<template>
  <a-row>
    <a-col> </a-col>
    <a-col></a-col>
  </a-row>
  <a-row><a-col></a-col><a-col></a-col></a-row>
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

<style scoped lang="scss"></style>
