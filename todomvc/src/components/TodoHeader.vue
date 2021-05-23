<template>
  <header>
    <h1>todos</h1>
    <input
      type="text"
      class="new-todo"
      autofocus
      autocomplete="off"
      placeholder="What needs to be done?"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
  </header>
</template>

<script>
export default {
  name: 'TodoHeader',
  data() {
    return {
      newTodo: '',
    }
  },
  method: {
    addTodo() {},
  },
}
</script>

<style scoped>
h1 {
  position: absolute;
  top: -155px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}
</style>
