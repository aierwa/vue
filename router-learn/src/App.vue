<template>
  <div id="app">
    <h1>Index - I’m Always here.</h1>
    <!-- 相当于a标签 -->
    <router-link to="/content">内容页</router-link>
    <router-link to="/about">关于页</router-link>
    <!-- 这里 router-view 放的就是跳转后的组件 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
