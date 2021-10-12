<template>
  <div class="container">
    <div class="content">
      <h1>{{ product.name }}</h1>
      <p class="description">{{product.description}}</p>
      <p class="price">${{product.price}}</p>
      <button @click="addToCart">Add to cart</button>
    </div>
    <img class="image" :src="product.imageUrl" />
  </div>
</template>

<script>
export default {
  name: 'SingleProduct',
  data() {
    return {
      product: {}
    }
  },
  mounted() {
    this.product = this.$store.getters.products
      .filter(item => item.slug === this.$route.params.slug)
      .shift()
  },
  methods: {
    addToCart() {
      this.$store.commit('addToCart', {
        product: this.product,
        quantity: 1
      })
    }
  }
}
</script>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: 50% 50%;
    padding-top: 50px;
    margin: 0 auto;
    max-width: 1200px;
  }

  .image {
    width: 500px;
    height: auto;
  }

  .content h1 {
    padding-bottom: 50px;
  }

  .description,
  .price {
    padding-top: 20px;
  }

  button {
    margin-top: 50px;
    padding: 10px 40px;
    background-color: lightgreen;
    border-color: gray;
  }
</style>