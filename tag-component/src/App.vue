<template>
  <div class="container">
    <tags v-model="tags" :color="'success'"/>
    <tags v-model="tags" :color="'primary'"/>
    <tags v-model="tags" :color="'secondary'"/>
    <tags v-model="tags" :color="'info'"/>
    <tags v-model="tags" :color="'warning'"/>
    <tags v-model="tags" :color="'danger'"/>
    <hr>
    <input type="text" v-model="tags" name="i1">
    <input type="text" v-model="tags" name="i2">
  </div>
</template>

<script>
import Tags from "./components/Tags";
export default {
  components:{
    tags:Tags
  },
  data(){
    return{
      tags:'c#,js,java,c++'
    }
  }
}
</script>

<style>
body {
  font-family: sans-serif;
}
</style>
