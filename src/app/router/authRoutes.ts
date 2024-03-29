export const AuthRoutes = [
  {
    path: "/auth",
    component: () =>
      import("@/pages/authorization/ui/layouts/AuthorizationLayout.vue"),
    children: [
      {
        name: "registration",
        path: "/signup",
        component: () =>
          import("@/pages/authorization/ui/registration/RegistrationPage.vue"),
      },
      {
        name: "login",
        path: "/signin",
        component: () => import("@/pages/authorization/ui/login/LoginPage.vue"),
      },
    ],
  },
];
