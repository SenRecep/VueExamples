<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <p>filter: {{ mail | mirror }}</p>
        <p>filter: {{ mail | count }}</p>
        <p>computed: {{ mirorText }}</p>
        <p>computed: {{ countText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { odev11 } from "./mixins/odev11.js";
export default {
  mixins: [odev11],
};
</script>

<style></style>
