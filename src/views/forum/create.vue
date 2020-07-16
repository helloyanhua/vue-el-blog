<template>
  <div>
    <header-list></header-list>
    <el-main class="content">
      <div class="bg-white pd-20">
        <div>
          <el-input
            type="text"
            placeholder="请输入标题"
            maxlength="100"
            show-word-limit
          />
          <div style="height:582px">
            <editor
              :content="content"
              :serverUrl="serverUrl"
              @textChange="textChange"
            />
          </div>
          <div>
            <el-form
              ref="form"
              :model="form"
              label-width="120px"
              :label-position="labelPosition"
            >
              <el-form-item label="技术论坛分类:" class="pd-t-10" required>
                <el-checkbox-group v-model="checkedClassify">
                  <el-checkbox
                    v-for="item in classify"
                    :label="item"
                    :key="item"
                    >{{ item }}</el-checkbox
                  >
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="是否显示:" class="pd-t-10" required>
                <el-radio v-model="radio" label="1">显示</el-radio>
                <el-radio v-model="radio" label="2">隐藏</el-radio>
              </el-form-item>
              <el-form-item label="附件上传:" class="pd-t-10">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                >
                  <el-button
                    size="small"
                    type="primary"
                    plain
                    class="el-icon-circle-plus-outline"
                    >添加附件</el-button
                  >
                  <span class="warning-txt"
                    >（温馨提示：上传附件的数量不能超过5个，每个附件的大小不能超过50M）</span
                  >
                  <div slot="tip" class="el-upload__tip">
                    <div class="enclosure">
                      <div class="row just-between-align-center">
                        <div class="left">
                          <i class="el-icon-paperclip"></i>
                          <span class="pd-l-10">已上传6个附件，共36M</span>
                        </div>
                      </div>
                      <div>
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
                  </div>
                </el-upload>
              </el-form-item>
              <el-form-item label="大文件附件上传:" class="pd-t-10">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                >
                  <el-button
                    size="small"
                    type="primary"
                    plain
                    class="el-icon-circle-plus-outline"
                    >添加附件</el-button
                  >
                  <span class="warning-txt"
                    >（温馨提示：最多只能包含一个大文件附件，大文件附件的大小不能超过500M）</span
                  >
                  <div slot="tip" class="el-upload__tip">
                    <div class="enclosure">
                      <div>
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
                  </div>
                </el-upload>
              </el-form-item>
            </el-form>
          </div>
          <div class="pd-t-20 align">
            <el-button type="primary" size="small">发布至技术论坛</el-button>
            <el-button plain size="small" @click="toBack">返回</el-button>
          </div>
        </div>
      </div>
    </el-main>
  </div>
</template>
<script>
import head from "@/components/header";
import Editor from "@/components/editor.vue";
const classifyOptions = ["移动开发", "前端开发", "游戏开发", "编程语言"];
export default {
  name: "forumCreate",
  components: {
    "header-list": head,
    Editor
  },
  data() {
    return {
      content: "",
      serverUrl: "",
      form: {},
      checkedClassify: ["前端开发", "移动开发"],
      classify: classifyOptions,
      labelPosition: "left",
      radio: "1"
    };
  },
  methods: {
    textChange(val) {
      this.content = val;
    },
    toBack() {
      this.$router.push({ path: "/" });
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    }
  }
};
</script>
<style scoped>
.el-form-item {
  margin: 0;
}
.warning-txt {
  color: red;
}
.enclosure-ul li {
  line-height: 20px;
}
</style>
