<template>
  <div>
    <h1 style="text-align: center; margin-right: 5rem;">{{ product.title }}</h1>
    <div class="row">
      <div
        class="card d-flex flex-direction-column align-items-center"
        style="width: 50rem;"
      >
        <img
          :src="product.photos[0]"
          style="max-width: 500px; max-height: 500px;"
          class="card-img-top"
        />
        <p>{{ product.description }}</p>
        <p class="card-text" style="font-size: 40px;">
          Price $ {{ product.price.toLocaleString() }}
        </p>
        <div style="display:flex;">
          <p
            style="margin-right: 20px; color:red; font-weight:bold;"
            v-for="tag in tags"
            v-bind:key="tag.id"
          >
            {{ tag }}
          </p>
        </div>
        <button
          class="btn btn-primary"
          style="width: 15rem; height: 5rem;"
          @click="addItemToCart(product)"
        >
          Add to Cart
        </button>
        <br /><br /><br /><br />
        <router-link to="/">
          <button class="btn btn-secondary mt-4">
            Back to Home
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "Product",
  data() {
    return {
      product: null,
      tags: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    ...mapActions(["addItemToCart", "getProducts"]),
    async fetchData() {
      const response = await axios.get(
        "http://localhost:3000/products/" + this.$route.params.id
      );
      this.product = await response.data;
      this.tags = await this.product.tags;
    },
  },
};
</script>

<style scoped></style>
