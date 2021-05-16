var app = new Vue({
  el: '#app',
  data: {
    message: 'hello vue!',
    seen: true,
    items: ['aa', 'bb', 'cc'],
    pageLoadInfo: '页面加载于 ' + new Date().toLocaleString(),
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    },
  },
})
