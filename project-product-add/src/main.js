import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  data: {
    PRODUCT_LIMIT: 2
  },
  methods: {
    addProduct(data) {
      this.$emit('addProduct', data);
    },
    updateProgress(data) {
      this.$emit('updateProgress', data);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
