<template>
  <div>
    <el-container class="bg-white">
      <el-header class="header">
        <el-row class="row just-start-align-center">
          <el-col :span="7">
            <div class="logo row just-start-align-center">
              <div class="logo-img">
                <img src="../assets/logo.png" alt="logo" />
              </div>
              <span class="logo-title pd-l-10">海蓝云开发者社区</span>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="pd-l-20">
              <ul class="row just-start-align-center nav">
                <li>
                  技术论坛
                </li>
                <li>
                  模型知识
                </li>
                <li>
                  专家信息
                </li>
                <li @click="toGuide">
                  开发者指南
                </li>
                <li>
                  个人中心
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="7" class="row just-start-align-center">
            <div>
              <el-input
                size="mini"
                placeholder="输入想搜索的内容"
                class="input-with-select"
              >
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
            <div class="font-12 pd-l-20">
              <span>登录</span>
              <span class="pd-lr-10">|</span>
              <span class="reg">注册</span>
            </div>
          </el-col>
        </el-row>
      </el-header>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    toGuide() {
      this.$router.push({ path: "/guide/list" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
* {
  text-decoration: none;
  list-style: none;
  margin: 0;
  padding: 0;
}
.header {
  width: 1200px;
  margin: 0 auto;
}
.logo {
  height: 60px;
  line-height: 60px;
}
.logo-img {
  width: 148px;
  height: 37px;
}
.nav li {
  padding-left: 20px;
}
.nav li:hover {
  color: #8ac4ff;
  cursor: pointer;
}
.reg {
  color: #8ac4ff;
}
</style>
