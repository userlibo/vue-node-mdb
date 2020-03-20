<template>
    <div class="housedesc-container">
      <h1>{{housedata.title}}</h1>
      <hr>
      <div class="img_container">
        <img v-for="item in img_arr" :key="item"  :src="item" alt="">
      </div>
        <div>
        {{housedata.abstract}}
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: "housedesc",
        data:function()
        {
          return {
            id:this.$route.params.id,
            housedata:"",
            img_arr:[]
          }
        },
        created()
        {
          this.getdata();
        },
        methods:{
                   getdata()
                   {
                     console.log("id123:",this.$route.params.id)
                     axios.get("http://libo2020.oicp.io/gethouse_single/"+this.id).then(res=>{
                       console.log(res.data)
                       this.housedata=res.data;
                       this.img_arr=res.data.img_arr;
                       console.log(this.img_arr)
                     })
                   }
        }
    }
</script>

<style lang="scss">
   .housedesc-container
   {
     margin-bottom: 80px;
     padding: 10px;
     .img_container img
     {
       width: 100%;
       height: auto;
     }
   }
</style>
