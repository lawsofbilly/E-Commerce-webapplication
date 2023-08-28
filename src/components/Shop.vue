<template>
  <div class="row">
    <div
      class="card"
      style="width: 15rem;"
      v-for="item in products"
      :key="item.id"
    >
      <img :src="item.photos[0]" class="card-img-top" :alt="item.title" />
      <div class="card-body">
        <router-link
          style="text-decoration: none; color: inherit;"
          :to="'/product/' + item.id"
        >
          <p class="card-title">{{ item.title }}</p>
        </router-link>
        <p class="card-text">$ {{ item.price.toLocaleString() }}</p>
        <div style="display:flex;">
          <p
            style="margin-right: 20px; color:red; font-weight:bold;"
            v-for="tag in item.tags"
            v-bind:key="tag.id"
          >
            {{ tag }}
          </p>
        </div>

        <button class="btn btn-primary" @click="addItemToCart(item)">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Shop",
  mounted() {
    this.getProducts();
  },
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    ...mapActions(["addItemToCart", "getProducts"]),
  },
};
</script>

<style scoped>
.card {
  padding: 20px;
  border: 0.5px solid lightblue;
  margin: 16px;
}
.card-title {
  text-decoration: none;
}
</style>
