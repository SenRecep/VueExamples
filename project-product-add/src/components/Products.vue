<template>
  <div v-if='productList.length>0'>
    <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
    <hr />
    <div class="row product-container">
      <product v-for="item in productList">
        <img
          class="card-img-top"
          :src="item.image == null ? '/src/assets/default.png' : item.image"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{{ item.name }}</h5>
          <small> <strong>Adet : </strong> {{ item.count }} </small>
          <br />
          <small> <strong>Fiyat : </strong> {{ item.price }} </small>
          <br />
          <small> <strong>Tutar : </strong> {{ item.total }} </small>
        </div>
      </product>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
import product from "./Product";
export default {
  components: {
    product,
  },
  data() {
    return {
      productList: [],
    };
  },
  created() {
    eventBus.$on("addProduct", (data) => {
      if (this.productList.length < eventBus.PRODUCT_LIMIT) {
        this.productList.push(data);
        eventBus.updateProgress(this.productList.length);
        return;
      }
      alert("Daha fazla ürün ekleyemessiniz!");
    });
  },
};
</script>
