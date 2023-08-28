<template>
  <div class="cart">
    <div v-if="cart.length" class="alert alert-secondary" role="alert">
      <i class="bi bi-cart"></i>
      <h8>My cart</h8>
    </div>
    <div v-if="!cart.length" class="alert alert-secondary" role="alert">
      No Product in cart!
    </div>
    <div
      v-if="orderPlaced"
      @click="() => (this.orderPlaced = false)"
      class="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      Order successfully!
      <div>
        <button
          style="display: flex;"
          type="button"
          class="closesuccess"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>

    <ul class="list-group">
      <li class="list-group-item" v-for="item in cart" :key="item.id">
        <button
          @click="removeItemFromCart(item.id)"
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <div class="media" style="display: flex; gap: 16px;">
          <img
            width="80px"
            :src="item.photos[0]"
            class="mr-3"
            alt="item.title"
          />
          <div
            class="media-body"
            style="display: flex; flex-direction: column;"
          >
            <p class="mt-0">{{ item.title }}</p>
            <div style="display: flex; flex-direction: row; gap: 8px;">
              <button
                style="margin-left: 50px 0px 0 20px;"
                class="qty-button btn btn-sm btn-secondary"
                @click="reduceQty(item.id)"
              >
                -
              </button>
              x {{ item.qty }}
              <button
                style="margin-right: 20px;"
                class="qty-button btn btn-sm btn-secondary"
                @click="addQty(item.id)"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <button
      v-if="cart.length"
      @click="placeOrder"
      class="checkout-button btn btn-lg btn-block btn-success"
      :disabled="isProcessing"
    >
      <div v-if="isProcessing" class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <span
        style="display: grid;place-items: center;height: 100%; width:380px ; text-decoration: none; color: inherit;"
        v-else
        >Pay Now ($ {{ totalPrice.toLocaleString() }})</span
      >
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Cart",
  data() {
    return {
      isProcessing: false,
      orderPlaced: false,
    };
  },
  computed: {
    ...mapGetters(["cart"]),
    totalPrice() {
      return this.cart.reduce((a, b) => a + b.qty * b.price, 0);
    },
  },
  methods: {
    ...mapActions(["removeItemFromCart", "addQty", "reduceQty", "emptyCart"]),
    placeOrder() {
      this.isProcessing = true;
      setTimeout(() => {
        this.isProcessing = false;
        this.orderPlaced = true;
        this.emptyCart();
      }, 1000);
    },
  },
};
</script>

<style scoped>
.alert {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.closesuccess {
  position: relative;
  bottom: 8px;
  left: 135px;
  background: rgb(193, 231, 193);
  border: none;
}
.close {
  position: relative;
  left: 365px;
  border: none;
}
.media {
  width: 90%;
  text-align: left;
}

.qty-button {
  border-radius: 50%;
  width: 30px;
}

.checkout-button {
  margin-top: 20px;
}
</style>
