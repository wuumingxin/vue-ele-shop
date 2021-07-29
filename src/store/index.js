import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    geohash: '29.556479,106.552325',
    name: ''
  },
  mutations: {
    SETGEOHASH (state, data) {
      state.geohash = data.geohash
      state.name = data.name
    }
  },
  actions: {
    setgeohash ({ commit }, value) {
      commit('SETGEOHASH', value)
    }
  },
  modules: {
  }

})
