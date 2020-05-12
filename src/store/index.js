import Vue from 'vue';
import Vuex from 'vuex';
import cancelRequestStore from './cancelRequestStore';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cancelRequest: cancelRequestStore,
  },
});
