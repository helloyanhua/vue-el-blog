<template>
  <div>
    <header-list></header-list>
    <el-main class="content">
      <div class="bg-white con-box">
        <div>
          <ul class="classify-item-list">
            <li v-for="item in classifyList" v-bind:key="item.id">
              <div class="top row just-between-align-center pd-20">
                <h2 class="title">
                  <el-link class="txt" @click="toDetail(item.id)">{{
                    item.title
                  }}</el-link>
                </h2>
              </div>
              <p class="center">
                {{ item.contents.substring(0, 150) }}
                <span v-if="item.contents.length > 150">...</span>
              </p>
              <div class="bottom row just-between-align-center">
                <div class="row just-start-align-center">
                  <div class="row just-start-align-center authorInfo">
                    <div class="author">
                      <el-image class="img" :src="item.author.img" :fit="fit" />
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
                <div class="font-14 color-3 pd-l-20">
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
              <el-divider />
            </li>
          </ul>
        </div>
      </div>
    </el-main>
  </div>
</template>
<script>
import headerList from "@/components/header.vue";
import img from "../../assets/logo.png";
export default {
  name: "guideList",
  components: {
    headerList
  },
  data() {
    return {
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
          }
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
          }
        }
      ],
      fit: "fill"
    };
  },
  methods: {
    toDetail(id) {
      this.$router.push({ path: "/guide/detail", query: { id: id } });
    }
  }
};
</script>
<style scoped>
.con-box {
  padding: 0 20px 20px;
}
</style>
