<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <select class="form-control" v-model="effectType">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>

        <button
          class="btn btn-sm btn-success my-2 animate__animated animate__bounce"
          @click="isShow = !isShow"
        >
          Göster/Gizle
        </button>
        <transition :name="effectType">
          <div v-if="isShow" class="alert alert-success">Bu bir uyarıdır</div>
        </transition>
        <transition name="slide" type="animation" appear>
          <div v-show="isShow" class="alert alert-warning">Bu bir uyarıdır</div>
        </transition>
        <transition
          enter-active-class="animate__animated animate__bounce"
          leave-active-class="animate__animated animate__bounce"
          appear
        >
          <div v-show="isShow" class="alert alert-warning">Bu bir uyarıdır</div>
        </transition>

        <transition :name="effectType" mode="out-in">
          <div v-if="isShow" class="alert alert-success" key="success">
            Bu bir uyarıdır
          </div>
          <div v-else class="alert alert-danger" key="danger">Bu bir uyarıdır</div>
        </transition>
        <br />
        <button
          class="btn btn-sm btn-success my-2 animate__animated animate__bounce"
          @click="showJs = !showJs"
        >
          Göster/Gizle
        </button>
        <transition
          :css="false"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @after-enter-cancelled="afterEnterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @after-leave-cancelled="afterLeaveCancelled"
        >
          <div v-if="showJs" class="alert alert-success" style="transition: width 40ms">
            Bu bir uyarıdır
          </div>
        </transition>

        <br />
        <button class="btn btn-danger" @click="activeComponent = 'appHome'">Home</button>
        <button class="btn btn-primary" @click="activeComponent = 'appAbout'">
          About
        </button>
        <hr />
        <transition name="fade" mode="out-in">
          <component :is="activeComponent"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "./components/Home";
import About from "./components/About";
export default {
  components: {
    appHome: Home,
    appAbout: About,
  },
  data() {
    return {
      isShow: true,
      showJs: true,
      effectType: "fade",
      elementWidth: 100,
      activeComponent: "appHome",
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter");
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el, done) {
      console.log("enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round++ * 10 + "px";
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 50);
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    afterEnterCancelled(el) {
      console.log("afterEnterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el, done) {
      console.log("leave");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round++ * 10 + "px";
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 50);
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    afterLeaveCancelled(el) {
      console.log("afterLeaveCancelled");
    },
  },
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {
  /* opacity: 1; */
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 1s;
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  ,
  to {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
    background: pink;
  }
  ,
  to {
    transform: translateY(20px);
    background: black;
  }
}
</style>
