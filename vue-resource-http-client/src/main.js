import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-vue-resource-8f14b-default-rtdb.firebaseio.com/';

Vue.http.interceptors.push((req, next) => {
  next(res => {
    res.json = () => {
      let list = [];
      for (let key in res.data) {
        let data = res.data[key]
        data.key = key;
        list.push(data);
      }
      return list;
    };
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
