<template>
  <div>
    <Header />
    <div class="main">
      <div class="container">
        <div class="row">
          <div
            style="display: grid;place-items: center;height: 100%; width: 1500px;"
            class="col-4"
          >
            <Cart style="width: 415px;" />
          </div>
          <br /><br /><br /><br />
          <router-link
            to="/"
            style="display: grid;place-items: center;height: 100%; width: 1500px; text-decoration: none; color: inherit;"
          >
            <button class="btn btn-secondary mt-4">
              Back to Home
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Cart from "../components/Cart";

export default {
  name: "CartView",
  components: {
    Header,
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
.center {
  display: grid;
  place-items: center;
  height: 100%;
}
</style>
