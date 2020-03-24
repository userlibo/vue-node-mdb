<template>
  <div class="mui-numbox" data-numbox-step="1" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input class="mui-input-numbox" ref="input1" type="number" value="1" />
    <button class="mui-btn mui-btn-numbox-plus" type="button" @click="show">+</button>
  </div>
</template>

<script>
  import mui from "../../node_modules/mui-master/dist/js/mui.js"
    export default {
      name: "numbox2",
      // props:["initnum","houseid"],
      data:function()
      {
        return {
          count:1
        }
      },
      mounted() {
        mui(".mui-numbox").numbox();
      },
      methods:{
         show()
         {
           console.log("123")
         },
        getchange()
        {
          // this.count=;
          this.count=this.$refs.input1.value
          console.log("count:",this.count)
          this.$emit("getcount",this.count)
        }

        // getchange:function ()
        // { let v=this.$refs.input.value;
        //   let obj={id:this.houseid,count:parseInt(v)}
        //   console.log("obj:",obj)
        //   this.$store.commit("getchange",obj);
        // }
      }
    }
</script>

<style scoped>

</style>
