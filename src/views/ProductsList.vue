<template>
  <div class="container-fluid container-padding">
    <div v-if="$store.getters.products.length > 0" class="row justify-content-center">
      <div class="product-card position-relative col-sm-12 col-md-6 col-lg-4 col-xxl-3 text-center mb-5 px-0 mx-md-3 bg-white"
        v-for="(product, index) in $store.getters.products" :key="index">
        <img :src="product.imageUrl" class="mb-4">
        <h2 class="text-uppercase">{{ product.name }}</h2>
        <p class="description">{{ product.description }}</p>
        <p class="price">{{ product.price }} €</p>
        <button @click="$router.push(`/product/${product.slug}`)" class="btn-lg mb-4">Product Details</button>

        <div class="position-absolute top-0 end-0 mt-2 me-2" @click.stop="deleteProduct(index)">
          <i class="bi bi-x-lg fs-3"></i>
        </div>
      </div>
    </div>
    <div v-else class="text-center position-absolute top-50 start-50 translate-middle">
      <h4>Please, add your first product to start!</h4>
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
    }
  }
</script>

<style lang="scss" scoped>
  .container-padding {
    padding-top: 13rem;
  }
  
  .product-card {
    max-width: 300px;
    border-radius: 15px;
    box-shadow: 6px 6px 12px #818181;

    img {
      width: 300px;
      height: auto;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }

    .price {
      font-size: 1.3rem;
      font-weight: 600;
    }

    .description {
      font-size: 1.2rem;
    }

    button {
      background-color: rgb(179, 152, 1);
      box-shadow: 3px 3px 6px #818181;
      color: white;
      border: none;
      border-radius: 10px;      

      &:hover {
        background-color: rgb(226, 193, 4);
      }
    }
  }

  @media (min-width: 576px) and (max-width: 768px) {
    .product-card {
      max-width: 400px;

      img {
        width: 400px;
        height: auto;
      }
    }
  }
</style>