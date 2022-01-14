<template>
  <form @submit.prevent="addProduct" class="text-center">
    <h1 class="mb-5">Add New Product</h1>
    <div class="col-11 col-md-9 col-lg-8 col-xl-6 form-floating mx-auto mb-3">
      <input id="name" type="text" class="form-control" placeholder="Insert product name" v-model="name" required>
      <label for="name" class="form-label">Product Name</label>
    </div>
    <div class="col-11 col-md-9 col-lg-8 col-xl-6 form-floating mx-auto mb-3">
      <input id="price" type="number" class="form-control" placeholder="Insert product price" v-model="price" required>
      <label for="price">Product Price in €</label>
    </div>
    <div class="col-11 col-md-9 col-lg-8 col-xl-6 form-floating mx-auto mb-3">
      <textarea id="description" class="form-control" placeholder="Insert product description" style="height: 180px" v-model="description" required></textarea>
      <label for="description">Product Description</label>
    </div>
    <div class="col-11 col-md-9 col-lg-8 col-xl-6 form-floating mx-auto mb-3">
      <input id="imageUrl" class="form-control" placeholder="Insert product image" v-model="imageUrl" required>
      <label for="imageUrl">Product Image URL</label>
      <p class="mt-2 text-danger fw-bold">*Tip: For a better visualization, add a square image.</p>
    </div>
    <button type="submit" class="btn btn-lg">Add</button>
  </form>
</template>

<script>
  export default {
    name: "AddProduct",
    data() {
      return {
        name: '',
        price: '',
        description: '',
        imageUrl: ''
      }    
    },
    methods: {
      addProduct() {
        this.$store.commit('addProduct', {
          name: this.name,
          price: this.price,
          description: this.description,
          imageUrl: this.imageUrl
        })
        this.$router.push('/products')
      }
    },
  }
</script>

<style lang="scss" scoped>
  form {
    padding-top: 13rem;
    padding-bottom: 5rem;
  }

  input,
  textarea {
    border: 1px solid black;
    color: black;
    font-size: 1.2rem;
    box-shadow: 3px 3px 5px #888888;
  }

  label {
    font-size: 1.2rem;
  }

  button {
    background-color: #2c3e50;
    border-color: #2c3e50;
    color: white;
    font-size: 1.2rem;
  }
</style>