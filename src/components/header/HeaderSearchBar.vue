<template>
  <div class="header-search-bar-container">
    <a-input v-model:value="value" placeholder="Arama yapınız">
      <template #prefix>
        <i class="bx bx-search bx-sm"></i>
      </template>
    </a-input>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  value: String,
});
const emit = defineEmits(["update:value"]);

const value = computed({
  get: () => props.value,
  set: (v) => emit("update:value", v),
});
</script>

<style scoped lang="scss">
.header-search-bar-container {
  .ant-input-affix-wrapper {
    background: var(--color-light-secondary);
    border-radius: 24px;
    border: 0 none;
    input {
      background: var(--color-light-secondary);
      &::placeholder {
        color: var(--color-gray-text);
      }
    }
    .ant-input-prefix {
      margin-left: 5px;
      svg,
      i {
        color: var(--color-gray-solid);
      }
    }
  }
}
</style>
