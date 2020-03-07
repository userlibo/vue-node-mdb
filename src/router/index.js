import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hi from '@/components/hilibo'
import show from '@/components/show'
import index from '@/components/index'
import member from '@/components/member'
import shopcar from '@/components/shopcar'
import search from '@/components/search'


Vue.use(Router)

export default new Router({
  linkActiveClass:"mui-active",
  routes: [
    {
      path: '/index',
      name: 'jiayoulibo',
      component: index
    },
    {
      path: '/member',
      name: 'member',
      component: member
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: shopcar
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path:"/",
      redirect:"/index"
    }
  ]
})
