import { createRouter, createWebHistory } from "vue-router";
import { AuthRoutes } from "./authRoutes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...AuthRoutes],
});

export default router;
