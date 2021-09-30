import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import { routes } from "./routes";
import axios from "axios";

axios.defaults.baseURL='https://vuejs-axios-blog-734ef-default-rtdb.firebaseio.com';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
