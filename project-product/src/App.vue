<template>
  <div>
    <app-header/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <app-footer/>
    <loading/>
  </div>
</template>

<script>
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import Loading from "./Shared/Loading";

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
    loading:Loading
  },
  created() {
    this.$store.dispatch('getTradeResult');
    this.$store.dispatch('initApp');
  }
}
</script>

<style>
body{
  background-color:#a7a0bb5c;
}
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-leave-active {
  transition: opacity 0.3s ease-out;
  opacity: 0;
}
</style>
