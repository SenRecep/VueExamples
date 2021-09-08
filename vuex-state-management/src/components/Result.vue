<template>
  <div>
    <!-- <p class="counter-container">Counter: {{ getDoubleCounter }}</p>
    <p class="counter-container">Counter: {{ stringCounter }}</p> -->
    <p class="counter-container">Counter: {{ double }}</p>
    <p class="counter-container">Counter: {{ stringC }}</p>
    <input type="text" v-model="value">
    <p>{{ value }}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {

  computed: {
    ...mapGetters({
      double: 'getDoubleCounter',
      stringC: 'stringCounter'
    }),
    value: {
      get() {
          return this.$store.getters.getAge;
      },
      set(value) {
          this.$store.commit('setAge',value);
      }
    }
  }
  //  computed:mapGetters({
  //   double:'getDoubleCounter',
  //   stringC:'stringCounter'
  //  })
  // computed:mapGetters([
  //   'getDoubleCounter',
  //   'stringCounter'
  // ])
  // computed: {
  //   counter() {
  //     //   return this.$store.state.counter;
  //     return this.$store.getters.getDoubleCounter;
  //   },
  //   stringCounter() {
  //     //   return this.$store.state.counter;
  //     return this.$store.getters.stringCounter;
  //   },
};
</script>

<style scoped>
.counter-container {
  border: 1px solid #aa7f08;
  padding: 10px 5px;
  background-color: #fbbd08;
  font-size: 20px;
  color: #000;
}
</style>
