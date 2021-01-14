import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    user: { id: -1, name: '', picture: '' },
  },
  mutations: {
    successAuth(state) {
      state.isAuthenticated = true;
    },
    setUser(state, user) {
      state.user.id = user.id;
      state.user.name = user.name;
      state.user.picture = user.picture_medium;
    }
  },
  actions: {
  },
  modules: {
  },
});
