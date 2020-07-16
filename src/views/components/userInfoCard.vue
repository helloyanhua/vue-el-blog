<template>
  <div class="bg-white user-info-card">
    <div class="pd-b-10">关于作者</div>
    <el-divider />
    <div class="row user just-between-align-center pd-b-20 pd-t-10">
      <div class="row just-start-align-center">
        <span class="pd-r-10">
          <el-image class="img" :src="userInfo.img" :fit="fit" />
        </span>
        <div class="column just-align-center">
          <span class="name">{{ userInfo.name }}</span>
          <el-button size="mini" type="primary" class="mg-t-5">关注</el-button>
        </div>
      </div>
    </div>
    <el-divider />
    <div class="row just-around-align-center pd-t-15">
      <div class="number">
        <div>{{ userInfo.articleNum }}</div>
        <span class="pd-t-20">文章数</span>
      </div>
      <div class="number">
        <div>{{ userInfo.fansNum }}</div>
        <span class="pd-t-20">粉丝数</span>
      </div>
      <div class="number">
        <div>{{ userInfo.followNum }}</div>
        <span class="pd-t-20">关注的人</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "userInfoCard",
  props: {
    userInfoCard: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      fit: "fill",
      userInfo: this.userInfoCard
    };
  }
};
</script>
