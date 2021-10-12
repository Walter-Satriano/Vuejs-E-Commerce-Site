<template>
  <div v-if="$store.getters.cart.length > 0">
    <h2>CART</h2>

    <div v-for="(item, index) in $store.getters.cart" :key="index">
      <h3>{{item.product.name}}</h3>
      <p>Quantity: {{item.quantity}}</p>
      <p>Total Price: {{item.quantity * item.product.price}}</p>
    </div>

  </div>
</template>