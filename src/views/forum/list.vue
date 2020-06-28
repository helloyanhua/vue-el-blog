<template>
  <div>
    <el-container>
      <el-header class="header bg-white">
        <el-row class="row just-start-align-center">
          <el-col :span="4">
            <div class="align">
              <img src="../../assets/logo.png" alt="logo">
            </div>
          </el-col>
          <el-col :span="16">
            <div>
              <el-tabs>
                <el-tab-pane v-for="item in navList" :key="item.name" :label="item.label" :name="item.name" />
              </el-tabs>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="align login-txt">
              <span>您当前未登录，请</span>
              <span>
                <router-link to="">登录</router-link>
              </span>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main class="content">
        <el-row>
          <el-col :span="2" class="bg-white mg-r-20">
            <ul class="con-left">
              <li v-for="item in classify" :key="item.id">
                {{item.name}}
              </li>
            </ul>
          </el-col>
          <el-col :span="18">2</el-col>
          <el-col :span="3">3</el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
  export default{
    name:'forumList',
    data(){
      return{
        navList:[
          {
            label:'技术论坛',
            name:'forum'
          },
          {
            label:'模型知识',
            name:'model'
          },
          {
            label:'专家信息',
            name:'expert'
          },
          {
            label:'开发者指南',
            name:'guide'
          },
          {
            label:'个人中心',
            name:'personal'
          }
        ],
        classify:[
          {
            id:'1',
            name:'移动开发'
          },
          {
            id:'2',
            name:'前端开发'
          },
          {
            id:'3',
            name:'服务端开发/管理'
          },
          {
            id:'4',
            name:'游戏开发'
          },
          {
            id:'5',
            name:'编程语言'
          },
          {
            id:'6',
            name:'数据库'
          },
          {
            id:'7',
            name:'企业开发'
          },
          {
            id:'8',
            name:'图像/多媒体'
          },
          {
            id:'9',
            name:'系统运维'
          },
          {
            id:'10',
            name:'软件工程'
          },
          {
            id:'11',
            name:'开源硬件'
          },
          {
            id:'12',
            name:'物联网'
          },
          {
            id:'13',
            name:'其他类型'
          }
        ]
      }
    }
  }
</script>