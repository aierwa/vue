<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <!-- v-html 插值到标签 -->
    <h1 v-html="msg"></h1>
    <input type="text" v-model="itemNew" v-on:keyup.enter="addNew" />
    <ul>
      <li
        v-for="item in items"
        v-bind:key="item.id"
        v-bind:class="{ isStudent: item.student }"
        v-on:click="turnRed(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Storage from './storage'

export default {
  name: 'App',
  data() {
    return {
      msg: 'Type name and mark who is student',
      items: Storage.fetch(),
      itemNew: '',
    }
  },
  components: {
    HelloWorld,
  },
  methods: {
    turnRed(item) {
      item.student = !item.student
    },
    addNew() {
      this.items.push({
        id: new Date().getTime(),
        name: this.itemNew,
        student: false,
      })
      this.itemNew = null
    },
  },
  // watch 监控
  watch: {
    items: {
      handler(items) {
        Storage.save(items)
      },
      deep: true,
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.isStudent {
  color: red;
}
</style>
