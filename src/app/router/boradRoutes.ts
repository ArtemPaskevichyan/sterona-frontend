export const BoardRoutes = [
  {
    path: "/app",
    component: () => import("@/pages/board/ui/layouts/AppLayout.vue"),
    children: [
      {
        name: "board",
        path: "/board",
        component: () => import("@/pages/board/ui/board/BoardPage.vue"),
      },
    ],
  },
];
