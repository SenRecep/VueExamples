import Vue from "vue";

export const saveTradeResult = ({state, commit}, payload) => {
  commit('updateTradeResult', payload);
  const data = {
    purchase: state.purchase,
    sale: state.sale
  };
  Vue.http.put('trade-result.json', data);
}

export const getTradeResult = ({commit}) => {
Vue.http
  .get('trade-result.json')
  .then(res=>{
      commit('updateTradeResult',res.data);
  });
}
