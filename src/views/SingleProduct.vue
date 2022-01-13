<template>
  <div class="container product-detail pb-5">
    <div class="row justify-content-center align-items-center">
      <div class="col-12 col-sm-9 col-md-7 text-center col-lg-6 mb-4 mb-lg-0">
        <img class="w-75" :src="product.imageUrl" />
      </div>
      <div class="col-12 col-sm-11 col-md-10 col-lg-6 text-center">
        <h3 class="text-uppercase">{{product.name}}</h3>
        <p class="description">{{product.description}}</p>
        <p class="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Dolorem, optio accusantium tempore exercitationem fugit laudantium est quae laboriosam esse nihil perspiciatis 
          reprehenderit harum et fugiat rerum sequi quisquam aspernatur vitae.
        </p>
        <p class="price">{{product.price}} €</p>
        <button class="btn-lg" @click="addToCart"><i class="bi bi-cart-plus fs-4 me-3"></i>Add to cart</button>
      </div>
    </div>
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

<style lang="scss" scoped>
  .product-detail {
    padding-top: 13rem;

    img {
      box-shadow: 4px 4px 8px #818181;
    }

    .description {
      font-size: 1.2rem;
    }

    .price {
      font-weight: 600;
      font-size: 1.3rem;
    }

    button {
      background-color: rgb(179, 152, 1);
      box-shadow: 3px 3px 6px #818181;
      color: white;
      font-weight: 600;
      border: none;
      border-radius: 10px;      

      &:hover {
        background-color: rgb(226, 193, 4);
      }
    }
  }

</style>