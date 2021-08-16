<!-- user list -->
<template>
  <div>
    用户列表
    <el-button @click="changeObject1">changeObject1</el-button>
    <el-button @click="changeObject2">changeObject2</el-button>
    <Child :object="object"></Child>
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "UserList",
  data() {
    return {
      object: {
        inner: {}
      }
    };
  },

  components: { Child },

  computed: {},

  created() {
    this.init();
  },

  methods: {
    init() {
      console.log(11);
      window.object1 = {
        inner: { name: "object1" }
      };
      window.object2 = {
        inner: { name: "object2" }
      };
    },
    changeObject1() {
      this.object = window.object1;
    },
    changeObject2() {
      this.object = window.object2;
    }
  }
};
</script>
<style scoped></style>
