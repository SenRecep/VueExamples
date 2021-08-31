<template>
  <div>
    <transition name="slideContainer" mode="out-in">
      <router-view />
    </transition>
    <hr />
    <button @click="navigate" class="btn btn-success">Go To Home</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // id: this.$route.params.id,
    };
  },
  methods: {
    navigate() {
      // this.$router.push("/");
      // this.$router.push({path:'/'});
      this.$router.push({ name: "home" });
    },
  },
  watch: {
    $route(to) {
      // this.id = to.params.id;
    },
  },
};
</script>
