<template>
  <div id="app">
    <div class="fixed-top">
      <nav class="d-flex justify-content-center">
        <div>
          <router-link to="/products">Products</router-link>
          <span class="mx-2">|</span>
          <router-link to="/add-product">Add Product</router-link>
        </div>
      </nav>
      <div id="cart-link" class="position-relative py-2">
        <a @click='toggleShowCart()'><i class="bi bi-cart3 fs-3 me-2"></i>Your Cart</a>
        <div class="position-absolute start-50 translate-middle-x">
          <Cart v-show="showCart" />
        </div>
      </div>
    </div>

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

  nav {
    padding: 30px;
    font-size: 1.5rem;
    font-weight: 600;
    background-color: black;

    a {
      color: rgb(179, 152, 1);
      cursor: pointer;
      text-decoration: none;

      &.router-link-exact-active {
        color: rgb(226, 193, 4);
      }

      &:hover {
        color: rgb(226, 193, 4);
      }
    }
    
    span {
      color: rgb(226, 193, 4);
    }
  }

  #cart-link {
    background-color: rgb(179, 152, 1);
    text-align: center;

    a {
      font-size: 1.5rem;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;

      &:hover {
        color: rgb(226, 193, 4);
      }
    }

    div {
      z-index: 10;
    }
  }

  @media (min-width: 320px) and (max-width: 450px) {
    nav {
    padding: 20px;
    font-size: 1.3rem;

    }

    #cart-link {

      a {
        font-size: 1.3rem;

        &:hover {
          color: rgb(226, 193, 4);
        }
      }
    }
  }
</style>