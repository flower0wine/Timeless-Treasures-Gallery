import { createWebHistory, createRouter, type RouterOptions } from "vue-router";
import Index from "@/router/modules/index";
import Link from "@/router/modules/link";

const router = createRouter({
  history: createWebHistory(),
  routes: [...Index, ...Link],
} as RouterOptions);

export default router;
