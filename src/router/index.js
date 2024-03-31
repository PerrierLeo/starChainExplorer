import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:catchAll(.*)",
      name: "notFound",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/",
      name: "HomeView",
      component: () => import("../views/HomeView.vue"),
      children: [
        // {
        //   path: "/transaction",
        //   name: "TransactionView",
        //   component: () => import("../views/TransactionView.vue"),
        // },
      ],
    },
    {
      path: "/escrow-contract",
      name: "EscrowContractView",
      component: () => import("../views/EscrowContractView.vue"),
      children: [
        // {
        //   path: "/transaction",
        //   name: "TransactionView",
        //   component: () => import("../views/TransactionView.vue"),
        // },
      ],
    },

    {
      path: "/block/:id",
      name: "BlockView",
      component: () => import("../views/TransactionView.vue"),
    },
    {
      path: "/transaction/:id",
      name: "TransactionView",
      component: () => import("../views/TransactionView.vue"),
    },
  ],
});

export default router;
