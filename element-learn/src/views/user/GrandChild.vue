<!-- user list -->
<template>
  <div>
    GrandChild
    <el-input v-model="object.inner.name" />
  </div>
</template>

<script>
export default {
  name: "GrandChild",
  data() {
    return {};
  },
  props: ["object"],
  components: {},

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
