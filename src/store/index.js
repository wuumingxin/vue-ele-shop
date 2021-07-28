import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    geohash: ''
  },
  mutations: {
    SETGEOHASH (state, data) {
      state.geohash = data.geohash
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
