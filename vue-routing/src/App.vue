<template>
  <div class="container">
    <div class="col-md-8 offset-md-2">
      <div class="row">
        <router-view name="header-top" />
        <hr class="my-4" />
        <transition name="slideContainer" mode="out-in">
          <router-view />
        </transition>
        <router-view name="header-bottom" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    appHeader: Header,
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}

body {
  font-family: sans-serif;
  box-sizing: border-box;
}

.slideContainer-enter-active {
  animation: slide-in 0.3s ease-out forwards;
}

.slideContainer-leave-active {
  animation: slide-out 0.3s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
} ;
</style>
