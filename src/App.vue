<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="root-container">
    <div id="main-header">
      <router-view name="header"></router-view>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div id="main-footer">
      <router-view name="footer"></router-view>
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";

#app {
  height: 100vh;
}
.root-container {
  height: 100%;
}
.main {
  height: calc(100% - 200px);
}
#main-header {
  height: 100px;
}
#main-footer {
  height: 100px;
}
</style>
