<template>
  <div class="basket-button-container">
    <a-button>
      <div class="basket-count-badge">5</div>
      <i class="bx bx-basket bx-sm"></i>
      <span>Sepetim</span>
    </a-button>
  </div>
</template>

<script setup>
import { provide, computed, onMounted, ref } from "vue";
</script>

<style scoped lang="scss">
.basket-button-container {
  position: relative;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid var(--color-light-primary);
    border-radius: 5px;
    background-color: var(--color-white);
    color: var(--color-light-primary);
    font-weight: 700;
    font-size: 1rem;
    padding: 0.5rem 1.2rem;
    cursor: pointer;
    span {
      margin-left: 0.5rem;
    }
  }
  button:hover {
    background-color: var(--color-orange);
    color: var(--color-white);
    .basket-count-badge {
      background-color: var(--color-white);
      color: var(--color-orange);
    }
  }
  .basket-count-badge {
    position: absolute;
    width: 1rem;
    height: 1rem;
    text-align: center;
    top: 0.3rem;
    left: 0.8rem;
    background-color: var(--color-orange);
    color: var(--color-white);
    border-radius: 50%;
    font-size: 0.7rem;
    font-weight: 600;
  }
}
</style>
