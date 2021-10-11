import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import AddProduct from "../views/AddProduct.vue";
import ProductsList from "../views/ProductsList.vue";
import SingleProduct from "../views/SingleProduct.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
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
