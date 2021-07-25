<template>
  <div class="container">
    <h1>Parent Component (User)</h1>
    <p>Burası parent component yani herşeyin import edildiği component :)</p>
    <p>{{name}}</p>
    <button @click="name='Yusuf Topkaya'" class="btn btn-success">Ad Degistir</button>
    <p>Child Data : {{childData}}</p>
    <hr>
    <div class="row">
      <app-user-detail :age='age' @data='childData=$event' :name='name'></app-user-detail>
      <app-user-edit @ageUpdate='age=$event' :age='age'></app-user-edit>
    </div>
  </div>
</template>
<script>
  import appUserDetail from "./UserDetail";
  import appUserEdit from "./UserEdit";
  export default {
    components : {
      appUserDetail,
      appUserEdit,
    },
    data() {
      return {
        name:"Recep Sen",
        childData:'',
        age:25
      }
    },
  }
</script>

<style>
  div.container{
    margin-top: 30px;
    padding: 20px 40px;
    background-color: #6a8d99;
    border: 1px solid #666;
  }
  div.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
