<template>
   <div>
        <p>{{server.status}}</p>
    <button @click='updateStatus' class='btn btn-success'>Normale döndür</button>
   </div>
</template>


<script>
import {eventBus} from '../../main.js';
export default {
    data() {
        return {
            server:{id:0,status:'Sunucu Bilgisi güncel değil!!'}
        }
    },
    methods: {
        updateStatus(){
             this.server.status='Normal';
            eventBus.changeStatus(this.server);
        }
    },
    created() {
        eventBus.$on('changeStatus',(data)=>{
            this.server=data;
        });
    },
}
</script>