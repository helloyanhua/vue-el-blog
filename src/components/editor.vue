<template>
  <div>
    <el-upload
      class="avatar-uploader"
      :action="url"
      name="img"
      :headers="headers"
      :show-file-list="false"
      :on-success="uploadSuccess"
      :on-error="uploadError"
      :before-upload="beforeUpload"
      accept=".jpg,.jpeg,.png,.gif,.bmp,.JPG,.JPEG,.PBG,.GIF,.BMP"
      :limit="5"
    >
    </el-upload>
    <div v-loading="quillUpdateImg">
      <quill-editor
        ref="myQuillEditor"
        @change="onEditorChange($event)"
        v-model="value"
        :options="editorOption"
        style="height:500px"
      ></quill-editor>
    </div>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.snow.css";
const toolOptions = [
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],
  [{ header: 1 }, { header: 2 }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ direction: "rtl" }],
  [{ size: ["small", false, "large", "huge"] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],
  ["clean"],
  ["link", "image", "video"]
];
const handlers = {
  image: function(value) {
    if (value) {
      document.querySelector(".avatar-uploader input").click();
    } else {
      this.quill.format("image", false);
    }
  }
};
export default {
  name: "Editor",
  components: {
    quillEditor
  },
  props: {
    content: {
      type: String,
      default: ""
    },
    serverUrl: {
      type: String,
      required: true,
      default: ""
    },
    token: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      quillUpdateImg: false,
      url: this.serverUrl,
      headers: this.token,
      value: this.content,
      editorOption: {
        placeholder: "",
        theme: "snow", // 主题
        modules: {
          toolbar: {
            container: toolOptions, // 工具栏选项
            handlers: handlers // 事件重写
          }
        }
      }
    };
  },
  methods: {
    onEditorChange({ html }) {
      this.value = html;
      this.$emit("textChange", html);
    },
    // 上传图片前
    beforeUpload(file) {
      const size = file.size / 1024;
      if (size > "2000") {
        //超过2000kb，拦截
        this.$message.error("上传图片大小不能超过 2000KB");
      }
      this.quillUpdateImg = true;
    },
    // 上传图片成功
    uploadSuccess(res) {
      let quill = this.$refs.myQuillEditor.quill;
      if (res) {
        // 获取光标所在位置
        let length = quill.getSelection().index;
        // 插入图片  res.info为服务器返回的图片地址
        quill.insertEmbed(length, "image", res);
        // 调整光标到最后
        quill.setSelection(length + 1);
      } else {
        this.$message.error("图片插入失败");
      }
      this.quillUpdateImg = false;
    },
    // 上传图片失败
    uploadError() {
      this.quillUpdateImg = false;
      this.$message.error("图片插入失败");
    }
  }
};
</script>
