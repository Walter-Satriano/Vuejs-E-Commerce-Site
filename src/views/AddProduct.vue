<template>
  <form @submit.prevent="addProduct">
    <h1>Add Product</h1>
    <div>
      <label>Name:</label>
      <input v-model="name" required>
    </div>
    <div>
      <label>Price in €:</label>
      <input v-model="price" required>  
    </div>
    <div>
      <label>Description:</label>
      <textarea v-model="description" required></textarea>
    </div>
    <div>
      <label>Image URL:</label>
      <input v-model="imageUrl" required>
    </div>
    <input type="submit" value="Add" class="button">
  </form>
</template>

<script>
export default {
  name: "AddProduct",
  data() {
    return {
      name: '',
      price: 0,
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
  input,
  textarea {
    border: 1px solid #ccc;
    padding: 20px;
    vertical-align: middle;
  }

  label {
    vertical-align: middle;
    padding-right: 10px;
  }

  div {
    display: block;
    padding: 50px;
    font-size: 1.5rem;
  }

  .button {
    background-color: #2c3e50;
    color: white;
    font-size: 1.5rem;
  }
</style>