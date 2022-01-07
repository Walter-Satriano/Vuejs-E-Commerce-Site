<template>
  <div class="cart-container bg-light">
    <div class="bg-black text-white py-2">
      <h5>SUMMARY</h5>
    </div>
    <div v-if="$store.getters.cart.length > 0">
      <div v-for="(item, index) in $store.getters.cart" :key="index" class="d-flex px-3 py-3 align-items-center border-bottom border-3">
        <div>
          <img :src="item.product.imageUrl" alt="">
        </div>
        <div class="ms-3">
          <h3 class="text-uppercase">{{item.product.name}}</h3>
          <p><span>Quantity: </span>{{item.quantity}}</p>
          <p><span>Total Price: </span>{{item.quantity * item.product.price}} €</p>
          <button @click.stop="removeProductFromCart(index)">Remove</button>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="p-5 m-0"><b>HEY, YOUR CART IS EMPTY!</b></p>
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
</style>