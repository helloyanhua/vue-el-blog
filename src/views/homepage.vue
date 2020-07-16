<template>
  <div>
    <header-list></header-list>
    <el-main class="content">
      <el-row>
        <el-col :span="18" class="bg-white mg-r-20">
          <classify-item-list :classifyItemList="classifyConList" />
        </el-col>
        <el-col :span="5">
          <ul
            class="pd-20 row just-between-align-center bg-white con-right-top-btns"
          >
            <li @click="toCreateForum">
              <i class="el-icon-edit row just-center" size="large"></i>
              <div class="pd-t-10">写博客</div>
            </li>
            <li>
              <i class="el-icon-edit-outline row just-center" size="large"></i>
              <div class="pd-t-10">写模型</div>
            </li>
            <li>
              <i class="el-icon-trophy row just-center" size="large"></i>
              <div class="pd-t-10">专家申请</div>
            </li>
          </ul>
          <div class="bg-white mg-t-20">
            <div class="align pd-tb-10">技术论坛分类</div>
            <classify
              :classifyList="classify"
              @classifyItemId="getClassifyItemId"
            />
          </div>
        </el-col>
      </el-row>
    </el-main>
    <div class="main-subject">
      <div class="sidebar"></div>
      <div class="article"></div>
      <div class="model"></div>
    </div>
  </div>
</template>
<script>
import head from "@/components/header";
import { parseTime } from "@/utils";
import classifyItemList from "@/views/components/classifyItemList.vue";
import classify from "@/views/components/classify.vue";
import img from "../assets/logo.png";
export default {
  name: "homePage",
  components: {
    "header-list": head,
    classify,
    classifyItemList
  },
  filters: {
    parseTime
  },
  data() {
    return {
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
      classifyConList: [
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
      query: ""
    };
  },
  created() {
    console.log(parseTime(new Date(), "{y}{m}{d}"));
  },
  methods: {
    getClassifyItemId(id) {
      console.log(id);
    },
    toCreateForum() {
      this.$router.push({ path: "/forum/create" });
    }
  }
};
</script>
<style scoped>
.main-subject {
  width: 1180px;
  margin: 0 auto;
  display: flex;
}
.subject-ul li {
  line-height: 30px;
  font-size: 14px;
}
</style>
