// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'
import Vue from "vue";
import mint from "mint-ui";
Vue.use(mint)
import { Header} from 'mint-ui';
// import { Button } from 'mint-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import App from './App.vue';
Vue.use(ElementUI);
// Vue.component(Button.name, Button);
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui';
import { Switch } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Switch.name, Switch);
import "./css/myapp.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "mui-master/dist/css/mui.min.css"
import "mui-master/dist/js/mui.min.js"
import "mui-master/dist/css/icons-extra.css"
Vue.config.productionTip = false

import Vuex from "vuex"
Vue.use(Vuex)

let car =JSON.parse(localStorage.getItem("car")||"[]")
let store=new Vuex.Store({
  state:{
    car:[]
  },
  mutations:{
    changeselected(state,obj)
    {
        state.car.some(item=>{
          if(item.id==obj.id)
          {
            item.selected=obj.selected;
          }
        })
      localStorage.setItem("car",JSON.stringify(car))
    },
    delhouse(state,id)
    {
           state.car.some((item,i)=>{
             if(item.id==id)
             {
               state.car.splice(i,1)
               return true;
             }
           })

      localStorage.setItem("car",JSON.stringify(state.car))
    }
    ,
    getchange(state,obj)
    {
          state.car.some(item=> {
            if (item.id==obj.id)
            {
               item.count=obj.count;
               return true;
            }
          })
         localStorage.setItem("car",JSON.stringify(state.car));
    }
    ,
    addcar(state,obj)
    {
      let flag=state.car.some(function(item)
      {
           if(item.id==obj.id)
           {
             item.count+=parseInt(obj.count);
             return true;
           }
      });

      if(flag==false) {
        state.car.push(obj);
      }
      localStorage.setItem("car",JSON.stringify(state.car));
    }
  },
  getters:{
      getselected(state)
      {
            let o={};
            state.car.forEach((item)=>{
                o[item.id]=item.selected;
            })
          return o;
      },
     getAllCount(state)
     {
       let count=0;
       state.car.forEach(item=>{
         count+=item.count;
       })
       return count;
     }
     ,
     getallCountandAmount(state)
     {
       let count=0;
       let Amount=0;
          state.car.forEach(item=>{
            if(item.selected==true)
            {
              count+=item.count;
              Amount+=item.count*item.price;
            }
          })
       let obj={count:count,amount:Amount};
          return obj;
     }
    ,
     getstateobj(state)
     {
         let obj={};
         state.car.forEach(item=>{
              obj[item.id]=item.count;
         })
         return obj;
     }

  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
