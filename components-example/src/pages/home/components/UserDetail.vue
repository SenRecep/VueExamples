<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    <p>{{ name }} | {{ nameReverse() }}</p>
    <p>Age:{{ age }}</p>
    <button @click="sendParentData" class="btn btn-success">Send Data</button>
  </div>
</template>
<script>
import { eventBus } from "../../../main.js";
export default {
  props: {
    name: {
      type: String,
      default: "Ahmet Dervis",
    },
    age: {
      type: Number,
    },
  },
  methods: {
    nameReverse() {
      return this.name.split("").reverse().join("");
    },
    sendParentData() {
      this.$emit("data", "MCBU");
    },
  },
  created() {
    eventBus.$on("ageUpdate", (age) => {
      this.age = age;
    });
  },
};
</script>
<style scoped>
div {
  background-color: lightcoral;
  padding: 20px;
  border: 1px solid #666;
  display: inline-block;
}
</style>
