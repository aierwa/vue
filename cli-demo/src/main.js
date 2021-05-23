import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // render 具体是一个 createElement 函数，生成一个 VNode 节点
  render: (h) => h(App),
}).$mount('#app') // 另一种挂载方式，即将 VNode 挂载到#app节点，渲染真正的DOM
