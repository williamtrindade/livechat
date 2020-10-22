import { createStore } from 'vuex'

export default createStore({
  state: {
    isMakingRequest: false
  },
  mutations: {
    isMakingRequest (state, bool) {
      state.isMakingRequest = bool
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    isMakingRequest: state => {
      return state.isMakingRequest
    }
  }
})
