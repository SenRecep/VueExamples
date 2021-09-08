<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">Vuex</h1>
        <hr />
        <!-- <result :counter="counter" /> -->
        <result />
        <hr />
        <!-- <counter @counterEvent="counter += $event" /> -->
        <counter />
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./components/Counter";
import Result from "./components/Result";
export default {
  components: {
    counter: Counter,
    result: Result,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
