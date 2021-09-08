<template>
  <div>
    <button class="btn btn-success" @click="incrementCounter(1)">Arttir</button>
    <button class="btn btn-danger" @click="decrementCounter">Azalt</button>
    <hr>
    <button class="btn btn-success" @click="increment">Arttir</button>
    <button class="btn btn-danger" @click="decrement">Azalt</button>
    <hr>
    <button class="btn btn-success" @click="incrementAsync({time:2000})">Arttir</button>

  </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex';

export default {
  methods: {
    ...mapMutations([
      'incrementCounter',
      'decrementCounter',
    ]),
    ...mapActions([
      'increment',
      'decrement',
      'incrementAsync'
    ])
    /*
    increment(){
      this.$store.dispatch('increment');
    },
    decrement(){
      this.$store.dispatch('decrement');
    }
    */
    // incrementCounter() {
    //   // this.$store.state.counter++;
    //   //   this.$emit("counterEvent", 1);
    //   // this.$store.commit('updateCounter',1);
    //   this.$store.commit('incrementCounter');
    // },
    // decrementCounter() {
    //   //   this.$emit("counterEvent", -1);
    //   // this.$store.state.counter--;
    //   // this.$store.commit('updateCounter',-1);
    //   this.$store.commit('decrementCounter');

    // },
  },
};
</script>
