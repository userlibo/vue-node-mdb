<template>
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input class="mui-input-numbox" readonly ref="input" @change="getchange" type="number" v-model="selectedcount" />
    <button class="mui-btn mui-btn-numbox-plus" type="button" >+</button>
  </div>
</template>

<script>
  import mui from "../../node_modules/mui-master/dist/js/mui.js"
    export default {
      name: "numbox",
      props:["initnum","houseid"],
      data:function()
      {
        return {
          selectedcount:this.initnum
        }
      },
      mounted() {
        mui(".mui-numbox").numbox();
      },
      methods:{
        getchange:function ()
        { let v=this.$refs.input.value;
          let obj={id:this.houseid,count:parseInt(v)}
          console.log("obj:",obj)
          this.$store.commit("getchange",obj);
        }
      }
    }
</script>

<style scoped>

</style>
