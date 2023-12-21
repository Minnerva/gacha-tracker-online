import { createStore } from 'vuex'

export default createStore({
  state: {
    firebase: false,
    auth: false,
    user: false
  },
  mutations: {
    setFirebase (state, firebase) {
      state.firebase = firebase
    },
    setAuth (state, auth) {
      state.auth = auth
    },
    setUser (state, user) {
      state.user = user
    }
  }
})