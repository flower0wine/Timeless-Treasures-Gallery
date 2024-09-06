import { LINK_CODE } from "@/menu-code";

export default [
  {
    path: "/link",
    name: LINK_CODE,
    component: () => import("@/pages/link/Index.vue"),
  },
];
