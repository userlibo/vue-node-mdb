<template>
  <div class="addnews-container">
     <form onsubmit="return false">
       <h1>添加新闻资讯</h1>
       <label for="">新闻标题</label>:<input v-model="news_title" type="text" placeholder="请输入标题">
       <label for="">摘要</label>:<input type="text" v-model="news_abstract" placeholder="请输入摘要">

<!--  添加图片-->
       <el-upload
         class="upload-demo"
         action="http://libo2020.oicp.io/saveimg"
         :limit="1"
         :http-request="upload"
       >

       <el-button size="small" type="primary">点击上传</el-button>
         <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
       </el-upload>

<!--       富文本-->
       <h3>详细内容</h3>
       <quill-editor v-model="news_cnt"></quill-editor>
       <input type="submit" value="提交数据" class="primary" @click="savenewslist">
     </form>
     </div>
</template>

<script>
  import axios from "axios"
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import { quillEditor } from 'vue-quill-editor'
    export default {
      name: "addnews",
      data: function () {
       return {
         news_title:"",
         news_abstract:"",
         news_cnt:"",
         news_img_url:"",
         create_time:""
       }
      },
      methods: {
        savenewslist() {
          console.log("123");
          let data = {
              "news_title": this.news_title,
              "news_abstract": this.news_abstract,
              "news_cnt": this.news_cnt,
              "news_img_url": this.news_img_url,
              "create_time": new Date()
            };
          axios({
            url: "http://libo2020.oicp.io/savenewslist",
            method: "post",
            data: data,
            // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).then(res => {
            console.log(res.data)
              this.news_title="";
              this.news_abstract="";
              this.news_cnt="";
              // this.news_img_url="";
              this.create_time="";
          })
        },



        upload(f) {
          let formData = new FormData()
          formData.append('file', f.file)

          axios({
            method: "POST",
            url: 'http://libo2020.oicp.io/saveimg',
            data: formData
          }).then(res => {
            //上传成功之后 显示图片
            // this.imageUrl = res.data.url
            // console.log(res)
            console.log(res.data.url)
            this.news_img_url = res.data.url
          })

        },

      },
      components: {
        quillEditor
      }
    }
</script>

<style  lang="scss">
  .addnews-container {
    margin-bottom: 80px;
    div.ql-editor.ql-blank {
      min-height: 300px;
    }

  }
</style>
