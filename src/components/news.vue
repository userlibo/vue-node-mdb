<template>
  <div>
    <h1>新闻列表页</h1>
<!--    新闻列表-->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media"  v-for="item in newslist">
        <router-link :to="'/index/news/cnt/'+item.id"   href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="item.news_img_url">
          <div class="mui-media-body">
            <h1>{{item.news_title}}</h1>
            <p class='mui-ellipsis'>{{item.news_abstract}}</p>
            <p><span>{{item.create_time}}</span> <span></span></p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from "axios"
    export default {
        name: "news",
      data:function () {
      return {newslist:[]}
      },
      created(){
          this.getdata();
      },
      methods:{
          getdata()
          {
              axios.get("http://libo2020.oicp.io/getnewslist").then(res=>{
                // console.log(res)
                this.newslist=res.data;
              },err=>{
                console.log("新闻列表数据加载错误...")
              })

          }
      }
    }
</script>

<style scoped>

</style>
