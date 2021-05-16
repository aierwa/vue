// 注册组件
Vue.component('todo-item', {
  // 定义一些属性，具体属性绑定的值通过 v-bind:todo 来决定
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>',
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'hello vue!',
    groceryList: [
      { id: 0, text: 'learn vue' },
      { id: 1, text: 'learn java' },
      { id: 2, text: 'learn go' },
    ],
  },
})
