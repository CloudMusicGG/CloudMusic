/*
 * @Author: rosalee
 * @Date: 2019-11-08 18:06:17
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-12 21:27:48
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import sidePage from '@/pages/sidePage'
import myPage from '@/pages/myPage'
import myInfoPage from '@/pages/myInfoPage'
import searchpage from '@/pages/searchpage'
import albumPage from '@/pages/albumPage'
import musicplay from '@/pages/musicplay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index/:id',
      name: 'index',
      component: index,
      props:true
    },
    {
      path: '/sidePage',
      name: 'sidePage',
      component: sidePage
    },
    {
      path: '/myPage',
      name: 'myPage',
      component: myPage,
      props:true
    },
    {
      path: '/myInfoPage/:telephoneNum',
      name: 'myInfoPage',
      component: myInfoPage,
      props:true
    },
    {
      path: '/searchpage',
      name: 'searchpage',
      component: searchpage
    },
    {
      path: '/albumPage/:id',
      name: 'albumPage',
      component: albumPage,
      props:true
    },
    {
      path: '/musicplay/:id',
      name: 'musicplay',
      component: musicplay,
      props:true
    }
  ]
})
