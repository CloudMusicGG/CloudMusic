/*
 * @Author: rosalee
 * @Date: 2019-11-08 18:06:17
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-13 11:16:37
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
import registrationpag from '@/pages/registrationpag'
import signInpag from '@/pages/signInpag'

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
      name: 'indexId',
      component: index,
      props:true
    },
    {
      path: '/index',
      name: 'index',
      component: index
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
    },
    {
      path: '/registrationpag',
      name: 'registrationpag',
      component: registrationpag
    },
    {
      path: '/signInpag',
      name: 'signInpag',
      component: signInpag
    }
  ]
})
