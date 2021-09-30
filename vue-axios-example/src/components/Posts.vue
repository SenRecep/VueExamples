<template>
  <div class="container-fluid pt-5">
    <h1 class="text-center">Yazı Listesi</h1>
    <hr>
    <div class="d-flex flex-wrap flex-row justify-content-center align-items-center">
      <div v-for="post in posts" class="card m-1">
        <img class="card-img-top" :src="post.thumbnail" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{post.content}}</p>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import customAxios from "../customAxios";
export default {
  data(){
    return{
      posts:[]
    }
  },
  created() {
    customAxios.get('/posts.json')
    .then(res=>{
      this.posts=Object.entries(res.data).map(x => ({
        id: x[0],
        ...x[1]
      }));
    });
  }
}
</script>
<style>
  .card {
    width: 300px;
  }
</style>
