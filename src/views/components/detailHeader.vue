<template>
  <div>
    <div class="detail-header">
      <div class="pd-b-10 title">
        <h2>{{ data.title }}</h2>
      </div>
      <div class="pd-b-10">
        <div class="row just-start-align-center">
          <div class="row just-start-align-center authorInfo">
            <div class="author">
              <el-image class="img" :src="data.author.img" :fit="fit" />
            </div>
            <div class="name font-14 pd-lr-10">
              {{ data.author.name }}
            </div>
          </div>
          <div class="font-12 pd-r-20">
            <span>发布时间：</span>
            <span>{{ data.time }}</span>
          </div>
          <div class="font-14 color-3">
            <span class="pd-r-20">
              <i class="el-icon-view"></i>
              <span class="pd-l-5">{{ data.views }}</span>
            </span>
            <span class="pd-r-20">
              <i class="el-icon-chat-dot-square"></i>
              <span class="pd-l-5">{{ data.comments }}</span>
            </span>
          </div>
        </div>
      </div>
      <div class="pd-b-10 row just-between-align-center">
        <ul class="row just-start">
          <li class="pd-r-10" v-for="tag in data.type" :key="tag">
            <el-tag size="mini" effect="dark">{{ tag }}</el-tag>
          </li>
        </ul>
        <!-- <div class="collect row align-center">
          <div><i class="icon iconfont icon-weiguanzhu color-red"></i></div>
          <span class="font-14 pd-l-10">收藏</span>
        </div> -->
      </div>
      <el-divider />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    detailHeader: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      data: this.detailHeader,
      fit: "fill"
    };
  }
};
</script>
