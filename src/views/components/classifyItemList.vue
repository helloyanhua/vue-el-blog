<template>
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
          <ul class="pd-r-20 row just-end">
            <li class="pd-l-10" v-for="tag in item.type" :key="tag">
              <el-tag size="mini" effect="dark">{{ tag }}</el-tag>
            </li>
          </ul>
        </div>
        <el-divider />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    classifyItemList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      classifyList: this.classifyItemList,
      fit: "fill"
    };
  },
  methods: {
    toDetail(id) {
      this.$router.push({ path: "/forum/deatil", query: { id: id } });
    }
  }
};
</script>
