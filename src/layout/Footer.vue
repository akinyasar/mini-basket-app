<template>
  <div class="main-footer-container">
    <a-layout-footer class="main-footer">
      <a-row>
        <a-col :md="12" :xs="24" class="xs-order-1">
          <span class="main-footer-copyright">
            © Akın Yaşar 2022. Tüm hakları saklıdır.</span
          >
        </a-col>
        <a-col :md="12" :xs="24" class="xs-order-2 xs-mt-half">
          <div class="main-footer-version">
            <a-badge
              count="Version 1.0.0"
              :offset="[5, 0]"
              :number-style="{
                backgroundColor: '#fff',
                color: '#999',
                boxShadow: '0 0 0 1px #d9d9d9 inset',
                textTransform: 'capitalize',
              }"
              style="margin-right: 3px"
            />
            <a-badge
              count="BETA"
              :offset="[5, 0]"
              :number-style="{
                backgroundColor: '#ff6000',
                color: '#fff',
                textTransform: 'uppercase',
              }"
            />
          </div>
        </a-col>
      </a-row>
    </a-layout-footer>
  </div>
</template>

<script setup></script>

<style lang="scss">
.main-footer-container {
  position: sticky;
  left: 0;
  bottom: 0;
  width: 100%;
  .main-footer {
    padding: 1rem 5rem;
    font-size: 14px;
    background-color: var(--color-white);
    width: 100%;
    box-shadow: 0 -5px 15px var(--color-light-secondary);
    .main-footer-copyright {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      color: var(--color-light-primary);
    }
    .main-footer-version {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }
}
</style>
