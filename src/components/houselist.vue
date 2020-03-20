<template>
      <div class="house-list-container">
<!--        <h1>这是房源列表页</h1>-->
<!--router-link方式导航-->
<!--             <router-link tag="div"  v-for="item in houses"  class="item-one" :to="'/index/houselist/houseinfo/'+item.id" href="javascript:;">-->
<!--             <img :src="item.img_arr[0]" alt="">-->
<!--             <h1>{{item.title}}</h1>-->
<!--             <p>{{item.abstract}}</p>-->
<!--             </router-link>-->

        <div  v-for="item in houses"  class="item-one" :to="'/index/houselist/houseinfo/'+item.id" @click="tohouse(item.id)">
          <img :src="item.img_arr[0]" alt="">
          <h1>{{item.title}}</h1>
          <p>{{item.abstract}}</p>
        </div>

      </div>
</template>

<script>
  import axios from "axios"
    export default {
        name: "houselist",
      data:function () {
     return {houses:[]}
      },
      created() {
          this.gethouseinfo();
      },
      methods:{

          tohouse(id)
          {
            this.$router.push("/index/houselist/houseinfo/"+id)
          },
            gethouseinfo()
            {
              axios.get("http://libo2020.oicp.io/gethouseinfo").then(res=>{
                console.log("778899")
                    this.houses=res.data;
              })

            }
      }
    }
</script>

<style lang="scss">
  .house-list-container
  {
    with:100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: left;

    .item-one
    {
      width: 49%;
      img
      {
        width: 100%;
      }
    }

  }
</style>
