<template>
    <li @click='clickHandle' class="list-group-item" >Sunucu {{server.id}}</li>
</template>

<script>
import {eventBus} from '../../main.js';
export default {
    props:{
        server :{
            type:Object,
            default:{id:0,status:'NONE'}
        }
    },
    methods:{
        clickHandle(){
            eventBus.changeStatus(this.server);
        }
    }
}
</script>

<style scoped>
    li:hover{
        background-color: rgba(0, 0, 0, .3);
        color:white;
        cursor:pointer;
    }
</style>