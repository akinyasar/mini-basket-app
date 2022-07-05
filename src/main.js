import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import antDesign from "ant-design-vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "@/assets/styles/variables.scss";
import "@/assets/styles/global.scss";
import "@/assets/styles/responsive/xs/xs.scss";
import "@/assets/styles/responsive/sm/sm.scss";
import "@/assets/styles/responsive/md/md.scss";
import "@/assets/styles/responsive/lg/lg.scss";
import "@/assets/styles/responsive/xl/xl.scss";
import "@/assets/styles/responsive/xxl/xxl.scss";
import "@/assets/styles/responsive/xxxl/xxxl.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(antDesign);
app.use(VueSweetalert2);

app.mount("#app");
