import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProductView from "../views/ProductView.vue";
import CartView from "../views/CartView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/product/:id",
    name: "product",
    component: ProductView,
    props: true,
  },
  {
    path: "/mycart",
    name: "mycart",
    component: CartView,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
