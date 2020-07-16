<template>
  <div>
    <header-list />
    <div class="content">
      <el-row class="mg-t-20">
        <el-col :span="17" class="pd-20 bg-white mg-r-20">
          <detail-header :detailHeader="detailTop" />
          <div class="article-cont">
            <div>
              <img src="../../assets/logo.png" alt="" />
            </div>
            <p class="section">
              日前从北京市人力资源和社会保障局获悉，第四届“中国创翼”创业创新大赛北京市选拔赛暨第三届“创业北京”创业创新大赛将正式启动报名，此次大赛将按照全市统一报名、区级选拔赛、市级选拔赛、市级决赛四个阶段进行。报名阶段从5月15日开始，截止到6月15日，持续一个月。
            </p>
            <p class="section">
              据悉，本届大赛以“创响新时代
              共圆中国梦”为主题，由市人力社保局、市发改委等8部门联合主办，由北京市创业指导中心、启迪之星承办。将以创新引领创业、创业带动就业、助力脱贫攻坚为重点评价指标，进一步营造北京市创新创业良好氛围。
            </p>
            <p class="section">
              据了解，本次大赛分为主体赛和创业扶贫专项赛。主体赛分为创新项目组和创业项目组两个组别。创新项目组面向未工商注册的创业团队和注册1年以内的初创企业;创业项目组面向工商注册1至5年的创业企业。创业扶贫专项赛，重点支持对口扶贫支援地区创业项目。
            </p>
          </div>
          <el-divider />
          <div class="pd-tb-10 enclosure">
            <div class="row just-between-align-center">
              <div class="left">
                <i class="el-icon-paperclip"></i>
                <span class="pd-l-10">附件5个（150MB）</span>
                |
                <span class="down">打包下载</span>
              </div>
              <div class="right">已有93人下载</div>
            </div>
            <div class="pd-t-10">
              <ul class="enclosure-ul clearfix">
                <li class="fl">
                  <div class="row just-start-align-center">
                    <div class="picture">
                      <img src="../../assets/logo.png" alt="" />
                    </div>
                    <div class="pd-l-10 pic-right">
                      <div class="name">开发者社区.png</div>
                      <span class="size">554KB</span>
                      <i class="el-icon-download download-icon"></i>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <el-divider />
          <div class="comment-box">
            <div class="pd-tb-20">
              <span class="sum">1232</span>
              条评论
            </div>
            <el-divider />
            <div>
              <div class="pd-b-10">
                <div class="row just-start">
                  <div class="head-img pd-t-10">
                    <img src="../../assets/logo.png" alt="" />
                  </div>
                  <div>
                    <div class="pd-t-10 com-top">
                      <span class="name">朱敏敏</span>
                      <span class="time">15分钟前</span>
                    </div>
                    <div class="pd-t-10 com-center">
                      评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容
                    </div>
                    <div class="pd-t-10 com-bottom">回复</div>
                  </div>
                </div>
                <div class="row just-start reply">
                  <div class="head-img pd-t-10">
                    <img src="../../assets/logo.png" alt="" />
                  </div>
                  <div>
                    <div class="pd-t-10 com-top">
                      <span class="name">朱敏</span>
                      <span class="time">15分钟前</span>
                    </div>
                    <div class="pd-t-10 com-center">
                      <span class="reply-txt">回复</span>
                      <span class="name">朱敏敏</span>
                      <span>:</span>
                      评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容
                    </div>
                    <div class="pd-t-10 com-bottom">回复</div>
                  </div>
                </div>
              </div>
              <el-divider />
            </div>
            <div>
              <pagination
                v-show="total > 0"
                :total="total"
                :page.sync="page"
                :limit.sync="size"
                @pagination="search"
              />
            </div>
            <div class="com-textarea">
              <div class="title">添加一条评论</div>
              <el-input
                type="textarea"
                placeholder="请尽量使自己的评论有价值哦"
                maxlength="200"
                show-word-limit
                :autosize="{ minRows: 4, maxRows: 6 }"
              />
              <div class="txt-right pd-t-10 release-btn">
                <el-button size="mini" type="primary">发布</el-button>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <user-info-card :userInfoCard="userInfo" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import img from "../../assets/logo.png";
import head from "@/components/header";
import pagination from "@/components/pagination.vue";
import detailHeader from "@/views/components/detailHeader.vue";
import userInfoCard from "@/views/components/userInfoCard.vue";
export default {
  components: {
    "header-list": head,
    detailHeader,
    userInfoCard,
    pagination
  },
  data() {
    return {
      detailTop: {
        title: "作为程序员，你可开发哪些有趣项目？",
        time: "2020-07-02 17:18",
        views: "34",
        comments: "55",
        type: ["移动开发", "物联网", "开源硬件", "软件工程"],
        author: {
          img: img,
          name: "张燕"
        }
      },
      userInfo: {
        img: img,
        name: "张三",
        articleNum: "24",
        fansNum: "343",
        followNum: "2343"
      },
      total: 10,
      page: 1,
      size: 20
    };
  },
  created() {
    this.search();
  },
  methods: {
    search() {
      return [
        {
          title: "11111111",
          name: "233333"
        },
        {
          title: "11111111",
          name: "233333"
        },
        {
          title: "11111111",
          name: "233333"
        },
        {
          title: "11111111",
          name: "233333"
        }
      ];
    }
  }
};
</script>
