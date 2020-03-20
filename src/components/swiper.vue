<template>
  <div class="swiper-container">
  <mt-swipe :auto="4000" :class="{swiper_css:'isfull'}">
    <mt-swipe-item v-for="item in img_arr" :key="item">
      <img :src="item">
    </mt-swipe-item>
  </mt-swipe>
  </div>
</template>

<script>
    export default {
        name: "swiper",
        props:["img_arr","isfull"],
      data:function () {
         return {}
      },
      methods:{
      }
    }
</script>

<style lang="scss">
  .swiper-container {
      width: 100%;

  .mtswipe123 {
    width: 100%px;
    height: 600px;
  }

   .swiper_css
   {
     width: 100%;
     height: 250px;


     img
     {
       width: 100%;
       height: 100%;
     }


   }

  }
</style>
