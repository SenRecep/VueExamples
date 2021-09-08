/*mport Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    counter: 0,
    age:10
  },
  getters: {
    getDoubleCounter(state) {
      return state.counter * 2;
    },
    stringCounter(state) {
      return `${state.counter}.kez tiklandi`;
    },
    getAge(state){
      return state.age;
    }
  },
  mutations: {
    // updateCounter(state, value) {
    //     state.counter += value;
    // }
    incrementCounter(state,payload) {
      state.counter+=payload;
    },
    decrementCounter(state) {
      state.counter--;
    },
    setAge(state,payload){
      state.age=payload;
    }

  },
  actions: {
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
  }
});
*/
import Vue from 'vue';
import Vuex from 'vuex';
import counter from "./modules/counter";
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    age:10
  },
  getters,
  mutations,
  modules:{
    counter
  }
});
