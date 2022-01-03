<template>
  <div class="products-list">
    <div v-for="(product, index) in $store.getters.products" :key="index">
      <img :src="product.imageUrl">
      <h2>{{ product.name }}</h2>
      <p class="description">{{ product.description }}</p>
      <p class="price">{{ product.price }} €</p>
      <button @click="$router.push(`/product/${product.slug}`)">See Details</button>
      <button @click.stop="deleteProduct(index)">Delete product</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsList',
  methods: {
    deleteProduct(index) {
      this.$store.commit('deleteProduct', index)
    }
  },
}
</script>

<style scoped>
  .products-list {
    display: flex;
    padding-top: 30px;
  }

  img {
    width: 300px;
    height: auto;
  }

  .products-list div {
    box-sizing: border-box;
    padding: 30px;
    background-color: lightsalmon;
    margin: 0 20px;
  }

  button {
    padding: 5px;
    font-size: 1rem;
  }

  .description,
  .price {
    padding-top: 20px;
  }
</style>