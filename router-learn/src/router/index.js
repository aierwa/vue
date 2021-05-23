import Vue from "vue";
import Router from "vue-router";
import Content from "@/components/Content";
import About from "@/components/About";

Vue.use(Router);

export default new Router({
  routes: [
    {
      // 跳转路径
      path: "/content",
      name: "Content",
      // 跳转到的组件
      component: Content
    },
    {
      // 跳转路径
      path: "/about",
      name: "about",
      // 跳转到的组件
      component: About
    }
  ]
});
