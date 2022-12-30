import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home, alias: "/home" },
  { path: "/why-play", name: "Home1", component: Home, alias: "/home" },
  { path: "/get-started", name: "Home2", component: Home, alias: "/home" },
  { path: "/features", name: "Home3", component: Home, alias: "/home" },
  { path: "/news", name: "Home4", component: Home, alias: "/home" },
  { path: "/careers", name: "Home5", component: Home, alias: "/home" },

  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "NotFound",
  //   component: () => import("@/components/NotFound.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
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
