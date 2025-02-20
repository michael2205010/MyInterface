import { createRouter, createWebHistory } from "vue-router";

let pages = {
  public: {
    "/faq": () => import("./views/faq/index.vue"),
    "/registration": () => import("./views/registration/index.vue"), //會員註冊
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
      path: "/",
      component: () =>
        import("./views/home/index.vue"),
    },
  ],
});
