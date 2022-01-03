<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/add-product">Add Product</router-link> |
      <a class="pointer" @click='toggleShowCart()'>Your Cart</a>
    </div>

    <Cart v-show="showCart" />

    <router-view />
  </div>
</template>

<script>
import Cart from './components/Cart'

export default {
  name: 'App',
  data() {
    return {
      showCart: false
    }
  },
  methods: {
    toggleShowCart() {
      this.showCart = !this.showCart
    }
  },
  components: {
    Cart,
  }
}
</script>


<style lang="scss" scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;
      cursor: pointer;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
