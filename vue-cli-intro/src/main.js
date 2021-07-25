import Vue from 'vue'
import App from './App.vue'

export const eventBus= new Vue({
  methods:{
    changeStatus(data){
      this.$emit('changeStatus',data);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
