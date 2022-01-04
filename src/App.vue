<template>
  <div id="app">
    <div id="nav" class="d-flex justify-content-between">
      <div>
        <router-link to="/products">Products</router-link>
        <span class="mx-2">|</span>
        <router-link to="/add-product">Add Product</router-link>
      </div>
      <div>
        <a @click='toggleShowCart()'><i class="bi bi-cart3 me-2"></i>Cart</a>
      </div>
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
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css");

  
  #app {
    font-family: 'Montserrat', sans-serif;
  }

  #nav {
    padding: 30px;
    font-size: 1.5rem;
    background-color: black;

    a {
      color: white;
      cursor: pointer;
      text-decoration: none;

      &.router-link-exact-active {
        color: #42b983;
      }

      &:hover {
        color: #42b983;
      }
    }
    span {
      color: #42b983;
    }
  }
</style>