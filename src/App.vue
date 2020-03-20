<template>
  <div id="app">
<!-- head区域-->
    <mt-header title="标题..." class="my-header">
<!--      <mt-button v-link="'/'" icon="back" slot="left">返回</mt-button>-->
<!--      <mt-button icon="more" slot="right"></mt-button>-->
    </mt-header>
<!--router-view区域-->
    <transition >
      <router-view></router-view>
    </transition>
<!--tabbar区域-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/index">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">9</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>

      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>


#app {
  background-color: #fff;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  overflow-x:hidden;
  /*display: flex;*/
  /*flex-flow: column nowrap;*/
  /*align-items: center;*/
  /*justify-content: space-around;*/
  .my-header{
      /*opacity: 0;*/
  }
  a{
    text-decoration: none;
  }

  .v-enter
  {
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to
  {
    opacity: 0;
    transform: translateX(-100%);
  }
  .v-leave-active
  {
    width: 100%;
    position: absolute;
  }

  .v-enter-active,.v-leave-active
  {
    transition:all 0.5s ease
  }


}

</style>
