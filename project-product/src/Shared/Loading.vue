<template>
  <div v-show="getLoadingState" class="loading">
    <div class="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed:{
    ...mapGetters(['getLoadingState'])
  }
}
</script>

<style scoped>

</style>
