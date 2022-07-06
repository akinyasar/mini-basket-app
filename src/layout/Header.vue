<template>
  <div class="header-container">
    <a-row class="header-row-container">
      <a-col class="header-left" :xs="6">
        <router-link to="/">
          <img src="/icons/logo.svg" alt="logo" />
        </router-link>
      </a-col>
      <a-col class="header-search-bar" :xs="12">
        <HeaderSearchBar />
      </a-col>
      <a-col class="header-right" :xs="6">
        <BasketButton />
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { provide, computed, onMounted, ref } from "vue";
import HeaderSearchBar from "@/components/header/HeaderSearchBar.vue";
import BasketButton from "../components/header/BasketButton.vue";
</script>

<style scoped lang="scss">
.header-container {
  width: 100%;
  display: flex;
  align-items: center;
  position: sticky;
  box-shadow: 2px 1px 2px 2px rgb(0 0 0 / 10%);
  background-color: var(--color-white);
  .header-row-container {
    display: flex;
    width: 100%;
    padding: 0.7rem 10rem;

    .header-left {
      width: 100%;
      display: flex;
      align-items: center;
    }
    .header-search-bar {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .header-right {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
}
</style>
