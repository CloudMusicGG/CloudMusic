/*
 * @Author: rosalee
 * @Date: 2019-11-09 16:52:16
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-09 19:49:13
 * @Description: 
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

Axios.defaults.baseURL = '/api/'; //把axios的请求基本路径改为api，以后就不需要在每个axios请求里写api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
