<template>
  <section class="main" v-show="todos.length == 0">xxx {{ newTodo }}</section>
</template>

<script>
export default {
  name: 'TodoBody',
  props: ['todos'],
}
</script>
