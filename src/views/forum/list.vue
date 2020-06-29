<template>
  <div>
    <el-container>
      <el-header class="header bg-white">
        <el-row class="row just-start-align-center">
          <el-col :span="4" class="row just-align-center">
            <div class="logo">
              <img src="../../assets/logo.png" alt="logo" />
            </div>
          </el-col>
          <el-col :span="16">
            <div>
              <el-tabs>
                <el-tab-pane
                  v-for="item in navList"
                  v-bind:key="item.name"
                  :label="item.label"
                  :name="item.name"
                />
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
              <li v-for="item in classify" v-bind:key="item.id">
                {{ item.name }}
              </li>
            </ul>
          </el-col>
          <el-col :span="18" class="con-center bg-white">
            <ul>
              <li v-for="item in classifyList" v-bind:key="item.id">
                <div class="top row just-between-align-center pd-20">
                  <h2 class="title">
                    <el-link class="txt">{{ item.title }}</el-link>
                  </h2>
                  <div class="font-14 color-3">
                    <span class="pd-r-20">
                      <i class="el-icon-view"></i>
                      <span class="pd-l-5">{{ item.views }}</span>
                    </span>
                    <span class="pd-r-20">
                      <i class="el-icon-chat-dot-square"></i>
                      <span class="pd-l-5">{{ item.comments }}</span>
                    </span>
                  </div>
                </div>
                <p class="center">
                  {{ item.contents.substring(0, 150) }}
                  <span v-if="item.contents.length > 150">...</span>
                </p>
                <div class="bottom row just-between-align-center">
                  <div class="row just-start-align-center">
                    <div class="row just-start-align-center authorInfo">
                      <div class="author">
                        <el-image
                          class="img"
                          :src="item.author.img"
                          :fit="fit"
                        />
                      </div>
                      <div class="name font-14 pd-lr-10">
                        {{ item.author.name }}
                      </div>
                    </div>
                    <div class="time font-12">
                      <span>发布时间：</span>
                      <span>{{ item.author.time }}</span>
                    </div>
                  </div>
                  <ul class="pd-r-20 row just-end">
                    <li class="pd-l-10" v-for="tag in item.type" :key="tag">
                      <el-tag size="mini" type="info" effect="dark">{{
                        tag
                      }}</el-tag>
                    </li>
                  </ul>
                </div>
                <el-divider />
              </li>
            </ul>
          </el-col>
          <el-col :span="3">3</el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import img from "../../assets/author.jpeg";
export default {
  name: "forumList",
  data() {
    return {
      navList: [
        {
          label: "技术论坛",
          name: "forum"
        },
        {
          label: "模型知识",
          name: "model"
        },
        {
          label: "专家信息",
          name: "expert"
        },
        {
          label: "开发者指南",
          name: "guide"
        },
        {
          label: "个人中心",
          name: "personal"
        }
      ],
      classify: [
        {
          id: "1",
          name: "移动开发"
        },
        {
          id: "2",
          name: "前端开发"
        },
        {
          id: "3",
          name: "服务端开发/管理"
        },
        {
          id: "4",
          name: "游戏开发"
        },
        {
          id: "5",
          name: "编程语言"
        },
        {
          id: "6",
          name: "数据库"
        },
        {
          id: "7",
          name: "企业开发"
        },
        {
          id: "8",
          name: "图像/多媒体"
        },
        {
          id: "9",
          name: "系统运维"
        },
        {
          id: "10",
          name: "软件工程"
        },
        {
          id: "11",
          name: "开源硬件"
        },
        {
          id: "12",
          name: "物联网"
        },
        {
          id: "13",
          name: "其他类型"
        }
      ],
      classifyList: [
        {
          id: "1",
          title:
            "学编程这么久，还傻傻分不清什么是方法（method），什么是函数学编程这么久，还傻傻分不清什么是方法（method），什么是函数学编程这么久，还傻傻分不清什么是方法（method），什么是函数学编程这么久，还傻傻分不清什么是方法（method），什么是函数",
          views: "1231",
          comments: "321",
          contents:
            "学编程这么久，还傻傻分不清什么是方法（method），什么是函数学编程这么久，还傻傻分不清什么是方法（method），什么是函数学编程这么久，还傻傻分不清什么是方法（method），什么是函数学编程这么久，还傻傻分不清什么是方法（method），什么是函数学编程这么久，还傻傻分不清什么是方法（method），什么是函数学编程这么久，还傻傻分不清什么是方法（method），什么是函数学编程这么久，还傻傻分不清什么是方法（method），什",
          author: {
            img: img,
            name: "王艳",
            time: "2020-06-29 15:58"
          },
          type: ["移动开发", "物联网", "开源硬件", "软件工程"]
        },
        {
          id: "2",
          title:
            "2学编程这么久，还傻傻分不清什么是方法（method），什么是函数学编程这么久，还傻傻分不清什么是方法（method），什么是函数学编程这么久，还傻傻分不清什么是方法（method），什么是函数学编程这么久，还傻傻分不清什么是方法（method），什么是函数",
          views: "1231",
          comments: "321",
          contents:
            "2学编程这么久，还傻傻分不清什么是方法（method），什么是函数学编程这么久，还傻傻分不清什么是方法（method），什么是函数学编程这么久，还傻傻分不清什么是方法（method），什么是函数学编程这么久，还傻傻分不清什么是方法（method），什么是函数",
          author: {
            img: img,
            name: "王艳2",
            time: "2020-06-29 15:58"
          },
          type: ["移动开发", "物联网", "开源硬件", "软件工程"]
        }
      ],
      fit: "fill"
    };
  }
};
</script>
