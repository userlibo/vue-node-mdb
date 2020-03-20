<template>
       <div class="houseinfo-container">
<!--    轮播图-->

         <div class="mui-card">
           <div class="mui-card-content">
             <div class="mui-card-content-inner">
<!--               <mt-swipe :auto="4000" class="mtswipe123">-->
<!--                 <mt-swipe-item v-for="item in img_arr" :key="item">-->
<!--                   <img :src="item">-->
<!--                 </mt-swipe-item>-->
<!--               </mt-swipe>-->
               <swiper :img_arr="img_arr" isfull="true"></swiper>
             </div>
           </div>
         </div>
         <transition
         @before-enter="beforeEnter"
         @enter="enter"
         @after-enter="afterEnter"
         >
      <div class="ball" v-if="flag" ref="ball">
      </div>
         </transition>


<!--         卡片信息-->
         <div class="mui-card">
           <div class="mui-card-header">{{housedata.title}}</div>
           <div class="mui-card-content">
             <div class="mui-card-content-inner">
               <p class="price">市场价:<del>{{housedata.market_price}}万元</del>&nbsp;&nbsp;销售价:<span class="sale-price">{{housedata.sale_price}}</span>万元</p>
                <div style="text-align: left">订购数量:
<!--                mui的数字输入框-->
               <div class="mui-numbox">
                 <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                 <input class="mui-input-numbox" type="number" value="1" />
                 <button class="mui-btn mui-btn-numbox-plus" type="button" >+</button>
               </div>
                </div>
               <p style="text-align: left"> <mt-button type="primary" size="small">立即购买</mt-button> <mt-button type="danger"size="small" @click="getshowball">加入购买</mt-button></p>
             </div>
           </div>
         </div>

         <div class="mui-card">
           <div class="mui-card-header">楼盘详情</div>
           <div class="mui-card-content">
             <div class="mui-card-content-inner">
               <p>剩余套数:{{housedata.stock}}</p>
               <p class="house-abstract">{{housedata.abstract}}</p>
             </div>
           </div>
           <div class="mui-card-footer">
               <p><mt-button  class="btn-item" type="primary" size="large" plain @click="godesc(housedata.id)">图文介绍</mt-button></p>
               <p><mt-button type="danger" size="large" plain>评论</mt-button></p>
           </div>
         </div>

       </div>
</template>

<script>
  import mui from "../../node_modules/mui-master/dist/js/mui.js"
  import swiper from "./swiper"
  import axios from "axios"
    export default {
        name: "houseinfo",
      data:function () {
         return {
           flag:false,
           id:this.$route.params.houseid,
           housedata:"",
           img_arr:[],
           max:""

         }
      },
      created() {
          this.gethouseinfo();
      },
      mounted() {
          mui(".mui-numbox").numbox();

          mui(".mui-numbox").numbox().setOption("min",1);
      }
      ,
      watch:{
          "max":function(nv,ov)
          {
            console.log("max:",nv)
            mui(".mui-numbox").numbox().setOption("max",nv);
          }
      },
      methods:{

          getshowball()
          {

           this.flag=true;

          },
          beforeEnter(el)
          {
              el.style.transform="translate(0,0)"
          },
           enter(el,done)
           {

             let ballxy=this.$refs.ball.getBoundingClientRect();
             let badgexy=document.getElementById("badge").getBoundingClientRect();
             let x=badgexy.left-ballxy.left;
             let y=badgexy.top-ballxy.top;
             console.log("x:",x,"y:",y);
              el.offsetWidth;
              el.style.transform=`translate(${x}px,${y}px)`;
              el.style.transition="all 0.5s cubic-bezier(.27,-0.44,.79,.39)"
              done()
           },
            afterEnter()
                {
                this.flag=!this.flag;
            },
          godesc(id)
          {
            this.$router.push({name:"housedesc",params:{id}})
          },
          gethouseinfo()
          {
               console.log(this.$route.params.houseid)
               axios.get("http://libo2020.oicp.io/gethouse_single/"+this.id).then(res=>{
                  console.log(res.data)
                 this.housedata=res.data;
                   this.img_arr=res.data.img_arr;
                   this.max=parseInt(res.data.stock);
                   console.log(this.img_arr)
               })
          }
      },
      components:{
          swiper
      }
    }
</script>

<style lang="scss">
  .houseinfo-container
  {
    padding: 10px;
    background-color: #eee;
    margin-bottom: 40px;

    .ball
    {
      width: 15px;
      height: 15px;
      border-radius:50%;
      background-color: red;
      position: relative;
      top:125px;
      left:142px;
      z-index: 99;
    }


    .price {
      text-align: left;
      font-family: "Microsoft YaHei UI";
      color: black;

      .sale-price
      {
        color: red;
        font-size: 14px;
        font-weight: bold;
      }

    }
    .mui-card-content-inner
    {
      text-align: left;
    }

    .house-abstract
    {
      text-align: left;
    }
    .mui-card-footer
    {
      display: block;

      button
      {
        width: 100%;
      }
    }


  }
</style>
