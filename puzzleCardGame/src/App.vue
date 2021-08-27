<template>
  <transition-group name="slideContainer" mode="out-in">
    <component
      key="component"
      @pageNavigator="activeComponent = $event"
      :is="activeComponent"
    ></component>
    <canvas v-show="activeComponent == 'celebrate'" key="canvas" id="canvas"></canvas>
  </transition-group>
</template>
<script>
import Celebrate from "./components/Celebrate";
import Failure from "./components/Failure";
import GameCards from "./components/GameCards";
export default {
  components: {
    celebrate: Celebrate,
    failure: Failure,
    gameCards: GameCards,
  },
  data() {
    return {
      activeComponent: "game-cards",
    };
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
