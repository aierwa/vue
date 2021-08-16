<!-- user list -->
<template>
  <div>
    Child
    <el-input v-model="object.inner.name" />
    <GrandChild :object="object"></GrandChild>
  </div>
</template>

<script>
import GrandChild from "./GrandChild.vue";
export default {
  name: "Child",
  data() {
    return {};
  },
  props: ["object"],
  components: { GrandChild },

  computed: {},

  created() {
    this.init();
  },

  methods: {
    init() {}
  }
};
</script>
<style scoped></style>
