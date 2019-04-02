import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '北京'
  },
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  // 也可以直接调用mutations $store.commit('method',param)
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }
})
