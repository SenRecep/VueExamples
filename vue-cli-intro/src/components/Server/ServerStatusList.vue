<template>
  <ul class="list-group">
    <server-status v-for="item in servers" :server='item' :key="item.id"></server-status>
  </ul>
</template>

<script>
import ServerStatus from "./ServerStatus";
export default {
  data() {
    return {
      servers:[
        {id:1,status:'Kritik'},
        {id:2,status:'Tehlike'},
        {id:3,status:'Normal'},
        {id:4,status:'Ulaşılamıyor'},
        {id:5,status:'Pasif'},
      ]
    };
  },
  components: {
    "server-status": ServerStatus,
  },
};
</script>
