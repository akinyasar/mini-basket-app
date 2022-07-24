import { createRouter, createWebHistory } from "vue-router";
import ListView from "@/views/ListView.vue";
import HeaderView from "@/layout/HeaderView.vue";
import FooterView from "@/layout/FooterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "list",
      components: {
        default: ListView,
        header: HeaderView,
        footer: FooterView,
      },
    },
    {
      path: "/basket",
      name: "basket",
      components: {
        default: () => import("../views/BasketView.vue"),
        header: HeaderView,
        footer: FooterView,
      },
    },
  ],
});

export default router;
