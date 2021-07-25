<template>
  <div class="col-md-s6">
    <h3>Child Component 2</h3>
    <p>
      Ben User.vue isimli Parent Component'in içerisindeki bir diğer Child componentim
    </p>
    <p>Age: {{ age }}</p>
    <button @click="changeAge" class="btn btn-success">Change Age</button>
  </div>
</template>
<script>
import { eventBus } from "../../../main.js";
export default {
  props: ["age"],
  methods: {
    changeAge() {
      // this.$emit('ageUpdate',34);
      this.age=34;
      eventBus.changeAge(this.age);
    },
  },
};
</script>

<style scoped>
div {
  background-color: lightgoldenrodyellow;
  padding: 20px;
  border: 1px solid #666;
  display: inline-block;
}
</style>
