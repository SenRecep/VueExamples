<template>
  <div>
    <h4>User Detail</h4>
    <h5>ID: {{ $route.params.id }}</h5>
    <!-- :to="`/user/edit/${$route.params.id}`" -->
    <router-link tag="button" class="btn btn-primary btn-sm" :to="userEditLink"
      >Edit</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      userEditLink: {
        name: "userEdit",
        params: { id: this.$route.params.id },
        query: { firstName: "recep", lastName: "şen", age: 21 },
        hash: "#data",
      },
    };
  },
  beforeRouteEnter(to, from, next) {
    next();
  },
};
</script>
