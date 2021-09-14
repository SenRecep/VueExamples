<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün İşlemleri</h3>
          <hr>
          <div class="form-group">
            <label>Ürün Adı</label>
            <input v-model="product.name" type="text" class="form-control" placeholder="Ürün adını giriniz..">
          </div>
          <div class="form-group">
            <label>Adet</label>
            <input v-model="product.count" type="number" class="form-control" placeholder="Ürün adetini giriniz..">
          </div>
          <div class="form-group">
            <label>Fiyat</label>
            <input v-model="product.price" type="number" class="form-control" placeholder="Ürün fiyatı giriniz..">
          </div>
          <div class="form-group">
            <label>Açıklama</label>
            <textarea v-model="product.description" cols="30" rows="5" placeholder="Ürüne ait bir açıklama giriniz..."
                      class="form-control"></textarea>
          </div>
          <hr>
          <button class="btn btn-primary" :disabled="saveEnabled" @click="saveProduct">Kaydet</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapMutations} from 'vuex'
import {updateLoadingState} from "../store/mutations";
export default {
  data() {
    return {
      saveButtonClicked: false,
      product: {
        name: '',
        count: null,
        price: null,
        description: ''
      }
    }
  },
  methods: {
    saveProduct() {
      this.saveButtonClicked = true;
      this.updateLoadingState(true);
      this.$store.dispatch('saveProduct', this.product);
    },
    ...mapMutations(['updateLoadingState'])
  },
  computed: {
    saveEnabled() {
      return !(this.product.name.length > 0 && this.product.description.length > 0 && this.product.price > 0 && this.product.count > 0);
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.saveButtonClicked || !(this.product.name.length > 0 || this.product.description.length > 0 || this.product.price > 0 || this.product.count > 0)) {
      next();
      return;
    }
    if (confirm('Kaydedilmemis degisiklikler var. Yine de cikmak ister misiniz?'))
      next();
  }
}
</script>

<style scoped>

</style>
