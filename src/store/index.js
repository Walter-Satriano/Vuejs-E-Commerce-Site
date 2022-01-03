import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

/* eslint-disable */
const vuexLocalStorage = new VuexPersist({
  key: "ecommerce", // a unique key to store the data
  storage: window.localStorage
})


const slugify = str => {
  str = str || ''
  const a = 'àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;άαβγδεέζήηθιίϊΐκλμνξοόπρσςτυϋύΰφχψωώ'
  const b = 'aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------aavgdeeziitiiiiklmnxooprsstyyyyfhpoo'
  const p = new RegExp(a.split('').join('|'), 'g')

  return str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/ου/g, 'ou')
    .replace(/ευ/g, 'eu')
    .replace(/θ/g, 'th')
    .replace(/ψ/g, 'ps')
    .replace(/\//g, '-')
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special chars
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    addProduct(state, product) {
      product.slug = slugify(product.name)
      state.products.push(product)
    },
    deleteProduct(state, i) {
      state.products = state.products.slice(0, i).concat(state.products.slice(i + 1, state.products.length))
    },
    addToCart(state, newItem) {
      const index = state.cart.findIndex(
        itemInCart => itemInCart.product.slug === newItem.product.slug
      )
      
      //If the product is already existing in the cart, based on its slug, we increment its quantity.
      //Otherwise, we add it as a new element.
      if (index === -1) {
        //not existing
        state.cart = [...state.cart, newItem]
      } else {
        newItem.quantity += state.cart[index].quantity
        state.cart = state.cart
          .filter(item => item.product.slug !== newItem.product.slug)
          .concat(newItem)
      }
    },
    removeProductFromCart(state, i) {
      state.cart = state.cart.slice(0, i).concat(state.cart.slice(i + 1, state.cart.length))
    }
  },
  actions: {},
  getters: {
    products: state => state.products,
    cart: state => state.cart
  },
  plugins: [vuexLocalStorage.plugin]
});