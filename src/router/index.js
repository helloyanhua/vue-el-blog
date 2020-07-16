import Vue from "vue";
import Router from "vue-router";
import Header from "../views/homepage";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/404",
      component: () => import("@/404.vue"),
      name: "404"
    },
    {
      path: "/",
      name: "Header",
      component: Header,
      meta: { title: "技术论坛" }
    },
    {
      path: "/forum/deatil",
      name: "forumDeatil",
      component: () => import("@/views/forum/detail"),
      meta: { title: "技术论坛详情" }
    },
    {
      path: "/forum/create",
      name: "forumCreate",
      component: () => import("@/views/forum/create"),
      meta: { title: "新建技术论坛" }
    },
    {
      path: "/guide/list",
      name: "guideList",
      component: () => import("@/views/guide/list"),
      meta: { title: "开发者指南" }
    },
    {
      path: "/guide/detail",
      name: "guideDetail",
      component: () => import("@/views/guide/detail"),
      meta: { title: "开发者指南详情" }
    }
  ]
});
