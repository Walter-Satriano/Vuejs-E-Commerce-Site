<template>
  <div id="app">
    <div id="nav">
      <router-link to="/products">Products</router-link> |
      <router-link to="/add-product">Add Product</router-link> |
      <a class="pointer" @click='toggleShowCart()'>Cart</a>
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  #app {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
