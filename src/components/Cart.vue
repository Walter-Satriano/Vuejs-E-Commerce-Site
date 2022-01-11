<template>
  <div class="cart-container bg-light">
    <div class="bg-black text-white py-2">
      <h5>SUMMARY</h5>
    </div>
    <div v-if="$store.getters.cart.length > 0">
      <div v-for="(item, index) in $store.getters.cart" :key="index" class="d-flex px-1 py-3 align-items-center justify-content-around border-bottom border-3">
        <div>
          <img :src="item.product.imageUrl" alt="">
        </div>
        <div class="ms-3">
          <h3 class="text-uppercase">{{item.product.name}}</h3>
          <p><span>Quantity: </span>{{item.quantity}}</p>
          <p><span>Price: </span>{{item.product.price}} €</p>
          <p><span>Total: </span>{{item.quantity * item.product.price}} €</p>
          <button @click.stop="removeProductFromCart(index)">Remove</button>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="p-5 m-0"><b>HEY, YOUR CART IS EMPTY!</b></p>
    </div>
    <div>
      <h5 class="bg-black py-2 m-0 text-white">ORDER TOTAL: {{totalCartPrice}} €</h5>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Cart',
    methods: {
      removeProductFromCart(index) {
        this.$store.commit('removeProductFromCart', index)
      }
    },
    computed: {
      totalCartPrice() {
        const cart = this.$store.getters.cart;
        const quantity = cart
          .filter(function(obj) {
            return obj;
          })
          .map(function(obj) {
            console.log(obj.quantity);
            return obj.quantity;
          });
        const price = cart
          .filter(function(obj) {
            return obj;
          })
          .map(function(obj) {
            console.log(obj.product.price);
            return obj.product.price;
          });
        const sum = quantity.reduce(function(r, a, i) {
          return r + a * price[i];
        }, 0);
        return sum;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cart-container {
    border: 1px solid black;
    max-height: 355px;
    overflow: auto;
    box-shadow: 6px 6px 12px #818181;

    img {
      width: 150px;
      box-shadow: 2px 2px 2px #818181;
    }

    p, h3 {
      margin-bottom: 0.5rem;
    }

    span {
      font-weight: 600;
    }

    button {
      background-color: rgb(177, 3, 3);
      box-shadow: 2px 2px 2px #818181;
      color: white;
      border: none;
      border-radius: 5px;

      &:hover {
        background-color: rgb(240, 3, 3);
      }
    }
  }

  @media (min-width: 320px) and (max-width: 450px) {
    .cart-container {
      min-width: 300px;

      img {
        width: 110px;
      }

      h3 {
        font-size: 1.3rem;
      }

      p {
        font-size: 0.9rem
      }

      button {
        font-size: 0.8rem;
      }
    }
  }

  @media (min-width: 450px) and (max-width: 576px) {
    .cart-container {
      min-width: 400px;

      img {
        width: 110px;
      }

      h3 {
        font-size: 1.3rem;
      }

      p {
        font-size: 0.9rem
      }
    }
  }

  @media (min-width: 576px) {
    .cart-container {
      min-width: 470px;
    }
  }
  
  @media (min-width: 992px) {
    .cart-container {
      min-width: 530px;
    }
  }
</style>