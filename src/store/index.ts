import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
  },
  mutations: {
    successAuth(state) {
      state.isAuthenticated = true;
    }
  },
  actions: {
  },
  modules: {
  },
});
