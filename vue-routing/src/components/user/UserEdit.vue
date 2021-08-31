<template>
  <div>
    <h4>User Edit</h4>
    <p>firstName: {{ $route.query.firstName }}</p>
    <p>lastName: {{ $route.query.lastName }}</p>
    <p>age: {{ $route.query.age }}</p>
    <button class="btn btn-primary" @click="saved = true">Onayla</button>
    <div style="height: 200vh"></div>
    <p id="data">Datas</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      saved: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.saved || confirm("Tüm bilgileriniz kaybolacak emin misiniz?")) next();
  },
};
</script>
