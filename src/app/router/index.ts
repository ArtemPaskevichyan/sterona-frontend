import { createRouter, createWebHistory } from "vue-router";
import { AuthRoutes } from "./authRoutes";
import { BoardRoutes } from "./boradRoutes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...AuthRoutes, ...BoardRoutes],
});

export default router;
