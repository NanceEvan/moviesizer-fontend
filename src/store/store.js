import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import cookie from '../assets/js/cookie'

Vue.use(Vuex)

const userInfo = {
  name: cookie.getCookie('name') || '',
  token: cookie.getCookie('token') || ''
}

const state = {
  userInfo
}

let store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
export default store
