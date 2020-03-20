<template>
    <div class="newscnt-container">
      <h1 class="title">{{newscnt.news_title}}</h1>
      <div class="content" v-html="newscnt.news_cnt">
      </div>
    </div>
</template>

<script>
  import axios from "axios"
    export default {
        name: "news_cnt",
        data:function()
        {
          return {newscnt:"",
          id:this.$route.params.newsid
        }
        },
        created() {
          console.log("加油 libo  新闻详情页");
          console.log(this.$route.params.newsid)
          // this.id=
          console.log(this.id)
          this.getcnt();
        },
        methods:{
          getcnt()
          {
            axios.get("http://libo2020.oicp.io/getnewscnt/"+this.id).then(res=>{
              this.newscnt=res.data;
              console.log(res.data)
            },err=>{
                 console.log(err.message)
            })
          }
        }
    }
</script>

<style scoped>
    .newscnt-container
    {
      margin-bottom: 40px;


      .content
      {
        /*margin: 10px 10px;*/
        width:100%;
        text-align: left;


        img{
          width:100%;
        }

      }


    }
</style>
