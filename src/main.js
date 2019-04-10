// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import ElementUI from 'element-ui'
import store from './store/store'
// 全局加载resource拦截器
import './axios/'
import Axios from 'axios'
import Api from './api/index'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/icon.css'
import './assets/css/reset.css'
import './assets/css/style.css'

require('./mock/mock.js')

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.$http = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  Api,
  components: { App },
  template: '<App/>'
})
