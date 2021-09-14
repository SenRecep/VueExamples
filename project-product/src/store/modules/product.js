import Vue from "vue";
import router from "../../router";

const state = {
  products: []
};

const getters = {
  getProducts(state) {
    return state.products;
  },
  getProduct(state) {
    return key => state.products.find(x => x.id == key);
  }
};

const mutations = {
  updateProductList(state, product) {
    state.products.push(product);
  }
};

const actions = {
  initApp({state, commit}) {
    Vue.http
      .get('products.json')
      .then(res => {
        state.products = Object.entries(res.body).map(x => ({
          id: x[0],
          ...x[1]
        }));
      });
  },
  saveProduct({commit, dispatch}, payload) {
    Vue.http
      .post('products.json', payload)
      .then(res => {
        payload.id = res.body.name;
        commit('updateProductList', payload);
        let tradeResult = {
          purchase: payload.price,
          sale: 0,
          count: payload.count
        };
        dispatch('saveTradeResult', tradeResult);
        router.replace('/');
      });
  },
  sellProduct({state,dispatch}, payload) {
    let product = state.products.find(x => x.id == payload.id);
    if (product) {
      product.count -= payload.count;
      Vue.http
        .patch(`products/${payload.id}.json`, {count: product.count})
        .then(res=>{
          let tradeResult = {
            purchase: 0,
            sale: product.price,
            count: payload.count
          };
          dispatch('saveTradeResult', tradeResult);
          router.replace('/');
        });
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
