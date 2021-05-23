import Vue from "vue";
import Router from "vue-router";
import Main from "@/views/Main";
import Login from "@/views/Login";
import UserProfile from "@/views/user/Profile";
import UserList from "@/views/user/List";
import NotFound from "@/views/NotFound";

Vue.use(Router);

export default new Router({
  mode: "history", // 路由模式，history没有#，hash带#
  routes: [
    {
      path: "/main/:username",
      component: Main,
      name: "Main",
      props: true,
      // 子路由，表示这里面的跳转就在 Main 组件里面的 router-view 进行显示
      children: [
        {
          path: "/user/profile/:id", // 通过 :id 来传参
          name: "UserProfile",
          component: UserProfile,
          props: true // 表示把id作为子组件的属性
        },
        {
          path: "/user/list",
          component: UserList
        }
      ]
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});
