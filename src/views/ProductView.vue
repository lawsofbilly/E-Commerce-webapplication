<template>
  <div>
    <Header />
    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col-8"><Product /></div>
          <div class="col-4"><Cart /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Product from "../components/Product";
import Cart from "../components/Cart";

export default {
  name: "ProductView",
  components: {
    Header,
    Product,
    Cart,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
