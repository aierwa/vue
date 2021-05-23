<!-- 首页
布局： el-container
        el-aside
        el-header
        el-main
菜单： el-menu
        el-submenu
          el-menu-item-group
            el-menu-item
 -->
<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <!-- 侧边栏 -->
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <!-- 默认打开 -->
        <el-menu :default-openeds="['1']">
          <!-- 菜单1 -->
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-caret-right"></i>用户管理</template
            >
            <!-- 子菜单 -->
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <!-- 跳转链接 -->
                <!-- 跳转时传参，比如这里传了id=1，注意这里是:to，表示绑定这个对象到to属性 -->
                <router-link :to="{ name: 'UserProfile', params: { id: 1 } }"
                  >个人信息</router-link
                >
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/user/list">用户列表</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!-- 菜单2 -->
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-caret-right"></i>内容管理</template
            >
            <!-- 子菜单 -->
            <el-menu-item-group>
              <el-menu-item index="2-1">分类管理</el-menu-item>
              <el-menu-item index="2-1">内容列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <!-- 用户下拉 -->
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{ username }}</span>
        </el-header>

        <el-main>
          <!-- 用来放组件路由 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: ["username"],
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {}
};
</script>
<style scoped>
.el-header {
  background-color: rgb(82, 30, 223);
  line-height: 60px;
}
</style>
