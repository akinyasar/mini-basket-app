import { createRouter, createWebHistory } from "vue-router";
import ListView from "@/views/ListView.vue";
import Header from "@/layout/Header.vue";
import Footer from "@/layout/Footer.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "list",
      components: {
        default: ListView,
        header: Header,
        footer: Footer,
      },
    },
    {
      path: "/basket",
      name: "basket",
      components: {
        default: () => import("../views/BasketView.vue"),
        header: Header,
        footer: Footer,
      },
    },
  ],
});

export default router;
