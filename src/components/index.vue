<template>
  <div class="container">
<!--   轮播图-->
    <mt-swipe :auto="4000" class="sw_index">
      <mt-swipe-item v-for="(item,index) in index_swipe_imgs" :key="index"><img :src=item  width="375px" height="250px"></mt-swipe-item>
    </mt-swipe>

<!--    九宫格-->
    <div class="mui-content jiugongge">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻资讯</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
          <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
          <div class="mui-media-body">图片分享</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div></a></li>
      </ul>
    </div>

  </div>
</template>

<script>
  import axios from "axios";
    export default {
        name: "index",
        data:function()
        {
          return {index_swipe_imgs:Array(3)}
        },
      created() {
          this.getdata();
      },
      methods:{
          getdata()
          {
            axios.get("http://libo2020.oicp.io/get_index_swipe_img_url").then(res=>{
                    // console.log(res.data)
              this.index_swipe_imgs=res.data.img_urls;
            },err=>{

              if(err)
              {
                console.log("index页录播图获取数据错误...")
              }
            })
          }
        }
    }
</script>

<style scoped lang="scss">

    .container
    {
      background-color: #fff;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: center;
      h1{
        color: red;
      }
      .sw_index
      {
        width: 375px;
        height: 250px;
      }

      .mui-content
      {
        width: 100%;
        background-color: #fff;

        //去掉九宫格的边框
        .mui-table-view.mui-grid-view.mui-grid-9{
          background-color: #fff;
          border: none;
          .mui-table-view-cell
          {
            border: none;
          }
        }


      }
    }


</style>
