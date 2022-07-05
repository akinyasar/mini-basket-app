<template>
  <div class="testclass">listview page</div>
  <a-button @click="testSwal">Deneme BUttonuz</a-button>
</template>
<script setup>
import { ref, reactive, inject, computed, onMounted } from "vue";

const showMessage = inject("showMessage");

const testSwal = () => {
  showMessage({
    title: "test title",
    type: "error",
    message: "deneme",
    showCancelButton: true,
  });
};
</script>
