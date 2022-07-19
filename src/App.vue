<template>
  <div id="root-container">
    <div id="main-header">
      <router-view name="header"></router-view>
    </div>
    <div id="main">
      <router-view style="margin-bottom: 100px"></router-view>
    </div>
    <div id="main-footer">
      <router-view name="footer"></router-view>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { provide, computed, onMounted, ref } from "vue";
import SweetAlert from "sweetalert2";

const displayWidth = ref(window.innerWidth);

const listenResize = () => {
  displayWidth.value = window.innerWidth;
};

const showMessage = ({
  position = "center",
  type,
  title,
  message,
  showConfirmButton = true,
  showCancelButton = false,
  confirmButtonText = "Tamam",
  cancelButtonText = "İptal",
  cancelButtonColor,
  confirmButtonColor,
  callback = null,
}) => {
  if (!title) {
    title = type === "success" ? "İşlem Başarılı" : "Bir Hata Oluştu";
  }
  SweetAlert.fire({
    heightAuto: false,
    position: position,
    icon: type,
    title: title,
    html: message || (type === "error" ? "Bir Hata Oluştu" : "İşlem Başarılı"),
    showCancelButton: showCancelButton,
    showConfirmButton: showConfirmButton,
    cancelButtonText: cancelButtonText,
    confirmButtonText: confirmButtonText,
    cancelButtonColor: cancelButtonColor,
    confirmButtonColor: confirmButtonColor,
  }).then((res) => {
    if (callback) {
      callback({ ...res });
    }
  });
};

onMounted(() => {
  window.addEventListener("resize", listenResize, false);
});

provide("showMessage", showMessage);
provide("displayWidth", displayWidth);
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";

#app {
  height: 100vh;
  width: 100vw;
  background-color: var(--color-light-secondary);
}
#root-container {
  height: 100%;
  width: 100%;
  background-color: var(--color-light-secondary);
}
#main-header {
  padding-top: 3rem;
}
#main {
  background-color: var(--color-light-secondary);
  padding: 3rem;
}

@media only screen and (max-width: $sm) {
  #main {
    padding: 1.3rem !important;
  }
}
@media only screen and (min-width: $sm) and (max-width: $md) {
  #main {
    padding: 3rem !important;
  }
}
@media only screen and (min-width: $md) and (max-width: $lg) {
  #main {
    padding: 3rem 4rem !important;
  }
}
</style>
