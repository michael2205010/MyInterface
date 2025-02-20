import { createRouter, createWebHistory } from "vue-router";

let pages = {
  public: {
    "/faq": () => import("./views/faq/index.vue"),
    "/info": () => import("./views/faq/info.vue"),
    "/registration": () => import("./views/registration/index.vue"), //會員註冊
    "/regular-customer-discount": () =>
      import("./views/regular-customer-discount/index.vue"), //常客優惠方案
    "/login": () => import("./views/login/index.vue"), //登入
  },
};

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...Object.keys(pages.public).map((a) => ({
      name: a,
      path: a,
      component: pages.public[a],
    })),
    {
      path: "/news/:id",
      component: () =>
        import("./views/news/detail.vue"),
      props: true,
    },
    {
      path: "/backManagement",
      component: () => import("./views/backManagement/layout.vue"),
      children: [
        {
          path: "rideHistory",
          component: () =>
            import( "./views/backManagement/rideHistory.vue"),
        },
        {
          path: "userEdit",
          component: () =>
            import( "./views/backManagement/userEdit.vue"),
        },
        {
          path: "myCard",
          component: () =>
            import( "./views/backManagement/myCard.vue"),
        },
        {
          path: "myCard/:cardId",
          component: () =>
            import( "./views/backManagement/manageCard.vue"),
          props: true,
        },
      ],
    },
    {
      path: "/",
      component: () =>
        import("./views/home/index.vue"),
    },
  ],
});
