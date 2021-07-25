<template>
  <ul class="list-group">
    <server-status v-for="index in 5" :key="index"></server-status>
  </ul>
</template>

<script>
import ServerStatus from './ServerStatus'
export default {
    components:{
        "server-status":ServerStatus
    }
}
</script>