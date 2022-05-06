import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityInfo: {} ,// cityInfo
    totals:""
  },
  mutations: {
      uptCityInfo(state, val) { // val 载荷 一次只能传递一个载荷  {} []
        state.cityInfo = val;
    },
    uptotals(state, val) {
      state.totals=val
    }
  },
  actions: {
  },
  modules: {
  }
})
