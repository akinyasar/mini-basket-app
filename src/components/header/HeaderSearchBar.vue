<template>
  <div class="header-search-bar-container">
    <a-input
      v-model:value="value"
      placeholder="Ürün, kategori veya marka ara"
      @keypress.enter="$emit('enterClicked')"
    >
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
const emit = defineEmits(["update:value", "enterClicked"]);

const value = computed({
  get: () => props.value,
  set: (v) => emit("update:value", v),
});
</script>

<style lang="scss">
.header-search-bar-container {
  width: 100%;
  .ant-input-affix-wrapper {
    background: var(--color-light-secondary);
    border-radius: 24px;
    border: 0 none;
    position: relative;
    display: inline-block;
    width: 100%;
    padding: 7px 11px;
    min-width: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 1.5715;
    background-image: none;
    border: 1px solid #d9d9d9;
    transition: all 0.3s;
    display: inline-flex;
    input {
      background: var(--color-light-secondary);
      &::placeholder {
        color: var(--color-gray-text);
      }
    }
    .ant-input {
      padding: 0;
      border: none;
      outline: none;
      padding-left: 5px !important;
      background: var(--color-light-secondary);
      margin: 0;
      font-variant: tabular-nums;
      list-style: none;
      font-feature-settings: "tnum";
      position: relative;
      display: inline-block;
      width: 100%;
      min-width: 0;
      color: rgba(0, 0, 0, 0.85);
      font-size: 14px;
      font-weight: 500;
      line-height: 1.5715;
      border-radius: 2px;
      transition: all 0.3s;
    }
    .ant-input-prefix {
      margin-left: 5px;
      display: flex;
      flex: none;
      align-items: center;
      svg,
      i {
        color: var(--color-gray-solid);
      }
    }
  }
}
</style>
