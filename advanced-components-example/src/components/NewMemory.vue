<template>
  <div>
   <h1>New Memory Component</h1>
   <button @click='counter++'>Arttir</button>
   <p>{{counter}}</p>
  </div>
</template>
<script>
export default {
    data() {
        return {
            counter:0
        }
    },
    created() {
    console.log('NewMemory Created');
  },
}
</script>
<style scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px #666;
    padding: 20px 20px;
    margin-top: 20px;
  }
</style>
