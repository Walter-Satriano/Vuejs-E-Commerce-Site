import Vue from "vue";
import VueRouter from "vue-router";
import AddProduct from "../views/AddProduct.vue";
import ProductsList from "../views/ProductsList.vue";
import SingleProduct from "../views/SingleProduct.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: ProductsList,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsList,
  },
  {
    path: "/product/:slug",
    name: "product",
    component: SingleProduct,
  },
  {
    path: "/add-product",
    name: "add-product",
    component: AddProduct,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
