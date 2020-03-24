<template>
  <div class="container">
<!--    <h1>购物车</h1><br/>-->
<!--    卡片-->
    <div class="mui-card" v-for="(item,i) in houseinfo"  :key="item.id">
        <div class="mui-card-content">
        <div class="mui-card-content-inner">
<!--           卡片-->
<!--          selected按钮-->
          <mt-switch @change="savechange(item.id,$store.getters.getselected[item.id])" v-model="$store.getters.getselected[item.id]"></mt-switch>
<!--        商品缩略图  -->
          <img :src="item.img_arr[0]" width="100px" height="100px">
<!--         标题、单价、数量、删除-->
          <div class="showtt">
            <h1>{{item.title}}</h1>
            <div class="showinfo">
              <span class="price">{{item.sale_price}}</span>
              <numbox :initnum="$store.getters.getstateobj[item.id]"  :houseid="item.id"></numbox>
<!--            <div class="mui-numbox"  >-->
<!--              <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>-->
<!--              <input class="mui-input-numbox" data-numbox-min="1" onchange="getchange(item.id)" :ref="item.id" type="number" :value="$store.getters.getstateobj[item.id]"    readonly />-->
<!--              <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>-->
<!--            </div>-->
              <a href="#" @click.prevent="delhouse(item.id,i)">删除</a>
            </div>
          </div>
        </div>
      </div>
    </div>

<!--    结算区-->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div>
            <p>总计(不含运费)</p>
            <p>已勾选商品<span class="red">{{$store.getters.getallCountandAmount.count}}</span>件,总价:<span class="red">{{$store.getters.getallCountandAmount.amount}}</span></p>
          </div>
          <div>
            <mt-button type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>




  </div>
</template>

<script>
  import numbox from "./numbox"
  import mui from "../../node_modules/mui-master/dist/js/mui.js"
  import axios from "axios"
    export default {
        name: "index",
      data:function()
      {
        return {
          houseinfo:[],

        }
      },
      created() {
          this.getshopcarinfo();
      },
      mounted() {
          mui(".mui-numbox").numbox();
      },
     components:{
          numbox
     }
     ,
      methods:{
          savechange(id,v)
          {
            let obj={id:id,selected:v};
            this.$store.commit("changeselected",obj)
          },
         delhouse(id,index)
         {
              this.houseinfo.splice(index,1);
              this.$store.commit("delhouse",id)
         },

         getshopcarinfo()
         {
           let ids=[]
           // if(this.$store.state.car.length==0)
           // {
           //   if(localStorage.getItem("car").length!=0)
           //   {
           //       this.$store.state.car=localStorage.getItem("car")
           //   }
           //   else
           //   {
           //     return;
           //   }
           // }
           this.$store.state.car.forEach((item)=>{
             ids.push(item.id)
           })

            axios.get("http://libo2020.oicp.io/getshopcarinfo/"+ids.join(",")).then(res=>{
                 // console.log("res.data:",res.data)
                 this.houseinfo=res.data;
            })
         }
      }
    }
</script>

<style scoped lang="scss">

    .red
    {
      color: red;
      font-weight: bold;
      font-size: 15px;
    }

    .container
    {
      background-color: #eee;
      display: flex;
      flex-flow: column;
      /*align-items: center;*/
      /*justify-content: center;*/

      .mui-card-content-inner
      {
        /*width: 90%;*/
        .showtt
        {



          display: flex;
          flex-flow: column wrap;
          .showinfo{
               display: flex;

          }

        }
        img
        {
          height: 50px;
          width: 50px;
        }

        display: flex;
        justify-content: space-around;
        align-items: center;

        h1
        {
          font-size: 14px;

        }

      }


      h1{
        color: red;
      }
    }


</style>
