<template>
  <div class="skeleton-list-product-card-container">
    <a-card>
      <div class="d-flex fd-col justify-center align-center">
        <a-skeleton-image class="skeleton-list-product-card-image" />
        <a-skeleton-input
          class="skeleton-list-product-card-name mt-3"
          active="true"
        />
      </div>
      <div class="d-flex fd-row align-center justify-sbetween mt-7 width-100">
        <a-skeleton-input
          class="skeleton-list-product-card-price mt-7"
          active="true"
        />
        <a-skeleton-input
          class="skeleton-list-product-card-button mt-7"
          active="true"
        />
      </div>
    </a-card>
  </div>
</template>
<script setup></script>

<style lang="scss">
.skeleton-list-product-card-container {
  .ant-skeleton-image {
    width: 100% !important;
    height: 100% !important;
  }
  .skeleton-list-product-card-image {
    width: 100%;
    height: 220px;
  }
  .skeleton-list-product-card-name {
    width: 150px;
  }
  .skeleton-list-product-card-price {
    width: 80px;
  }
  .skeleton-list-product-card-button {
    width: 100px;
  }
}
</style>
