<!-- user profile -->
<template>
  <div>
    <h1>个人信息</h1>
    <!-- 这里的 id 就是跳转传的参数，两种方式传参 -->
    {{ id }}
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  props: ["id"], // 定义id参数
  data() {
    return {};
  },

  beforeRouteEnter: (to, from, next) => {
    console.log("进入路由之前..");
    next(vm => {
      vm.getData(); // 进入路由之前获取数据
    });
  },

  components: {},

  computed: {},

  methods: {
    getData() {
      console.log("get data");
      this.axios({
        method: "get",
        url: "http://localhost:8080/static/mock/data.json"
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style scoped></style>
