const state={
  counter:0
};

const getters={
  getDoubleCounter(state) {
    return state.counter * 2;
  },
  stringCounter(state) {
    return `${state.counter}.kez tiklandi`;
  },
};

const mutations = {
  incrementCounter(state,payload) {
    state.counter+=payload;
  },
  decrementCounter(state) {
    state.counter--;
  }
};

const actions ={
  increment({commit}) {
    commit('incrementCounter',1);
  },
  decrement({commit}) {
    commit('decrementCounter');
  },
  incrementAsync({commit},payload) {
    setTimeout(()=>{
      commit('incrementCounter',10);
    },payload.time)
  }
};

export default  {
  state,
  getters,
  mutations,
  actions
}
