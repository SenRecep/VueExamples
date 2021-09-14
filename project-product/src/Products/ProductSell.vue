<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün Çıkışı</h3>
          <hr>
          <div class="form-group">
            <label>Ürün Adı</label>
            <select v-model="productKey" class="form-control">
              <option :disabled="p.count==0" :style="{color:p.count==0?'red':''}" v-for="p in getProducts"
                      :value="p.id">{{ p.name }}
              </option>
            </select>
          </div>
          <transition name="fade" mode="out-in">
            <div class="card mb-2 border border-danger" v-if="product!=null">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 text-center">
                    <div class="mb-3">
                      <span class="badge badge-info">Stok : {{ product.count }}</span>
                      <span class="badge badge-primary">Fiyat :{{ product.price | currency }}</span>
                    </div>
                    <p class="border border-warning p-2 text-secondary">{{ product.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <div class="form-group">
            <label>Adet</label>
            <input v-model="count" type="number" class="form-control" placeholder="Ürün adetini giriniz..">
          </div>
          <hr>
          <button @click="save" :disabled="saveEnabled" class="btn btn-primary">Kaydet</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import {updateLoadingState} from "../store/mutations";


export default {
  data() {
    return {
      saveButtonClicked: false,
      productKey: null,
      product: null,
      count: 0
    }
  },
  methods: {
    ...mapMutations(['updateLoadingState']),
    save() {
      this.saveButtonClicked = true;
      this.updateLoadingState(true);
      let updateProduct = {
        id: this.productKey,
        count: this.count
      };
      this.$store.dispatch('sellProduct',updateProduct);
    }
  },
  computed: {
    ...mapGetters(['getProduct', 'getProducts']),
    saveEnabled() {
      return !(this.count> 0  && this.productKey!=null );
    }
  },
  watch: {
    productKey() {
      this.product = this.getProduct(this.productKey);
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.saveButtonClicked || !(this.count> 0 || this.productKey!=null )) {
      next();
      return;
    }
    if (confirm('Kaydedilmemis degisiklikler var. Yine de cikmak ister misiniz?'))
      next();
  }
}
</script>

<style scoped>
.border-danger {
  border-style: dashed !important;
}
</style>
