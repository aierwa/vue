<!-- 登录页 -->
<template>
  <el-form
    ref="loginForm"
    :model="form"
    :rules="rules"
    label-width="80px"
    class="login-box"
  >
    <h3 class="login-title">欢迎登陆</h3>
    <!-- 表单项 -->
    <el-form-item label="账号" prop="username">
      <el-input
        type="text"
        placeholder="请输入账号"
        v-model="form.username"
      ></el-input>
    </el-form-item>
    <!-- 表单项 -->
    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        placeholder="请输入密码"
        v-model="form.password"
      ></el-input>
    </el-form-item>
    <!-- 表单项-按钮 -->
    <el-form-item>
      <el-button type="primary" @click="onSubmit('loginForm')">登陆</el-button>
    </el-form-item>

    <!-- 提示框 -->
    <el-dialog title="温馨提示" :visible.sync="dialogVisible" width="30%">
      <span>请输入账号和密码</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </el-form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      dialogVisible: false,
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "change" }]
      }
    };
  },

  components: {},

  computed: {},

  methods: {
    //登陆submit
    onSubmit(formName) {
      // 表单验证
      this.$refs[formName].validate(valid => {
        if (valid) {
          //验证通过就跳转到首页
          this.$router.push("/main/" + this.form.username);
        } else {
          //否则弹出提示框
          this.dialogVisible = true;
          return false;
        }
      });
    }
  }
};
</script>
<style scoped></style>
