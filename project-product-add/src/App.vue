<template>
  <div class="container">
    <h1 class="text-center">Ürün Ekleme Uygulaması</h1>
    <hr />
    <new-product></new-product>
    <br /><br />
    <app-progress></app-progress>
    <br /><br />
    
    <products></products>
  </div>
</template>

<script>
import newProduct from "./components/NewProduct";
import appProgress from "./components/Progress";
import products from "./components/Products";
export default {
  components: {
    newProduct,
    appProgress,
    products
  }
};
</script>

<style>
body {
  background-color: aliceblue;
  padding-top: 20px;
  padding-bottom: 20px;
}

.card{
  margin-right: 5px;
  margin-bottom: 5px;
}

.card:last-child{
  margin-right: 0px;
}

.col-md-2{x
  max-width: 15.666667%!important;
}

.product-container{
  margin-left: 15px;
}
</style>
