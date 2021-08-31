import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  //mode:'hash'//default
  mode: 'history',
  scrollBehavior(to) {
    //300ms yatay gecis animasyonundan dolayi aninda scroll yapmiyor o yuzden animasyon bittikten sonra animasyon olmasi icin promis ve timeout kullandim
    // if (to.hash)
    //   return {
    //     selector: to.hash,
    //     behavior: 'smooth',
    //   }
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            selector: to.hash,
            behavior: 'smooth',
          })
        }, 350)
      })
    }

  }
});

router.beforeEach((to, from, next) => {
  next();
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
