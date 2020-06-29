import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const asyncRoutes = [
  {
    path: "/",
    component: () => import("@/views/forum/list"),
    name: "forumList",
    meta: { title: "技术论坛" }
  }
];
let router = new VueRouter({
  routes: asyncRoutes
});
export default router;
