import { createRouter, createWebHistory } from "vue-router";
import BasketView from "@/views/BasketView.vue";
import ListView from "@/views/ListView.vue";

const routes = [
  {
    path: "/",
    component: ListView,
  },
  {
    path: "/basket",
    component: BasketView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export { routes };

export default router;
