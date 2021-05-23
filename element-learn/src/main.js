// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 演示 element-ui、路由组件传参、404、路由钩子、axios mock

import Vue from "vue";
import App from "./App";
import router from "./router";

// 导入 element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 导入 axios
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
