<template>
  <div class="card">
    <img :src="data.img" alt="card-1" />
  </div>
</template>
<script>
export default {
  props: ["data"],
};
</script>

<style scoped>
.card {
  width: 200px;
  height: auto;
  border-radius: 5px;
  border: 1px solid #666;
  transition: box-shadow 0.5s;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
}

.card:not(:first-child) {
  margin-left: 15px;
}
.card:hover {
  box-shadow: 0px 5px 48px #666;
}
.card img {
  height: auto;
  width: 100%;
}
</style>
