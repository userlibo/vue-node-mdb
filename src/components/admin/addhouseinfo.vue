<template>
     <div class="add-house-info">

<!--       添加图片-->
       <div>
         <el-upload
           class="upload-demo"
           action="http://libo2020.oicp.io/savehouseimgs"
           :limit="5"
           :http-request="upload"
         >
           <el-button size="small" type="primary">点击上传</el-button>
           <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
         </el-upload>
       </div>

<!--        填写信息  -->
       <div>
         <form method="post" onsubmit="return false">
         <label for="">标题:</label><input type="text" v-model="title" placeholder="请输入标题">
         <label for="">简介:</label><input type="text" v-model="abstract" placeholder="请输入简介">
         <label for="">售卖价格:</label><input type="text" v-model="sale_price" placeholder="请输入简介">
         <label for="">市场价格:</label><input type="text" v-model="market_price" placeholder="请输入简介">
         <label for="">库纯量:</label><input type="text" v-model="stock" placeholder="请输入简介">
         <input type="submit" class="primary" value="提交信息" @click="addinfo">
         </form>
       </div>


     </div>
</template>

<script>
  import axios from "axios"
    export default {
        name: "addhouseinfo",
        data:function () {
             return {
               img_arr:[],
               title:"",
               abstract:"",
               sale_price:"",
               market_price:"",
               stock:60
             }
        },
      methods:{
        addinfo()
        {

          let data = {
            "title": this.title,
            "abstract": this.abstract,
            "img_arr": this.img_arr,
            "sale_price":parseInt(this.sale_price),
            "market_price":parseInt(this.market_price),
            "stock":parseInt(this.stock)
          };
          axios({
            url: "http://libo2020.oicp.io/savehouseinfo",
            method: "post",
            data: data,
            // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).then(res => {
            console.log(res.data)
            this.title="";
            this.abstract="";
            this.img_arr=[];
            this.sale_price="";
            this.market_price="";
            this.stock=""
          })

        },

        upload(f) {
          let formData = new FormData()
          formData.append('file', f.file)

          axios({
            method: "POST",
            url: 'http://libo2020.oicp.io/savehouseimgs',
            data: formData
          }).then(res => {
            //上传成功之后 显示图片
            // this.imageUrl = res.data.url
            // console.log(res)
            // console.log(res.data)
            this.img_arr.push(res.data.url);
            console.log(res.data.url)
            // this.news_img_url = res.data.url
          })

        }
      }
    }
</script>

<style >
    .add-house-info{
      margin-bottom: 100px;
    }

</style>
