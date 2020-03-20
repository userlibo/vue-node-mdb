<!--<template>-->
<!--  <div>-->
<!--    <h1>这是hilibo.vue组件</h1>-->
<!--    <h1>jiayoulibo!!!</h1>-->
<!--    <table>-->
<!--      <tr v-for="(item,index) in info"  :key="item.name" >-->
<!--        <td>{{item.name}}</td>-->
<!--        <td>{{item.age}}</td>-->
<!--        <td>{{item.slogn}}</td>-->
<!--      </tr>-->
<!--    </table>-->
<!--    <mt-progress :value="60">-->
<!--      <div slot="start">0%</div>-->
<!--      <div slot="end">100%</div>-->
<!--    </mt-progress>-->
<!--    <div class="mui-content">-->
<!--      <ul class="mui-table-view">-->
<!--        <li class="mui-table-view-cell">-->
<!--          <span></span>-->
<!--          <div class="mui-switch mui-active">-->
<!--            <div class="mui-switch-handle"></div>-->
<!--          </div>-->
<!--        </li>-->
<!--        <li class="mui-table-view-cell">-->
<!--          <span></span>-->
<!--          <div class="mui-switch">-->
<!--            <div class="mui-switch-handle"></div>-->
<!--          </div>-->
<!--        </li>-->
<!--        <li class="mui-table-view-cell">-->
<!--          <span></span>-->
<!--          <div class="mui-switch mui-switch-mini mui-active ">-->
<!--            <div class="mui-switch-handle"></div>-->
<!--          </div>-->
<!--        </li>-->
<!--        <li class="mui-table-view-cell">-->
<!--          <span></span>-->
<!--          <div class="mui-switch mui-switch-mini">-->
<!--            <div class="mui-switch-handle"></div>-->
<!--          </div>-->
<!--        </li>-->
<!--        <li class="mui-table-view-cell">-->
<!--          <span></span>-->
<!--          <div class="mui-switch mui-switch-blue mui-active">-->
<!--            <div class="mui-switch-handle"></div>-->
<!--          </div>-->
<!--        </li>-->
<!--        <li class="mui-table-view-cell">-->
<!--          <span></span>-->
<!--          <div class="mui-switch mui-switch-blue">-->
<!--            <div class="mui-switch-handle"></div>-->
<!--          </div>-->
<!--        </li>-->
<!--        <li class="mui-table-view-cell">-->
<!--          <span></span>-->
<!--          <div class="mui-switch mui-switch-blue mui-switch-mini mui-active">-->
<!--            <div class="mui-switch-handle"></div>-->
<!--          </div>-->
<!--        </li>-->
<!--        <li class="mui-table-view-cell">-->
<!--          <span></span>-->
<!--          <div class="mui-switch mui-switch-blue mui-switch-mini">-->
<!--            <div class="mui-switch-handle"></div>-->
<!--          </div>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->


<!--<script>-->
<!--  // import { Progress } from 'mint-ui';-->
<!--  // Vue.component(Progress.name, Progress)-->
<!--  import { Toast } from 'mint-ui';-->
<!--  import axios from "axios";-->
<!--  export default {-->
<!--    name:"",-->
<!--      data:function () {-->
<!--        return {-->
<!--          info:Array(2),-->
<!--          tinstance:null-->
<!--        }-->
<!--      },-->
<!--      methods:{-->
<!--          getdata()-->
<!--          {-->
<!--            axios.get("http://192.168.0.102:3002/get_user_info").then(-->
<!--              res=>{-->
<!--                // console.log(res);-->
<!--              this.info=res.data;-->
<!--              },err=>{-->
<!--                console.log(err);-->
<!--              }-->
<!--            );-->
<!--          },-->
<!--        show()-->
<!--        {-->
<!--          this.tinstance=Toast({-->
<!--            message: 'jiayoulibo nishi1zuibangde',-->
<!--            position: 'top',-->
<!--            duration: 100,-->
<!--            iconClass:-->
<!--              "glyphicon glyphicon-euro",-->
<!--            className:"myapp"-->
<!--          });-->
<!--        }-->
<!--      },-->
<!--      mounted() {-->
<!--        this.show();-->
<!--        this.getdata();-->
<!--        // setTimeout(()=>{-->
<!--        //   this.tinstance.close();-->
<!--        // },6000)-->
<!--      },-->
<!--    created()-->
<!--    {-->

<!--    }-->
<!--    }-->
<!--</script>-->

<!--<style scoped lang="css">-->

<!--    tr-->
<!--    {-->
<!--      color:red;-->
<!--    }-->





<!--</style>-->
