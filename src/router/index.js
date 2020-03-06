import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hi from '@/components/hilibo'
import show from '@/components/show'
import index from '@/components/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'jiayoulibo',
      component: index
    },
    {
      path:"/show",
      name:"show",
      component:show
    }
  ]
})
