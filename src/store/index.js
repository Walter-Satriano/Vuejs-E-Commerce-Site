import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    addProduct(state, product) {
      state.products.push(product)
    }
  },
  actions: {},
  modules: {},
});
