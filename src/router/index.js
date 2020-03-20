import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hi from '@/components/hilibo'
import show from '@/components/show'
import index from '@/components/index'
import member from '@/components/member'
import shopcar from '@/components/shopcar'
import search from '@/components/search'
import news from '@/components/news'
import fuwen from '@/components/fuwen'
import news_cnt from '@/components/news_cnt'
import houselist from '@/components/houselist'
import houseinfo from '@/components/houseinfo'
import housedesc from '@/components/housedesc'
import addnews from '@/components/admin/addnews'
import addhouseinfo from '@/components/admin/addhouseinfo'


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
    },
    {
      path:"/index/news",
      name:"news",
      component:news
    },
    {
      path:"/index/news/cnt/:newsid",
      name:"news_cnt",
      component:news_cnt
    },
    {
      path:"/fuwen",
      name:"fuwen",
      component:fuwen
    },
    {
      path:"/admin/addnews",
      component:addnews
    },
    {
      path:"/admin/addhouseinfo",
      component:addhouseinfo
    },
    {
      path:"/index/houselist",
      name:"houselist",
      component:houselist
    },
    {
      path:"/index/houselist/houseinfo/:houseid",
      name:"houseinfo",
      component:houseinfo
    }
    ,
    {
      path:"/index/houselist/houseinfo/housedesc",
      name:"housedesc",
      component:housedesc
    }
  ]
})
