<template>
  <header>
    <nav class="navbar">
      <span class="navbar-brand mb-0 h1" style="font-weight: bold;"
        >Fast Shop</span
      >
      <router-link style="text-decoration: none; color: inherit;" to="/mycart">
        <span style="font-weight: bold;" class="navbar-brand mb-0 h1">
          <i class="bi bi-cart"></i>
          Cart
          <span class="badge badge-primary">{{ totalQty }}</span>
        </span>
      </router-link>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters(["cart"]),
    totalQty() {
      return this.cart.reduce((a, b) => a + b.qty, 0);
    },
  },
};
</script>

<style scoped>
header {
  margin-bottom: 10vh;
  position: sticky;
  top: 0;
  z-index: 99;
}
nav {
  background: lightskyblue;
}
.navbar {
  font-weight: bold;
}
span {
  margin-left: 15px;
}

.bi {
  color: #000;
}
.badge {
  border: 0.5px solid rgb(0, 0, 0);
  border-radius: 20%;
  color: #000;
}
</style>
