<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Filters And Mixins</h1>
        <input type="text" v-model="searchText" />
        <p>{{ searchText | upperCase }}</p>
        <ul>
          <li v-for="product in searched">{{ product }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { filterProduct } from "./mixins/filterProduct.js";
export default {
  mixins: [filterProduct],
  filters: {
    upperCase(value) {
      return value.toUpperCase();
    },
  },
};
</script>

<style></style>
