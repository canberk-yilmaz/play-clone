import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home, alias: "/home" },
  // { path: "/", name: "Home", component: Home, alias: "/home" },
  // { path: "/", name: "Home", component: Home, alias: "/home" },
  // { path: "/", name: "Home", component: Home, alias: "/home" },

  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "NotFound",
  //   component: () => import("@/components/NotFound.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  //   scrollBehavior(to, from, savedPosition) {
  //     return (
  //       savedPosition ||
  //       new Promise((resolve) => {
  //         setTimeout(() => resolve({ top: 0 }), 300);
  //       })
  //     );
  //   },
});
// router.beforeEach((to, from) => {
//   if (to.meta.requiresAuth && !window.user) {
//     return { name: "login", query: { redirect: to.fullPath } };
//   }
// });
export default router;
