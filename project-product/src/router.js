import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store/store";

import ProductList from "./Products/ProductList";
import ProductSell from "./Products/ProductSell";
import ProductPurchase from "./Products/ProductPurchase";

Vue.use(VueRouter);

const routes = [
  {path: '/', component: ProductList},
  {path: '/urun-islemleri', component: ProductPurchase},
  {path: '/urun-cikisi', component: ProductSell},
  {path: '*', redirect: '/'}
];

const router = new VueRouter({
  mode: 'history',
  routes
});


router.beforeEach((to, from, next) => {
  if (store.getters.getLoadingState)
    store.commit('updateLoadingState', false);
  next();
});
export default router;
