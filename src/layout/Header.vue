<template>
  <div class="header-container">
    <a-row class="header-row-container">
      <a-col class="header-left xs-order-1 sm-order-1" :xs="12" :md="6">
        <router-link to="/">
          <!-- <img src="/icons/logo.svg" alt="logo" />  -->
        </router-link>
      </a-col>
      <a-col
        class="header-search-bar xs-order-3 sm-order-3 xs-mt-1 xs-plr-2 sm-mt-1 sm-plr-3"
        :xs="24"
        :md="12"
      >
        <HeaderSearchBar />
      </a-col>
      <a-col class="header-right xs-order-2 sm-order-2" :xs="12" :md="6">
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
    width: 100%;
    padding: 0.9rem 10rem;
    .header-left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .header-search-bar {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .header-right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
}
</style>

<style lang="scss">
@import "@/assets/styles/global.scss";

@media only screen and (max-width: $sm) {
  .header-row-container {
    padding: 0.9rem 1rem !important;
  }
}
@media only screen and (min-width: $sm) and (max-width: $md) {
  .header-row-container {
    padding: 0.9rem 3rem !important;
  }
}
@media only screen and (min-width: $md) and (max-width: $lg) {
  .header-row-container {
    padding: 0.9rem 6rem !important;
  }
}
</style>
