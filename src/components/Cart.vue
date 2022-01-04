<template>
  <div class="col-5">
    <h2>CART</h2>
    <div v-if="$store.getters.cart.length > 0">
      <div v-for="(item, index) in $store.getters.cart" :key="index" class="d-flex">
        <div>
          <img :src="item.product.imageUrl" alt="">
        </div>
        <div>
          <h3 class="text-uppercase">{{item.product.name}}</h3>
          <p>Quantity: {{item.quantity}}</p>
          <p>Total Price: {{item.quantity * item.product.price}} €</p>
          <button @click.stop="removeProductFromCart(index)">Remove</button>
        </div>
      </div>
    </div>
    <div v-else>
      <p>YOUR CART IS EMPTY</p>
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
  img {
    width: 150px;
  }
</style>